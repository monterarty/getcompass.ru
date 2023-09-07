/* ------------------------*/
/* ------------------------*/
/*        main-v12.js       */
/* ------------------------*/
/* ------------------------*/

function showOldBrowserMsg() {
	const oldMsg = document.querySelector('.navbar__old-msg');
	if (oldMsg) {
		oldMsg.classList.add('is--display-block');
		document.querySelector('.navbar__old-close').addEventListener('click', () => {
			oldMsg.classList.remove('is--show');
		})
		setTimeout(function () {
			oldMsg.classList.add('is--show');
		}, 100)
	}
}

if (navigator.userAgent.indexOf(' UCBrowser/') >= 0) {
	showOldBrowserMsg()
}

var Detector = new oldBrowserDetector({
	c: 87,
	f: 73,
	o: 70,
	s: {
		d: 12
	}
}, function () {
	showOldBrowserMsg()
})

Detector.detect();

switch (platform.name) {
	case 'Safari':
		switch (platform.os.family) {
			case 'iOS':
				if (platform.version.split('.')[0] <= 13) {
					showOldBrowserMsg()
				}
				break;
			case 'OS X':
				if (platform.version.split('.')[0] <= 12) {
					showOldBrowserMsg()
				}
				break;
		}
		break;
	case 'Chrome':
		if (platform.version.split('.')[0] <= 87) {
			showOldBrowserMsg()
		}
		break;
	case 'Chrome Mobile':
		if (platform.version.split('.')[0] <= 87) {
			showOldBrowserMsg()
		}
		break;
	case 'Opera':
		if (platform.version.split('.')[0] <= 73) {
			showOldBrowserMsg()
		}
		break;
	case 'Firefox':
		if (platform.version.split('.')[0] <= 73) {
			showOldBrowserMsg()
		}
		break;
}

$(document).ready(function () {
	$(".w-webflow-badge").removeClass("w-webflow-badge").empty();
});

var os = platform.os.family;

