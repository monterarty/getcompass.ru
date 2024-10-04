import Typograf from 'typograf';
import ClipboardJS from 'clipboard';
import platform from 'platform';
import oldBrowserDetector from 'old-browser-detector';
import noUiSlider from 'nouislider';
import '@finsweet/cookie-consent';
import { UAParser } from 'ua-parser-js';
import 'remodal';

window.REMODAL_GLOBALS = {
  NAMESPACE: 'remodal',
  DEFAULTS: { hashTracking: !1 },
};

var DeviceDetectParser = new UAParser(window.navigator.userAgent);

class DeviceDetect {
  static isMobile() {
    return 'mobile' === DeviceDetectParser.getDevice().type;
  }

  static isMobileHuawei() {
    return (
      DeviceDetect.isMobile() &&
      'Huawei' === DeviceDetectParser.getDevice().vendor
    );
  }

  static isMobileApple() {
    return (
      DeviceDetect.isMobile() &&
      'Apple' === DeviceDetectParser.getDevice().vendor
    );
  }

  static isMobileAndroid() {
    return (
      DeviceDetect.isMobile() &&
      !DeviceDetect.isMobileHuawei() &&
      'Android' === DeviceDetectParser.getOS().name
    );
  }

  static isAndroid() {
    return 'Android' === DeviceDetectParser.getOS().name;
  }

  static get0S() {
    return DeviceDetectParser.getOS()?.name.toLowerCase();
  }

  static isMacOs() {
    return !DeviceDetect.isMobile() && DeviceDetect.get0S()?.includes('mac os');
  }

  static isWindows() {
    return !DeviceDetect.isMobile() && DeviceDetect.get0S()?.includes('window');
  }

  static isLinux() {
    return (
      !DeviceDetect.isMobile() &&
      !DeviceDetect.isWindows() &&
      !DeviceDetect.isMacOs()
    );
  }

  static isIPad() {
    return DeviceDetectParser.getDevice()?.model?.includes('iPad');
  }
}

class Attribution {
  static upgradeStoreLink(e) {
    let t = new URL(window.location),
      i = new URLSearchParams(t.search),
      r = new URL(e);
    return (
      i.forEach((e, t) => {
        r.searchParams.append(t, e);
      }),
      r.toString()
    );
  }

  static openStoreLink(e, t) {
    (e = this.upgradeStoreLink(e)), window.open(e, t ? '_blank' : null);
  }

  static sendDoStartRequest() {
    return new Promise((e, t) => {
      let i = window.location.protocol + '//' + window.location.host + '/',
        r = new URLSearchParams(
          Object.entries({
            link: window.location,
            utm_tag: this.getUtmTags(),
            source_id: this.getSourceId(),
            platform: this.getPlatform(),
            platform_os: this.getPlatformOS(),
            timezone_utc_offset: this.getTimezoneUTCOffset(),
            screen_avail_width: this.getScreenAvailWidth(),
            screen_avail_height: this.getScreenAvailHeight(),
          })
        ).toString(),
        s = new XMLHttpRequest();
      s.open('POST', i + 'www/global/doStart', !0),
        (s.onload = () => {
          4 === s.readyState &&
            (s.status >= 200 && s.status < 300
              ? e(JSON.parse(s.response))
              : t({ status: s.status, statusText: s.statusText }));
        }),
        (s.onerror = () => {
          t({ status: s.status, statusText: s.statusText });
        }),
        s.setRequestHeader(
          'Accept',
          'application/json, text/javascript, */*; q=0.01'
        ),
        s.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded; charset=UTF-8'
        ),
        s.send(r);
    });
  }

  static getUtmTags() {
    let e = new URL(window.location),
      t = new URLSearchParams(e.search);
    return t.toString();
  }

  static getSourceId() {
    let e = new URL(window.location),
      t = new URLSearchParams(e.search);
    return t.has('source_id') ? t.get('source_id') : '';
  }

  static getPlatform() {
    return DeviceDetect.isMobileAndroid() ||
      DeviceDetect.isMobileHuawei() ||
      DeviceDetect.isAndroid()
      ? 'android'
      : DeviceDetect.isMobileApple()
        ? 'ios'
        : DeviceDetect.isIPad()
          ? 'ipad'
          : 'desktop';
  }

  static getPlatformOS() {
    return DeviceDetect.isMobileAndroid() ||
      DeviceDetect.isMobileHuawei() ||
      DeviceDetect.isAndroid()
      ? 'android'
      : DeviceDetect.isMobileApple()
        ? 'ios'
        : DeviceDetect.isIPad()
          ? 'ipad'
          : DeviceDetect.isLinux()
            ? 'linux'
            : DeviceDetect.isMacOs()
              ? 'macos'
              : (DeviceDetect.isWindows(), 'windows');
  }

  static getTimezoneUTCOffset() {
    let e = new Date();
    return -(60 * e.getTimezoneOffset());
  }

  static getScreenAvailWidth() {
    return window.screen.availWidth;
  }

  static getScreenAvailHeight() {
    return window.screen.availHeight;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  (window.doStart = Attribution.sendDoStartRequest()),
    Array.prototype.find.call(document.querySelectorAll('a'), (e) => {
      let t = e.getAttribute('href');
      t &&
        t.includes('redirect.appmetrica.yandex.com') &&
        e.setAttribute('href', Attribution.upgradeStoreLink(t));
    });
});

const body = document.body;
const html = document.documentElement;
const navbar = document.querySelector('.w-nav');
const ymetrikaID = window.ymetrikaID;
const sendEvent = (id) => {
  ym(window.ymetrikaID, 'reachGoal', id);
};

var isMobile = false;

if (window.innerWidth < 768) {
  body.classList.add('is--mobile-sm');
  isMobile = true;
} else {
  body.classList.add('is--desktop');
  isMobile = false;
}

// Добавляем размытие шапке
body.classList.add('is--blur-nav');
body.classList.add('enable-blur');
// Добавляем смягчение шрифта
html.classList.add('is--font-smoothing');

var remSize = 0;

const getSize = () => {
  remSize = getComputedStyle(document.documentElement).getPropertyValue(
    '--remSize'
  );
  let factor;

  if (window.innerWidth > 1440) {
    factor = 18;
  } else {
    factor = (window.innerWidth / 100) * remSize;
  }

  return factor;
};
/**
 * Определяет текущую страницу на основе классов тела документа или URL-адреса.
 *
 * @returns {string} Название текущей страницы. Возможные значения:
 * - 'home' для главной страницы,
 * - 'on-premise' для страницы on-premise,
 * - 'post' для страницы поста блога,
 * - 'partner' для страницы партнерской программы,
 * - 'blog' для страницы блога,
 * - 'delete-page' для страницы удаления,
 * - 'download' для страницы загрузки,
 * - 'mediakit' для страницы медиакита,
 * - 'media' для страницы СМИ,
 * - 'download_on-premise' для страницы платформ On-premise
 * - 'download_cloud' - для страницы платформ cloud
 * - 'unknown' если страница не распознана.
 *
 * @example
 * // Использование функции getPage для условного выполнения кода
 * const currentPage = getPage();
 * if (currentPage === 'home') {
 *     console.log('Это главная страница.');
 * } else if (currentPage === 'blog') {
 *     console.log('Это страница блога.');
 * }
 */
const getPage = () => {
  const classToPageMap = {
    'is--home-page': 'home',
    'is--on-premise-page': 'on-premise',
    'is--blog-post-page': 'post',
    'is--partner-page': 'partner',
    'is--blog-page': 'blog',
    'is--page-delete': 'delete-page',
    'is--media-page': 'media',
    'is--download-op': 'download_on-premise',
    'is--download-cloud': 'download_cloud',
    'is--download-page': 'download',
  };

  // Проверка классов
  for (const [className, pageName] of Object.entries(classToPageMap)) {
    if (document.body.classList.contains(className)) {
      return pageName;
    }
  }

  // Проверка URL
  const urlToPageMap = {
    //'/download/': 'download',
    mediakit: 'mediakit',
  };

  const currentUrl = window.location.href;
  for (const [urlFragment, pageName] of Object.entries(urlToPageMap)) {
    if (currentUrl.includes(urlFragment)) {
      return pageName;
    }
  }

  // Возвращаем значение по умолчанию, если ни одно условие не выполнено
  return 'unknown';
};

body.classList.add('is--js-success');

// Функции для работы с куки
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Функция показа сообщения о старом браузере
function showOldBrowserMsg() {
  const oldMsg = document.querySelector('.navbar__old-msg');
  if (oldMsg) {
    oldMsg.classList.add('is--display-block');
    document
      .querySelector('.navbar__old-close')
      .addEventListener('click', () => {
        oldMsg.classList.remove('is--show');
      });
    setTimeout(function () {
      oldMsg.classList.add('is--show');
    }, 100);
  }
}

if (navigator.userAgent.indexOf(' UCBrowser/') >= 0) {
  showOldBrowserMsg();
}

var Detector = new oldBrowserDetector(
  {
    c: 87,
    f: 73,
    o: 70,
    s: {
      d: 12,
    },
  },
  function () {
    const browserInfoObj = oldBrowserDetector.getBrowser();
    if (browserInfoObj.n !== 'x' && browserInfoObj.v !== 0) showOldBrowserMsg();
  }
);

Detector.detect();
switch (platform.name) {
  case 'Safari':
    switch (platform.os.family) {
      case 'iOS':
        if (
          platform.version.split('.')[0] <= 13 &&
          platform.os.version.split('.')[0] <= 13
        ) {
          showOldBrowserMsg();
        }
        break;
      case 'OS X':
        if (platform.version.split('.')[0] <= 13) {
          showOldBrowserMsg();
        }
        body.classList.remove('is--blur-nav');
        body.classList.remove('enable-blur');
        body.classList.add('disable-blur');
        break;
    }
    break;
  case 'Chrome':
    if (platform.version.split('.')[0] <= 87) {
      showOldBrowserMsg();
    }
    break;
  case 'Chrome Mobile':
    if (platform.version.split('.')[0] <= 87) {
      showOldBrowserMsg();
    }
    break;
  case 'Opera':
    if (platform.version.split('.')[0] <= 73) {
      showOldBrowserMsg();
    }
    break;
  case 'Firefox':
    if (platform.version.split('.')[0] <= 73) {
      showOldBrowserMsg();
    }
    break;
}

$(document).ready(function () {
  $('.w-webflow-badge').removeClass('w-webflow-badge').empty();
});

var os = platform.os.family;

