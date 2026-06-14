/* Открытие Vimeo сразу в фуллскрин по клику + лоадер на кнопке.
 *
 * Разметка триггера (в него монтируется плеер):
 *   data-open-vimeo-fullscreen="<videoId>"
 *   data-vimeo-hash="<h>"   — приватный хеш для unlisted-видео.
 *   .hero__slide_play-btn внутри — кнопка, на неё вешается is--loading.
 */
import { DeviceDetect } from "@/js/device-detect.js";

const LOAD_FAIL_MS = 8000; // сколько ждём старта видео, прежде чем считать ошибкой
const LOADER_DELAY_MS = 1500; // задержка появления лоадера, чтобы не промаргивал
const FAIL_TEXT = "Не удалось загрузить видео, повторите позднее";

// Поддержка Fullscreen API в текущем окружении. В WebView (напр. встроенный
// браузер Telegram) обычно false — там фуллскрина не будет.
const FULLSCREEN_SUPPORTED = !!(
  document.fullscreenEnabled || document.webkitFullscreenEnabled
);

// Фолбэк: открыть видео в remodal-модалке (работает без Fullscreen API).
// На триггере: data-vimeo-fallback-modal="<remodal-id>".
function openFallbackModal(el) {
  const modalId = el.getAttribute("data-vimeo-fallback-modal");
  const jq = window.jQuery || window.$;
  if (!modalId || !jq) return;
  try {
    jq('[data-remodal-id="' + modalId + '"]')
      .remodal()
      .open();
  } catch (e) {
    /* remodal недоступен — ничего не делаем */
  }
}