function getOS() {
	"use strict";
	var userAgent = window.navigator.userAgent,
		platform = window.navigator.userAgentData ? window.navigator.userAgentData : window.navigator.platform || window.navigator.platform,
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
	"use strict";
	return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
		// iPad on iOS 13 detection
		||
		(navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

if (os === null || os == 'Android') {
	os = getOS();
	if (os == 'OS X') {
		if (iOS()) {
			os = 'iOS';
		}
	}
}

function isTouchDevice() {
	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
	$('body').addClass('is--touch-device');
}

if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
	$('body').addClass('is--touch-device');
	$('.page-wrapper').removeClass('is--overflow-clip');
	$('.cta__dropdown, .bn__dropdown').addClass('is--hidden-list');
	$('.cta__dropdown, .bn__dropdown').on('click', function (e) {
		switch (os) {
			case 'iOS':
				ym(ymetrikaID, 'reachGoal', '12');
				location.href = $(this).find('.appstore').attr('href');
				break;
			case 'Android':
				ym(ymetrikaID, 'reachGoal', '14');
				location.href = $(this).find('.playmarket').attr('href');
				break;
			case 'Windows':
				ym(ymetrikaID, 'reachGoal', '15');
				location.href = $(this).find('.win').attr('href');
				break;
			case 'Linux':
				ym(ymetrikaID, 'reachGoal', '17');
				location.href = $(this).find('.linux').attr('href');
				break;
			case 'OS X':
				ym(ymetrikaID, 'reachGoal', '16');
				location.href = $(this).find('.mac').attr('href');
				break;
			case 'Huawei':
				ym(ymetrikaID, 'reachGoal', '13');
				location.href = $(this).find('.huawei').attr('href');
				break;
		}
	})
}

//Определеяем систему и добавляем класс в body
switch (os) {
	case 'iOS':
		$('body').addClass('is--ios');
		break;
	case 'Android':
		$('body').addClass('is--android');
		break;
	case 'Windows':
              $('body').addClass('is--windows');
		break;
	case 'Linux':
              $('body').addClass('is--linux');
		break;
	case 'OS X':
              $('body').addClass('is--mac');
		break;
	case 'Huawei':
		$('body').addClass('is--android');
		break;
}

//Скрываем кнопку при клике на другие платформы
$('.cta__list-other-button').on('click', function() {
    $(this).parent().addClass('is--open');
});

//Закрываем список при клике на ссылку для скачивания
$('.cta__list-item:not(.cta__list-other-button)').on('click', function() {
    $(".w-dropdown").trigger("w-close");
});

//Возвращаем к исходному состоянию
$('.cta__dd_bn, .bn__dropdown-sml').on('click', function() {
    $('.cta__dd-list-other-wrap').removeClass('is--open');
});

//Центруем всплывашку платформ на мобилке
const setCenterVendorMacList = () => {
    const vendorMacDD = document.querySelector('.logo-vendors__mobile-link.is--dropdown');
    const vendorMacDdRect = vendorMacDD.getBoundingClientRect();
    const vendorMacDDList = document.querySelector('.is--logo-vendors-mac-list');
    vendorMacDDList.style.left = `-${vendorMacDdRect.x}px`;
    vendorMacDDList.style.width = window.innerWidth;
}

if (window.clientWidth < 768) {
    setCenterVendorMacList();
}

$('body').addClass('is--js-success');

//Маска для инпутов (телефон)
function addInputPhoneMask() {
	const phoneInputs = document.querySelectorAll("input[data-tel-input]");
	const regExp = /\D/g;
	const getInputNumbersValue = (input) => input.value.replace(regExp, "");

	const onInputHandler = (event) => {
		const input = event.target;
		let inputNumbersValue = getInputNumbersValue(input);
		let formattedInputValue = "";
		let prevRawNumber = "";
		// положение каретки относительно численных значений
		let prevNumberCaretPosition = 0;
		// количество выделенных символов в ренже
		let selectedNumberCount = 0;
		const {
			selectionEnd,
			selectionStart
		} = input;

		if (!inputNumbersValue) {
			input.value = "";
			return;
		}

		if (input.value.length !== selectionStart) {
			if (event.data && regExp.test(event.data)) {
				input.value = inputNumbersValue;
			}
		}
		var inputSelectionStart = selectionStart,
			inputSelectionEnd = selectionEnd;
		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			if (inputNumbersValue[0] === "9" && os == "iOS") {
				inputNumbersValue = `7${inputNumbersValue}`;
			}

			const firstSymbols =
				(inputNumbersValue[0] == "8" || "7") && inputNumbersValue[0] !== "9" ?
				"+7" :
				"+";
			if (inputNumbersValue[0] === "9" && os !== "iOS") {
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
				}
			}
		} else {
			formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
		}

		// получим новое значение каретки
		const newCaretPosition = getNewCaretPosition(
			inputNumbersValue,
			formattedInputValue
		);

		// записываем новое значение
		input.value = formattedInputValue;

		// устанавливаем каретку
		input.setSelectionRange(newCaretPosition, newCaretPosition);
	};

	const onKeyDownHanler = (event) => {
		const input = event.target;
		const inputValue = input.value.replace(/\D/g, "");
		const DELETE_KEY_CODE = 8;
		if (event.keyCode === DELETE_KEY_CODE && inputValue.length === 1) {
			input.value = "";
		}
	};

	const onPasteHandler = (event) => {
		const input = event.target;
		const inputNumbersValue = getInputNumbersValue(input);
		const pasted = event.clipboardData || window.Clipboard;
		if (pasted) {
			const pastedText = pasted.getData("Text");
			if (regExp.test(pastedText)) {
				input.value = inputNumbersValue;
			}
		}
	};

	const onFocusSelectionEnd = (event) => {
		const input = event.target;
		if (!input.classList.contains("focus"))
			setTimeout(() => {
				input.selectionStart = input.value.length;
			}, 100);
		input.classList.add("focus");
	};

	const onFocusoutSelectionEnd = (event) => {
		const input = event.target;
		input.classList.remove("focus");
	};

	const onBeforeInput = (event) => {
		// если выделили сколько-то символов, сначала берем все символы в выделении и убираем пробелы
		// так мы поймем сколько цифр изменилось
		// не используем window.getSelection(), потому что в этот момент оно уже схлопнулось
		selectedNumberCount = Math.abs(
			event.target.value
			.slice(event.target.selectionStart, event.target.selectionEnd)
			.replace(/\s/g, "").length
		);

		// сохраняем предыдущее значени инпута телефона без символов
		prevRawNumber = event.target.value.replace(/\D/g, "");

		// берем все числа до каретки
		prevNumberCaretPosition = event.target.value
			.slice(0, event.target.selectionStart)
			.replace(/\D/g, "").length;
	};

	const getNewCaretPosition = (newRawNumber, maskedValue) => {
		// массив номера с символами
		const maskedValueArray = maskedValue.split("");

		// текущее положение каретки
		let caretPosition = 0;

		// получаем желаемое положение каретки, относительно строки номера без форматирования
		const newCaretPosition =
			prevNumberCaretPosition +
			(newRawNumber.length - prevRawNumber.length + selectedNumberCount);

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
	}

	phoneInputs.forEach((input) => {
		input.addEventListener("input", onInputHandler, false);
		input.addEventListener("keydown", onKeyDownHanler);
		input.addEventListener("paste", onPasteHandler, false);
		input.addEventListener("focus", onFocusSelectionEnd, false);
		input.addEventListener("focusout", onFocusoutSelectionEnd, false);
		input.addEventListener("beforeinput", onBeforeInput, false);
	});
}
addInputPhoneMask();

const nameInputs = document.querySelectorAll('input[data-name-input]');
const comandInputs = document.querySelectorAll('input[data-input-comand]');