function getOS() {
  'use strict';
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.userAgentData
      ? window.navigator.userAgentData
      : window.navigator.platform || window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'OS X';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Huawei/.test(userAgent)) {
    os = 'Huawei';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

function iOS() {
  'use strict';
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}

if (os === null || os === 'Android') {
  os = getOS();
  if (os === 'OS X') {
    if (iOS()) {
      os = 'iOS';
    }
  }
}

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (isTouchDevice()) {
  body.classList.add('is--touch');
} else {
  body.classList.add('is--no-touch');
}

// Функция для создания ссылки с SVG и названием
function createDownloadLink(options) {
  const linkText = options[0],
    linkPlatform = options[1],
    linkClass = options[2],
    linkUrl = options[3],
    onPremiseLinkUrl = options[4],
    linkTag = options[5],
    svgIcon = options[6],
    svgDarkIcon = options[7];

  // Создаем элемент
  const downloadItemWrap = document.createElement('div');
  downloadItemWrap.classList.add('cta__list-item-wrap');

  const link = document.createElement('a');

  // Устанавливаем атрибут href
  link.setAttribute('data-cloud', linkUrl);
  link.setAttribute('data-onpremise', onPremiseLinkUrl);

  link.href = '#';

  link.classList.add('cta__list-item', 'w-inline-block', linkClass);
  link.setAttribute('download', 'download');
  link.addEventListener('click', () => {
    $('.w-dropdown').trigger('w-close');
  });

  // Создаем иконку
  const svgWrapper = document.createElement('div');
  svgWrapper.classList.add(
    'cta__list-item-icon',
    'shrink-0',
    'is--vector-full',
    'w-embed'
  );

  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgElement.setAttribute('width', '22');
  svgElement.setAttribute('height', '22');
  svgElement.setAttribute('viewBox', '0 0 22 22');
  svgElement.innerHTML = svgIcon;

  const svgDarkElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgDarkElement.setAttribute('width', '22');
  svgDarkElement.setAttribute('height', '22');
  svgDarkElement.setAttribute('viewBox', '0 0 22 22');
  svgDarkElement.innerHTML = svgDarkIcon;

  // Создаем элементы для отображения текста ссылки
  const linkShortText = document.createElement('span');
  linkShortText.textContent = linkText;

  const linkPlatformName = document.createElement('span');
  linkPlatformName.textContent = linkPlatform;

  const linkTextElement = document.createElement('div');
  linkTextElement.classList.add('cta__list-item-name');

  linkTextElement.appendChild(linkShortText);
  linkTextElement.appendChild(linkPlatformName);

  // Добавляем элементы внутрь ссылки
  svgWrapper.appendChild(svgElement);
  if (svgDarkIcon) {
    svgWrapper.appendChild(svgDarkElement);
    svgDarkElement.classList.add('is--dark-icon');
    svgElement.classList.add('is--light-icon');
  }
  link.appendChild(svgWrapper);
  link.appendChild(linkTextElement);

  if (linkTag) {
    const tagElement = document.createElement('div');
    tagElement.classList.add('cta__list-item-tag');
    tagElement.textContent = linkTag;
    link.appendChild(tagElement);
  }
  downloadItemWrap.appendChild(link);
  return downloadItemWrap;
}

const downloadLinksData = {
  macintel: [
    'Скачать для ',
    'MacOS',
    'macintel',
    'https://getcompass.ru/app/macos-intel',
    'https://getcompass.ru/on-premise/app/macos-intel',
    'Intel',
    '<path d="M15.4258 11.0566C15.4258 9.82812 15.9902 8.93164 17.0859 8.23438C16.4551 7.33789 15.5254 6.87305 14.2969 6.77344C13.1016 6.67383 11.8066 7.4375 11.3418 7.4375C10.8438 7.4375 9.71484 6.80664 8.81836 6.80664C6.95898 6.83984 5 8.26758 5 11.2227C5 12.0859 5.13281 12.9824 5.46484 13.9121C5.89648 15.1406 7.42383 18.1289 9.01758 18.0625C9.84766 18.0625 10.4453 17.4648 11.541 17.4648C12.6035 17.4648 13.1348 18.0625 14.0645 18.0625C15.6914 18.0625 17.0859 15.3398 17.4844 14.1113C15.3262 13.082 15.4258 11.123 15.4258 11.0566ZM13.5664 5.61133C14.4629 4.54883 14.3633 3.55273 14.3633 3.1875C13.5664 3.25391 12.6367 3.75195 12.1055 4.34961C11.5078 5.01367 11.1758 5.84375 11.2422 6.74023C12.1055 6.80664 12.9023 6.375 13.5664 5.61133Z" fill="currentColor"></path>',
  ],
  macapple: [
    'Скачать для ',
    'MacOS',
    'macapple',
    'https://getcompass.ru/app/macos-silicon',
    'https://getcompass.ru/on-premise/app/macos-silicon',
    'Apple Silicon',
    '<path d="M15.4258 11.0566C15.4258 9.82812 15.9902 8.93164 17.0859 8.23438C16.4551 7.33789 15.5254 6.87305 14.2969 6.77344C13.1016 6.67383 11.8066 7.4375 11.3418 7.4375C10.8438 7.4375 9.71484 6.80664 8.81836 6.80664C6.95898 6.83984 5 8.26758 5 11.2227C5 12.0859 5.13281 12.9824 5.46484 13.9121C5.89648 15.1406 7.42383 18.1289 9.01758 18.0625C9.84766 18.0625 10.4453 17.4648 11.541 17.4648C12.6035 17.4648 13.1348 18.0625 14.0645 18.0625C15.6914 18.0625 17.0859 15.3398 17.4844 14.1113C15.3262 13.082 15.4258 11.123 15.4258 11.0566ZM13.5664 5.61133C14.4629 4.54883 14.3633 3.55273 14.3633 3.1875C13.5664 3.25391 12.6367 3.75195 12.1055 4.34961C11.5078 5.01367 11.1758 5.84375 11.2422 6.74023C12.1055 6.80664 12.9023 6.375 13.5664 5.61133Z" fill="currentColor"></path>',
  ],
  windows: [
    'Скачать для ',
    'Windows',
    'windows',
    'https://getcompass.ru/app/windows-10-exe',
    'https://getcompass.ru/on-premise/app/windows-10-exe',
    '.exe',
    '<path d="M4.01636 6.08452V11.1519H10.1172V5.25108L4.01636 6.08452ZM4.01636 16.9193L10.1172 17.7528V11.9186H4.01636V16.9193ZM10.7839 17.8528L18.9517 18.9529V11.9186H10.7839V17.8528ZM10.7839 5.15106V11.1519H18.9517V4.01758L10.7839 5.15106Z" fill="currentColor"></path>',
  ],
  windowsmsi: [
    'Скачать для ',
    'Windows',
    'windowsmsi',
    'https://getcompass.ru/app/windows-10-msi',
    'https://getcompass.ru/on-premise/app/windows-10-msi',
    '.msi',
    '<path d="M4.01636 6.08452V11.1519H10.1172V5.25108L4.01636 6.08452ZM4.01636 16.9193L10.1172 17.7528V11.9186H4.01636V16.9193ZM10.7839 17.8528L18.9517 18.9529V11.9186H10.7839V17.8528ZM10.7839 5.15106V11.1519H18.9517V4.01758L10.7839 5.15106Z" fill="currentColor"></path>',
  ],
  windows_old: [
    'Скачать для ',
    'Windows',
    'windows_old',
    'https://getcompass.ru/app/windows-7-exe',
    'https://getcompass.ru/on-premise/app/windows-7-exe',
    '.exe',
    '<path d="M4.01636 6.08452V11.1519H10.1172V5.25108L4.01636 6.08452ZM4.01636 16.9193L10.1172 17.7528V11.9186H4.01636V16.9193ZM10.7839 17.8528L18.9517 18.9529V11.9186H10.7839V17.8528ZM10.7839 5.15106V11.1519H18.9517V4.01758L10.7839 5.15106Z" fill="currentColor"></path>',
  ],
  windowsmsi_old: [
    'Скачать для ',
    'Windows',
    'windowsmsi_old',
    'https://getcompass.ru/app/windows-7-msi',
    'https://getcompass.ru/on-premise/app/windows-7-msi',
    '.msi',
    '<path d="M4.01636 6.08452V11.1519H10.1172V5.25108L4.01636 6.08452ZM4.01636 16.9193L10.1172 17.7528V11.9186H4.01636V16.9193ZM10.7839 17.8528L18.9517 18.9529V11.9186H10.7839V17.8528ZM10.7839 5.15106V11.1519H18.9517V4.01758L10.7839 5.15106Z" fill="currentColor"></path>',
  ],
  linuxdeb: [
    'Скачать для ',
    'Linux',
    'linuxdeb',
    'https://getcompass.ru/app/linux-deb',
    'https://getcompass.ru/on-premise/app/linux-deb',
    '.deb',
    '<path d="M11.2344 3C6.68555 3 3 6.68555 3 11.2344C3 15.7832 6.68555 19.4688 11.2344 19.4688C15.7832 19.4688 19.4688 15.7832 19.4688 11.2344C19.4688 6.68555 15.7832 3 11.2344 3ZM12.9609 6.08789C13.2598 5.58984 13.9238 5.42383 14.4219 5.72266C14.9199 6.02148 15.0859 6.65234 14.7871 7.15039C14.5215 7.68164 13.8574 7.84766 13.3594 7.54883C12.8613 7.25 12.6621 6.61914 12.9609 6.08789ZM5.88867 12.2969C5.29102 12.2969 4.82617 11.832 4.82617 11.2344C4.82617 10.6699 5.29102 10.2051 5.88867 10.2051C6.48633 10.2051 6.95117 10.6699 6.95117 11.2344C6.95117 11.832 6.48633 12.2969 5.88867 12.2969ZM6.81836 12.3965C7.54883 11.832 7.54883 10.7031 6.81836 10.1055C7.11719 9.00977 7.78125 8.08008 8.71094 7.44922L9.47461 8.77734C7.78125 9.97266 7.78125 12.5293 9.47461 13.7246L8.71094 15.0195C7.78125 14.4219 7.11719 13.4922 6.81836 12.3965ZM14.4219 16.7793C13.8906 17.0781 13.2598 16.9121 12.9609 16.3809C12.6621 15.8828 12.8613 15.252 13.3594 14.9531C13.8574 14.6543 14.5215 14.8203 14.7871 15.3516C15.0859 15.8496 14.9199 16.4805 14.4219 16.7793ZM14.4219 14.4883C13.5254 14.123 12.5625 14.6875 12.4297 15.6504C12.2305 15.6836 10.8027 16.1152 9.20898 15.3184L9.93945 13.9902C11.832 14.8535 14.0566 13.5918 14.2227 11.5332H15.75C15.6836 12.6953 15.1855 13.7246 14.4219 14.4883ZM14.2227 10.9688C14.0566 8.91016 11.8652 7.61523 9.93945 8.51172L9.20898 7.18359C10.8027 6.38672 12.2305 6.81836 12.3965 6.85156C12.5625 7.81445 13.5254 8.37891 14.4219 8.01367C15.1855 8.77734 15.6836 9.80664 15.75 10.9688H14.2227Z" fill="currentColor"></path>',
  ],
  linuxtar: [
    'Скачать для ',
    'Linux',
    'linuxtar',
    'https://getcompass.ru/app/linux-tar',
    'https://getcompass.ru/on-premise/app/linux-tar',
    '.tar',
    '<g clip-path="url(#A)" fill="currentColor"><path d="M10.122 6.192c.06-.022.143-.03.195 0 .015.008.03.022.023.038v.015h.008c-.015.045-.09.037-.127.053s-.068.053-.105.053-.098-.015-.105-.053c-.008-.053.068-.105.113-.105zm.765.105c-.037-.015-.112-.008-.12-.053v-.015c-.008-.015.008-.03.015-.038a.27.27 0 0 1 .202 0c.045 0 .12.053.113.105-.008.037-.068.045-.105.045s-.068-.03-.105-.045zm-1.32 1.087c.225.15.518.353.885.353s.802-.202 1.065-.353l.487-.353c.12-.097.113-.195.218-.195.098.007.022.098-.113.247l-.525.353c-.33.15-.72.397-1.132.397-.405 0-.735-.202-.968-.353L9.2 7.234c-.12-.098-.105-.248-.053-.248.082.008.098.098.15.15.075.045.165.15.27.247z" fill-opacity=".3"/><path d="M11.098 6.297c-.008.038-.067.045-.105.045s-.067-.03-.105-.045-.113-.007-.12-.052v-.015c-.008-.015.008-.03.015-.037a.27.27 0 0 1 .203 0c.045 0 .12.053.112.105z" fill-opacity=".3"/><path d="M14.472 10.234v.69h-.412c.374.683.643 1.419.795 2.183a1.52 1.52 0 0 1 .39.045c.06-.158.098-.315.12-.473.143-1.043-.518-2.062-.893-2.445zm0 0v.69h-.412c.374.683.643 1.419.795 2.183a1.52 1.52 0 0 1 .39.045c.06-.158.098-.315.12-.473.143-1.043-.518-2.062-.893-2.445zm3.488 5.978v-.068l-.008-.007c-.128-.15-.187-.398-.255-.69-.06-.3-.135-.593-.375-.787-.045-.038-.09-.045-.142-.098a.33.33 0 0 0-.142-.053c.21-.615.232-1.238.127-1.83a4.46 4.46 0 0 0-.262-.937c-.405-1.058-1.11-1.98-1.65-2.61l-.78-1.08c-.248-.428-.412-.885-.405-1.447.015-1.043.083-2.67-.652-3.682-.39-.548-1.027-.923-2.032-.923l-.367.015c-.953.075-1.545.42-1.913.908-.862 1.14-.457 3.03-.487 3.818a4.03 4.03 0 0 1-.795 2.265l-.765.975c-.502.705-1.005 1.545-1.297 2.415-.187.563-.293 1.14-.24 1.695l.022.172a.27.27 0 0 0-.082.098c-.203.203-.345.45-.503.63-.157.15-.367.202-.607.3-.24.105-.502.203-.653.51-.075.143-.105.3-.105.45s.022.308.045.405c.045.3.09.547.03.727-.187.51-.21.863-.083 1.117.135.248.405.345.712.45.615.15 1.447.098 2.108.45.697.345 1.418.502 1.98.352.405-.09.742-.352.922-.712.037 0 .068 0 .105-.008.42-.023.885-.195 1.605-.24.202-.015.42.008.66.038.383.06.818.142 1.298.113.015.098.045.142.082.247h.008c.293.585.84.848 1.425.802s1.208-.397 1.717-.975c.473-.578 1.275-.817 1.8-1.133.262-.143.48-.345.495-.637.015-.3-.15-.608-.54-1.035zM12.125 5.479c-.03-.098-.075-.15-.135-.248-.068-.052-.128-.105-.203-.105h-.015c-.067 0-.135.022-.195.105a.54.54 0 0 0-.158.248c-.037.098-.06.195-.068.3v.015a1.84 1.84 0 0 0 .015.203l-.457-.158a.92.92 0 0 1-.015-.143v-.015c-.008-.202.03-.397.113-.577.06-.165.172-.308.322-.405a.77.77 0 0 1 .45-.15h.015c.158 0 .3.053.442.15.143.105.248.247.33.405.083.188.12.337.128.54 0-.015.008-.03.008-.045v.075a1.58 1.58 0 0 1-.12.503c-.037.09-.09.18-.165.247-.023-.015-.045-.022-.068-.03-.075-.038-.15-.053-.217-.098-.052-.025-.108-.043-.165-.053.037-.045.113-.098.143-.15.037-.098.06-.195.068-.3v-.015c0-.098-.015-.202-.053-.3zm-3.12-.33a.97.97 0 0 1 .217-.405c.098-.098.195-.15.315-.15h.023c.111.002.219.038.307.105.113.098.203.218.263.345a1.27 1.27 0 0 1 .113.503c.008.053.008.09.008.127 0 .03 0 .053-.008.075v.06c-.019.008-.04.013-.06.015-.12.045-.21.105-.3.15.008-.06.008-.128 0-.195v-.015c-.008-.098-.03-.15-.06-.248-.025-.077-.069-.147-.127-.202-.02-.017-.042-.029-.067-.037s-.05-.01-.076-.008h-.015c-.053 0-.098.03-.135.098-.053.06-.082.127-.098.202-.015.082-.022.165-.015.247v.015c.008.098.03.15.06.247.037.098.075.15.127.203.008.007.015.015.023.015-.053.045-.082.053-.127.105-.031.025-.067.043-.105.053a2.18 2.18 0 0 1-.203-.308c-.075-.157-.112-.322-.12-.495-.015-.172.008-.345.06-.502zm.082 1.582l.367-.255.127-.098h.008c.127-.157.33-.353.63-.457.105-.022.225-.045.36-.045a1.5 1.5 0 0 1 .915.3c.225.15.398.202.803.353.195.098.308.195.367.3v-.105c.053.112.053.24.008.353-.09.24-.39.487-.803.637-.21.098-.383.248-.592.345-.21.105-.443.225-.765.203-.115.01-.231-.008-.338-.053a1.95 1.95 0 0 1-.248-.143c-.15-.105-.277-.255-.465-.353-.308-.187-.473-.39-.525-.532-.053-.202 0-.353.15-.45zm.12 11.745c-.045.555-.367.855-.855.967-.495.098-1.155 0-1.822-.345-.727-.405-1.605-.352-2.16-.457-.285-.045-.465-.15-.555-.3-.083-.15-.083-.45.098-.922.09-.255.022-.57-.022-.84-.038-.3-.06-.532.038-.705.12-.255.3-.3.518-.405.225-.098.487-.15.697-.345v-.008c.195-.203.338-.45.51-.63.143-.15.285-.247.503-.247h.007c.038 0 .075 0 .12.007.285.045.533.255.773.563l.69 1.252h.008c.18.398.57.803.9 1.23.33.45.585.848.555 1.178v.008zm2.468-.48c-.742.172-1.53.12-2.265-.285a1.87 1.87 0 0 1-.262-.158c-.083-.142-.187-.277-.308-.397-.055-.094-.126-.178-.21-.248a1.22 1.22 0 0 0 .36-.052c.105-.053.195-.143.232-.247.082-.203 0-.525-.262-.878-.263-.345-.705-.742-1.35-1.14a2.28 2.28 0 0 1-.578-.502c-.143-.173-.24-.353-.3-.54-.12-.405-.105-.817-.008-1.237.113-.495.338-.975.555-1.388l.412-.682c.075-.053.022.09-.292.682l-.022.045c-.3.563-.863 1.875-.09 2.895a6.12 6.12 0 0 1 .488-2.16l.36-.78c.443-.937.982-2.152 1.035-3.172.037.03.165.105.217.15.165.105.293.255.45.353.157.15.36.247.668.247.03.008.053.008.083.008a1.61 1.61 0 0 0 .758-.202c.217-.098.39-.248.555-.3h.008c.352-.098.63-.3.795-.525.27 1.065.907 2.61 1.313 3.36.398.706.682 1.47.84 2.265a1.52 1.52 0 0 1 .39.045c.06-.158.098-.315.12-.473.143-1.043-.518-2.062-.893-2.445-.023-.015-.045-.037-.06-.053-.165-.15-.172-.255-.09-.255.053.045.098.09.15.142.42.435.907 1.132 1.095 1.927a2.58 2.58 0 0 1 .09.683c0 .188-.023.383-.068.57a.51.51 0 0 0 .15.053c.787.397 1.072.697.937 1.147v-.03h-.15c.113-.353-.135-.623-.81-.915-.69-.3-1.245-.255-1.342.345-.008.03-.008.053-.015.105-.053.015-.105.037-.157.045-.323.202-.503.502-.6.893-.098.397-.127.862-.157 1.402-.015.247-.128.63-.24 1.012-.457.323-.975.57-1.53.69zm6.225-.383c-.473.3-1.32.532-1.86 1.177-.473.555-1.042.855-1.545.893s-.937-.15-1.192-.675h-.008c-.158-.3-.09-.773.045-1.268.135-.502.322-1.012.352-1.425.023-.533.053-.998.143-1.358.098-.352.24-.6.488-.742l.037-.015c.023.45.255.93.668 1.035.443.098 1.087-.255 1.357-.577l.158-.008c.24-.008.442.008.645.202.157.15.232.398.3.66.067.3.12.585.307.795.375.397.495.682.488.855-.015.202-.142.3-.383.45zm-3.427-7.38v.69h-.412c.374.683.643 1.419.795 2.183a1.52 1.52 0 0 1 .39.045c.06-.158.098-.315.12-.473.143-1.043-.518-2.062-.893-2.445z"/><path d="M12.665 6.724v.105c-.06-.105-.173-.202-.368-.3-.405-.15-.577-.202-.802-.353a1.5 1.5 0 0 0-.915-.3c-.135 0-.255.022-.36.045-.3.105-.502.3-.63.458h-.008c-.023.022-.053.045-.127.098-.083.045-.203.15-.367.255-.15.097-.203.247-.15.45.053.143.217.345.525.533.188.098.315.247.465.353.075.053.157.098.247.143.105.045.217.06.338.053.322.022.555-.098.765-.203.21-.098.383-.247.593-.345.412-.15.712-.397.802-.638.045-.112.045-.24-.007-.353zm-1.898-.495c-.008-.015.008-.03.015-.037a.27.27 0 0 1 .202 0c.045 0 .12.052.113.105-.008.038-.068.045-.105.045s-.067-.03-.105-.045-.113-.007-.12-.053v-.015zm-.645-.037c.06-.022.143-.03.195 0 .015.007.03.022.022.037v.015h.008c-.015.045-.09.038-.127.053s-.068.053-.105.053-.098-.015-.105-.053c-.008-.053.068-.105.113-.105zm1.987.893l-.525.353c-.33.15-.72.397-1.133.397-.405 0-.735-.203-.967-.353L9.2 7.234c-.12-.098-.105-.247-.053-.247.083.007.098.098.15.15.075.045.165.15.27.248.225.15.517.353.885.353s.803-.203 1.065-.353l.488-.353c.12-.098.112-.195.217-.195.098.008.023.098-.113.248zm6.172 10.08c-.015.203-.142.3-.383.45-.472.3-1.32.532-1.86 1.178-.472.555-1.042.855-1.545.892s-.937-.15-1.193-.675h-.008c-.157-.3-.09-.773.045-1.267.135-.503.322-1.012.353-1.425.022-.533.053-.998.143-1.357.098-.353.24-.6.487-.742l.037-.015c.023.45.255.93.668 1.035.443.098 1.088-.255 1.358-.578l.157-.008c.24-.007.442.008.645.203.157.15.233.398.3.66.067.3.12.585.308.795.375.398.495.683.487.855zM9.208 18.47v.008c-.045.555-.367.855-.855.968-.495.098-1.155 0-1.822-.345-.727-.405-1.605-.352-2.16-.457-.285-.045-.465-.15-.555-.3-.083-.15-.083-.45.098-.922.09-.255.022-.57-.022-.84-.038-.3-.06-.532.038-.705.12-.255.3-.3.517-.405.225-.098.487-.15.697-.345v-.007c.195-.203.338-.45.51-.63.143-.15.285-.248.502-.248h.008c.037 0 .075 0 .12.008.285.045.532.255.773.563l.69 1.253h.008c.18.397.57.802.9 1.23.33.45.585.848.555 1.177z"/><path d="M10.347 6.244c-.015.045-.09.037-.127.053s-.068.053-.105.053-.098-.015-.105-.053c-.008-.053.068-.105.113-.105.06-.022.143-.03.195 0 .015.008.03.022.023.038v.015h.008zm1.762.84l-.525.353c-.33.15-.72.397-1.132.397-.405 0-.735-.202-.968-.353L9.2 7.234c-.12-.098-.105-.248-.053-.248.082.008.098.098.15.15.075.045.165.15.27.247.225.15.518.353.885.353s.802-.202 1.065-.353l.487-.353c.12-.097.113-.195.218-.195.098.007.022.098-.113.247z"/></g><defs><clipPath id="A"><path fill="#fff" transform="translate(2 1.999)" d="M0 0h18v18H0z"/></clipPath></defs>',
  ],
  linuxrpm: [
    'Скачать для ',
    'Linux',
    'linuxrpm',
    'https://getcompass.ru/app/linux-rpm',
    'https://getcompass.ru/on-premise/app/linux-rpm',
    '.rpm',
    '<path d="M10.5256 3.01227C10.174 3.04388 9.79074 3.08931 9.60704 3.12091C8.28556 3.35795 7.05296 3.91696 5.98235 4.7703C5.64062 5.04289 5.0421 5.64141 4.76951 5.98314C3.81741 7.1782 3.25247 8.51548 3.05494 10.0523C3.01346 10.3723 3.01148 10.4394 3.00556 13.8528C2.99765 17.6651 2.99173 17.4676 3.1142 17.8113C3.28605 18.2913 3.69889 18.7061 4.18284 18.8819C4.52457 19.0083 4.34877 19.0024 8.14728 18.9945C11.2564 18.9886 11.6298 18.9846 11.8767 18.955C12.487 18.8799 12.9552 18.7772 13.5122 18.5935C14.4189 18.2952 15.2446 17.8468 16.0169 17.2305C16.3586 16.958 16.9572 16.3594 17.2298 16.0177C18.2016 14.7989 18.7725 13.4202 18.9542 11.8597C19.0016 11.4488 19.0016 10.552 18.9542 10.1412C18.7428 8.32783 17.9902 6.72388 16.7419 5.43795C15.4342 4.08882 13.7335 3.25326 11.8786 3.0498C11.6001 3.0182 10.7251 2.9945 10.5256 3.01227ZM13.7256 4.91845C13.9744 4.94808 14.2648 5.02709 14.4228 5.10808C14.6105 5.20289 14.7922 5.38264 14.8772 5.5624C14.9344 5.68486 14.9404 5.71252 14.9384 5.88437C14.9364 6.09375 14.8949 6.234 14.7922 6.37622C14.7132 6.48487 14.5572 6.60338 14.4228 6.65869C14.3162 6.70017 14.2865 6.70412 13.9922 6.69622C13.2337 6.67647 13.0362 6.6824 12.8564 6.73178C12.6451 6.78709 12.331 6.93721 12.173 7.05573C11.8747 7.28091 11.61 7.63054 11.4954 7.95054C11.369 8.29622 11.3651 8.34165 11.3651 9.43993C11.3651 10.55 11.3611 10.5224 11.4994 10.6054C11.5586 10.6429 11.6041 10.6449 12.2638 10.6449C12.6549 10.6449 13.0204 10.6547 13.0915 10.6666C13.5596 10.7417 13.8875 11.194 13.8085 11.6562C13.7453 12.0236 13.4826 12.2962 13.1191 12.3733C13.0144 12.395 12.8011 12.4029 12.171 12.4029H11.3552V13.5426C11.3552 14.9372 11.3374 15.1051 11.1419 15.6523C10.6777 16.952 9.52605 17.8962 8.15519 18.1036C7.9063 18.1412 7.39864 18.1471 7.17346 18.1135C6.62827 18.0345 6.27272 17.8389 6.10481 17.5229C5.88753 17.114 6.05938 16.6083 6.4821 16.4128C6.6737 16.3219 6.84358 16.3061 7.19716 16.3456C7.95173 16.4286 8.49691 16.2686 8.96309 15.8301C9.20012 15.6049 9.37 15.3461 9.47469 15.0498C9.58136 14.7417 9.58728 14.6745 9.58728 13.5841C9.58728 12.6044 9.58728 12.5826 9.5458 12.5293C9.52407 12.4997 9.48062 12.4562 9.45099 12.4345C9.39963 12.395 9.36605 12.393 8.5937 12.3831C7.85889 12.3733 7.78185 12.3693 7.70086 12.3357C7.39074 12.2034 7.19716 11.9604 7.1458 11.6404C7.11815 11.4626 7.15568 11.2473 7.24457 11.0913C7.31568 10.9688 7.48358 10.8049 7.59815 10.7456C7.78383 10.6508 7.85099 10.6449 8.74975 10.6449H9.59519L9.60309 9.41425C9.61296 8.11252 9.61296 8.09869 9.7137 7.70561C9.93889 6.83252 10.5019 6.0424 11.2604 5.53079C11.4579 5.40042 11.772 5.23647 11.9972 5.14561C12.2184 5.05869 12.6905 4.94215 12.9157 4.91845C13.1586 4.89474 13.532 4.89277 13.7256 4.91845Z" fill="currentColor"/>',
  ],
  linuxastra: [
    'Скачать для ',
    'Astra Linux',
    'linuxastra',
    'https://getcompass.ru/app/linux-astra',
    'https://getcompass.ru/on-premise/app/linux-astra',
    '.deb',
    '<path d="M20.7067 8.27413L14.1247 7.25007C13.5598 6.17025 11.6334 2.49084 11.6334 2.49084L11.004 1.29395L7.88103 7.25007L1.29492 8.27351L5.99856 12.879L4.94527 19.4116L11.004 16.4072L17.0632 19.41L16.0037 12.879C16.8425 12.0564 19.7002 9.2606 19.8404 9.1232L20.7067 8.27413ZM15.1599 12.5833L16.0546 18.0363L11.004 15.5325L5.94773 18.0385L6.84343 12.5833L2.9076 8.73317L8.41075 7.87516L11 2.93509L13.5858 7.87516L19.0927 8.73317L15.1599 12.5833Z" fill="currentColor"/>' +
      '<path d="M7.2932 13.5885L9.11975 15.833L9.90323 15.4426L6.8706 9.76774L10.8641 14.9666L11.0012 14.8985L12.3956 15.5908L9.32508 9.48246L14.5537 16.6623L15.2631 17.0123L15.1496 16.3182L11.7772 9.19718L14.6748 13.3766L14.5168 12.4036L15.4033 11.5374L14.2314 8.91436L15.7468 11.203L17.8957 9.10075L13.176 8.36782L11.0012 4.21582L8.8247 8.36782L4.10742 9.10075L7.48524 12.4036L7.2932 13.5885Z" fill="currentColor"/>' +
      '<path d="M7.10111 14.7764L6.74023 17.0139L8.01523 16.3824L7.10111 14.7764Z" fill="currentColor"/>',
  ],
  appstore: [
    'Перейти в ',
    'AppStore',
    'appstore',
    'https://redirect.appmetrica.yandex.com/serve/244294711257416556',
    'https://getcompass.ru/on-premise/app/ios',
    '',
    '<path d="M4.25338 2.67078H17.7578C18.7745 2.67078 19.5994 3.49562 19.5994 4.51229V18.0168C19.5994 19.0334 18.7745 19.8583 17.7578 19.8583H4.25338C3.23671 19.8583 2.41187 19.0334 2.41187 18.0168V4.51229C2.41187 3.49562 3.23671 2.67078 4.25338 2.67078ZM14.727 16.1944C14.938 16.5627 15.4099 16.6855 15.7744 16.4745C16.1427 16.2635 16.2655 15.7916 16.0544 15.4271L15.5058 14.4795C14.8881 14.2915 14.3817 14.4373 13.9866 14.9169L14.727 16.1944ZM9.39812 14.1266H16.3767C16.7987 14.1266 17.144 13.7813 17.144 13.3593C17.144 12.9372 16.7987 12.592 16.3767 12.592H14.4201L11.911 8.24904L12.6975 6.89092C12.9085 6.52262 12.7819 6.05457 12.4174 5.84356C12.0491 5.63255 11.5811 5.75916 11.3701 6.12362L11.0286 6.71444L10.6872 6.12362C10.4762 5.75532 10.0043 5.63255 9.63982 5.84356C9.27152 6.05457 9.14875 6.52645 9.35976 6.89092L12.6515 12.592H10.269C9.49404 12.592 9.06051 13.5012 9.39812 14.1266ZM5.63452 14.1266H6.74711L5.99515 15.4271C5.78414 15.7954 5.91075 16.2635 6.27522 16.4745C6.64352 16.6855 7.11157 16.5589 7.32258 16.1944C8.58479 14.0115 9.52856 12.3694 10.1616 11.2799C10.8023 10.1673 10.3457 9.05471 9.8892 8.67873C9.38661 9.54961 8.63466 10.854 7.6295 12.592H5.63452C5.21251 12.592 4.86722 12.9372 4.86722 13.3593C4.86722 13.7851 5.21251 14.1266 5.63452 14.1266Z" fill="currentColor"/>',
  ],
  playmarket: [
    'Перейти в ',
    'Google Play',
    'playmarket',
    'https://redirect.appmetrica.yandex.com/serve/532525089422325047',
    'https://getcompass.ru/on-premise/app/google-play',
    '',
    '<path d="M11.7677 11.03L3.46533 19.356C3.19031 19.0597 3.04436 18.6977 3.00496 18.2877C2.99812 18.2148 3.00054 18.1406 3.00054 18.0668C3.00054 13.3579 3.00054 8.64895 3.00054 3.94002C3.00054 3.45021 3.13724 3.01844 3.43558 2.67175L11.7677 11.03Z" fill="currentColor"/><path d="M12.4697 11.6851L15.3799 14.6051L13.3313 15.7052C10.8229 17.0517 8.31456 18.3985 5.80618 19.7455C5.3434 19.9946 4.86453 20.0736 4.35511 19.9249C4.33587 19.9201 4.31705 19.9137 4.29882 19.9059C4.28716 19.9003 4.27912 19.8882 4.28475 19.8938L12.4697 11.6851Z" fill="currentColor"/><path d="M15.3855 7.40097L12.4797 10.3157L4.28394 2.09687C4.79538 1.92836 5.29917 1.98077 5.78889 2.24361C7.6545 3.24662 9.52078 4.24829 11.3877 5.24861C12.6357 5.91862 13.8839 6.58824 15.1322 7.25745C15.2195 7.30461 15.3047 7.35541 15.3855 7.40097Z" fill="currentColor"/><path d="M13.1251 11.0171C14.1705 9.96896 15.2086 8.92725 16.264 7.86861L17.3987 8.47654C17.9169 8.7539 18.434 9.03287 18.9527 9.30942C19.6322 9.67225 20.0053 10.2366 20.0001 11.0091C19.9948 11.7815 19.6161 12.3374 18.9326 12.697C18.0758 13.1481 17.225 13.6109 16.3738 14.0717C16.2825 14.1213 16.2214 14.1406 16.1326 14.0515C15.1443 13.0526 14.1525 12.0564 13.1572 11.0631C13.1453 11.0487 13.1345 11.0333 13.1251 11.0171Z" fill="currentColor"/>',
  ],
  huawei: [
    'Перейти в ',
    'AppGallery',
    'huawei',
    'https://redirect.appmetrica.yandex.com/serve/244294713874627369',
    'https://getcompass.ru/on-premise/app/appgallery',
    '',
    '<path d="M2.50012 18.4013V4.59358C2.51263 4.57017 2.52259 4.5455 2.52983 4.51997C2.62162 4.01137 2.87438 3.59588 3.31028 3.32495C3.54707 3.17773 3.83087 3.10634 4.09339 3.00037H17.9015C17.9153 3.00879 17.9281 3.02298 17.9428 3.0252C18.7232 3.12275 19.5028 3.84287 19.4997 4.94122C19.4877 9.31069 19.4952 13.6802 19.4926 18.0496C19.4959 18.2262 19.4788 18.4025 19.4416 18.5751C19.2363 19.4437 18.5104 19.994 17.5831 19.994C13.7448 19.994 9.90624 19.994 6.06756 19.994C5.46981 19.994 4.87029 20.0109 4.27564 19.9878C3.56082 19.9612 3.02604 19.6131 2.69967 18.9746C2.60788 18.7963 2.56664 18.5933 2.50012 18.4013ZM10.6434 12.0683L10.705 12.0448C10.7303 11.7442 10.76 11.444 10.78 11.1429C10.8638 9.86674 10.8859 8.59235 10.6633 7.32594C10.5848 6.87941 10.4744 6.44175 10.2709 6.03159C10.2239 5.9367 10.1649 5.90256 10.062 5.92872C9.89086 5.97306 9.71571 6.00099 9.5472 6.05287C9.251 6.14838 8.99132 6.33263 8.80334 6.58065C8.61535 6.82867 8.50815 7.12847 8.49626 7.43945C8.49538 7.46718 8.49497 7.49481 8.49504 7.52234C8.49602 7.93558 8.60224 8.33045 8.75522 8.71207C9.22704 9.88802 9.90239 10.9491 10.6039 11.996C10.619 12.0191 10.6305 12.0448 10.6434 12.0683ZM11.2926 12.0475L11.3396 12.0519C11.3713 12.0147 11.4009 11.9758 11.4283 11.9353C11.8579 11.2342 12.3014 10.5412 12.7107 9.82816C13.0291 9.273 13.2987 8.6899 13.4375 8.05802C13.5785 7.41462 13.4982 6.82709 12.9825 6.35662C12.7045 6.10387 12.3617 6.01917 12.0069 5.94069C11.8847 5.91379 11.8104 5.9308 11.7541 5.99171C11.7268 6.02119 11.7037 6.06093 11.6815 6.11096C11.4819 6.55926 11.3711 7.03062 11.2979 7.51173C11.0886 8.87569 11.1374 10.2436 11.2487 11.6116C11.2497 11.6272 11.2508 11.6429 11.252 11.6585C11.2523 11.6621 11.2526 11.6657 11.2529 11.6694C11.2631 11.7961 11.2795 11.922 11.2926 12.0479V12.0475ZM10.2691 12.3361C10.1067 11.9856 9.9362 11.6391 9.7579 11.2969C9.03539 9.90995 8.18416 8.59301 7.21497 7.36358C7.21338 7.36156 7.21179 7.35955 7.2102 7.35753C7.20993 7.3572 7.20967 7.35686 7.20941 7.35653C6.87107 7.70063 6.60323 8.05492 6.44093 8.48105C6.20325 9.1045 6.31589 9.66321 6.76376 10.1536C6.77348 10.1641 6.78329 10.1744 6.79317 10.1847C6.88285 10.2779 6.97913 10.3646 7.08126 10.4441C7.11879 10.4741 7.15651 10.5038 7.1944 10.5332C7.95317 11.122 8.78274 11.5921 9.62783 12.0364C9.8006 12.1272 9.97402 12.217 10.1476 12.3064C10.1872 12.3198 10.2279 12.3299 10.2691 12.3366V12.3361ZM14.7837 7.35077C13.5709 8.90895 12.5484 10.5398 11.7599 12.3171L11.7601 12.3171C11.8246 12.3105 11.8869 12.2904 11.9431 12.2581C12.072 12.1883 12.2013 12.119 12.3306 12.0497C12.6635 11.8714 12.9965 11.693 13.3235 11.5043C13.9598 11.1371 14.586 10.7505 15.1292 10.2499C15.4045 9.99533 15.6001 9.69114 15.648 9.31335C15.6546 9.26082 15.6589 9.2093 15.6611 9.15873C15.6612 9.15731 15.6612 9.15589 15.6613 9.15447C15.6908 8.42247 15.2653 7.88778 14.7837 7.35077ZM9.96359 12.7224L9.97955 12.6758C8.58007 11.757 7.11584 10.9465 5.64275 10.1439C5.2206 11.3588 6.14605 12.7024 7.40452 12.7277C7.9763 12.739 8.54807 12.7378 9.11985 12.7367C9.35468 12.7362 9.58952 12.7357 9.82435 12.7361C9.87091 12.7361 9.91703 12.7268 9.96359 12.7224ZM16.3491 10.1434C16.3486 10.1437 16.3481 10.144 16.3476 10.1442C14.8701 10.955 13.4091 11.76 12.0242 12.6989C12.0634 12.7218 12.1076 12.7346 12.1528 12.736C12.1536 12.736 12.1543 12.736 12.1551 12.736C12.158 12.7361 12.161 12.7361 12.1639 12.7361C12.1906 12.7361 12.2172 12.7361 12.2439 12.7361C12.4054 12.7362 12.567 12.7365 12.7286 12.7367C13.0514 12.7373 13.3742 12.7378 13.6971 12.7368C13.7118 12.7367 13.7265 12.7367 13.7412 12.7366C13.8846 12.7361 14.028 12.7352 14.1713 12.7339C14.4135 12.7339 14.6591 12.7339 14.8968 12.686C16.0268 12.4586 16.7354 11.23 16.3476 10.1442C16.3475 10.144 16.3474 10.1437 16.3473 10.1434H16.3491ZM6.53539 13.1055C6.72606 13.4478 6.95 13.7214 7.25686 13.9196C7.50061 14.0767 7.75344 14.1567 8.00925 14.13C8.0127 14.1296 8.01615 14.1292 8.0196 14.1288C8.15595 14.113 8.29312 14.0668 8.43019 13.9857C8.7927 13.7701 9.15007 13.5439 9.50721 13.3177C9.63062 13.2395 9.754 13.1614 9.87756 13.0838C9.89663 13.0713 9.90594 13.0434 9.94408 12.9871L6.53539 13.1055ZM12.034 12.9866C12.0538 13.0111 12.0674 13.0294 12.0777 13.0431C12.0936 13.0645 12.1015 13.0751 12.112 13.0815C12.23 13.1548 12.348 13.2282 12.4659 13.3016C12.8528 13.5425 13.2399 13.7834 13.6304 14.0189C13.8091 14.1237 14.0201 14.1592 14.2232 14.1187C14.813 14.0141 15.1544 13.6052 15.4648 13.1055L12.034 12.9866ZM11.2438 15.2069C11.2494 15.2276 11.2541 15.2464 11.2584 15.2637C11.2664 15.2955 11.2732 15.3226 11.2824 15.3487C11.339 15.512 11.3961 15.675 11.4532 15.8381C11.5786 16.1961 11.7039 16.5541 11.8242 16.9136C11.8437 16.9719 11.8684 17.0054 11.9036 17.0233C11.9328 17.0381 11.969 17.0422 12.0154 17.0408C12.1178 17.0377 12.1883 17.0351 12.2256 16.9145C12.3182 16.6138 12.4269 16.3181 12.5297 16.021C12.5462 15.974 12.5679 15.9292 12.6011 15.8489C12.7342 16.2303 12.8548 16.5677 12.9639 16.9091C13.0007 17.024 13.0659 17.04 13.1705 17.0422C13.2008 17.0428 13.2273 17.0409 13.2507 17.0352C13.2757 17.0291 13.297 17.0185 13.3153 17.0019C13.3168 17.0005 13.3183 16.9991 13.3197 16.9976C13.3412 16.9764 13.3583 16.9463 13.3723 16.9043C13.547 16.3806 13.7332 15.8609 13.9142 15.3394C13.9266 15.2956 13.9368 15.2512 13.9448 15.2064C13.9443 15.2064 13.9438 15.2065 13.9434 15.2065C13.9142 15.2089 13.8849 15.2097 13.8557 15.2088C13.8551 15.2088 13.8546 15.2087 13.8541 15.2087C13.841 15.2083 13.8279 15.2075 13.8148 15.2064C13.7951 15.2026 13.7765 15.2001 13.7589 15.1989C13.6105 15.1886 13.5392 15.27 13.4956 15.4326C13.4334 15.6662 13.3567 15.8962 13.2753 16.1401C13.2405 16.2443 13.2049 16.3511 13.1692 16.4617C13.169 16.461 13.1687 16.4603 13.1685 16.4596C13.0397 16.0707 12.9207 15.7224 12.8104 15.3714C12.7767 15.2634 12.7393 15.2031 12.614 15.1987C12.6091 15.1985 12.6041 15.1984 12.5989 15.1984C12.4615 15.1984 12.4216 15.2632 12.3901 15.3758C12.3521 15.5065 12.308 15.6354 12.2639 15.7643C12.2437 15.8235 12.2235 15.8827 12.2038 15.942C12.169 16.0464 12.1345 16.1511 12.1 16.2558C12.0827 16.3082 12.0655 16.3606 12.0482 16.413C12.0479 16.4123 12.0477 16.4117 12.0474 16.4111C11.9045 16.0606 11.7794 15.7031 11.6726 15.3399C11.6495 15.2625 11.6166 15.2226 11.5607 15.2099C11.5393 15.2051 11.5147 15.2043 11.4859 15.2069C11.4353 15.2103 11.3849 15.2093 11.3309 15.2081C11.3307 15.2081 11.3304 15.2081 11.3302 15.2081C11.3021 15.2075 11.273 15.2069 11.2425 15.2069H11.2438ZM5.56781 15.2135V17.0267H5.93231H5.9332V16.3025V16.3017H6.77573V17.0244H7.13402V15.2166H6.76908V15.9354H5.92655V15.9345V15.2135H5.56781ZM15.6028 15.2064H14.2725V15.2077V17.0244H15.6365H15.6387V16.7016H14.6365V16.2418V16.2405H15.2972H15.2994V15.9075H14.6383V15.5359H15.601L15.601 15.5329L15.6028 15.2064ZM7.67413 15.2139C7.67413 15.327 7.67253 15.4386 7.67076 15.5491C7.6705 15.5649 7.67024 15.5807 7.66999 15.5964C7.66539 15.8774 7.66091 16.1516 7.67989 16.424C7.70739 16.8187 7.9903 17.0479 8.41112 17.0657C8.42613 17.0663 8.44103 17.0666 8.45579 17.0667C8.46635 17.0667 8.47683 17.0666 8.48725 17.0663C8.87068 17.0567 9.15994 16.8473 9.20531 16.4773C9.24966 16.1012 9.23147 15.7172 9.23946 15.3368C9.23797 15.2953 9.23397 15.254 9.22748 15.2131H8.87007C8.87007 15.3971 8.87007 15.5727 8.87007 15.7478C8.86932 15.7987 8.8693 15.8496 8.86934 15.9006C8.86934 15.9051 8.86934 15.9097 8.86935 15.9143C8.86947 16.0654 8.8696 16.2165 8.85229 16.3654C8.85187 16.369 8.85144 16.3726 8.85101 16.3762C8.8234 16.6009 8.67618 16.7094 8.45099 16.7086C8.44687 16.7086 8.44272 16.7086 8.43855 16.7085C8.43636 16.7084 8.43416 16.7083 8.43196 16.7083C8.20581 16.7012 8.05637 16.5708 8.0444 16.3389C8.02976 16.0635 8.03597 15.7868 8.03376 15.5106C8.03376 15.4135 8.03376 15.3164 8.03376 15.2139H7.67413ZM11.3577 17.032C11.3418 16.9876 11.332 16.9508 11.317 16.9167C11.085 16.3846 10.8469 15.8582 10.623 15.3244C10.5876 15.2398 10.5392 15.2165 10.4799 15.2082C10.46 15.2054 10.4388 15.2043 10.4165 15.2032C10.407 15.2027 10.3974 15.2022 10.3875 15.2015C10.278 15.1949 10.2194 15.2304 10.1747 15.3346C10.0178 15.6998 9.85719 16.0636 9.69653 16.4274C9.62551 16.5882 9.55448 16.7491 9.48379 16.91C9.46893 16.9492 9.45626 16.9893 9.44585 17.0299C9.44579 17.0301 9.44572 17.0304 9.44565 17.0306C9.79109 17.0537 9.7871 17.0515 9.93609 16.7584C9.95275 16.7312 9.97516 16.708 10.0017 16.6904C10.0283 16.6727 10.0584 16.6611 10.09 16.6564C10.2771 16.6435 10.466 16.6595 10.6531 16.6484C10.7024 16.6455 10.7435 16.65 10.777 16.6639C10.8295 16.6857 10.863 16.7304 10.8793 16.8054C10.8956 16.8813 10.9234 16.9395 10.9629 16.9799C10.9634 16.9804 10.9639 16.9808 10.9643 16.9813C11.0259 17.0432 11.1155 17.0626 11.234 17.0395C11.2745 17.0343 11.3152 17.0317 11.356 17.0315L11.3577 17.032ZM16.1025 15.2139V17.0253H16.4435V15.2139H16.1025Z" fill="currentColor"/><path d="M10.6687 16.3118H10.1188C10.1815 16.1616 10.2427 16.0185 10.3083 15.8651C10.3354 15.8016 10.3633 15.7363 10.3924 15.668C10.4913 15.8985 10.5769 16.0972 10.6687 16.3118Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75522 8.71207C8.6022 8.33036 8.49597 7.93695 8.49504 7.52234C8.49602 7.93558 8.60224 8.33045 8.75522 8.71207Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2926 12.0479L11.3391 12.0524C11.3393 12.0522 11.3394 12.0521 11.3396 12.0519L11.2926 12.0475V12.0479ZM11.2482 11.6121C11.2494 11.6275 11.2507 11.643 11.252 11.6585C11.2508 11.6429 11.2497 11.6272 11.2487 11.6116C11.1374 10.2436 11.0886 8.87569 11.2979 7.51173C11.3711 7.03062 11.4819 6.55926 11.6815 6.11096C11.7037 6.06093 11.7268 6.02119 11.7541 5.99171C11.7266 6.02123 11.7034 6.06114 11.681 6.11144C11.4815 6.55973 11.3711 7.03109 11.2974 7.5122C11.0881 8.87616 11.1369 10.2441 11.2482 11.6121Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7601 12.3171L11.7599 12.3175C11.8245 12.311 11.8869 12.2909 11.9431 12.2585C12.0776 12.1855 12.2126 12.1131 12.3475 12.0408C12.6747 11.8654 13.002 11.6899 13.3235 11.5047C13.9598 11.1371 14.5859 10.7527 15.1292 10.2503C15.4045 9.99574 15.6001 9.69156 15.648 9.31376C15.6546 9.26109 15.659 9.20943 15.6611 9.15873C15.6589 9.2093 15.6546 9.26082 15.648 9.31335C15.6001 9.69114 15.4045 9.99533 15.1292 10.2499C14.586 10.7505 13.9598 11.1371 13.3235 11.5043C12.9965 11.693 12.6635 11.8714 12.3306 12.0497C12.2013 12.119 12.072 12.1883 11.9431 12.2581C11.8869 12.2904 11.8246 12.3105 11.7601 12.3171Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3476 10.1442C16.3475 10.144 16.3474 10.1437 16.3473 10.1434C14.8693 10.9544 13.4077 11.7579 12.0224 12.6988C12.0621 12.7221 12.107 12.7348 12.1528 12.736C12.1076 12.7346 12.0634 12.7218 12.0242 12.6989C13.4091 11.76 14.8701 10.955 16.3476 10.1442ZM13.7412 12.7366C13.7265 12.7367 13.7118 12.7367 13.6971 12.7368C13.3742 12.7378 13.0514 12.7373 12.7286 12.7367C12.567 12.7365 12.4054 12.7362 12.2439 12.7361C12.3781 12.7363 12.5124 12.7365 12.6466 12.7367C13.0115 12.7374 13.3764 12.738 13.7412 12.7366Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.034 12.9866L12.0326 12.9866C12.0528 13.0116 12.0665 13.03 12.0769 13.0439C12.0925 13.0648 12.1003 13.0753 12.1107 13.082C12.2287 13.1552 12.3466 13.2286 12.4645 13.302C12.8514 13.5429 13.2385 13.7839 13.629 14.0194C13.8082 14.1243 14.0197 14.1597 14.2232 14.1187C14.0201 14.1592 13.8091 14.1237 13.6304 14.0189C13.2399 13.7834 12.8528 13.5425 12.4659 13.3016C12.348 13.2282 12.23 13.1548 12.112 13.0815C12.1015 13.0751 12.0936 13.0645 12.0777 13.0431C12.0674 13.0294 12.0538 13.0111 12.034 12.9866Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.49982 13.3225C9.62565 13.2428 9.75147 13.163 9.87756 13.0838C9.754 13.1614 9.63062 13.2395 9.50721 13.3177C9.15007 13.5439 8.7927 13.7701 8.43019 13.9857C8.79111 13.7717 9.14552 13.5471 9.49982 13.3225ZM8.0196 14.1288C8.01615 14.1292 8.0127 14.1296 8.00925 14.13C7.75344 14.1567 7.50061 14.0767 7.25686 13.9196C7.50305 14.0794 7.75955 14.1593 8.0196 14.1288Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.23667 12.737C9.43256 12.7366 9.62845 12.7361 9.82435 12.7361C9.58952 12.7357 9.35468 12.7362 9.11985 12.7367C8.54807 12.7378 7.9763 12.739 7.40452 12.7277C8.01524 12.7398 8.62595 12.7384 9.23667 12.737Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.92565 15.2135H5.56603V17.0275H5.93231V17.0267H5.56781V15.2135L5.92565 15.2135ZM5.92655 15.9345V15.9354H6.76908V15.2166H7.13402L6.76818 15.2166V15.9345H5.92655ZM7.13402 17.0244H6.77573V16.3017H5.9332V16.3025H6.77483V17.0253H7.13402L7.13402 17.0244Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4799 15.2082C10.4582 15.2047 10.4351 15.2035 10.4108 15.2021C10.4024 15.2016 10.3939 15.2012 10.3853 15.2006C10.2758 15.1944 10.2168 15.2299 10.1725 15.3336C10.0157 15.6989 9.855 16.0627 9.69435 16.4265C9.62332 16.5873 9.55229 16.7481 9.4816 16.9091C9.46664 16.9486 9.45391 16.9888 9.44346 17.0297C9.44426 17.0298 9.44506 17.0298 9.44585 17.0299C9.45626 16.9893 9.46893 16.9492 9.48379 16.91C9.55448 16.7491 9.62551 16.5882 9.69653 16.4274C9.85719 16.0636 10.0178 15.6998 10.1747 15.3346C10.2194 15.2304 10.278 15.1949 10.3875 15.2015C10.3974 15.2022 10.407 15.2027 10.4165 15.2032C10.4388 15.2043 10.46 15.2054 10.4799 15.2082ZM10.8771 16.8045C10.8946 16.881 10.923 16.9394 10.9629 16.9799C10.9234 16.9395 10.8956 16.8813 10.8793 16.8054C10.863 16.7304 10.8295 16.6857 10.777 16.6639C10.8282 16.686 10.8611 16.7305 10.8771 16.8045ZM10.1188 16.3118C10.1815 16.1616 10.2427 16.0185 10.3083 15.8651C10.3354 15.8016 10.3633 15.7363 10.3924 15.668C10.2931 15.9012 10.2088 16.0994 10.1188 16.3118Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.601 15.5372V15.5329L15.601 15.5359H14.6383V15.9075L14.6383 15.5372H15.601ZM15.2972 16.2405H14.6365V16.2418H15.2972V16.2405ZM15.6365 17.0244V17.0257H14.2702V15.2077H14.2725V17.0244H15.6365Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1025 15.2139L16.1016 15.214V17.0253H16.4426L16.1025 17.0253V15.2139Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2691 12.3366C10.2283 12.3303 10.1881 12.3206 10.1489 12.3078C9.97493 12.2179 9.80107 12.1277 9.62783 12.0364C9.8006 12.1272 9.97402 12.217 10.1476 12.3064C10.1872 12.3198 10.2279 12.3299 10.2691 12.3366ZM7.1944 10.5332C7.15651 10.5038 7.11879 10.4741 7.08126 10.4441C6.97913 10.3646 6.88285 10.2779 6.79317 10.1847C6.88322 10.2784 6.97994 10.3656 7.08256 10.4454C7.11966 10.475 7.15694 10.5042 7.1944 10.5332ZM7.2102 7.35753C7.21179 7.35955 7.21338 7.36156 7.21497 7.36358L7.21072 7.357L7.2102 7.35753Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.67076 15.5491C7.67253 15.4386 7.67413 15.327 7.67413 15.2139L8.03156 15.2139H7.67238C7.67238 15.3443 7.67017 15.4724 7.66799 15.599C7.66318 15.8776 7.65849 16.1494 7.6777 16.424C7.70564 16.8236 7.98456 17.0479 8.40893 17.0657C8.42469 17.0663 8.44032 17.0667 8.45579 17.0667C8.44103 17.0666 8.42613 17.0663 8.41112 17.0657C7.9903 17.0479 7.70739 16.8187 7.67989 16.424C7.66091 16.1516 7.66539 15.8774 7.66999 15.5964C7.67024 15.5807 7.6705 15.5649 7.67076 15.5491ZM8.43855 16.7085C8.44272 16.7086 8.44687 16.7086 8.45099 16.7086C8.67618 16.7094 8.8234 16.6009 8.85101 16.3762C8.85144 16.3726 8.85187 16.369 8.85229 16.3654L8.84881 16.3761C8.86741 16.2238 8.86728 16.069 8.86715 15.9143C8.86715 15.9111 8.86715 15.908 8.86715 15.9048L8.86934 15.9006C8.8693 15.8496 8.86932 15.7987 8.87007 15.7478V15.2131L9.22529 15.2131H8.86788C8.86788 15.2751 8.86818 15.3358 8.86848 15.396C8.86907 15.5143 8.86965 15.6302 8.86788 15.7478C8.86711 15.8001 8.86711 15.8524 8.86715 15.9048L8.46008 16.691L8.43855 16.7085ZM8.46008 16.691L8.45099 16.7086C8.67494 16.7087 8.82129 16.6002 8.84881 16.3761L8.46008 16.691Z" fill="currentColor"/>',
  ],
  rustore: [
    'Перейти в ',
    'RuStore',
    'rustore',
    'https://redirect.appmetrica.yandex.com/serve/244294713874627369',
    'https://getcompass.ru/on-premise/app/rustore',
    '',
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6762 19.5C6.77497 19.5 4.82433 19.5 3.61236 18.305C2.40039 17.11 2.40039 15.1866 2.40039 11.3399V10.6599C2.40039 6.81325 2.40039 4.88993 3.61236 3.69492C4.82433 2.5 6.77497 2.5 10.6762 2.5H11.3659C15.2671 2.5 17.2177 2.5 18.4297 3.69492C19.6417 4.88992 19.6417 6.81324 19.6417 10.6599V10.6599V11.3399V11.3399C19.6417 15.1866 19.6417 17.11 18.4297 18.305C17.2177 19.5 15.2671 19.5 11.3659 19.5H10.6762ZM14.5465 13.5116L15.7114 13.7985C16.2391 13.9285 16.7506 13.537 16.7506 13.0033V7.46711C16.7506 6.99723 16.4248 6.58748 15.9603 6.4731L12.6191 5.65007C12.0914 5.52014 11.5799 5.91159 11.5799 6.44535V7.44331L9.47466 6.92477C8.94702 6.79484 8.43551 7.18628 8.43551 7.72005V8.71801L6.33017 8.19947C5.80257 8.06949 5.29102 8.46093 5.29102 8.9947V14.5309C5.29102 15.0008 5.61675 15.4105 6.08128 15.5249L9.42258 16.3479C9.95018 16.4779 10.4617 16.0864 10.4617 15.5527V14.6322L10.461 14.6321L10.4619 10.0246C10.4619 9.55756 10.1627 9.28675 10.054 9.20379C10.0333 9.18794 10.0275 9.15846 10.0424 9.13716C10.057 9.1162 10.0834 9.10628 10.1082 9.11365C10.5484 9.2447 10.9696 9.68972 11.0117 10.2493L11.157 14.4773C11.1618 14.6162 11.2529 14.7366 11.3841 14.7819L12.567 15.0732C13.0947 15.2032 13.6062 14.8118 13.6062 14.278L13.607 8.75048C13.607 8.2834 13.3078 8.01264 13.1991 7.92967C13.1784 7.91382 13.1726 7.88434 13.1875 7.86304C13.2022 7.84208 13.2285 7.83216 13.2532 7.83948C13.6935 7.97058 14.1148 8.4156 14.1568 8.97519L14.3022 13.2028C14.3072 13.3475 14.4062 13.4719 14.5465 13.5116Z" fill="currentColor" />',
  ],
};

//Создаем выпадающий список и добавляем туда ссылку на другие платформы
const downloadLinksList = document.createElement('div');
downloadLinksList.classList.add('cta__dd-list-inner-wrap');
const downloadLinksOtherLinkWrap = `
    <div class="cta__dd-list-other-wrap">
      <a href="#" class="cta__list-item cta__list-other-button cursor-pointer w-inline-block">
        <div class="cta__list-item-icon is--vector-full w-embed">
          <svg width="22" height="22" viewBox="0 0 22 22">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 15.9998H16.3334C17.0698 15.9998 17.6667 15.4029 17.6667 14.6665V7.99984C17.6667 7.26346 17.0698 6.6665 16.3334 6.6665H5.66671C4.93033 6.6665 4.33337 7.26346 4.33337 7.99984V14.6665C4.33337 15.4029 4.93033 15.9998 5.66671 15.9998H10.5V17.6665H7.00004C6.7239 17.6665 6.50004 17.8904 6.50004 18.1665C6.50004 18.4426 6.7239 18.6665 7.00004 18.6665H11H15C15.2762 18.6665 15.5 18.4426 15.5 18.1665C15.5 17.8904 15.2762 17.6665 15 17.6665H11.5V15.9998Z" fill="currentColor"></path>
          </svg>
        </div>
        <span>Другие платформы</span>
        <div class="cta__list-item-icon is--vector-full is--arrow w-embed">
          <svg width="26" height="16" viewBox="0 0 26 16">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3431 1.06438L25.7071 7.42834C26.0976 7.81886 26.0976 8.45203 25.7071 8.84255L19.3431 15.2065C18.9526 15.597 18.3195 15.597 17.9289 15.2065C17.5384 14.816 17.5384 14.1828 17.9289 13.7923L22.5858 9.13545H1.5C0.947715 9.13545 0.5 8.68773 0.5 8.13545C0.5 7.58316 0.947715 7.13545 1.5 7.13545H22.5858L17.9289 2.47859C17.5384 2.08807 17.5384 1.4549 17.9289 1.06438C18.3195 0.673853 18.9526 0.673853 19.3431 1.06438Z" fill="currentColor"/>
          </svg>
        </div>
      </a>
    </div>
`;
const downloadLinksWindowsTitles = `
    <div class="cta__dd-list-title pt-8 pb-4 px-15">
      <div class="font-medium text-s-14 leading-150 text-dark-gray">Windows 10 и выше</div>
    </div>
    <div class="cta__dd-list-title pt-8 pb-4 px-15">
      <div class="font-medium text-s-14 leading-150 text-dark-gray">Windows 7, 8, 8.1</div>
    </div>
`;
downloadLinksList.innerHTML =
  downloadLinksOtherLinkWrap + downloadLinksWindowsTitles;
const downloadLinksOtherLink = downloadLinksList.querySelector(
  'a.cta__list-other-button'
);
downloadLinksOtherLink.addEventListener('click', () => {
  const downloadListElement = downloadLinksList.closest('.cta__dd-list');
  const isCloudPlatform =
    downloadListElement?.classList.contains('is--cloud-platforms') ||
    ['on-premise', 'download_on-premise'].indexOf(getPage()) === -1;

  // Переход на соответствующую страницу в зависимости от платформы
  window.location = isCloudPlatform ? '/download' : '/on-premise/download';
});

const downloadLinksNodes = [];

for (let key in downloadLinksData) {
  const downloadLink = createDownloadLink(downloadLinksData[key]);
  downloadLinksNodes.push(downloadLink.querySelector('.cta__list-item'));
  downloadLinksList.appendChild(downloadLink);
}

const ctaDropdowns = document.querySelectorAll('.cta__dropdown');
const allDownloadDropdowns = [
  ...ctaDropdowns,
  ...document.querySelectorAll('.cta__vendor-dd'),
  ...document.querySelectorAll('.footer__item-download-dd'),
  ...document.querySelectorAll('.blog-footer__mac-dropdown'),
  ...document.querySelectorAll('.download__cta-dd'),
  ...document.querySelectorAll('.fast-work__platform-dd'),
];

const downloadDropdownsObserver = new MutationObserver((mutations) => {
  mutations.forEach((mu) => {
    if (mu.type === 'attributes' && mu.attributeName === 'class') {
      if (mu.target.classList.contains('w--open')) {
        mu.target.closest('.w-dropdown').classList.add('is--open');
        if (mu.target.closest('[data-menu-dd-wrap]')) {
          mu.target.closest('[data-menu-dd-wrap]').classList.add('sm--z-900');
        }
      } else {
        mu.target.closest('.w-dropdown').classList.remove('is--open');
        if (mu.target.closest('[data-menu-dd-wrap]')) {
          mu.target
            .closest('[data-menu-dd-wrap]')
            .classList.remove('sm--z-900');
        }
      }
    }
  });
});

allDownloadDropdowns.forEach((downloadDropdown) => {
  const toggle = downloadDropdown.querySelector('.w-dropdown-toggle');
  const downloadList = downloadDropdown.querySelector('.w-dropdown-list');
  let version = null;

  downloadDropdownsObserver.observe(toggle, {
    attributes: true,
  });
  toggle.addEventListener('mousedown', (e) => {
    if (!downloadDropdown.classList.contains('w-open')) {
      allDownloadDropdowns.forEach((downloadOtherDropdown) => {
        if (downloadOtherDropdown !== downloadDropdown) {
          downloadOtherDropdown
            .querySelector('.w-dropdown-list')
            .classList.remove('w--open');
        }
      });
      // Подставляем нужные ссылки в выпадающее меню
      const allDownloadLinks =
        downloadLinksList.querySelectorAll('[data-cloud]');
      if (
        (getPage() === 'on-premise' &&
          !downloadList.classList.contains('is--cloud-platforms')) ||
        (getPage() === 'download_on-premise' &&
          !downloadList.classList.contains('is--cloud-platforms'))
      ) {
        Array.prototype.forEach.call(allDownloadLinks, (link) => {
          link.href = link.dataset.onpremise;
          link.dataset.version = 'onpremise';
        });
        version = 'onpremise';
      } else {
        Array.prototype.forEach.call(allDownloadLinks, (link) => {
          link.href = link.dataset.cloud;
          link.dataset.version = 'cloud';
        });
        version = 'cloud';
      }
      Array.prototype.forEach.call(allDownloadLinks, (link) => {
        if (
          !mobileClassNames.some((className) =>
            link.classList.contains(className)
          ) &&
          !mobileBodyClassNames.some((className) =>
            document.body.classList.contains(className)
          )
        ) {
          link.setAttribute('download', 'download');
        } else if (
          !mobileClassNames.some((className) =>
            link.classList.contains(className)
          ) &&
          mobileBodyClassNames.some((className) =>
            document.body.classList.contains(className)
          )
        ) {
          link.removeAttribute('download');
          link.setAttribute('build-link', link.href);
          link.href = '#';
        }
      });
      downloadDropdown
        .querySelector('.cta__dd-list-wrap')
        .appendChild(downloadLinksList);
      // Цели Метрики
      // Нажата кнопка попробовать бесплатно для облачной версии приложения в шапке сайта
      if (version === 'cloud' && downloadDropdown.closest('.w-nav')) {
        ym(ymetrikaID, 'reachGoal', '11');
        _tmr.push({
          type: 'reachGoal',
          id: 3381982,
          goal: 'besplatno',
        });
      }
      e.preventDefault;
      return false;
    }
  });
});

//Определеяем систему и добавляем класс в body
switch (os) {
  case 'iOS':
    body.classList.add('is--ios');
    break;
  case 'Android':
    body.classList.add('is--android');
    break;
  case 'Windows':
    body.classList.add('is--windows');
    break;
  case 'Linux':
    body.classList.add('is--linux');
    break;
  case 'OS X':
    body.classList.add('is--mac');
    break;
  case 'Huawei':
    body.classList.add('is--android');
    break;
}

const mobileClassNames = ['appstore', 'playmarket', 'huawei'];
const mobileBodyClassNames = ['is--ios', 'is--android', 'is--huawei'];
const url = new URL(location);
const urlParams = url.searchParams;
const sourceID = urlParams.get('source_id') || '';
const utmTag = urlParams.get('utm_tag') || '';
let partnerCode = urlParams.get('partner_code') || '';

if (partnerCode) {
  setCookie('partnerCode', partnerCode, 30);
}

if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
  document.querySelector('.page-wrapper').classList.remove('is--overflow-clip');
}
if (os === 'iOS') {
  Array.prototype.forEach.call(ctaDropdowns, (ctaDropdown) => {
    const isDownloadPageHeroDropdown =
      ctaDropdown.classList.contains('is--download-ddown');
    if (!isDownloadPageHeroDropdown) {
      ctaDropdown.classList.add('is--hidden-list');
      const ctaDropdownToggle = ctaDropdown.querySelector('.w-dropdown-toggle');
      let buildLink = null,
        buildUrl = '#';

      ctaDropdownToggle.addEventListener('click', () => {
        switch (os) {
          case 'iOS':
            buildLink = ctaDropdown.querySelector('.appstore');
            buildUrl = ctaDropdown.querySelector('.appstore').href;
            break;
        }

        buildLink.click();
        if (buildLink.dataset.version === 'onpremise') {
          window.location = buildUrl;
        }
      });
    }
  });
}

