/* ------------------------*/
/* ------------------------*/
/*        main-v13.js      */
/* ------------------------*/
/* ------------------------*/

const body = document.body;

body.classList.add('is--js-success');

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
    const browserInfoObj = oldBrowserDetector.getBrowser();
    if (browserInfoObj.n != 'x' && browserInfoObj.v != 0)    
	   showOldBrowserMsg();
})

Detector.detect();
switch (platform.name) {
	case 'Safari':
		switch (platform.os.family) {
			case 'iOS':
				if (platform.version.split('.')[0] <= 13 && platform.os.version.split('.')[0] <= 13) {
					showOldBrowserMsg();
				}
				break;
			case 'OS X':
				if (platform.version.split('.')[0] <= 12) {
					showOldBrowserMsg()
                    document.querySelector('.navbar__old-msg').textContent = platform.os.version.split('.')[0] + platform.name;
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
	body.classList.add('is--touch-device');
}

if (['iOS', 'Android', 'Huawei'].indexOf(os) + 1) {
    const ctaDropdowns = document.querySelectorAll('.cta__dropdown');
	body.classList.add('is--touch-device');
	document.querySelector('.page-wrapper').classList.remove('is--overflow-clip');
    
    Array.prototype.forEach.call(ctaDropdowns, ctaDropdown => {
        ctaDropdown.classList.add('is--hidden-list');
        ctaDropdown.addEventListener('click', ()=> {
            switch (os) {
			case 'iOS':
				ym(ymetrikaID, 'reachGoal', '12');
				ctaDropdown.querySelector('.appstore').click();
				break;
			case 'Android':
				ym(ymetrikaID, 'reachGoal', '14');
				ctaDropdown.querySelector('.playmarket').click();
				break;
			case 'Huawei':
				ym(ymetrikaID, 'reachGoal', '13');
				ctaDropdown.querySelector('.huawei').click();
				break;
		}
        })
    })
}

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

const instructionLinks = {
    appstore: '/download/appstore',
    playmarket: '/download/playmarket',
    huawei: '/download/huawei',
    macintel: '/download/mac-os-intel',
    macapple: '/download/mac-os-m1-m2',
    windows: '/download/windows',
    linuxdeb: '/download/ubuntu',
    linuxtar: '/download/linux'
};

const downloadLinks = document.querySelectorAll('.appstore, .playmarket, .huawei, .macintel, .macapple, .windows, .linuxdeb, .linuxtar');
const mobileClassNames = ['appstore', 'playmarket', 'huawei'];
const mobileBodyClassNames = ['is--ios', 'is--android', 'is--huawei'];
const url = new URL(location);
const urlParams = url.searchParams;
const startDownload = urlParams.get('start-download') || '';
const platformClass = urlParams.get('platform') || '';
const sourceID = urlParams.get('source_id') || '';
const utmTag = urlParams.get('utm_tag') || '';
 

//Удаляем параметры URL
urlParams.delete("platform");
urlParams.delete("start-download");
window.history.pushState({}, '', url.toString());

Array.prototype.forEach.call(downloadLinks, downloadLink => {
    openInstruction(downloadLink);
    if (!mobileClassNames.some(className => downloadLink.classList.contains(className))
        && !mobileBodyClassNames.some(className => document.body.classList.contains(className))) {
        downloadLink.setAttribute('download','download');
    } else if (!mobileClassNames.some(className => downloadLink.classList.contains(className))
            && mobileBodyClassNames.some(className => document.body.classList.contains(className))) {
        downloadLink.removeAttribute('download');
        downloadLink.setAttribute('build-link', downloadLink.getAttribute('href'));
        downloadLink.setAttribute('href', '#');
    }
    
    
    
})
window.addEventListener('load', () => {
    if (startDownload) {
        const platformDownloadLink = document.querySelector('.' + platformClass)?.getAttribute('href');
        location.href = platformDownloadLink;
    }
});

function openInstruction(downloadLink) {
    downloadLink.addEventListener('click', (e) => {
        var instructionLink = '';
        for (platform in instructionLinks) {
            if (downloadLink.classList.contains(platform) 
                && window.location.pathname.indexOf(instructionLinks[platform]) < 0
                && (!mobileBodyClassNames.some(className => document.body.classList.contains(className)) 
                    || mobileClassNames.some(className => downloadLink.classList.contains(className)))) {
                
                e.preventDefault();
                instructionLink = window.location.origin + instructionLinks[platform] + '/?start-download=true&platform=' + platform;
                window.location.href = instructionLink
            }
            //На странице скачивания повторно нажат download
            if (window.location.href.indexOf('download') + 1 > 0) {
                ym(ymetrikaID, 'reachGoal', '76');
            }
        }
    })
}
        
if ( mobileBodyClassNames.some(className => document.body.classList.contains(className)) ) {
        
        var closingMessageTimeout = setTimeout(function () {}, 0);
        const clipboard = new ClipboardJS('[build-link]', {
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
$('.cta__dd_bn').on('click', function() {
    $('.cta__dd-list-other-wrap').removeClass('is--open');
});

//Центруем всплывашку платформ на мобилке
const setCenterCTAListArrow = (dropdown) => {
    const hasArrowCTALists = document.querySelectorAll('.cta__dd-list.is--has-arrow, .cta__dd-list.is--mobile-has-arrow');
    Array.prototype.forEach.call(hasArrowCTALists, CTAList => {
        CTAList.style.removeProperty('left');
        const CTAListRect = CTAList.getBoundingClientRect();
        const CTADropdown = CTAList.closest('.w-dropdown');
        const CTADropdownList = CTADropdown.querySelector('.w-dropdown-list');
        const CTAListInnerWrap = CTAList.querySelector('.cta__dd-list-wrap');
        const CTATextCenterArrow = CTADropdown.querySelector('.cta__dd-center-arrow');
        const CTATextCenterArrowRect = CTATextCenterArrow.getBoundingClientRect();
    
            if (window.innerWidth < 768) {
                if (CTAListRect.x != 0)
                    CTADropdownList.style.setProperty('--popupLeft', `-${CTAListRect.x}px`);
                    //alert(JSON.stringify(CTAListRect));
                    CTADropdownList.style.setProperty('--arrowLeft', `${CTATextCenterArrowRect.x - CTAListInnerWrap.getBoundingClientRect().x + CTATextCenterArrowRect.width / 2}px`);
            } else {
                CTADropdownList.style.removeProperty('left');
                CTADropdownList.style.setProperty('--arrowLeft', `${CTATextCenterArrowRect.x - CTAListRect.x + CTATextCenterArrowRect.width / 2}px`);
            }
    });
}

const CTADropdowns = document.querySelectorAll('.w-dropdown');
Array.prototype.forEach.call(CTADropdowns, dropdown => {
    dropdown.querySelector('.w-dropdown-toggle').addEventListener('click', () => {
        setCenterCTAListArrow(dropdown);
    }) 
});

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
			form.querySelector('.w-button').value = form.querySelector('.w-button').getAttribute('data-btn-default');
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

if ($('#wf-form-Consultation-Form').length) {
	checkValidationFormOnSubmit('#wf-form-Consultation-Form');
}

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
	disable() {
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        
		document.body.style.marginRight = `${scrollBarWidth}px`;
		document.querySelector('.w-nav').style.right = `${scrollBarWidth}px`;
		document.querySelector('.cookie').style.marhinRight = `${scrollBarWidth}px`;
		if (document.getElementById('carrotquest-messenger-collapsed-container'))
			document.getElementById('carrotquest-messenger-collapsed-container').style.setProperty("right", `${scrollBarWidth}px`, "important");
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
        formInModal = currentModal.find('form'),
		ScrollElement = currentModal.find('.popup__scroll-content');
	if (['#video-mac-intel', '#video-mac-apple', '#video-linux-deb-standart', '#video-linux-deb-terminal', '#video-linux-tar', '#video-windows', '#video-czech', '#video-detailing-group', '#video-daily', '#video-good-people'].includes(modalId)) {
		$('html').addClass('is--black-overlay is--center-modal is---video-overlay');
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
    
    if (formInModal.length) {
        $('html').addClass('is--disable-bg-close');
    }
});

$(document).on('closing', '.remodal', function (e) {
	let currentModal = $('.remodal.remodal-is-closing'),
		iframeInModal = currentModal.find('iframe'),
		formInModal = currentModal.find('form'),
        formButton = formInModal.find('.button-submit');
    
	setTimeout(function () {
		$('.form__button-close').removeClass("is--hidden");
		$('.remodal.is--success').removeClass("is--success");
		$('.w-form-fail').hide();
		$('.w-form-done').hide();
		if (formInModal.length) {
			formInModal.find('.input-icon').each(function () {
				$(this).removeClass('display-none');
			})
			formButton.val(formButton.data('btn-default'));
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
	$('html').removeClass('is--black-overlay is--white-overlay remodal-is-locked is--center-modal is--disable-bg-close is---video-overlay');
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

//Copy fields
const copyFields = document.querySelectorAll('[clipboard-field]');

Array.prototype.forEach.call(copyFields, (copyField) => {
    const copyBtn = copyField.querySelector('[clipboard-btn]');
    const copyBtnTooltip = copyField.querySelector('[clipboard-tooltip]');
    const copyText = copyField.querySelector('[clipboard-text]').textContent;
    const copyClipboard = new ClipboardJS(copyBtn, {
        text: function (trigger) {
            return copyText;
        }
    });
    copyClipboard.on('success', function (e) {
        copyBtnTooltip.textContent = 'Скопировано'
        copyBtn.classList.add('is--done');
        setTimeout(() => {
            copyBtn.classList.remove('is--done');
        }, 2000);
        e.clearSelection();
    });
    copyClipboard.on('error', function (e) {
        copyBtnTooltip.textContent = 'Ошибка!'
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

$('a[href^="#"]').on('click', function () {
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
		url = currentHost + 'www/getcompass/requestConsultation',
		button = form.find('[type="submit"]'),
		successMessage = form.siblings('.w-form-done'),
		errorMessage = form.siblings('.w-form-fail');
	if (formValidation(form[0])) {
		if (formData.get('team_size') == '')
			formData.set('team_size', 0);
        formData.set('source_id', sourceID);
        formData.set('utm_tag', utmTag);
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
					button.val(button.data('btn-default'));
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
					//form.closest('.remodal').find('.form__button-close').addClass("is--hidden");
					if ($('html').hasClass('remodal-is-locked')) {
						$('html').removeClass('is--white-overlay');
                        $('html').removeClass('is--disable-bg-close');
					}
				}
			},
			error: function (xhr, resp, text) {
				errorMessage.find('div').html('Возникла ошибка при отправке формы, проверьте интернет-соединение или попробуйте позже.');
                button.val(button.data('btn-default'));
				errorMessage.show();
				setTimeout(function () {
					errorMessage.hide();
				}, 3000)
				form.show();
				console.log(xhr, resp, text);
			}
		});
		return false;
	} else {
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
	setCenterCTAListArrow();
	if ($(window).width() > 767) {
		$('.w-tab-content').each(function () {
			$(this).removeAttr('style');
		})
		$('.article__toc-button').siblings('.article__toc-links').removeAttr('style').removeClass('is--open');
		sliderDisable();
	} else {
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
		$('.menu-wrapper--is--mobile .cta__dropdown').removeClass('is--hidden');
	}
});
document.addEventListener("DOMContentLoaded", function () {
    setCenterCTAListArrow();
    setTimeout(function () {
        //Пользователь на сайте больше минуты
        ym(ymetrikaID, 'reachGoal', '4');
    }, 60000);

    var scrollEvent10 = false,
        scrollEvent50 = false,
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
        } else if ($('body').hasClass('is--download-page')) {
            if (!scrollEvent10 && getScrollPercentage() > 10) {
                if ($('.popup__video-iframe').find('iframe').length) {
                    $('.popup__video-iframe').find('iframe').each(function () {
                        $(this).attr('src', $(this).data('src'));
                    });
                }
                console.log('Страница прокручена на 10%');
                scrollEvent10 = true;
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

$('.footer__item-contact-link.is--email-link').on('click', function () {
	//console.log('Идентификатор 6');
	ym(ymetrikaID, 'reachGoal', '6');
});

$('.navbar__wrapper .cta__dd_bn.w-dropdown-toggle').on('click', function () {
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

$('.cta__list-item.windows, .logo-vendor__item.windows, .download-ins__text-platform-link.windows, [data-platform="windows"]').on('click', function () {
	//console.log('Идентификатор 15'); //win
	ym(ymetrikaID, 'reachGoal', '15');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.macintel, .cta__list-item.macapple').on('click', function () {
	//console.log('Идентификатор 16'); //mac
	ym(ymetrikaID, 'reachGoal', '16');
	ym(ymetrikaID, 'reachGoal', '51'); //Переход в стор
	_tmr.push({
		type: 'reachGoal',
		id: 3381982,
		goal: 'click'
	});
});

$('.cta__list-item.linuxdeb, .cta__list-item.linuxtar').on('click', function () {
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

$('.mediakit__link').on('click', function () {
	ym(ymetrikaID, 'reachGoal', '82');
});

if (window.location.href.indexOf('mediakit') + 1 > 0) {
    ym(ymetrikaID, 'reachGoal', '81');
}

function analyticsModal(hash) {
	switch (hash) {
		case '#consultation':
			ym(ymetrikaID, 'reachGoal', '9');
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
        case '#video-linux-tar':
			ym(ymetrikaID, 'reachGoal', '74');
			break;
        case '#video-windows':
			ym(ymetrikaID, 'reachGoal', '75');
			break;
		case '#video-czech':
			ym(ymetrikaID, 'reachGoal', '18');
			break;
		case '#video-detailing-group':
			ym(ymetrikaID, 'reachGoal', '19');
			break;
		case '#video-daily':
			ym(ymetrikaID, 'reachGoal', '20');
			break;
		case '#video-good-people':
			ym(ymetrikaID, 'reachGoal', '21');
			break;
	}
}