//Запрет ввода цифр в поле имени 
nameInputs.forEach((input) => {
	input.addEventListener('keypress', function (e) {
		console.log(e);
		//console.log(e.keyCode);
		if (e.keyCode != 8 && e.keyCode != 46 && (input.value.length > 49 || e.key && e.key.match(/[^а-яА-ЯЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/)))
			return e.preventDefault();
	});
	input.addEventListener('input', function (e) {
		console.log(e);
		if (e.inputType == "insertFromPaste") {
			// На случай, если умудрились ввести через копипаст или авто-дополнение.
			input.value = input.value.replace(/[^а-яА-ЯЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/g, "").slice(0, 50);
		}
	});
});

//Запрет ввода букв в поле размера команды 
comandInputs.forEach((input) => {
	input.addEventListener('keypress', function (e) {
		if (e.key && e.key.match(/[^0-9]/)) return e.preventDefault();
	});
	input.addEventListener('input', function (e) {
		// На случай, если умудрились ввести через копипаст или авто-дополнение.
		input.value = input.value.replace(/[^0-9]/g, "").slice(0, 12);
	});
});

// Валидация форм
function removeErrorClassOnInput(input) {
	input.addEventListener('input', () => {
		input.classList.remove('input-error');
	});
	input.addEventListener('focus', () => {});
	input.onblur = function () {
		const {
			value
		} = input;
		const requiredIcon = input.closest('.form-row').querySelector('.input-icon');
		if (!value && requiredIcon) {
			requiredIcon.classList.remove('display-none');
		}
	};

	input.onfocus = function () {
		const requiredIcon = input.closest('.form-row').querySelector('.input-icon');
		if (requiredIcon) {
			requiredIcon.classList.add('display-none');
		}
	};
}

function formValidation(form) {
	let isValid = true;
	const inputs = form.querySelectorAll('.input');

	inputs.forEach((input) => {
		const {
			value,
			dataset
		} = input;
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
				value.replace(regExp, '')[0] == 7 && value.replace(regExp, '').length > 11
			) {
				input.classList.add('input-error');
				isValid = false;
			}
		}

		if (input.hasAttribute('data-name-input')) {
			const namePattern = /[^а-яА-ЯЁёІіЇїҐґЄєa-zA-ZẞßÄäÜüÖöÀàÈèÉéÌìÍíÎîÒòÓóÙùÚúÂâÊêÔôÛûËëÏïŸÿÇçÑñœ’`'.-\s]/g;

			if (namePattern.test(value.trim())) {
				input.classList.add('input-error');
				isValid = false;
			}


			if (dataset.minLength && value.trim().length < dataset.minLength) {
				input.classList.add('input-error');
				isValid = false;
			}

			if (dataset.maxLength && value.trim().length > dataset.maxLength) {
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

function checkValidationFormOnSubmit(formClassName) {
	const form = document.querySelector(formClassName);
	const inputs = form.querySelectorAll('.input');
	const onSubmitHandler = (event) => {
		if (formValidation(form)) {
			return true;
		} else {
			form.querySelector('.w-button').value = "Отправить";
			return false;
		}
	};

	inputs.forEach((input) => {
		const isRequiredInput = input.getAttribute('data-required');
		if (isRequiredInput) {
			removeErrorClassOnInput(input);
		}
	});

	$(formClassName).submit(onSubmitHandler);
}

if ($('#command-form').length) {
	checkValidationFormOnSubmit('#command-form');
}
if ($('#process-form').length) {
	checkValidationFormOnSubmit('#process-form');
}
if ($('#demo-form').length) {
	checkValidationFormOnSubmit('#demo-form');
}

$('.switch__slider').on('click', function () {
	$(this).closest('.price__wrapper').toggleClass('is--monthly');
})

// Типограф Стетей, заголовков и шорттекстов
var tp = new Typograf({
		locale: ['ru', 'en-US']
	}),
	article = document.querySelector('.article'),
	relatedArticles = document.querySelector('.related-articles');

if (article) {
	article.innerHTML = tp.execute(article.innerHTML);
	relatedArticles.innerHTML = tp.execute(relatedArticles.innerHTML);
}
//Типографируем подгруженные статьи
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
		if ($('.fs-cms_pagination-wrapper').length) {
			$('.fs-cms_pagination-wrapper .w-pagination-next').addClass('is--ajax-load-btn').find('.blog-grid__lm-btn-text').html('Загрузить ещё');
		}
		if ($('.blog-grid__card-title').length) {
			$('.blog-grid__card-title').each(function () {
				$(this).html(tp.execute($(this).html()));
			})
			$('.blog-grid__card-introtext').each(function () {
				$(this).html(tp.execute($(this).html()));
			})
		}

		// The callback passes a `listInstances` array with all the `CMSList` instances on the page.
		const [listInstance] = listInstances;

		// The `renderitems` event runs whenever the list renders items after switching pages.
		listInstance.on('renderitems', (renderedItems) => {
			if ($('.blog-grid__card-title').length) {
				$('.blog-grid__card-title').each(function () {
					$(this).html(tp.execute($(this).html()));
				})
				$('.blog-grid__card-introtext').each(function () {
					$(this).html(tp.execute($(this).html()));
				})
				document.querySelectorAll(".article__preloader-wrapper").forEach(preloader => {
					setTimeout(function () {
						preloader.style.opacity = '0';
						preloader.addEventListener('transitionend', () => preloader.remove());
					}, 500);

				});
			}
		});
  },
]);

$('.form__success-button, .form__button-close').on('click', function () {
	var successButton = $(this);
	setTimeout(function () {
		successButton.closest('.remodal').find('.w-form-done').hide();
		successButton.closest('.remodal').find('form').show();
	}, 300);
})

const bodyScrollControls = {
	scrollBarWidth: window.innerWidth - document.body.clientWidth,

	disable() {
		document.body.style.marginRight = `${this.scrollBarWidth}px`;
		document.querySelector('.w-nav').style.right = `${this.scrollBarWidth}px`;
		document.querySelector('.cookie').style.marhinRight = `${this.scrollBarWidth}px`;
		if (document.getElementById('carrotquest-messenger-collapsed-container'))
			document.getElementById('carrotquest-messenger-collapsed-container').style.setProperty("right", `${this.scrollBarWidth}px`, "important");
		document.body.style.paddingRight = null;
		document.body.style.overflowY = 'hidden';
	},
	enable() {
		document.body.style.marginRight = null;
		document.body.style.paddingRight = null;
		document.querySelector('.cookie').style.marhinRight = 0;
		document.querySelector('.w-nav').style.right = 0;
		if (document.getElementById('carrotquest-messenger-collapsed-container'))
			document.getElementById('carrotquest-messenger-collapsed-container').style.right = 0;
		document.body.style.overflowY = null;
	},
};

$(document).on('opening', '.remodal', function (e) {
	bodyScrollControls.disable();
	$('html').addClass('remodal-is-locked');
	let currentModal = $('.remodal.remodal-is-opening'),
		modalId = '#' + currentModal.data('remodal-id'),
		iframeInModal = currentModal.find('iframe'),
		ScrollElement = currentModal.find('.popup__scroll-content');
	if (['#money', '#video-czech', '#video-detailing-group', '#video-daily', '#video-good-people'].includes(modalId)) {
		$('html').addClass('is--black-overlay is--center-modal');
	} else {
		$('html').addClass('is--white-overlay');
	}
	analyticsModal(modalId);
	ScrollElement.animate({
		scrollTop: 0
	}, 0);

	if (iframeInModal.length && window.Vimeo !== void 0) {
		let player = new Vimeo.Player(iframeInModal[0]);
		player.play();
	}
});

$(document).on('closing', '.remodal', function (e) {
	let currentModal = $('.remodal.remodal-is-closing'),
		iframeInModal = currentModal.find('iframe'),
		formInModal = currentModal.find('form');
	setTimeout(function () {
		$('.form__button-close').removeClass("is--hidden");
		$('.remodal.is--success').removeClass("is--success");
		$('.w-form-fail').hide();
		$('.w-form-done').hide();
		if (formInModal.length) {
			formInModal.find('.input-icon').each(function () {
				$(this).removeClass('display-none');
			})
			formInModal.find('.button-submit').val('Отправить');
			formInModal[0].reset();
			formInModal.show();
			formInModal.find('input').each(function () {
				$(this).removeClass('input-error');
			});
		}
	}, 300)

	if (iframeInModal.length) {
		iframeInModal.attr('src', '');
		iframeInModal.attr('src', iframeInModal.data('src'));
	}
});

$(document).on('closed', '.remodal', function (e) {
	bodyScrollControls.enable();
	$('html').removeClass('is--black-overlay is--white-overlay remodal-is-locked is--center-modal');
});

$('input').on('focusout', function () {
	setTimeout(function () {
		if ($('html').hasClass('remodal-is-locked')) {
			$('html').removeClass('remodal-is-locked');
			$('html').addClass('remodal-is-locked');
		}
	}, 300);
})

//Доскрол до вопроса при клике на мобилке
$('.faq__trigger').on('click', function () {
	var toggle = $(this),
		wrapper = toggle.parent('.faq__item');
	if (wrapper.hasClass('is--open')) {
		closeDropdown(wrapper)
	} else {
		openDropdown(wrapper);
	}
	closeDropdown($('.faq__item.is--open').not(wrapper));

	if ($(window).width() < 768 && !$(this).hasClass('is--open')) {
		var headerHeight = $('.w-nav').height() + 12,
			faqTrigger = $(this);

		setTimeout(function () {
			$("html, body").animate({
				scrollTop: faqTrigger.offset().top - headerHeight
			});
		}, 500);
	}
})

$('.faq__item').each(function () {
	closeDropdown($(this));
})

$('.faq__show-button').on('click', function () {
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
		opacity: 1
	});
	dropdown.addClass('is--open');
}

function closeDropdown(dropdown) {
	var dropdownContent = dropdown.find('.faq__resp-wrapper'),
		dropdownInnerContent = dropdown.find('.faq__resp');

	dropdownContent.css({
		height: 0
	});
	dropdownInnerContent.css({
		opacity: 0
	});
	dropdown.removeClass('is--open');
}

//Скопировать ссылку на билд
var closingMessageTimeout = setTimeout(function () {}, 0);
var clipboard = new ClipboardJS('[build-link]', {
	text: function (trigger) {
		return trigger.getAttribute('build-link');
	}
});

clipboard.on('success', function (e) {
	showCopyNote();
	e.clearSelection();
});

clipboard.on('error', function (e) {
	showCopyNote('Не получилось скопировать ссылку. Возможно, ваш&nbsp;браузер устарел.', true);
});

$('.article__social-share-link--copy').css('display', 'inline-block');
var copyPostLinkTimeout = setTimeout(function () {}, 0);
var copyPostLink = new ClipboardJS('.article__social-share-link--copy', {
	text: function (trigger) {
		return window.location.href;
	}
})

copyPostLink.on('success', function (e) {
	clearTimeout(copyPostLinkTimeout);
	var copyElement = $(e.trigger);

	copyElement.addClass('is--copy-done');
	copyPostLinkTimeout = setTimeout(function () {
		copyElement.removeClass('is--copy-done');
	}, 2000)
	e.clearSelection();
});

copyPostLink.on('error', function (e) {
	clearTimeout(copyPostLinkTimeout);
	var copyElement = $(e.trigger);

	copyElement.addClass('is--copy-fail');
	copyPostLinkTimeout = setTimeout(function () {
		copyElement.removeClass('is--copy-fail');
	}, 2000)
});

function showCopyNote(text, error) {
	clearTimeout(closingMessageTimeout);
	if (text != '') {
		$('.event__message').html(text);
	}
	if (error) {
		$('.event__message').addClass('is--error');
	} else {
		$('.event__message').removeClass('is--error');
		$('.event__message').html('Ссылка на скачивание Compass для&nbsp;компьютера скопирована');
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
	}, 4000);
}

$('.event__message').on('touchmove', function () {
	clearTimeout(closingMessageTimeout);
	$('.event__message').removeClass('is--visible');
	setTimeout(function () {
		$('.event__message').removeClass('is--display-block');
	}, 300);
});

//Выпадающие списки в блоке с табами 
$('.target__tab-menu-block .w-tab-link.w--current').each(function () {
	$(this).find('.tab-menu__description').height($(this).find('.tab-menu__description div').outerHeight());
});

function tabsSwipeHandler(linkEl, direction) {
	let currentMenu = linkEl.closest('.w-tabs').find('.w-tab-menu'),
		nextLink = currentMenu.find('.w--current').next('a'),
		prevLink = currentMenu.find('.w--current').prev('a');

	if (direction == 'left' && $(window).width() < 768) {
		if (nextLink.length < 1) {
			currentMenu.addClass('scroll-bounce-left');
			setTimeout(function () {
				currentMenu.removeClass('scroll-bounce-left')
			}, 800)
		} else {
			nextLink.click();
		}
	} else if (direction == 'right' && $(window).width() < 768) {
		if (prevLink.length < 1) {
			currentMenu.addClass('scroll-bounce-right');
			setTimeout(function () {
				currentMenu.removeClass('scroll-bounce-right');
			}, 800)
		} else {
			prevLink.click();
		}
	}
}

$(".w-tab-content").swipe({
	swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
		if (phase == 'end' && direction == currentDirection && (direction == 'left' || direction == 'right'))
			tabsSwipeHandler($(this), direction);
	},
	allowPageScroll: "vertical"
});

var allSliders = [];
if ($(window).width() < 768) {
	if ($('.hero__slider').length || $('.w-tabs').length || $('.blog-hero__filter-button').length > 2) sliderInit();
};
var blogCategorySlider = false;

function sliderInit() {
	if ($('.w-tabs').length > 0) {
		$('.w-tabs').each(function (i) {
			let tabsEl = $(this);
			tabsEl.addClass('swiper-container');
			tabsEl.find('.w-tab-menu').addClass('swiper-wrapper');
			tabsEl.find('.w-tab-link:last').addClass('is--last');
			tabsEl.find('.w-tab-link').each(function () {
				$(this).addClass('swiper-slide');
			})
			allSliders[i] = new Swiper(tabsEl[0], {
				slidesPerView: "auto",
				spaceBetween: 0,
				speed: 400
			});
			allSliders[i].on('transitionStart', function () {
				$(allSliders[i].slidesEl).find('.w-tab-link').eq(allSliders[i].snapIndex).trigger('click');
			});
		});
	}
	if ($('.blog-hero__filter').length) {
		$('.blog-hero__filter').addClass('swiper-container');
		$('.blog-hero__filter-track').addClass('swiper-wrapper');
		$('.blog-hero__filter-collection .blog-hero__filter-button').each(function () {
			$('.blog-hero__filter-track').append($(this));
		});
		$('.blog-hero__filter .w-dyn-list').hide();
		$('.blog-hero__filter-button').each(function () {
			$(this).addClass('swiper-slide');
		})
		var currentPageIndex = $('.blog-hero__filter-button').index($('.blog-hero__filter-button.w--current'));

		var blogCategorySlider = new Swiper('.blog-hero__filter', {
			slidesPerView: "auto",
			spaceBetween: 0,
			speed: 400
		});
		if (currentPageIndex > 2)
			blogCategorySlider.slideTo(currentPageIndex);
	}
}

function sliderDisable() {
	if (allSliders.length > 1) {
		allSliders.forEach((swiper) => {
			swiper.destroy(true, true);
		});
	}
	$('.w-tabs').each(function (i) {
		let tabsEl = $(this);
		tabsEl.removeClass('swiper-container');
		tabsEl.find('.w-tab-menu').removeClass('swiper-wrapper').css({
			transform: 'translate3d(0px, 0, 0)'
		});
		tabsEl.find('.w-tab-link:last').removeClass('is--last');
		tabsEl.find('.w-tab-link').each(function () {
			$(this).removeClass('swiper-slide');
		})
	});
	if ($('.blog-hero__filter').length) {
		if (blogCategorySlider)
			blogCategorySlider.destroy(true, true);
		$('.blog-hero__filter').removeClass('swiper-container');
		$('.blog-hero__filter-track').removeClass('swiper-wrapper');
		$('.blog-hero__filter-button').each(function () {
			$(this).removeClass('swiper-slide');
		})
	}
}
$('.target__tab-menu-block .w-tab-link').on('click', function () {
	let thisEl = $(this),
		tabsEl = $(this).closest('.w-tabs'),
		textEl = thisEl.find('.tab-menu__description'),
		tabContent = thisEl.closest('.w-tabs').find('.w-tab-content'),
		menuWrap = thisEl.parent('.target__tab-menu-block'),
		tabIndex = menuWrap.find('a').index(thisEl),
		tabsElIndex = $('.w-tabs').index(tabsEl);

	if ($(window).width() > 767) {
		textEl.css({
			height: textEl.find('div').outerHeight(),
			opacity: 1
		});
		thisEl.siblings('.w--current').find('.tab-menu__description').css({
			height: 0,
			opacity: 0
		});
	} else {
		if (tabIndex != allSliders[tabsElIndex].activeIndex)
			allSliders[tabsElIndex].slideTo(tabIndex);
		tabContent.css({
			height: tabContent.find('.w-tab-pane').eq(tabIndex).outerHeight()
		});
	}
});

// Фикс плавного подскролла к секции при загрузке
if (window.location.hash && $(window.location.hash).length) {
	$('html,body').animate({
		scrollTop: $(window.location.hash).offset().top //- $('.navbar__wrapper').outerHeight()
	}, 800);
	removeAnchorFormURL(); //Удаляем hash из адреса
}

//Фикс удаления хэша после перехода к разделу
history.scrollRestoration = "manual";

function removeAnchorFormURL() {
	setTimeout(() => {
		window.history.replaceState({}, "", window.location.href.split("#")[0]);
	}, 100);
};

$('.menu__navlink').on('click', function () {
	removeAnchorFormURL();
})

//Открытие содержимого на мобильном
$('.article__toc-button').on('click', function () {
	var tocList = $('.article__toc-button').siblings('.article__toc-links');
	if (!$(this).hasClass('is--open')) {
		tocList.css({
			height: tocList.find('div').outerHeight(),
			opacity: 1
		});
	} else {
		tocList.css({
			height: 0,
			opacity: 0
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
};

var validContent;

if ($('.article__content').length) {
	readingTime($('.article__content'));
	$(".article__content.w-richtext").each(function () {
		var content = $(this).html();
		if (
			(content.match(/{{mobile/g) || []).length ==
			(content.match(/{{\/mobile/g) || []).length &&
			(content.match(/{{pc/g) || []).length ==
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
				.replace(/<p>{{mobile}}<\/p>/g, '<div class="article__mobile-content">')
				.replace(/<p>{{pc}}<\/p>/g, '<div class="article__desctop-content">')
				.replace(/<p>{{\/pc}}<\/p>/g, '</div>')
				.replace(/<p>{{\/mobile}}<\/p>/g, '</div>')
				.replace(/<p>{{cta_banner}}<\/p>/g, '<div class="cta-banner-place"></div>')
				.replace(/<p>{{cta_book}}<\/p>/g, '<div class="cta-book-place"></div>')
			);
        $(this).find('a').each(function() {
            if ($(this).text().indexOf('{{') + 1) {
                $(this).addClass('article__cta-button');
                $(this).parent().addClass('article__cta-button-wrap');
                $(this).html(`<div>${$(this).text().replace(/[{}]+/g,'')}</div><div class="article-cta__button-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99254 9.93963L5.03374 8.99148L8.36293 5.66229H0V4.27734H8.36293L5.03374 0.953481L5.99254 0L10.9624 4.96982L5.99254 9.93963Z" fill="currentColor"></path></svg></div>`);
            }
        })
	});

	if ($('.cta-banner-place').length) {
		$('.article-cta--in-content .article-cta__title.w-dyn-bind-empty').text('Знакомая ситуация?');
		$('.article-cta--in-content .article-cta__subtitle.w-dyn-bind-empty').html('Попробуйте мессенджер, который приведёт в&nbsp;порядок рабочее общение.');
		$('.cta-banner-place').append($('.article-cta--in-content'));
		$('.article-cta--in-content').css('display', 'flex');
	}
	if ($('.cta-book-place').length) {
		$('.cta-book-place').append($('.article-book-cta--in-content'));
	}
}

//Подсчет количества рекомендуемых статей
if ($('.blog-grid__wrapper--related-news').length) {
	let relatedItemsCount = $('.blog-grid__wrapper--related-news .blog-grid__card').length;
	if (relatedItemsCount > 0 && $('.blog-grid__wrapper--related-news').data('items-count') != relatedItemsCount) {
		$('.blog-grid__wrapper--related-news').attr('data-items-count', relatedItemsCount);
	} else if (relatedItemsCount == 0) {
		$('.related-articles').hide();
	}

}

//Кнопки поделиться
var vkLink = document.querySelectorAll('.article__social-share-link--vk'),
	tgLink = document.querySelectorAll('.article__social-share-link--tg');

if (vkLink.length) {
	vkLink.forEach(element => {
		element.addEventListener('click', () => {
			window.open('https://vk.com/share.php?url=' + window.location.href)
		})
	})
}

if (tgLink.length) {
	tgLink.forEach(element => {
		element.addEventListener('click', () => {
			window.open('https://t.me/share/url?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(document.title));
		})
	})
}

// Отправка формы в апи
$('form').on('submit', function (e) {
	var form = $(this),
		formData = new FormData($(this)[0]),
		currentHost = `${window.location.protocol}//${window.location.host}/`,
		url = currentHost + 'www/getcompass/requestDemo',
		button = form.find('[type="submit"]'),
		initialBtnText = button.val(),
		successMessage = form.siblings('.w-form-done'),
		errorMessage = form.siblings('.w-form-fail');
	if (formValidation(form[0])) {
		if (formData.get('team_size') == '')
			formData.set('team_size', 0);
		button.val(button.data('wait'));
		$.ajax({
			url: url,
			type: "POST",
			dataType: 'text',
			data: formData,
			contentType: false,
			processData: false,
			statusCode: {
				423: function (result) {
					errorMessage.find('div').html('Превышенно количество отправленных заявок. Пожалуйста, попробуйте повторить через 2&nbsp;часа.');
				}
			},
			success: function (result) {
				const isSuccessful = JSON.parse(result).status == "ok"
				if (isSuccessful) {
					button.val(initialBtnText);
					successMessage.show();
					errorMessage.hide();
					form.hide();
					ym(ymetrikaID, 'reachGoal', '10');
					_tmr.push({
						type: 'reachGoal',
						id: 3381982,
						goal: 'Demo'
					});
					form.closest('.remodal').addClass('is--success').removeClass('is--no-radius');
					form.closest('.remodal').find('.form__button-close').addClass("is--hidden");
					if ($('html').hasClass('remodal-is-locked')) {
						$('html').addClass('is--black-overlay is--center-modal').removeClass('is--white-overlay');
					}
				}
			},
			error: function (xhr, resp, text) {
				errorMessage.find('div').html('Возникла ошибка при отправке формы, проверьте интернет-соединение или попробуйте позже.');
				button.val(initialBtnText);
				errorMessage.show();
				setTimeout(function () {
					errorMessage.hide();
				}, 3000)
				form.show();
				console.log(xhr, resp, text);
			}
		});
		return false;
	}
});

function formToJson(form) {
	var array = form.serializeArray();
	var json = {};

	$.each(array, function () {
		json[this.name] = this.value || 0;
	});

	return JSON.stringify(json);
}

function getSanitizedFormName(name) {
	return name.replace(/\+/g, " ")
}

//Получить скролл страницы в процентах
function getScrollPercentage() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let documentHeight = Math.max(
		document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
		document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
	);

	return ((scrollTop / (documentHeight - windowHeight)) * 100);

}

window.addEventListener("resize", (event) => {
	if ($(window).width() > 767) {
		$('.w-tab-content').each(function () {
			$(this).removeAttr('style');
		})
		$('.article__toc-button').siblings('.article__toc-links').removeAttr('style').removeClass('is--open');
		sliderDisable();
	} else {
        setCenterVendorMacList();
		if (!allSliders[0] || allSliders[0].destroyed)
			sliderInit();
	}
	setTimeout(function () {
		$('.target__tab-menu-block .w-tab-link.w--current').each(function () {
			$(this).trigger('click');
		});
	}, 200);

});

//Показываем кнопку "Попробовать бесплатно"
window.addEventListener("scroll", (event) => {
	if ($('.business__section').length && $(window).scrollTop() + $(window).height() >= $('.business__section').offset().top && $(window).width() < 768) {
		$('.menu-wrapper--is--mobile .bn__dropdown').removeClass('is--hidden');
	}
});


document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		//Пользователь на сайте больше минуты
		ym(ymetrikaID, 'reachGoal', '4');
	}, 60000);

	var scrollEvent50 = false,
		scrollEvent75 = false,
		scrollEvent100 = false; // Сообщение ещё не выводилось
	window.onscroll = function () {
		if ($('body').hasClass('is--home-page')) {
			if ($('.w-nav-button').hasClass('w--open'))
				$('.w-nav-button').trigger('click');
			if (!scrollEvent50 && getScrollPercentage() > 50) {
				if ($('.popup__video-iframe').find('iframe').length) {
					$('.popup__video-iframe').find('iframe').each(function () {
						$(this).attr('src', $(this).data('src'));
					});
				}
				//Страница прокручена на 50%
				ym(ymetrikaID, 'reachGoal', '1');
				scrollEvent50 = true;
			}
			if (!scrollEvent75 && getScrollPercentage() > 75) {
				//console.log('Страница прокручена на 75%');
				ym(ymetrikaID, 'reachGoal', '2');
				scrollEvent75 = true;
			}
			if (!scrollEvent100 && getScrollPercentage() > 95) {
				//Страница прокручена на 100%
				ym(ymetrikaID, 'reachGoal', '3');
				scrollEvent100 = true;
			}
		}
	}
});