const instructionLinks = {
  appstore: '/download/appstore',
  playmarket: '/download/playmarket',
  huawei: '/download/huawei',
  rustore: '/download/rustore',
  macintel: '/download/macos-intel',
  macapple: '/download/macos-silicon',
  windows: '/download/windows-10-exe',
  windows_old: '/download/windows-7-exe',
  windowsmsi: '/download/windows-10-msi',
  windowsmsi_old: '/download/windows-7-msi',
  linuxdeb: '/download/linux-ubuntu',
  linuxtar: '/download/linux-tar',
  linuxrpm: '/download/linux-rpm',
  linuxastra: '/download/linux-astra',
};

/**
 * Начинаем загрузку если находимся
 * на странице загрцзки и ставим куки
 * на 1 минуту на запрет загрузки
 * билда при перезагрузке страницы
 *
 * Очищаем историю кнопки назад если не андроид и не firefox
 */
window.addEventListener('load', () => {
  const downloadPlatform = body.dataset.downloadPlatform;
  /**
   * Начинать загрузку при загрузке страницы?
   * @type {boolean}
   */
  const startDownload = getCookie(`startDownload_${downloadPlatform}`) !== 'no';

  if (startDownload && getPage() === 'download') {
    if (os !== 'Android' && platform.name !== 'Firefox') {
      window.history.pushState({}, '', url.toString());
    }
    setCookie(`startDownload_${downloadPlatform}`, 'no', 0.000694);
    location.href = downloadLinksData[downloadPlatform][3];
  }
});