function initVimeoFullscreen() {
  if (typeof window.Vimeo === "undefined") return false;

  const players = [];

  document.querySelectorAll("[data-open-vimeo-fullscreen]").forEach((el) => {
    if (el.dataset.vimeoFsBound) return;
    el.dataset.vimeoFsBound = "1";

    // Нет Fullscreen API (WebView Telegram и т.п.) и это не iOS (там видео
    // уходит в нативный фуллскрин в обход API) → плеер не создаём, по клику
    // сразу открываем модалку.
    if (!DeviceDetect.isIOS() && !FULLSCREEN_SUPPORTED) {
      el.addEventListener("pointerup", (event) => {
        event.preventDefault();
        openFallbackModal(el);
      });
      el.addEventListener("click", (event) => event.preventDefault());
      return;
    }

    const id = el.getAttribute("data-open-vimeo-fullscreen");
    const hash = el.getAttribute("data-vimeo-hash") || "";
    // Параметры плеера как в исходной ссылке-эмбеде: фирменный цвет + скрытые
    // title/byline/portrait. Без color плеер берёт дефолтный (оранжевый) цвет.
    const params =
      (hash ? "h=" + hash + "&" : "") +
      "color=ff9933&title=0&byline=0&portrait=0";
    const url = "https://player.vimeo.com/video/" + id + "?" + params;

    const player = new window.Vimeo.Player(el, { url });
    player.ready(); // прогрев инициализации
    players.push(player);

    const playBtn = el.querySelector(".hero__slide_play-btn");
    let failTimer = null;
    let showLoaderTimer = null;

    const setLoading = (on) => {
      if (playBtn) playBtn.classList.toggle("is--loading", on);
    };
    const stopLoading = () => {
      clearTimeout(failTimer);
      clearTimeout(showLoaderTimer);
      setLoading(false);
    };
    const fail = () => {
      // Если фуллскрин уже открывался (юзер открыл и быстро закрыл — play()
      // прерывается и реджектится) или мы ушли в модалку — это не сбой
      // загрузки, ошибку не показываем.
      if (wentFullscreen || fellBack) return;
      stopLoading();
      if (typeof window.showMessage === "function") {
        window.showMessage(FAIL_TEXT, { error: true });
      }
    };

    let wentFullscreen = false;
    let fellBack = false;
    let analyticsSent = false;

    // Цель метрики на реальное фуллскрин-воспроизведение hero-видео. В модалке
    // тот же VO0001 шлёт analyticsModal() при её открытии, поэтому в фолбэке
    // (handleNoFullscreen → модалка) здесь НЕ шлём, чтобы не задвоить.
    const sendPlayEvent = () => {
      if (analyticsSent) return;
      analyticsSent = true;
      if (typeof window.sendPageEvent === "function") {
        window.sendPageEvent("VO0001");
      }
    };

    // Фуллскрин не сработал (WebView, который репортит поддержку, но не даёт
    // фуллскрин) → пауза скрытого плеера + открываем модалку.
    const handleNoFullscreen = () => {
      if (fellBack || wentFullscreen) return;
      fellBack = true;
      stopLoading();
      player.pause().catch(() => {});
      openFallbackModal(el);
    };

    // Реальный старт воспроизведения — снимаем лоадер.
    player.on("playing", () => {
      stopLoading();
      // Проверяем, что видео реально открылось НА ВЕСЬ ЭКРАН. На iOS фуллскрин
      // нативный (webkitEnterFullscreen) и Fullscreen API его не репортит —
      // там пропускаем, иначе будут ложные срабатывания. Метрику шлём прямо тут:
      // на iOS playing = воспроизведение в нативном фуллскрине.
      if (DeviceDetect.isIOS()) {
        sendPlayEvent();
        return;
      }
      // Небольшая отсрочка: фуллскрин может войти чуть позже события playing.
      setTimeout(() => {
        if (wentFullscreen || fellBack) return;
        player
          .getFullscreen()
          .then((isFullscreen) => {
            // Играет, но не на весь экран (фуллскрин не дали) → фолбэк в модалку.
            // Защита: если Vimeo репортит false, но документ реально в
            // фуллскрине — не уходим в фолбэк (засчитываем фуллскрин-просмотр).
            if (isFullscreen || isDocumentFullscreen()) {
              sendPlayEvent();
              return;
            }
            handleNoFullscreen();
          })
          .catch(() => {});
      }, 700);
    });
    // Ошибка плеера — сообщение.
    player.on("error", fail);
    // Состояние фуллскрина: вошли — отмечаем; вышли — гасим лоадер и СТАВИМ НА
    // ПАУЗУ, иначе скрытый iframe продолжает проигрывать в фоне (Android).
    player.on("fullscreenchange", (data) => {
      if (data.fullscreen) {
        wentFullscreen = true;
        sendPlayEvent(); // реально вошли в фуллскрин → цель метрики
      } else {
        stopLoading();
        player.pause().catch(() => {});
      }
    });

    el.addEventListener("pointerup", (event) => {
      event.preventDefault();
      wentFullscreen = false; // сброс для нового открытия
      fellBack = false;
      analyticsSent = false;

      // Запоминаем позицию: при фокусе iframe (Vimeo фокусит плеер на play/
      // фуллскрине) браузеры — особенно Opera — проскролливают страницу к нему.
      // preventScroll на кросс-доменный iframe недоступен, поэтому возвращаем
      // позицию сами. В фуллскрине это незаметно, а инлайн-прыжок убирает.
      const scrollY = window.scrollY;
      const restoreScroll = () => window.scrollTo(0, scrollY);

      // Всё прямо в жесте, без зависимого .then — не теряем user-activation.
      // Если фуллскрин сразу отклонён — фолбэк в модалку.
      player.requestFullscreen().catch(handleNoFullscreen);
      player.setMuted(false).catch(() => {}); // снять mute после прогрева
      player.setCurrentTime(0).catch(() => {}); // всегда с начала
      player.play().catch(fail); // не дали проиграть → ошибка

      requestAnimationFrame(restoreScroll);
      setTimeout(restoreScroll, 100);

      clearTimeout(showLoaderTimer);
      clearTimeout(failTimer);
      // Лоадер показываем с задержкой: если видео стартовало быстро,
      // событие playing успеет снять таймер и крутилка не промаргивает.
      showLoaderTimer = setTimeout(() => setLoading(true), LOADER_DELAY_MS);
      // Страховка: если за LOAD_FAIL_MS не пошло воспроизведение — ошибка.
      failTimer = setTimeout(fail, LOAD_FAIL_MS);
    });

    // Гасим «ghost-click» после pointerup: если триггер/родитель — ссылка
    // (напр. href="#"), клик иначе проскролливает страницу в начало.
    el.addEventListener("click", (event) => event.preventDefault());
  });

  if (!players.length) return true;

  // iOS-прогрев нужен только Safari/iOS: там user-activation пробрасывается в
  // кросс-доменный iframe лишь после первого жеста, из-за чего фуллскрин
  // открывался со второго тапа. На Android всё работает с первого — прогрев
  // там не нужен (и лишний muted play→pause может мешать).
  if (DeviceDetect.isIOS()) {
    // На самое первое касание страницы «будим» плееры беззвучным play→pause.
    const warmUp = () => {
      players.forEach((p) => {
        p.setMuted(true)
          .then(() => p.play())
          .then(() => p.pause())
          .catch(() => {});
      });
    };
    document.addEventListener("pointerdown", warmUp, {
      once: true,
      passive: true,
    });
  }

  return true;
}

// player.js грузится с defer — если ещё не готов, повторим на load.
if (!initVimeoFullscreen()) {
  window.addEventListener("load", initVimeoFullscreen);
}