//Фикс кнопки назалд и закрытия модального окна
function closeRemodal() {
	if ($('.remodal.remodal-is-opened').length) {
		$('.remodal.remodal-is-opened').find('[data-remodal-action="close"]').trigger('click');
	}
}
window.addEventListener("popstate", (event) => {
	closeRemodal();
});

document.onkeydown = function (evt) {
	if (evt.keyCode == 27) {
		// Escape key pressed
		closeRemodal();
	}
};

$('.menu__navlink--blog').on('click', function () {
	//переход в блог
	ym(ymetrikaID, 'reachGoal', '61');
});

$('.navbar__button--blog').on('click', function () {
	//переход с блога на сайт
	ym(ymetrikaID, 'reachGoal', '62');
});

$('.article-cta').on('click', function () {
	//переход с блога на сайт по баннеру
	ym(ymetrikaID, 'reachGoal', '63');
});


$('.blog-footer__link--store').on('click', function () {
	//переходы в сторы в блоге
	ym(ymetrikaID, 'reachGoal', '64');
});

$('.footer__email-link').on('click', function () {
	//console.log('Идентификатор 6');
	ym(ymetrikaID, 'reachGoal', '6');
});

$('.bn__dropdown .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата “Попробовать бесплатно” в шапке
	ym(ymetrikaID, 'reachGoal', '11');
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'besplatno'
	});
});