const downloadLinks = [
  ...downloadLinksNodes,
  ...document.querySelectorAll(
    '.appstore, .playmarket, .huawei, .macintel, .macapple, .windows, .linuxdeb, .linuxtar, [data-platform]'
  ),
];

Array.prototype.forEach.call(downloadLinks, (downloadLink) => {
  const platformClass = Array.from(downloadLink.classList).find(
    (className) => instructionLinks[className]
  );
  const isShowOnpremiseLinks =
    ['on-premise', 'download_on-premise'].indexOf(getPage()) + 1 > 0;
  const platform = platformClass
    ? platformClass
    : downloadLink.dataset.platform;

  if (!downloadLink.dataset.version && platform) {
    downloadLink.dataset.cloud = downloadLinksData[platform][3];
    downloadLink.dataset.onpremise = downloadLinksData[platform][4];

    if (isShowOnpremiseLinks) {
      downloadLink.dataset.version = 'onpremise';
      downloadLink.href = downloadLinksData[platform][4];
    } else {
      downloadLink.dataset.version = 'cloud';
      downloadLink.href = downloadLinksData[platform][3];
    }
  }
  //Цели яндекс на клик по стору
  downloadLink.addEventListener('click', (e) => {
    const isSaasPlatfomsBlock =
      downloadLink.closest('.download_cloud-block') !== null;
    const isOnPremisePlatformsBlock =
      downloadLink.closest('.download_op-block') !== null;
    // Цели для Cloud версии приложения
    if (downloadLink.dataset.version === 'cloud') {
      if (getPage() !== 'download') {
        switch (platform) {
          case 'appstore':
            sendEvent('12');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('707');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('358');
            break;
          case 'huawei':
            sendEvent('13');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('707');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('358');
            break;
          case 'playmarket':
            sendEvent('14');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('707');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('358');
            break;
          case 'rustore':
            sendEvent('24');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('707');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('358');
            break;
          case 'windows':
          case 'windowsmsi':
          case 'windowsmsi_old':
          case 'windows_old':
            sendEvent('15');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('705');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('356');
            break;
          case 'macintel':
          case 'macapple':
            sendEvent('16');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('704');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('355');
            break;
          case 'linuxdeb':
          case 'linuxtar':
          case 'linuxrpm':
          case 'linuxastra':
            sendEvent('17');
            // Цели для блока SaaS
            isSaasPlatfomsBlock && sendEvent('706');
            // Цели для блока платформ On-premise
            isOnPremisePlatformsBlock && sendEvent('357');
            break;
        }
        sendEvent('51');
        _tmr.push({
          type: 'reachGoal',
          id: 3381982,
          goal: 'click',
        });
      }

      if (['blog', 'post'].indexOf(getPage()) + 1) {
        // [Блог] Нажата любая кнопка скачивания в футере
        ym(ymetrikaID, 'reachGoal', '240');
      }

      if (getPage() === 'download') {
        ym(ymetrikaID, 'reachGoal', '76');
      }

      if (
        !mobileBodyClassNames.some((className) =>
          document.body.classList.contains(className)
        ) ||
        mobileClassNames.some((className) =>
          downloadLink.classList.contains(className)
        )
      ) {
        e.preventDefault();
        const instructionLink =
          window.location.origin + instructionLinks[platform];
        if (window.location.href.indexOf(instructionLinks[platform]) + 1) {
          window.location.href = downloadLink.href;
        } else {
          window.location.href = instructionLinks[platform]
            ? instructionLink
            : downloadLink.href;
        }
      }
    } else if (downloadLink.dataset.version === 'onpremise') {
      ym(ymetrikaID, 'reachGoal', '305'); //Переход в стор для onpremise
    }

    if (downloadLink.closest('[data-product]')) {
      ym(ymetrikaID, 'reachGoal', '97');
    }

    if (
      downloadLink.classList.contains(platform) &&
      getPage() !== 'blog' &&
      getPage() !== 'download'
    ) {
      switch (platform) {
        case 'windows':
        case 'windowsmsi':
        case 'windows_old':
        case 'windowsmsi_old':
        case 'macintel':
        case 'macapple':
        case 'linuxdeb':
        case 'linuxtar':
        case 'linuxrpm':
        case 'linuxastra':
          ym(ymetrikaID, 'reachGoal', '52');
          break;
      }
    }
  });

  if (
    !mobileClassNames.some((className) =>
      downloadLink.classList.contains(className)
    ) &&
    !mobileBodyClassNames.some((className) =>
      document.body.classList.contains(className)
    )
  ) {
    downloadLink.setAttribute('download', 'download');
  } else if (
    !mobileClassNames.some((className) =>
      downloadLink.classList.contains(className)
    ) &&
    mobileBodyClassNames.some((className) =>
      document.body.classList.contains(className)
    )
  ) {
    downloadLink.removeAttribute('download');
    downloadLink.setAttribute('build-link', downloadLink.href);
    downloadLink.href = '#';
  }
});

if (
  mobileBodyClassNames.some((className) =>
    document.body.classList.contains(className)
  )
) {
  var closingMessageTimeout = setTimeout(function () {}, 0);
  const clipboard = new ClipboardJS('[build-link]', {
    text: function (trigger) {
      return trigger.getAttribute('build-link');
    },
  });

  clipboard.on('success', function (e) {
    showCopyNote();
    ym(ymetrikaID, 'reachGoal', '25');
    e.clearSelection();
  });

  clipboard.on('error', function () {
    showCopyNote(
      'Не получилось скопировать ссылку. Возможно, ваш&nbsp;браузер устарел.',
      true
    );
  });
}

//Центруем всплывашку платформ на мобилке
const setCenterCTAListArrow = (dropdown) => {
  const hasArrowCTALists = document.querySelectorAll(
    '.cta__dd-list.is--has-arrow, .cta__dd-list.is--mobile-has-arrow'
  );
  Array.prototype.forEach.call(hasArrowCTALists, (CTAList) => {
    CTAList.style.setProperty('--popupLeft', 0);
    CTAList.style.setProperty('--arrowLeft', 0);
    const CTAListRect = CTAList.getBoundingClientRect();
    const CTADropdown = CTAList.closest('.w-dropdown');
    const CTADropdownList = CTADropdown.querySelector('.w-dropdown-list');
    const CTAListInnerWrap = CTAList.querySelector('.cta__dd-list-wrap');
    const CTATextCenterArrow = CTADropdown.querySelector(
      '.cta__dd-center-arrow'
    );
    const CTATextCenterArrowRect = CTATextCenterArrow.getBoundingClientRect();

    if (window.innerWidth < 768) {
      if (CTAListRect.x != 0)
        CTADropdownList.style.setProperty('--popupLeft', `-${CTAListRect.x}px`);
      CTADropdownList.style.setProperty(
        '--arrowLeft',
        `${CTATextCenterArrowRect.x - CTAListInnerWrap.getBoundingClientRect().x + CTATextCenterArrowRect.width / 2}px`
      );
    } else if (window.innerWidth > 1570) {
      CTADropdownList.style.removeProperty('left');
      CTADropdownList.style.setProperty(
        '--arrowLeft',
        `${CTATextCenterArrowRect.x - CTAListRect.x + CTATextCenterArrowRect.width / 2}px`
      );
    } else {
      const CTAListRightOffset =
        body.clientWidth - (CTAListRect.x + CTAListRect.width) - 16;
      CTADropdownList.style.setProperty(
        '--popupLeft',
        `${CTAListRightOffset / getSize()}rem`
      );
      CTADropdownList.style.setProperty(
        '--arrowLeft',
        `${CTATextCenterArrowRect.x - CTAListRect.x + CTATextCenterArrowRect.width / 2}px`
      );
    }
  });
};
/**
 * Центрируем выпадающий список при изменении ширины экрана
 */
let prevWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (prevWidth !== window.innerWidth) {
    prevWidth = window.innerWidth;
    setCenterCTAListArrow();
  }
});

const CTADropdowns = document.querySelectorAll('.w-dropdown');
Array.prototype.forEach.call(CTADropdowns, (dropdown) => {
  const dropdownToggle = dropdown.querySelector('.w-dropdown-toggle');
  const isWindowsList = dropdown
    .querySelector('.w-dropdown-list')
    ?.classList.contains('is--win-list');
  const isOpen = dropdownToggle.classList.contains('w--open');

  dropdownToggle.addEventListener('click', () => {
    /**
     * Отцентровать стрелку если закрыт выпадающий список
     */
    !isOpen && setCenterCTAListArrow(dropdown);

    /**
     * Логика на время отсутствия сборки msi для windows
     */
    if (isWindowsList) {
      const isMobileUser = mobileBodyClassNames.some((className) =>
        document.body.classList.contains(className)
      );
      const buildLink = dropdown.querySelector('.windows');
      dropdown.classList.add('is--hidden-list');

      buildLink.click();
      if (!isMobileUser) {
        if (['on-premise', 'download_on-premise'].indexOf(getPage()) + 1) {
          window.location.href = buildLink.href;
        } else {
          window.location.href =
            window.location.origin + instructionLinks['windows'];
        }
      }
    }
  });
});

/* Закрываем выпадающий список по клику на ссылку */
const dropdownsCloseOnClick = document.querySelectorAll(
  '[data-close="link-click"]'
);
Array.prototype.forEach.call(dropdownsCloseOnClick, (dropdown) => {
  const links = dropdown.querySelectorAll('a');
  Array.prototype.forEach.call(links, (link) => {
    link.addEventListener('click', () => {
      $('.w-dropdown').trigger('w-close');
    });
  });
});

//Маска для инпутов (телефон)
function addInputPhoneMask() {
  const phoneInputs = document.querySelectorAll('input[data-tel-input]');
  const regExp = /\D/g;
  const getInputNumbersValue = (input) => input.value.replace(regExp, '');
  var prevFormatedValue = '';
  var prevCaretPosition = 0;
  var unmasked = false;
  let prevRawNumber = '';
  // положение каретки относительно численных значений
  let prevNumberCaretPosition = 0;

  // количество выделенных символов в ренже
  let selectedNumberCount = 0;
  const onInputHandler = (event) => {
    const input = event.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = '';

    const { selectionEnd, selectionStart } = input;

    if (!inputNumbersValue) {
      input.value = '';
      return;
    }

    if (input.value.length !== selectionStart) {
      if (event.data && regExp.test(event.data)) {
        input.value = inputNumbersValue;
      }
    }
    var inputSelectionStart = selectionStart,
      inputSelectionEnd = selectionEnd;
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9' && ['iOS', 'OS X'].indexOf(os) + 1) {
        inputNumbersValue = `7${inputNumbersValue}`;
      }

      const firstSymbols =
        (inputNumbersValue[0] === '8' || '7') && inputNumbersValue[0] !== '9'
          ? '+7'
          : '+';
      if (inputNumbersValue[0] === '9' && os !== 'iOS') {
        formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
      } else {
        formattedInputValue = `${firstSymbols} `;
        if (inputNumbersValue.length > 1) {
          formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
        }
        if (inputNumbersValue.length >= 12) {
          formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
          unmasked = true;
        } else {
          unmasked = false;
        }
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }

    // получим новое значение каретки
    const newCaretPosition = getNewCaretPosition(
      inputNumbersValue,
      formattedInputValue,
      prevFormatedValue,
      prevCaretPosition,
      unmasked
    );

    // записываем новое значение
    input.value = formattedInputValue;

    // устанавливаем каретку
    input.setSelectionRange(newCaretPosition, newCaretPosition);
  };

  const onKeyDownHanler = (event) => {
    const input = event.target;
    const inputValue = input.value.replace(/\D/g, '');
    const DELETE_KEY_CODE = 8;
    if (event.keyCode === DELETE_KEY_CODE && inputValue.length === 1) {
      input.value = '';
    }
  };

  const onPasteHandler = (event) => {
    const input = event.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = event.clipboardData || window.Clipboard;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (regExp.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  const onFocusSelectionEnd = (event) => {
    const input = event.target;
    if (!input.classList.contains('focus'))
      setTimeout(() => {
        input.selectionStart = input.value.length;
      }, 100);
    input.classList.add('focus');
  };

  const onFocusoutSelectionEnd = (event) => {
    const input = event.target;
    input.classList.remove('focus');
  };

  const onBeforeInput = (event) => {
    // если выделили сколько-то символов, сначала берем все символы в выделении и убираем пробелы
    // так мы поймем сколько цифр изменилось
    // не используем window.getSelection(), потому что в этот момент оно уже схлопнулось
    selectedNumberCount = Math.abs(
      event.target.value
        .slice(event.target.selectionStart, event.target.selectionEnd)
        .replace(/\s/g, '').length
    );

    prevFormatedValue = event.target.value;

    // сохраняем предыдущее значени инпута телефона без символов
    prevRawNumber = event.target.value.replace(/\D/g, '');
    prevCaretPosition = event.target.selectionStart;
    // берем все числа до каретки
    prevNumberCaretPosition = event.target.value
      .slice(0, event.target.selectionStart)
      .replace(/\D/g, '').length;
  };

  const getNewCaretPosition = (
    newRawNumber,
    maskedValue,
    prevFormatedValue,
    currentCaretPosition,
    unmasked
  ) => {
    // массив номера с символами
    const maskedValueArray = maskedValue.split('');
    const prevMaskedValueArray = prevFormatedValue.split('');
    var deletePressed = false;
    var newCaretPosition = 0;

    var deletedSymbolIndex = 0;
    // Индекс удаленного символа
    let j;
    if (maskedValueArray.length < prevMaskedValueArray.length && !unmasked) {
      for (j = 0; j < prevMaskedValueArray.length; j++) {
        if (prevMaskedValueArray[j] !== maskedValueArray[j]) {
          return j;
        }
      }
      deletedSymbolIndex = j;
    }
    // Если удалили символ после каретки устанавливаем альтернативный расчет позиции
    if (
      deletedSymbolIndex === currentCaretPosition &&
      prevMaskedValueArray.length > 0
    ) {
      deletePressed = true;
    }

    // текущее положение каретки
    let caretPosition = 0;

    // получаем желаемое положение каретки, относительно строки номера без форматирования
    if (deletePressed) {
      newCaretPosition =
        prevNumberCaretPosition +
        (newRawNumber.length - prevRawNumber.length + selectedNumberCount) +
        1;
    } else {
      newCaretPosition =
        prevNumberCaretPosition +
        (newRawNumber.length - prevRawNumber.length + selectedNumberCount);
    }

    // актуальный индекс позиции каретки, относительно форматированной строки
    let i;

    // итерируем по строке с символами
    for (i = 0; i <= maskedValueArray.length - 1; i++) {
      // если мы достигли желаемой позиции каретки
      if (caretPosition === newCaretPosition) {
        // вернем индекс символа с учетом форматирования
        return i;
      }

      /**
       * Если это не символ, то увеличиваем значение каретки.
       * Мы точно знаем на каком числе находилась каретка,
       * и после какого числа она должна встать
       */
      if (/\d/.test(maskedValueArray[i])) {
        ++caretPosition;
      }
    }

    // если не нужно двигать каретку
    return i;
  };

  phoneInputs.forEach((input) => {
    input.addEventListener('input', onInputHandler, false);
    input.addEventListener('keydown', onKeyDownHanler);
    input.addEventListener('paste', onPasteHandler, false);
    input.addEventListener('focus', onFocusSelectionEnd, false);
    input.addEventListener('focusout', onFocusoutSelectionEnd, false);
    input.addEventListener('beforeinput', onBeforeInput, false);
  });
}

addInputPhoneMask();

const nameInputs = document.querySelectorAll('input[data-name-input]');
const comandInputs = document.querySelectorAll('input[data-input-comand]');

//Запрет ввода цифр в поле имени
nameInputs.forEach((input) => {
  input.addEventListener('keypress', function (e) {
    //console.log(e.keyCode);
    if (
      e.keyCode !== 8 &&
      e.keyCode != 46 &&
      (input.value.length > 49 ||
        (e.key &&
          e.key.match(
            /[^А-яЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/
          )))
    )
      return e.preventDefault();
  });
  input.addEventListener('input', function (e) {
    if (e.inputType === 'insertFromPaste') {
      // На случай, если умудрились ввести через копипаст или авто-дополнение.
      input.value = input.value
        .replace(
          /[^А-яЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/g,
          ''
        )
        .slice(0, 50);
    }
  });
});

//Запрет ввода букв в поле размера команды
comandInputs.forEach((input) => {
  input.addEventListener('keypress', function (e) {
    if (e.key && e.key.match(/[^0-9]/)) return e.preventDefault();
  });
  input.addEventListener('input', function () {
    // На случай, если умудрились ввести через копипаст или авто-дополнение.
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 12);
  });
});

// Валидация форм
function removeErrorClassOnInput(input) {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') input.classList.remove('input-error');
  });
  input.addEventListener('focus', () => {});
  input.onblur = function () {
    const { value } = input;
    const requiredIcon = input
      .closest('.form-row')
      .querySelector('.input-icon');
    if (!value && requiredIcon) {
      requiredIcon.classList.remove('display-none');
    }
    if (
      os === 'iOS' &&
      parseFloat(platform.version.replace(/\D/g, '')) > 1731
    ) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  input.onfocus = function () {
    const requiredIcon = input
      .closest('.form-row')
      .querySelector('.input-icon');
    if (requiredIcon) {
      requiredIcon.classList.add('display-none');
    }
    input.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };
}

function formValidation(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('.input');

  inputs.forEach((input) => {
    const { value, dataset } = input;
    input.classList.remove('input-error');

    if (input.hasAttribute('data-tel-input')) {
      const regExp = /[^\d]/g;
      if (
        dataset.minLength &&
        value.replace(regExp, '').length < dataset.minLength
      ) {
        input.classList.add('input-error');
        isValid = false;
      }

      if (
        dataset.maxLength &&
        value.replace(regExp, '').length > dataset.maxLength
      ) {
        input.classList.add('input-error');
        isValid = false;
      }

      if (
        value.replace(regExp, '')[0] === 7 &&
        value.replace(regExp, '').length > 11
      ) {
        input.classList.add('input-error');
        isValid = false;
      }
    }

    if (input.hasAttribute('data-name-input')) {
      const namePattern =
        /[^А-яЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/g;

      if (namePattern.test(value.trim()) || value.trim() === '') {
        input.classList.add('input-error');
        isValid = false;
      }
    }

    if (dataset.required === 'true') {
      if (!value) {
        input.classList.add('input-error');
        isValid = false;
      }
    }
  });

  return isValid;
}

function checkValidationFormOnSubmit(form) {
  const inputs = form.querySelectorAll('.input');
  const onSubmitHandler = () => {
    if (formValidation(form)) {
      return true;
    } else {
      form.querySelector('.w-button').value = form
        .querySelector('.w-button')
        .getAttribute('data-btn-default');
      return false;
    }
  };

  inputs.forEach((input) => {
    const isRequiredInput = input.getAttribute('data-required');
    if (isRequiredInput) {
      removeErrorClassOnInput(input);
    }
  });

  $(form).submit(onSubmitHandler);
}

const forms = document.querySelectorAll('form[action="https://getcompass.ru"]');
if (forms) {
  Array.prototype.forEach.call(forms, (form) => {
    checkValidationFormOnSubmit(form);
  });
}

// Калькулятор на странице партнерки
if (getPage() === 'partner') {
  let calcRange = document.querySelector('.partner-calc__slider'),
    calcRangeStartLabel = document.querySelector('.partner-calc__slider-start'),
    calcRangeEndLabel = document.querySelector('.partner-calc__slider-end'),
    calcTarifsRadio = document.querySelectorAll('[name="tarif"]'),
    calcResultField = document.querySelector('.partner-calc__result-field'),
    calcResultWrap = document.querySelector('.partner-calc__result'),
    calcMembersField = document.querySelectorAll('[data-calc-members]'),
    calcBusinessFline = document.querySelector('[data-calc-business-fline]'),
    calcBusinessSline = document.querySelector('[data-calc-business-sline]'),
    calcBusinessTline = document.querySelector('[data-calc-business-tline]'),
    calcOnpremiseFline = document.querySelector('[data-calc-onpremise-fline]'),
    calcBusinessPFMembers = document.querySelector(
      '[data-calc-business-pfmembers]'
    ),
    calcOnpremisePFMembers = document.querySelector(
      '[data-calc-onpremise-pfmembers]'
    );

  Array.prototype.forEach.call(calcTarifsRadio, (radio) => {
    radio.checked = radio.value === 'business';
  });
  const calcResult = () => {
    let tarif = Array.from(document.getElementsByName('tarif')).find(
        (r) => r.checked
      ).value,
      members = calcRange.noUiSlider.get(),
      result = 0,
      membersString = num_word(members, ['человек', 'человека', 'человек']),
      membersFormated = String(parseFloat(members).toFixed()).replace(
        /(\d)(?=(\d\d\d)+([^\d]|$))/g,
        '$1\u00A0'
      );

    switch (tarif) {
      case 'business':
        result = members * 200 + members * 299 * 0.1 * 24;
        break;
      case 'on-premise':
        result = members * 399 * 0.2 * 24;
        break;
    }

    if (result > 999999) {
      calcResultWrap.classList.add('is--small');
    } else {
      calcResultWrap.classList.remove('is--small');
    }
    Array.prototype.forEach.call(calcMembersField, (membersField) => {
      membersField.textContent = `${membersFormated}\u00A0${membersString}`;
    });

    calcBusinessFline.innerHTML = `${membersFormated}&nbsp;${membersString} х 200&nbsp;₽ = <strong>${String((members * 200).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽</strong>`;
    calcBusinessSline.innerHTML = `${membersFormated}&nbsp;${membersString} х 299&nbsp;₽ х&nbsp;10% х&nbsp;24&nbsp;месяца = <strong>${String((members * 299 * 0.1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽</strong>`;
    calcBusinessTline.innerHTML = `${String((members * 200).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽ +&nbsp;${String((members * 299 * 0.1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽ = <strong>${String((members * 200 + members * 299 * 0.1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽</strong>`;
    calcOnpremiseFline.innerHTML = `${membersFormated}&nbsp;${membersString} х 399&nbsp;₽ х&nbsp;20% х&nbsp;24&nbsp;месяца = <strong>${String((members * 399 * 0.2 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽</strong>`;
    calcBusinessPFMembers.innerHTML = `${String((members * 299 * 0.1 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽`;
    calcOnpremisePFMembers.innerHTML = `${String((members * 399 * 0.2 * 24).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0')}&nbsp;₽`;
    calcResultField.textContent = String(result.toFixed()).replace(
      /(\d)(?=(\d\d\d)+([^\d]|$))/g,
      '$1\u00A0'
    );
  };

  const switchCalcInfoTab = () => {
    var tarif = Array.from(document.getElementsByName('tarif')).find(
      (r) => r.checked
    ).value;

    $(`[data-w-tab="${tarif}"]`).trigger('click');
  };

  Array.prototype.forEach.call(calcTarifsRadio, (radio) => {
    radio.addEventListener('change', () => {
      calcResult();
      switchCalcInfoTab();
    });
  });
  calcRangeStartLabel.addEventListener('click', () => {
    calcRange.noUiSlider.set(20);
  });

  calcRangeEndLabel.addEventListener('click', () => {
    calcRange.noUiSlider.set(5000);
  });

  noUiSlider.create(calcRange, {
    start: 100,
    step: 5,
    tooltips: {
      to: function (value) {
        return value.toFixed(0);
      },
    },
    connect: 'lower',
    range: {
      min: [20],
      '27%': [100, 20],
      '66%': [1000, 100],
      max: [5000],
    },
  });

  calcRange.noUiSlider.on('update', () => {
    calcResult();
  });
}

function num_word(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
}

// Типограф Стетей, заголовков и шорттекстов
var tp = new Typograf({
    locale: ['ru', 'en-US'],
  }),
  article = document.querySelector('.article'),
  relatedArticles = document.querySelector('.related-articles');

if (article) {
  article.innerHTML = tp.execute(article.innerHTML);
  relatedArticles.innerHTML = tp.execute(relatedArticles.innerHTML);
}

// Типограф вопросов и ответов
const faqContentBlocks = document.querySelectorAll('.faq__content');
const faqTitles = document.querySelectorAll('.faq__quess-text');

Array.prototype.forEach.call(faqContentBlocks, (contentWrap) => {
  contentWrap.innerHTML = tp.execute(contentWrap.innerHTML);
});
Array.prototype.forEach.call(faqTitles, (contentWrap) => {
  contentWrap.innerHTML = tp.execute(contentWrap.innerHTML);
});

// UTM метки на странице парнтерской программы
const partnerLKLinks = document.querySelectorAll('[href^="https://partner"]');

Array.prototype.forEach.call(partnerLKLinks, (link) => {
  const linkHref = link.getAttribute('href');
  let partnerCodeParam = '';
  partnerCode = getCookie('partnerCode');

  if (partnerCode) {
    partnerCodeParam = `partner_code=${partnerCode}&`;
  }

  link.href = `${linkHref}?${partnerCodeParam}referer=${window.location.href}`;
});

// UTM метки в блоге на страницах статей
if (['post', 'blog'].indexOf(getPage()) + 1) {
  const blogLinks = [
    ...document.querySelectorAll('[href^="/"]'),
    ...document.querySelectorAll('[href="https://vc.ru/getcompass"]'),
  ];

  Array.prototype.forEach.call(blogLinks, (link) => {
    const linkHref = link.getAttribute('href');
    var utm_content = '';
    if (link.closest('.w-nav')) {
      if (linkHref.indexOf('/#') === 0) {
        // [Блог] Меню "Продукт"(хедер)
        utm_content = 'blog-header-product-homepage';
      } else if (linkHref.indexOf('/on-premise') === 0) {
        // [Блог] Меню "Коробочное решение"(хедер)
        utm_content = 'blog-header-on-premise';
      } else if (linkHref.indexOf('/partner') === 0) {
        // [Блог] Меню "Партнерская программа"(хедер)
        utm_content = 'blog-header-partnerpage';
      } else if (linkHref === 'https://vc.ru/getcompass') {
        // [Блог] Блог → Блог на VC(хедер)
        utm_content = 'blog-header-vc';
      } else if (linkHref === '/' && link.classList.contains('cta__btn')) {
        // [Блог] "Попробовать Compass" -> Главная сайта
        utm_content = 'blog-header-try-compass-homepage';
      } else if (
        linkHref === '/' &&
        link.classList.contains('logo__container')
      ) {
        utm_content = 'blog-header-logo-homepage';
      }
    } else if (link.closest('[data-cta-btns]')) {
      if (linkHref === '/') {
        // [Блог] "Попробовать Compass" -> Главная сайта
        utm_content = 'blog-header-try-compass-homepage';
      } else if (linkHref.indexOf('/partner') === 0) {
        // [Блог] Переход блог -> стр ПП
        utm_content = 'blog-button-partnerpage';
      } else if (linkHref.indexOf('/on-premise') === 0) {
        // [Блог] Переход блог -> стр On-prem
        utm_content = 'blog-button-on-premise';
      }
    } else if (link.closest('[data-banner="cta"]')) {
      // [Блог] Банер "Вы читаете журнал Compass"
      utm_content = 'blog-article-banner-homepage';
    } else if (link.closest('[data-banner="cta-partner"]')) {
      // [Блог] Банер с рекламой ПП
      utm_content = 'blog-article-banner-parner';
    } else if (link.closest('[data-banner="cta-home"]')) {
      // [Блог] Банер "повысим эффективность работы"
      utm_content = 'blog-upper-footer';
    } else if (link.closest('footer')) {
      if (linkHref.indexOf('/#') === 0) {
        // [Блог] Раздел "Продукт" (футер)
        utm_content = 'blog-footer-product-homepage';
      } else if (linkHref.indexOf('/on-premise') === 0) {
        // [Блог] Блог → страница On-prem(футер)
        utm_content = 'blog-footer-on-premise';
      } else if (linkHref.indexOf('/partner') === 0) {
        // [Блог] Блог → страница ПП(футер)
        utm_content = 'blog-footer-partnerpage';
      } else if (linkHref === 'https://vc.ru/getcompass') {
        // [Блог] Блог → Блог на VC(футер)
        utm_content = 'blog-footer-vc';
      } else if (linkHref.indexOf('/mediakit') === 0) {
        // [Блог] Блог → Медиакит(футер)
        utm_content = 'blog-footer-mediakit';
      } else if (linkHref === '/') {
        // [Блог] "Попробовать Compass" -> Главная сайта
        utm_content = 'blog-header-try-compass-homepage';
      }
    }

    const utm_medium =
      getPage() === 'post'
        ? window.location.pathname.substring(
            window.location.pathname.lastIndexOf('/') + 1
          )
        : 'blog-homepage';
    if (utm_content) {
      link.href = `${linkHref}?utm_source=blog&utm_medium=${utm_medium}&utm_content=${utm_content}&source_id=blog`;
    }
  });
}

// Убираем оффсет навбара везде кроме стетьи блога
if (getPage() !== 'post') {
  navbar.setAttribute('data-no-scroll', '1');
}

//Типографируем подгруженные статьи`
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
    if ($('.fs-cms_pagination-wrapper').length) {
      $('.fs-cms_pagination-wrapper .w-pagination-next')
        .addClass('is--ajax-load-btn')
        .find('.blog-grid__lm-btn-text')
        .html('Загрузить ещё');
    }
    if ($('.blog-grid__card-title').length) {
      $('.blog-grid__card-title').each(function () {
        $(this).html(tp.execute($(this).html()));
      });
      $('.blog-grid__card-introtext').each(function () {
        $(this).html(tp.execute($(this).html()));
      });
    }

    // The callback passes a listInstances array with all the CMSList instances on the page.
    const [listInstance] = listInstances;

    // The renderitems event runs whenever the list renders items after switching pages.
    listInstance.on('renderitems', (renderedItems) => {
      Array.prototype.forEach.call(renderedItems, (item) => {
        // Фикс загрузки картинок когда CloudFlare убирает у них атрибут src
        const images = item.element.querySelectorAll('img');
        Array.prototype.forEach.call(images, (img) => {
          if (img.getAttribute('data-cfsrc') !== null) {
            img.src = img.getAttribute('data-cfsrc');
            img.style = '';
          }
        });
      });

      if ($('.blog-grid__card-title').length) {
        $('.blog-grid__card-title').each(function () {
          $(this).html(tp.execute($(this).html()));
        });
        $('.blog-grid__card-introtext').each(function () {
          $(this).html(tp.execute($(this).html()));
        });
        document
          .querySelectorAll('.article__preloader-wrapper')
          .forEach((preloader) => {
            setTimeout(function () {
              preloader.style.opacity = '0';
              preloader.addEventListener('transitionend', () =>
                preloader.remove()
              );
            }, 500);
          });
      }
    });
  },
]);