$('.cta__dropdown .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата любая кнопка Попробовать в контенте лендинга
	if (!$(this).closest('.price__block').length) {
		ym(ymetrikaID, 'reachGoal', '50');
		_tmr.push({
			type: 'reachGoal',
			id: 3381982,
			goal: 'besplatno'
		});
	}
});

$('.price__block.is--start .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата кнопка Попробовать, тариф Старт
	ym(ymetrikaID, 'reachGoal', '65');
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'besplatno'
	});
})

$('.price__block.is--center .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата кнопка Попробовать, тариф Образование
	ym(ymetrikaID, 'reachGoal', '66');
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'besplatno'
	});
})

$('.price__block.is--corp .w-dropdown-toggle').on('click', function () {
	//Ленд – Нажата кнопка Попробовать, тариф Бизнес
	ym(ymetrikaID, 'reachGoal', '67');
})

$('.logo-vendor__item').on('click', function () {
    //console.log('Идентификатор 23');
    if (!$(this).hasClass('w-dropdown-toggle')) {
        ym(ymetrikaID, 'reachGoal', '23');
    }
});

$('.cta__list-item.appstore, .logo-vendor__item.appstore').on('click', function () {
	//console.log('Идентификатор 12');
	ym(ymetrikaID, 'reachGoal', '12');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.playmarket, .logo-vendor__item.playmarket').on('click', function () {
	//console.log('Идентификатор 14');
	ym(ymetrikaID, 'reachGoal', '14');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.huawei, .logo-vendor__item.huawei').on('click', function () {
	//console.log('Идентификатор 13');
	ym(ymetrikaID, 'reachGoal', '13');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.win, .logo-vendor__item.win').on('click', function () {
	//console.log('Идентификатор 15'); //win
	ym(ymetrikaID, 'reachGoal', '15');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.mac-apple, .cta__list-item.mac-intel, .logo-vendor__item.mac').on('click', function () {
	//console.log('Идентификатор 16'); //mac
	ym(ymetrikaID, 'reachGoal', '16');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.linux, .logo-vendor__item.linux').on('click', function () {
	//console.log('Идентификатор 17'); //linux
	ym(ymetrikaID, 'reachGoal', '17');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('#carrot-messenger-collapsed-frame').on('click', function () {
	//Идентификатор 5
	ym(ymetrikaID, 'reachGoal', '5');
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

function analyticsModal(hash) {
	switch (hash) {
		case '#demo':
			//console.log('Идентификатор 9');
			ym(ymetrikaID, 'reachGoal', '9');
			break;
		case '#process':
			//console.log('Идентификатор Модалка переноса процессов');
			ym(ymetrikaID, 'reachGoal', '9');
			break;
		case '#comand':
			console.log('Идентификатор Модалка крупных команд');
			ym(ymetrikaID, 'reachGoal', '9');
			break;
		case '#video-czech':
			//console.log('Идентификатор 18');
			ym(ymetrikaID, 'reachGoal', '18');
			break;
		case '#video-detailing-group':
			//console.log('Идентификатор 19');
			ym(ymetrikaID, 'reachGoal', '19');
			break;
		case '#video-daily':
			//console.log('Идентификатор 20');
			ym(ymetrikaID, 'reachGoal', '20');
			break;
		case '#video-good-people':
			//console.log('Идентификатор 21');
			ym(ymetrikaID, 'reachGoal', '21');
			break;
	}
}