$('.fs-cms_pagination-wrapper .w-pagination-next').on('click', function () {
  setTimeout(function () {
    document
      .querySelectorAll('.article__preloader-wrapper')
      .forEach((preloader) => {
        preloader.style.opacity = '0';
        preloader.addEventListener('transitionend', () => preloader.remove());
      });
  }, 1000);
});

$(
  '.form__success-button, .form__button-close, [data-action="form__button-close"]'
).on('click', function () {
  var successButton = $(this);
  setTimeout(function () {
    successButton.closest('.remodal').find('.w-form-done').hide();
    successButton.closest('.remodal').find('form').show();
  }, 300);
});

// Переключение темной - светлой темы на главной странице
const themeSwitchers = document.querySelectorAll('[data-theme-toggle]');
const themeSlides = document.querySelectorAll('.hero__slide');
const themeSwitcherBg = document.querySelector('.hero-slider__toggle-bg');

if (themeSwitchers) {
  Array.prototype.forEach.call(themeSwitchers, (toggle) => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-theme-toggle');
      toggle.classList.toggle('text-black');
      if (theme === 'dark') {
        const themeSwitcherLight = document.querySelector(
          '[data-theme-toggle="light"]'
        );
        themeSwitcherBg.classList.add('is--dark');
        themeSwitcherLight.classList.add('text-platinum');
        Array.prototype.forEach.call(themeSlides, (slide) => {
          const darkSlide = slide.querySelector('.image-h-full.absolute');
          darkSlide && darkSlide.classList.remove('opacity-0');
        });
      } else {
        themeSwitcherBg.classList.remove('is--dark');
        const themeSwitcherDark = document.querySelector(
          '[data-theme-toggle="dark"]'
        );
        themeSwitcherDark.classList.add('text-platinum');
        Array.prototype.forEach.call(themeSlides, (slide) => {
          const darkSlide = slide.querySelector('.image-h-full.absolute');
          darkSlide && darkSlide.classList.add('opacity-0');
        });
      }
      toggle.classList.remove('text-platinum');
    });
  });
}

var scrollDistance = 0;
var scrollBarWidth = window.innerWidth - document.body.clientWidth;
const bodyScrollControls = {
  disable() {
    //const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
      body.style.top = `-${window.scrollY}px`;
      scrollDistance = window.scrollY;
      body.style.position = 'fixed';
      body.style.left = '0';
      body.style.right = '0';
    }
    document.body.style.marginRight = `${scrollBarWidth}px`;
    document.querySelector('.w-nav').style.right = `${scrollBarWidth}px`;
    document.querySelector('.cookie').style.marhinRight = `${scrollBarWidth}px`;
    if (document.getElementById('carrotquest-messenger-collapsed-container'))
      document
        .getElementById('carrotquest-messenger-collapsed-container')
        .style.setProperty('right', `${scrollBarWidth}px`, 'important');
    document.body.style.paddingRight = null;
    document.body.style.overflowY = 'hidden';
  },
  enable(params) {
    var options = {
      onlyMobile: false,
      callback: () => {},
    };
    Object.assign(options, params);

    body.removeAttribute('style');
    if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
      window.scrollTo(0, scrollDistance);
    }
    document.querySelector('.cookie').style.marhinRight = 0;
    document.querySelector('.w-nav').style.right = 0;
    if (document.getElementById('carrotquest-messenger-collapsed-container'))
      document.getElementById(
        'carrotquest-messenger-collapsed-container'
      ).style.right = '0';
    document.body.style.overflowY = null;
  },
};

$('[data-remodal-id="consultation-on-premise"]').remodal({
  closeOnOutsideClick: false,
});

$('[data-remodal-id="consultation"]').remodal({
  closeOnOutsideClick: false,
});

$('[data-remodal-id="pilot-modal"]').remodal({
  closeOnOutsideClick: false,
});
// Таблица содержимого статьи
const articleTOCWrapper = document.querySelector('.article__toc-wrapper');

$(document).on('opening', '.remodal', function () {
  // Фиксация списка при открытии модального окна
  if (articleTOCWrapper && !isMobile) {
    html.classList.remove('remodal-is-locked');
    const articleTOCWrapperOffsetTop = articleTOCWrapper.offsetTop;
    articleTOCWrapper.classList.add('absolute');
    articleTOCWrapper.style.top = `${articleTOCWrapperOffsetTop}px`;
  }
  bodyScrollControls.disable();
  html.classList.add('remodal-is-locked');
  let currentModal = $('.remodal.remodal-is-opening'),
    modalId = '#' + currentModal.data('remodal-id'),
    iframeInModal = currentModal.find('iframe'),
    ScrollElement = currentModal.find('.popup__scroll-content');
  if (iframeInModal.attr('src') === '') {
    iframeInModal.attr('src', iframeInModal.data('src'));
  }
  if (iframeInModal) {
    document.querySelector('.remodal-wrapper.remodal-is-opening').scrollTop = 0;
  }
  if (
    [
      '#video-mac-intel',
      '#video-mac-apple',
      '#video-linux-deb-standart',
      '#video-linux-deb-terminal',
      '#video-linux-tar',
      '#video-windows',
      '#video-czech',
      '#video-partner',
      '#about-compass',
      '#video-detailing-group',
      '#video-daily',
      '#video-good-people',
    ].includes(modalId)
  ) {
    $('html').addClass(
      'is--black-overlay is--center-modal is--small-p-modal is---video-overlay'
    );
  } else if (['#calculator-info'].includes(modalId)) {
    $('html').addClass('is--white-overlay is--small-p-modal');
  } else {
    $('html').addClass('is--white-overlay is--center-modal');
  }
  analyticsModal(modalId);
  ScrollElement.animate(
    {
      scrollTop: 0,
    },
    0
  );

  if (iframeInModal.length && window.Vimeo !== void 0) {
    let player = new Vimeo.Player(iframeInModal[0]);
    player.play();
  }
});

$(document).on('closing', '.remodal', function () {
  let currentModal = $('.remodal.remodal-is-closing'),
    iframeInModal = currentModal.find('iframe'),
    formInModal = currentModal.find('form'),
    formButton = formInModal.find('.button-submit');

  setTimeout(function () {
    $('[data-action="form__button-close"]').removeClass('is--hidden');
    $('.form__button-close').removeClass('is--hidden');
    $('.remodal.is--success').removeClass('is--success');
    $('.w-form-fail').hide();
    $('.w-form-done').hide();
    if (formInModal.length) {
      formInModal.find('.input-icon').each(function () {
        $(this).removeClass('display-none');
      });
      formButton.val(formButton.data('btn-default'));
      formInModal[0].reset();
      formInModal.show();
      formInModal.find('input').each(function () {
        $(this).removeClass('input-error');
      });
    }
  }, 300);

  if (iframeInModal.length) {
    iframeInModal.attr('src', '');
    iframeInModal.attr('src', iframeInModal.data('src'));
  }
});

$(document).on('closed', '.remodal', function () {
  bodyScrollControls.enable();
  if (getPage() === 'partner') {
    var tarif = Array.from(document.getElementsByName('tarif')).find(
      (r) => r.checked
    ).value;
    $(`[data-w-tab="${tarif}"]`).trigger('click');
  }
  $('html').removeClass(
    'is--black-overlay is--white-overlay remodal-is-locked is--center-modal is---video-overlay is--small-p-modal'
  );
  // Отключение фиксации списка при открытии модального окна
  if (articleTOCWrapper && !isMobile) {
    articleTOCWrapper.classList.remove('absolute');
    articleTOCWrapper.style.top = null;
  }
});

//Фикс кнопки назалд и закрытия модального окна
function closeRemodal() {
  if ($('.remodal.remodal-is-opened').length) {
    $('.remodal.remodal-is-opened')
      .find('[data-remodal-action="close"]')
      .trigger('click');
  }
}

// Фикс скролла в форме на мобильных
if (os === 'Android') {
  body.classList.add('android-form-modal');
} else if (os === 'iOS') {
  body.classList.add('ios-form-modal');
}

window.addEventListener('popstate', () => {
  closeRemodal();
});

document.onkeydown = function (evt) {
  if (evt.keyCode === 27) {
    closeRemodal();
  }
  // Переключения между полями ввода в модальном окне если оно открыто
  handleKey(evt);
};

function handleKey(e) {
  if (e.keyCode === 9 && document.querySelector('.remodal.remodal-is-opened')) {
    let focusable = document
      .querySelector('.remodal.remodal-is-opened')
      .querySelectorAll('input,button,select,textarea');
    if (focusable.length) {
      let first = focusable[0];
      let last = focusable[focusable.length - 1];
      let shift = e.shiftKey;
      if (shift) {
        if (e.target === first) {
          // shift-tab pressed on first input in dialog
          last.focus();
          e.preventDefault();
        }
      } else {
        if (e.target === last) {
          // tab pressed on last input in dialog
          first.focus();
          e.preventDefault();
        }
      }
    }
  }
}

$('input').on('focusout focus', function () {
  setTimeout(function () {
    if (html.classList.contains('remodal-is-locked')) {
      html.classList.remove('remodal-is-locked');
      html.classList.add('remodal-is-locked');
    }
  }, 300);
});

//Доскрол до вопроса при клике на мобилке
$('.faq__trigger').on('click', function () {
  var toggle = $(this),
    wrapper = toggle.parent('.faq__item');
  if (wrapper.hasClass('is--open')) {
    closeDropdown(wrapper);
  } else {
    openDropdown(wrapper);
  }
  closeDropdown($('.faq__item.is--open').not(wrapper));

  if ($(window).width() < 768 && !$(this).hasClass('is--open')) {
    var headerHeight = $('.w-nav').height() + 12,
      faqTrigger = $(this);

    setTimeout(function () {
      $('html, body').animate({
        scrollTop: faqTrigger.offset().top - headerHeight,
      });
    }, 500);
  }
});

$('.faq__item').each(function () {
  closeDropdown($(this));
});

$('.faq__wrapper .faq__show-button').on('click', function () {
  $(this).parent('.faq__wrapper').addClass('is--open');
});

$('.faq__close-button').on('click', function () {
  $(this).parent('.faq__wrapper').removeClass('is--open');
});

$('.faq__wrapper').removeClass('is--open');

function openDropdown(dropdown) {
  var dropdownContent = dropdown.find('.faq__resp-wrapper'),
    dropdownInnerContent = dropdown.find('.faq__resp');

  dropdownContent.css({
    height: dropdownContent.find('div').innerHeight(),
  });
  dropdownInnerContent.css({
    opacity: 1,
  });
  dropdown.addClass('is--open');
}

function closeDropdown(dropdown) {
  var dropdownContent = dropdown.find('.faq__resp-wrapper'),
    dropdownInnerContent = dropdown.find('.faq__resp');

  dropdownContent.css({
    height: 0,
  });
  dropdownInnerContent.css({
    opacity: 0,
  });
  dropdown.removeClass('is--open');
}

//Copy fields
const copyFields = document.querySelectorAll('[clipboard-field]');

Array.prototype.forEach.call(copyFields, (copyField) => {
  const copyBtn = copyField.querySelector('[clipboard-btn]');
  const copyBtnTooltip = copyField.querySelector('[clipboard-tooltip]');
  const copyText = copyField.querySelector('[clipboard-text]').textContent;
  const copyClipboard = new ClipboardJS(copyBtn, {
    text: function () {
      return copyText;
    },
  });
  copyClipboard.on('success', function (e) {
    copyBtnTooltip.textContent = 'Скопировано';
    copyBtn.classList.add('is--done');
    setTimeout(() => {
      copyBtn.classList.remove('is--done');
    }, 2000);
    e.clearSelection();
  });
  copyClipboard.on('error', function (e) {
    copyBtnTooltip.textContent = 'Ошибка!';
    copyBtn.classList.add('is--fail');
    setTimeout(() => {
      copyBtn.classList.remove('is--fail');
    }, 2000);
    e.clearSelection();
  });
});

$('.article__social-share-link--copy').css('display', 'inline-block');
var copyPostLinkTimeout = setTimeout(function () {}, 0);
var copyPostLink = new ClipboardJS('.article__social-share-link--copy', {
  text: function () {
    return window.location.href;
  },
});

copyPostLink.on('success', function (e) {
  clearTimeout(copyPostLinkTimeout);
  const copyElement = e.trigger;

  copyElement.classList.add('is--copy-done');
  copyPostLinkTimeout = setTimeout(function () {
    copyElement.classList.remove('is--copy-done');
  }, 2000);
  e.clearSelection();
});

copyPostLink.on('error', function (e) {
  clearTimeout(copyPostLinkTimeout);
  var copyElement = $(e.trigger);

  copyElement.addClass('is--copy-fail');
  copyPostLinkTimeout = setTimeout(function () {
    copyElement.removeClass('is--copy-fail');
  }, 2000);
});

function showCopyNote(text, error) {
  clearTimeout(closingMessageTimeout);
  if (text !== '') {
    $('.event__message').html(text);
  }
  if (error) {
    $('.event__message').addClass('is--error');
  } else {
    $('.event__message').removeClass('is--error');
    $('.event__message').html(
      'Ссылка на скачивание Compass для&nbsp;компьютера скопирована'
    );
  }
  $('.event__message').addClass('is--display-block');
  setTimeout(function () {
    $('.event__message').addClass('is--visible');
  }, 300);
  closingMessageTimeout = setTimeout(function () {
    $('.event__message').removeClass('is--visible');
    setTimeout(function () {
      $('.event__message').removeClass('is--display-block');
    }, 300);
  }, 3000);
}

$('.event__message').on('touchmove', function () {
  clearTimeout(closingMessageTimeout);
  $('.event__message').removeClass('is--visible');
  setTimeout(function () {
    $('.event__message').removeClass('is--display-block');
  }, 300);
});

$('.w-dropdown-toggle').on('click', function (e) {
  if (e.which === 2) {
    e.preventDefault();
  }
});

if ($('.blog-hero__filter').length) {
  $('.blog-hero__filter-collection .blog-hero__filter-button').each(
    function () {
      $('.blog-hero__filter-track').append($(this));
    }
  );

  $('.blog-hero__filter-collection').closest('.w-dyn-list').addClass('hidden');

  var currentLink = document.querySelector(
    '.blog-hero__filter-button.w--current'
  );

  if (currentLink) {
    currentLink.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });

    setTimeout(() => {
      $('.blog-hero__filter-track').css({
        opacity: 1,
      });
    }, 300);
  }
}

// Фикс плавного подскролла к секции при загрузке
if (window.location.hash) {
  const targetEl = document.querySelector(window.location.hash.split('?')[0]);

  if (targetEl) {
    window.scrollTo({
      top: targetEl.offsetTop,
      behavior: 'smooth',
    });
  }
  removeAnchorFormURL(); //Удаляем hash из адреса
}

//Фикс удаления хэша после перехода к разделу
history.scrollRestoration = 'manual';
removeAnchorFormURL();

function removeAnchorFormURL() {
  setTimeout(() => {
    window.history.replaceState({}, '', window.location.href.split('#')[0]);
  }, 100);
}

$('a[href^="#"]').on('click', function () {
  removeAnchorFormURL();
});

//Открытие содержимого на мобильном
$('.article__toc-button').on('click', function () {
  var tocList = $('.article__toc-button').siblings('.article__toc-links');
  if (!$(this).hasClass('is--open')) {
    tocList.css({
      height: tocList.find('div').outerHeight(),
      opacity: 1,
    });
  } else {
    tocList.css({
      height: 0,
      opacity: 0,
    });
  }
  $(this).toggleClass('is--open');
});

// Подсчет времени чтения
function readingTime(articleContent) {
  let text = articleContent.text(),
    wpm = 225,
    words = text.trim().split(/\s+/).length,
    time = Math.ceil(words / wpm),
    result = `Время прочтения: ${time} мин.`;

  $('.article__header-meta-time').text(result);
}

var validContent;

if ($('.article__content').length) {
  readingTime($('.article__content'));
  $('.article__content.w-richtext').each(function () {
    var content = $(this).html();
    if (
      (content.match(/{{mobile/g) || []).length ===
        (content.match(/{{\/mobile/g) || []).length &&
      (content.match(/{{pc/g) || []).length ===
        (content.match(/{{\/pc/g) || []).length
    ) {
      validContent = 1;
    } else {
      validContent = 0;
    }
    if (validContent)
      $(this).html(
        content
          .replace(/<li>{{isTrue}}/g, '<li class="is--true">')
          .replace(
            /<p>{{mobile}}<\/p>/g,
            '<div class="article__mobile-content">'
          )
          .replace(/<p>{{pc}}<\/p>/g, '<div class="article__desctop-content">')
          .replace(/<p>{{\/pc}}<\/p>/g, '</div>')
          .replace(/<p>{{\/mobile}}<\/p>/g, '</div>')
          .replace(/<p>{{cta_banner}}<\/p>/g, '')
          .replace(
            /<p>{{cta_op_banner}}<\/p>/g,
            '<div class="cta-op-banner-place my-48 sm--my-32"></div>'
          )
          .replace(
            /<p>{{cta_book}}<\/p>/g,
            '<div class="cta-book-place"></div>'
          )
      );
    $(this)
      .find('a')
      .each(function () {
        if ($(this).text().indexOf('{{') + 1) {
          $(this).addClass(
            'cta__btn font-inter px-16 py-10 text-s-15 leading-121 min-w-none rounded-10 sm--rounded-12 sm--text-s-16 sm--leading-140 sm--max-w-none sm--sw-full sm--py-12 hover--text-white w-inline-block'
          );
          $(this).parent().addClass('article__cta-button-wrap');
          $(this).html(
            `<div>${$(this).text().replace(/[{}]+/g, '')}</div><div class="icon-16 ml-3 sm--ml-5 w-embed"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69682 13.2649L7.61017 12.1903L11.3833 8.41726H1.90527V6.84766H11.3833L7.61017 3.08061L8.69682 2L14.3293 7.63246L8.69682 13.2649Z" fill="currentColor"></path></svg></div>`
          );
        }
      });
  });

  const ctaBanner = document.querySelector('[data-banner="cta"]');
  if (ctaBanner) {
    const firstPar = document
      .querySelector('.article__content-section')
      .querySelector('p');
    const introText = document.querySelector('.article__introtext');
    const parParent = firstPar.parentNode;
    const ctaBanner = document.querySelector('[data-banner="cta"]');
    if (introText.classList.contains('w-condition-invisible')) {
      parParent.insertBefore(ctaBanner, firstPar.nextSibling);
      ctaBanner.classList.remove('sm--mb-64', 'sw-70pr');
      ctaBanner.classList.add('sm--mb-48');
    } else {
      introText.parentNode.insertBefore(ctaBanner, introText.nextSibling);
      ctaBanner.classList.remove('mt-24');
    }
    ctaBanner.classList.remove('hidden');
  }
  if ($('.cta-op-banner-place').length) {
    $('.cta-op-banner-place').append($('[data-banner="cta-onpremise"]'));
    $('[data-banner="cta-onpremise"]').removeClass('hidden');
  }
  if ($('.cta-book-place').length) {
    $('.cta-book-place').append($('.article-book-cta--in-content'));
  }
}

//Подсчет количества рекомендуемых статей
if ($('.blog-grid__wrapper--related-news').length) {
  let relatedItemsCount = $(
    '.blog-grid__wrapper--related-news .blog-grid__card'
  ).length;
  if (
    relatedItemsCount > 0 &&
    $('.blog-grid__wrapper--related-news').data('items-count') !=
      relatedItemsCount
  ) {
    $('.blog-grid__wrapper--related-news').attr(
      'data-items-count',
      relatedItemsCount
    );
  } else if (relatedItemsCount === 0) {
    $('.related-articles').hide();
  }
}

//Кнопки поделиться
var vkLink = document.querySelectorAll('.article__social-share-link--vk'),
  tgLink = document.querySelectorAll('.article__social-share-link--tg');

if (vkLink.length) {
  vkLink.forEach((element) => {
    element.addEventListener('click', () => {
      window.open('https://vk.com/share.php?url=' + window.location.href);
    });
  });
}

if (tgLink.length) {
  tgLink.forEach((element) => {
    element.addEventListener('click', () => {
      window.open(
        'https://t.me/share/url?url=' +
          encodeURIComponent(window.location.href) +
          '&text=' +
          encodeURIComponent(document.title)
      );
    });
  });
}

// Отправка формы в апи
$('form').on('submit', function (e) {
  e.preventDefault();
  var form = $(this),
    formData = new FormData($(this)[0]),
    currentHost = `${window.location.protocol}//${window.location.host}/`,
    url = currentHost + 'www/getcompass/requestConsultation',
    button = form.find('[type="submit"]'),
    currentModal = $('.remodal.remodal-is-opened'),
    modalId = '#' + currentModal.data('remodal-id');

  if (formValidation(form[0])) {
    if (formData.get('team_size') === '') formData.set('team_size', 0);
    formData.set('source_id', sourceID);
    formData.set('pagetitle', document.title);
    formData.set('page_url', window.location.href);
    formData.set('utm_tag', utmTag);
    if (modalId === '#pilot-modal') {
      formData.set('form_type', 'request_pilot_project');
    } else {
      formData.set('form_type', 'request_consultation');
    }
    button.val(button.data('wait'));
    button.addClass('pointer-events-none');
    try {
      grecaptcha.enterprise
        .execute(window.googleCaptchaKey)
        .then(function (token) {
          formData.set('grecaptcha_response', token);
          sendRequest(url, form, formData);
          return false;
        });
    } catch (error) {
      sendRequest(url, form, formData);
      return false;
    }
  } else {
    return false;
  }
});

function sendRequest(url, form, formData) {
  var successMessage = form.siblings('.w-form-done'),
    errorMessage = form.siblings('.w-form-fail'),
    button = form.find('[type="submit"]'),
    currentModal = $('.remodal.remodal-is-opened'),
    modalId = '#' + currentModal.data('remodal-id');
  button.addClass('pointer-events-none');
  $.ajax({
    url: url,
    type: 'POST',
    dataType: 'text',
    data: formData,
    contentType: false,
    processData: false,
    statusCode: {
      423: function () {
        showErrorMessage(
          form,
          'Произошла ошибка при отправке формы. Попробуйте позже или свяжитесь с&nbsp;нами другим способом.'
        );
      },
    },
    success: function (result) {
      const isSuccessful = JSON.parse(result).status === 'ok';
      button.removeClass('pointer-events-none');
      if (isSuccessful) {
        if (getPage() === 'blog') {
          // [Блог] Отправлена заявка с гл блога
          ym(ymetrikaID, 'reachGoal', '220');
        } else if (
          getPage() === 'post' &&
          modalId === '#consultation-on-premise'
        ) {
          // [Блог] Отправлена заявка из баннера On-premise
          ym(ymetrikaID, 'reachGoal', '223');
        } else {
          ym(ymetrikaID, 'reachGoal', '101');
        }
        button.val(button.data('btn-default'));
        successMessage.show();
        errorMessage.hide();
        form.hide();
        if (getPage() === 'on-premise') {
          if (modalId === '#consultation') {
            ym(ymetrikaID, 'reachGoal', '302');
          } else if (modalId === '#pilot-modal') {
            ym(ymetrikaID, 'reachGoal', '309');
          }
        } else if (getPage() !== 'post' && getPage() !== 'blog') {
          if (
            modalId === '#consultation' ||
            modalId === '#consultation-on-premise'
          ) {
            if (modalId === '#consultation-on-premise') {
              ym(ymetrikaID, 'reachGoal', '302');
            }
            ym(ymetrikaID, 'reachGoal', '10');
            _tmr.push({
              type: 'reachGoal',
              id: 3381982,
              goal: 'Demo',
            });
          } else if (modalId === '#pilot-modal') {
            ym(ymetrikaID, 'reachGoal', '307');
          }
        }
        form
          .closest('.remodal')
          .addClass('is--success')
          .removeClass('is--no-radius');
        if (html.classList.contains('remodal-is-locked')) {
          html.classList.remove('is--white-overlay', 'is--disable-bg-close');
        }
      }
      return false;
    },
    error: function (xhr, resp, text) {
      button.removeClass('pointer-events-none');
      showErrorMessage(
        form,
        'Произошла ошибка при отправке формы. Попробуйте позже или свяжитесь с&nbsp;нами другим способом.'
      );
      console.log(xhr, resp, text);
      return false;
    },
  });
  return false;
}

function showErrorMessage(form, msg) {
  var button = form.find('[type="submit"]'),
    errorMessage = form.siblings('.w-form-fail');

  errorMessage.find('div').html(msg);
  button.val(button.data('btn-default'));
  errorMessage.show();
  setTimeout(function () {
    errorMessage.hide();
  }, 3000);
  form.show();
}

//Получить скролл страницы в процентах
function getScrollPercentage() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  let documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );

  return (scrollTop / (documentHeight - windowHeight)) * 100;
}

// Устанавливаем ширину видео в зависимости от высоты экрана
const setVideoModalWidth = () => {
  const videoModals = document.querySelectorAll(
    '.popup-content.remodal.is--video-modal'
  );
  const videoModalPadding = window.innerWidth > 767 ? 6 : 7;
  const sizeFactor = getSize();

  Array.prototype.forEach.call(videoModals, (videoModal) => {
    const modalHeight = window.innerHeight - sizeFactor * videoModalPadding;
    const modalWidth = videoModal.offsetWidth ? videoModal.offsetWidth : 1;
    if (modalWidth / modalHeight > 1.7 && modalWidth / modalHeight < 1.7) {
      videoModal.style.width = `${modalWidth}px`;
    } else if (
      modalHeight < sizeFactor * 20.1 &&
      window.innerWidth < 768 &&
      window.innerWidth > 468
    ) {
      videoModal.style.width = `100%`;
    } else if (modalHeight < sizeFactor * 17.33333 && window.innerWidth < 469) {
      videoModal.style.width = `100%`;
    } else if (modalHeight < sizeFactor * 22.5 && window.innerWidth > 767) {
      videoModal.style.width = `${(sizeFactor * 22.5 * 1.7777778).toFixed(0)}px`;
    } else {
      videoModal.style.width = `${(modalHeight * 1.7777778).toFixed(0)}px`;
    }
  });
};

setVideoModalWidth();

window.addEventListener('resize', () => {
  remSize = getComputedStyle(document.documentElement).getPropertyValue(
    '--remSize'
  );
  setCenterCTAListArrow();
  setVideoModalWidth();

  if (window.innerWidth > 767) {
    // Удаляем аттрибут style у меню когда открыта десктопная версия
    const navMenu = document.querySelector('.w-nav-menu');
    body.classList.remove('is--mobile-sm');
    body.classList.add('is--desktop');
    isMobile = false;
    setTimeout(() => {
      navMenu.removeAttribute('style');
    }, 500);

    // Закрываем выпадающий список таблицы содержимого в статье блога
    $('.article__toc-button')
      .siblings('.article__toc-links')
      .removeAttr('style')
      .removeClass('is--open');
  } else {
    isMobile = true;
    body.classList.add('is--mobile-sm');
    body.classList.remove('is--desktop');
  }
});

// Показываем или скрываем окно куки по скроллу и по клику на него
const cookieBlock = document.querySelector('[data-cookie-base]');
const cookieLink = document.querySelector('[data-cookie-link]');

function getMinimalCookieScrollOffset() {
  const MOBILE_MAX_WIDTH = 768;
  const MOBILE_MIN_HEIGHT = 700;
  const DESKTOP_MIN_HEIGHT = 900;
  const MOBILE_MINIMAL_HEIGHT = 770;
  const DESKTOP_MINIMAL_HEIGHT = 990;
  const HEIGHT_MULTIPLIER = 1.2;

  const { innerWidth, innerHeight } = window;

  let minimalHeight;

  if (innerWidth < MOBILE_MAX_WIDTH) {
    minimalHeight =
      innerHeight < MOBILE_MIN_HEIGHT
        ? MOBILE_MINIMAL_HEIGHT
        : innerHeight * HEIGHT_MULTIPLIER;
  } else {
    minimalHeight =
      innerHeight < DESKTOP_MIN_HEIGHT
        ? DESKTOP_MINIMAL_HEIGHT
        : innerHeight * HEIGHT_MULTIPLIER;
  }

  return minimalHeight;
}

let cookieScrollOffset = window.scrollY;
let isCookieHidden = false;

function cookieToggleScrollHandler() {
  const offset = getMinimalCookieScrollOffset();
  const scrollY = window.scrollY;

  // Проверяем, нужно ли скрыть плашку
  const shouldHide =
    scrollY > cookieScrollOffset + offset ||
    (scrollY < Math.abs(cookieScrollOffset - offset) && scrollY > offset);

  // Если плашка уже скрыта, не меняем состояние
  if (!isCookieHidden) {
    isCookieHidden = shouldHide;
  }

  // Обновляем состояние элементов на странице
  cookieBlock.classList.toggle('is--close', isCookieHidden);
  cookieLink.classList.toggle('is--close', isCookieHidden);

  // Обновляем значение смещения, только если плашка не скрыта
  if (!isCookieHidden) {
    cookieScrollOffset = shouldHide ? 0 : cookieScrollOffset;
  }
}

function cookieToggleClickHandler(e) {
  e.preventDefault();
  //window.removeEventListener('scroll', cookieToggleScrollHandler);
  cookieScrollOffset = window.scrollY;
  isCookieHidden = false;
  cookieBlock.classList.remove('is--close');
  cookieLink.classList.remove('is--close');
}

if (cookieBlock && cookieLink) {
  window.addEventListener('scroll', cookieToggleScrollHandler);
  cookieLink.addEventListener('click', cookieToggleClickHandler);
}

//Логика оранжевого промо-баннера
const promoBanner = document.querySelector('.promo-banner');

if (promoBanner) {
  window.addEventListener('scroll', () => {
    if (
      window.scrollY < 5 &&
      !document.documentElement.classList.contains('remodal-is-locked')
    ) {
      promoBanner.classList.remove('-translate-y-full', 'opacity-0');
      promoBanner.classList.add('shadow-xs');
      promoBanner.parentNode.classList.remove('pointer-events-none');
    } else {
      promoBanner.parentNode.classList.add('pointer-events-none');
      promoBanner.classList.add('-translate-y-full', 'opacity-0');
      promoBanner.classList.remove('shadow-xs');
    }
  });
  if (window.location.hash) {
    if (document.querySelector(window.location.hash.split('?')[0])) {
      promoBanner.parentNode.classList.add('pointer-events-none');
      promoBanner.classList.add('-translate-y-full', 'opacity-0');
      promoBanner.classList.remove('shadow-xs');
    }
  }
}

//Показываем кнопку "Попробовать бесплатно"
window.addEventListener('scroll', () => {
  if (
    (['partner', 'on-premise'].indexOf(getPage()) + 1 &&
      window.scrollY > getSize() * 47.13) ||
    (getPage() === 'home' && window.scrollY > getSize() * 51.66) ||
    (getPage() === 'download' && window.scrollY > getSize() * 25)
  ) {
    if ($(window).width() < 768) {
      if (getPage() === 'partner') {
        setTimeout(() => {
          $('.menu-wrapper--is--mobile .cta__btn').removeClass('is--hidden');
        }, 200);
      } else {
        $('.menu-wrapper--is--mobile .cta__dropdown').removeClass('is--hidden');
        $('.menu-wrapper--is--mobile .cta__btn').removeClass('is--hidden');
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (getPage() === 'delete-page') {
    const navCTABtn = document.querySelector(
      '.menu-wrapper--is--mobile .cta__btn'
    );
    const navCTADd = document.querySelector(
      '.menu-wrapper--is--mobile .cta__dropdown'
    );

    if (navCTABtn && navCTADd) {
      navCTABtn.classList.remove('is--hidden');
      navCTADd.classList.remove('is--hidden');
    }
  }
});

// Класс группы выпадающих списков в меню на мобильной версии
class MenuDropdownsGroup {
  constructor(options) {
    const defaultOptions = {
      selector: '[data-menu-dd-wrap]',
      singleOpen: true,
      scrollIntoViewOpened: true,
    };

    this.options = Object.assign(defaultOptions, options);
    this.dropdowns = [];

    this.init();
  }

  closeAll() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.close();
    });
  }

  checkOpened(dropdown) {
    if (this.options.singleOpen) {
      var currentDropdownObj = null;
      this.dropdowns.forEach((otherDropdown) => {
        if (otherDropdown.dropdown !== dropdown) {
          otherDropdown.close();
        } else {
          currentDropdownObj = otherDropdown;
        }
      });
    }
    if (window.innerWidth < 768 && this.options.scrollIntoViewOpened) {
      const groupWrapper = document.querySelector('.w-nav-menu');
      groupWrapper.scrollTo({
        top: currentDropdownObj.topOffset - getSize() * 1,
        behavior: 'smooth',
      });
    }
  }

  updateDropdownsOffsets() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.topOffset = dropdown.dropdown.offsetTop;
    });
  }

  init() {
    const dropdownsDOMList = document.querySelectorAll(this.options.selector);
    Array.prototype.forEach.call(dropdownsDOMList, (dropdown) => {
      this.dropdowns.push(
        new MenuDropdown({
          dropdown: dropdown,
          opened: () => {
            this.checkOpened(dropdown);
          },
        })
      );
    });
  }
}

// Класс выпадающих списков в меню на мобильной версии
class MenuDropdown {
  constructor(options) {
    this.dropdown = options.dropdown;
    this.toggle = this.dropdown.querySelector('[data-menu-dd-toggle]');
    this.content = this.dropdown.querySelector('[data-menu-dd-content]');
    this.innerWrap = this.dropdown.querySelector('[data-menu-dd-inner]');
    this.isOpened = false;
    this.topOffset = this.dropdown.offsetTop;
    this.closed = options.closed ? options.closed : () => {};
    this.opened = options.opened ? options.opened : () => {};

    this.attachEventsHandlers();
  }

  attachEventsHandlers() {
    this.dropdown.addEventListener('mouseleave', () => {
      if (body.classList.contains('is--no-touch') || window.innerWidth > 767) {
        this.closePlatformsDropdown();
      }
    });

    this.toggle.addEventListener('mouseenter', () => {
      this.dropdown.classList.remove('is--closed-menu-dd');
    });

    this.toggle.addEventListener('click', (e) => {
      e.preventDefault();
      this.dropdown.classList.remove('is--closed-menu-dd');
      if (body.classList.contains('is--touch') || window.innerWidth < 768) {
        if (this.isOpened) {
          this.close();
        } else {
          this.open();
        }
      }
    });

    window.addEventListener('mousedown', (e) => {
      if (!this.isOpened) {
        return;
      }
      if (
        !$(e.target).closest(this.dropdown).length &&
        window.innerWidth > 767
      ) {
        this.close();
      }
    });

    window.addEventListener('resize', () => {
      this.close();
      setTimeout(() => {
        this.topOffset = this.dropdown.offsetTop;
      }, 500);
    });

    const dropdownLinks = this.dropdown.querySelectorAll('a');
    Array.prototype.forEach.call(dropdownLinks, (link) => {
      link.addEventListener('click', () => {
        this.dropdown.classList.add('is--closed-menu-dd');
        if (
          body.classList.contains('is--no-touch') ||
          window.innerWidth > 767
        ) {
          this.close();
        }
      });
    });
  }

  open() {
    this.dropdown.classList.add('is--open');
    this.content.style.height = `${this.innerWrap.scrollHeight / getSize()}rem`;
    setTimeout(() => {
      this.content.classList.remove('sm--overflow-hidden');
    }, 700);
    this.isOpened = true;
    this.opened();
  }

  close() {
    this.dropdown.classList.remove('is--open');
    this.content.classList.add('sm--overflow-hidden');
    this.content.removeAttribute('style');
    this.closePlatformsDropdown();
    this.isOpened = false;
    this.closed();
  }

  closePlatformsDropdown() {
    /* To-Do переписать дродауны платформ на свой отдельный класс */
    $('.w-dropdown').trigger('w-close');
    $('.cta__dd-list-other-wrap').removeClass('is--open');
  }
}

// Инициализируем выпадающее меню
const menuDropdownsGroup = new MenuDropdownsGroup();

// Блокируем скролл страницы при открытии меню и закрываем все выпадающие списки при закрытии
const navMenuBtn = document.querySelector('.w-nav-button');
if (navMenuBtn) {
  const navMenuObserver = new MutationObserver((mutations) => {
    mutations.forEach((mu) => {
      if (mu.type === 'attributes' && mu.attributeName === 'class') {
        if (
          navMenuBtn.classList.contains('w--open') ||
          document.documentElement.classList.contains('remodal-is-locked')
        ) {
          bodyScrollControls.disable();
          document.querySelector('.w-nav').classList.add('is--open');
          menuDropdownsGroup.updateDropdownsOffsets();
        } else {
          bodyScrollControls.enable();
          document.querySelector('.w-nav').classList.remove('is--open');
          menuDropdownsGroup.closeAll();
        }
      }
    });
  });

  navMenuObserver.observe(navMenuBtn, {
    attributes: true,
  });
}

// Скролл в начало сайта при клике по ссылке #hero
const goTopBtns = document.querySelectorAll('[href="#hero"]');

Array.prototype.forEach.call(goTopBtns, (goTopBtn) => {
  goTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

// CTA Кнопки в мобильной версии блога
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const ctaBlogBtns = document.querySelectorAll('[data-cta-btns] a');
if (ctaBlogBtns.length) {
  ctaBlogBtns[getRandomInt(4)].classList.remove('sm--hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  // Подключаем скрипт google recaptcha
  window.doStart
    .then(function (result) {
      window.googleCaptchaKey = result.response.captcha_public_key;
      let script = document.createElement('script');
      script.src =
        'https://www.google.com/recaptcha/enterprise.js?render=' +
        result.response.captcha_public_key;
      document.body.append(script);
    })
    .catch(function (result) {
      console.log(result);
    });

  setCenterCTAListArrow();
  setTimeout(function () {
    //Пользователь на сайте больше минуты
    if (getPage() === 'home') ym(ymetrikaID, 'reachGoal', '4');
    else if (['blog', 'post'].indexOf(getPage()) + 1)
      ym(ymetrikaID, 'reachGoal', '209');
    else if (getPage() === 'on-premise') ym(ymetrikaID, 'reachGoal', '314');
  }, 60000);
  // Переменные прокрутки
  var scrollEventStart = false,
    scrollEvent50 = false,
    scrollEvent75 = false,
    scrollEvent100 = false;
  window.onscroll = function () {
    if (
      ['blog', 'post', 'home', 'download', 'partner', 'on-premise'].indexOf(
        getPage()
      ) + 1
    ) {
      if (!scrollEventStart && getScrollPercentage() > 0) {
        if ($('.popup__video-iframe').find('iframe').length) {
          $('.popup__video-iframe')
            .find('iframe')
            .each(function () {
              $(this).attr('src', $(this).data('src'));
            });
        }
      }
      if (!scrollEventStart && getScrollPercentage() > 0) {
        scrollEventStart = true;
      }
      if (!scrollEvent50 && getScrollPercentage() > 50) {
        if (getPage() === 'home') ym(ymetrikaID, 'reachGoal', '1');
        else if (getPage() === 'blog') ym(ymetrikaID, 'reachGoal', '250');
        else if (getPage() === 'post') ym(ymetrikaID, 'reachGoal', '253');
        else if (getPage() === 'on-premise') ym(ymetrikaID, 'reachGoal', '311');
        scrollEvent50 = true;
      }
      if (!scrollEvent75 && getScrollPercentage() > 75) {
        //console.log('Страница прокручена на 75%');
        if (getPage() === 'home') ym(ymetrikaID, 'reachGoal', '2');
        else if (getPage() === 'blog') ym(ymetrikaID, 'reachGoal', '251');
        else if (getPage() === 'post') ym(ymetrikaID, 'reachGoal', '254');
        else if (getPage() === 'on-premise') ym(ymetrikaID, 'reachGoal', '312');
        scrollEvent75 = true;
      }
      if (!scrollEvent100 && getScrollPercentage() > 95) {
        //Страница прокручена на 100%
        if (getPage() === 'home') ym(ymetrikaID, 'reachGoal', '3');
        else if (getPage() === 'blog') ym(ymetrikaID, 'reachGoal', '252');
        else if (getPage() === 'post') ym(ymetrikaID, 'reachGoal', '255');
        else if (getPage() === 'on-premise') ym(ymetrikaID, 'reachGoal', '313');
        scrollEvent100 = true;
      }
    }
  };
});

// Получаем ссылку на созданную видеоконференцию по клику
// и отправляем пользователя на эту страницу в новой вкладке
const vksStartButtons = document.querySelectorAll('[data-create-vks]');

if (vksStartButtons) {
  Array.prototype.forEach.call(vksStartButtons, (btn) => {
    btn.addEventListener('click', () => {
      getVksLink();
    });
  });
}

// Отправляем запрос и открываем новую вкладку если все ок
async function getVksLink() {
  try {
    const response = await fetch(
      `${window.location.origin}/api/www/jitsi/createConference/`,
      {
        method: 'POST',
      }
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    // Успешный переход в конференцию
    ym(ymetrikaID, 'reachGoal', '500');
    window.open(
      `https://${responseData.conference_joining_data.domain}/${responseData.conference_joining_data.room}?jwt=${responseData.conference_joining_data.jwt_token}`
    );
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Назначает обработчики кликов для элементов списка и отправляет события в Яндекс Метрику.
 * Опционально, функция может ограничить назначение событий только определенными страницами
 * или исключить элементы внутри определенных родительских элементов.
 *
 * @param {NodeList} nodeList - Список DOM-элементов, к которым нужно привязать события.
 * @param {string} targetID - Идентификатор цели для Яндекс Метрики.
 * @param {Object} [options={}] - Дополнительные опции для настройки поведения функции.
 * @param {string[]} [options.includePages=[]] - Массив страниц, на которых должно срабатывать назначение событий.
 * @param {string[]} [options.excludePages=[]] - Массив страниц, на которых нужно исключить назначение событий.
 * @param {string[]} [options.includeParents=[]] - Массив классов родительских элементов, внутри которых должно срабатывать событие.
 * @param {string[]} [options.excludeParents=[]] - Массив классов родительских элементов, внутри которых не должно срабатывать событие.
 * @param {Function} [options.callback=null] - Дополнительная функция, которая будет вызвана после основного действия при клике.
 *
 * @example
 * const links = document.querySelectorAll('[href*="/media"]:not([href*="/mediakit"])');
 * attachYandexMetricaClickEvents(links, '85', {
 *     includePages: ['home', 'blog'],
 *     excludePages: ['post'],
 *     includeParents: ['navbar'],
 *     excludeParents: ['footer'],
 *     callback: (e, link) => {
 *         console.log('Событие отправлено на ссылку:', link);
 *     }
 * });
 */
function attachYandexMetricaClickEvents(nodeList, targetID, options = {}) {
  const {
    includePages = [],
    excludePages = [],
    includeParents = [],
    excludeParents = [],
    callback = null,
  } = options;

  const currentPage = getPage();

  // Проверка на включенные страницы
  if (includePages.length > 0 && !includePages.includes(currentPage)) {
    return;
  }

  // Проверка на исключенные страницы
  if (excludePages.includes(currentPage)) {
    return;
  }

  Array.prototype.forEach.call(nodeList, (link) => {
    // Проверка на включенные родительские элементы
    if (
      includeParents.length > 0 &&
      !includeParents.some((parentSelector) => link.closest(parentSelector))
    ) {
      return;
    }

    // Проверка на исключенные родительские элементы
    if (excludeParents.some((parentSelector) => link.closest(parentSelector))) {
      return;
    }

    link.addEventListener('click', (e) => {
      ym(ymetrikaID, 'reachGoal', targetID);

      // Если передан callback, вызываем его после основного действия
      if (callback && typeof callback === 'function') {
        callback(e, link);
      }
    });
  });
}

// Цели раздел СМИ
const socialMediaPageLinks = document.querySelectorAll(
  '[href*="/media"]:not([href*="/mediakit"])'
);
attachYandexMetricaClickEvents(socialMediaPageLinks, '600', {
  excludePages: ['blog', 'media'],
});

const socialMediaLoadMore = document.querySelectorAll('.w-pagination-next');
attachYandexMetricaClickEvents(socialMediaLoadMore, '601', {
  includePages: ['media'],
});

// Назначаем цели добавленым статьям
document.addEventListener('click', function (event) {
  if (event.target.matches('.social-media-item-link')) {
    ym(ymetrikaID, 'reachGoal', '602');
  }
});

$('a[href="/blog"], a[href*="/blog?"], a[href*="/blog/?"]').on(
  'click',
  function () {
    //переход в блог
    if (!(['blog', 'post'].indexOf(getPage()) + 1)) {
      ym(ymetrikaID, 'reachGoal', '200');
    }
    if (getPage() === 'post' && $(this).hasClass('logo__container')) {
      ym(ymetrikaID, 'reachGoal', '214');
    }
  }
);

// [Блог] Кнопка "Загрузить ещё"
$('.fs-cmsload_button').on('click', () => {
  ym(ymetrikaID, 'reachGoal', '256');
});

// [Блог] Главная блога → статья
$('.blog-grid__card-link').on('click', () => {
  if (getPage() === 'blog') ym(ymetrikaID, 'reachGoal', '208');
});

$('[data-banner="cta"] a').on('click', function () {
  // [Блог] Банер "Вы читаете журнал Compass"
  ym(ymetrikaID, 'reachGoal', '221');
});

$('a[href^="mailto"]').on('click', function () {
  if ($(this).closest('footer').length) {
    if (['blog', 'post'].indexOf(getPage()) + 1) {
      // [Блог] Блог → Почта
      ym(ymetrikaID, 'reachGoal', '231');
    }
    // Общая цель на контакт с футера
    ym(ymetrikaID, 'reachGoal', '103');
  } else {
    if (['download_cloud'].indexOf(getPage()) + 1) {
      ym(ymetrikaID, 'reachGoal', '714');
    } else if (['download_on-premise'].indexOf(getPage()) + 1) {
      ym(ymetrikaID, 'reachGoal', '357');
    } else {
      ym(ymetrikaID, 'reachGoal', '104');
    }
  }

  //console.log('Идентификатор 6');
  ym(ymetrikaID, 'reachGoal', '6');
});

$('a[href^="tel"]').on('click', function () {
  if (['blog', 'post'].indexOf(getPage()) + 1 && $(this).closest('footer')) {
    // [Блог] Блог → Телефоны
    ym(ymetrikaID, 'reachGoal', '232');
  } else if ($(this).closest('footer').length) {
    // Нажата кнопка телефонов с футера
    ym(ymetrikaID, 'reachGoal', '95');
  }
  // Общая цель на контакт с футера
  ym(ymetrikaID, 'reachGoal', '103');
});

$('.cta__dropdown .w-dropdown-toggle').on('click', function () {
  // Лендинг – Нажата любая кнопка "Попробовать бесплатно" в контенте лендинга
  if (
    !$(this).closest('.price__block').length &&
    !$(this).closest('.navbar__wrapper').length &&
    !$(this).closest('.footer').length
  ) {
    if (getPage() === 'home') {
      ym(ymetrikaID, 'reachGoal', '50');
      _tmr.push({
        type: 'reachGoal',
        id: 3381982,
        goal: 'besplatno',
      });
    } else if (getPage() === 'media') {
      ym(ymetrikaID, 'reachGoal', '650');
    }
  }
});

$('.price__block.is--start .w-dropdown-toggle').on('click', function () {
  //Ленд – Нажата кнопка Попробовать, тариф Старт
  ym(ymetrikaID, 'reachGoal', '65');
  _tmr.push({
    type: 'reachGoal',
    id: 3381982,
    goal: 'besplatno',
  });
});

$('.price__block.is--center .w-dropdown-toggle').on('click', function () {
  //Ленд – Нажата кнопка Попробовать, тариф Образование
  ym(ymetrikaID, 'reachGoal', '66');
  _tmr.push({
    type: 'reachGoal',
    id: 3381982,
    goal: 'besplatno',
  });
});

$('.price__block.is--corp .w-dropdown-toggle').on('click', function () {
  //Ленд – Нажата кнопка Попробовать, тариф Бизнес
  ym(ymetrikaID, 'reachGoal', '67');
});

$('#carrot-messenger-collapsed-frame').on('click', function () {
  //Идентификатор 5
  ym(ymetrikaID, 'reachGoal', '5');
});

$('.ceo-link').on('click', function () {
  if ($(this).closest('footer')) {
    if (['blog', 'post'].indexOf(getPage()) + 1) {
      // [Блог] Блог → Письмо директору
      ym(ymetrikaID, 'reachGoal', '230');
    } else {
      ym(ymetrikaID, 'reachGoal', '94');
    }
    // Общая цель на контакт с футера
    ym(ymetrikaID, 'reachGoal', '103');
  }
});

$(
  'a[href*="https://t.me/getcompass"],a[href*="https://wa.me/message/CJINDDW52XJYM1"]'
).on('click', function () {
  if (['partner'].indexOf(getPage()) + 1) {
    ym(ymetrikaID, 'reachGoal', '402');
  } else if (['on-premise'].indexOf(getPage()) + 1) {
    ym(ymetrikaID, 'reachGoal', '315');
  } else if (['download_cloud'].indexOf(getPage()) + 1) {
    ym(ymetrikaID, 'reachGoal', '714');
  } else if (['download_on-premise'].indexOf(getPage()) + 1) {
    ym(ymetrikaID, 'reachGoal', '357');
  }
  if ($(this).closest('footer').length) {
    // Общая цель на контакт с футера
    ym(ymetrikaID, 'reachGoal', '103');
  } else if ($(this).closest('.remodal').length) {
    ym(ymetrikaID, 'reachGoal', '104');
  }
});

$('.privacy-target').on('click', function () {
  ym(ymetrikaID, 'reachGoal', '7');
});
$('.offer-target').on('click', function () {
  ym(ymetrikaID, 'reachGoal', '8');
});
$('.reccurent-target').on('click', function () {
  ym(ymetrikaID, 'reachGoal', '31');
});

$('.mediakit__link').on('click', function () {
  ym(ymetrikaID, 'reachGoal', '82');
});

$('[href^="/mediakit"]').on('click', function () {
  if (['blog', 'post'].indexOf(getPage()) + 1 && $(this).closest('footer')) {
    // [Блог] Блог → Медиакит(футер)
    ym(ymetrikaID, 'reachGoal', '229');
  } else if (getPage() !== 'mediakit') {
    ym(ymetrikaID, 'reachGoal', '81');
  }
});

$('a[href*="github"]').on('click', function () {
  if (getPage() === 'on-premise') {
    ym(ymetrikaID, 'reachGoal', '304');
  }
});

$('a[href*="vc.ru/getcompass"]').on('click', function () {
  if (['blog', 'post'].indexOf(getPage()) + 1) {
    if ($(this).closest('.w-nav').length) {
      // [Блог] Блог → Блог на VC (хедер)
      ym(ymetrikaID, 'reachGoal', '213');
    } else {
      // [Блог] Блог → Блог на VC(футер)
      ym(ymetrikaID, 'reachGoal', '228');
    }
  } else {
    ym(ymetrikaID, 'reachGoal', '84');
  }
});

$('a[href*="partner.getcompass.ru"]').on('click', function () {
  if (getPage() === 'partner') {
    ym(ymetrikaID, 'reachGoal', '403');
  }
});

$('a[href*="https://doc-onpremise.getcompass.ru/"]').on('click', () => {
  ym(ymetrikaID, 'reachGoal', '310');
});

$('a[href^="/on-premise"]').on('click', function () {
  if (['blog', 'post'].indexOf(getPage()) + 1) {
    if ($(this).closest('.w-nav').length) {
      // [Блог] Меню "Коробочное решение" (хедер)
      ym(ymetrikaID, 'reachGoal', '211');
    } else if ($(this).closest('[data-cta-btns]').length) {
      // [Блог] Переход блог -> стр On-premise
      ym(ymetrikaID, 'reachGoal', '217');
    } else if ($(this).closest('footer').length) {
      // [Блог] Меню "Коробочное решение" (хедер)
      ym(ymetrikaID, 'reachGoal', '233');
    }
  } else if (getPage() !== 'on-premise') {
    ym(ymetrikaID, 'reachGoal', '300');
  }
});

$('[data-cta-btns] a').on('click', () => {
  if (['blog', 'post'].indexOf(getPage()) + 1) {
    // [Блог] Переход блог -> главная/он-прем/ПП (общая цель)
    ym(ymetrikaID, 'reachGoal', '215');
  }
});

$('.partner-page, a[href^="/partner"]').on('click', function () {
  if (['blog', 'post'].indexOf(getPage()) + 1) {
    if ($(this).closest('.w-nav').length) {
      // [Блог] Меню "Партнерская программа" (хедер)
      ym(ymetrikaID, 'reachGoal', '212');
    } else if (
      getPage() === 'post' &&
      $(this).closest('[data-banner="cta-partner"]').length
    ) {
      // [Блог] Банер с рекламой ПП
      ym(ymetrikaID, 'reachGoal', '224');
    } else if ($(this).closest('[data-cta-btns]').length) {
      // [Блог] Переход блог -> стр ПП
      ym(ymetrikaID, 'reachGoal', '218');
    } else if ($(this).closest('footer').length) {
      // [Блог] Блог → страница ПП(футер)
      ym(ymetrikaID, 'reachGoal', '227');
    }
  } else if (getPage() !== 'partner') {
    ym(ymetrikaID, 'reachGoal', '400');
  }
});

$('[data-banner="cta-home"] a').on('click', () => {
  // [Блог] Банер "повысим эффективность работы"
  ym(ymetrikaID, 'reachGoal', '225');
});

$('a[href="/"], a[href^="/#"], a[href^="#"], a[href^="/?"]').on(
  'click',
  function () {
    if (['blog', 'post'].indexOf(getPage()) + 1) {
      if ($(this).closest('.w-nav').length) {
        if ($(this).hasClass('cta__btn')) {
          // [Блог] "Попробовать Compass" -> Главная сайта
          ym(ymetrikaID, 'reachGoal', '216');
        } else if ($(this).hasClass('logo__container')) {
          // [Блог] Блог → Главная сайта лого
          ym(ymetrikaID, 'reachGoal', '250');
        } else {
          // [Блог] Меню "Продукт" (хедер)
          ym(ymetrikaID, 'reachGoal', '210');
        }
      } else if ($(this).closest('[data-cta-btns]').length) {
        // [Блог] "Попробовать Compass" -> Главная сайта
        ym(ymetrikaID, 'reachGoal', '216');
      } else if ($(this).closest('footer').length) {
        // [Блог] Раздел "Продукт" (футер)
        ym(ymetrikaID, 'reachGoal', '226');
      }
    } else {
      if ($(this).closest('footer').length) {
        // [All] Раздел "Продукт" (футер)
        ym(ymetrikaID, 'reachGoal', '96');
      } else if ($(this).closest('nav').length) {
        // [All] Раздел "Продукт" (хедэр)
        ym(ymetrikaID, 'reachGoal', '98');
      } else if ($(this).closest('.navbar__logo-flex').length) {
        // [All] Нажато лого (хедэр)
        ym(ymetrikaID, 'reachGoal', '99');
      }
    }
  }
);

function analyticsModal(hash) {
  switch (hash) {
    case '#about-compass':
      ym(ymetrikaID, 'reachGoal', '83');
      break;
    case '#consultation':
      if (getPage() === 'on-premise') {
        ym(ymetrikaID, 'reachGoal', '301');
      } else if (getPage() === 'blog') {
        // [Блог] Открыта заявка с гл блога
        ym(ymetrikaID, 'reachGoal', '219');
      } else {
        ym(ymetrikaID, 'reachGoal', '9');
      }

      if (getPage() !== 'post' && getPage() !== 'blog') {
        ym(ymetrikaID, 'reachGoal', '100');
      }
      break;
    case '#consultation-on-premise':
      if (getPage() === 'post') {
        // [Блог] Открыта заявка из баннера On-premise
        ym(ymetrikaID, 'reachGoal', '222');
      } else {
        ym(ymetrikaID, 'reachGoal', '100');
      }

      if (getPage() === 'on-premise') {
        ym(ymetrikaID, 'reachGoal', '301');
      } else if (getPage() !== 'post') {
        ym(ymetrikaID, 'reachGoal', '301');
        ym(ymetrikaID, 'reachGoal', '9');
      }
      break;
    case '#pilot-modal':
      ym(ymetrikaID, 'reachGoal', '100');
      if (getPage() === 'on-premise') {
        ym(ymetrikaID, 'reachGoal', '308');
      } else {
        ym(ymetrikaID, 'reachGoal', '306');
      }
      break;
    case '#video-mac-intel':
      ym(ymetrikaID, 'reachGoal', '71');
      break;
    case '#video-mac-apple':
      ym(ymetrikaID, 'reachGoal', '72');
      break;
    case '#video-linux-deb-standart':
    case '#video-linux-deb-terminal':
      ym(ymetrikaID, 'reachGoal', '73');
      break;
    case '#video-linux-rpm-standart':
    case '#video-linux-rpm-terminal':
      ym(ymetrikaID, 'reachGoal', '78');
      break;
    case '#video-linux-astra-standart':
    case '#video-linux-astra-terminal':
      ym(ymetrikaID, 'reachGoal', '77');
      break;
    case '#video-linux-tar':
      ym(ymetrikaID, 'reachGoal', '74');
      break;
    case '#video-windows':
      ym(ymetrikaID, 'reachGoal', '75');
      break;
  }
}
