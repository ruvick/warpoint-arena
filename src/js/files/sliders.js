/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, Thumbs, Controller } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.slider-new-detail__swiper')) {
		new Swiper('.swiper', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 8,
			// autoHeight: true,
			speed: 800,
			centeredSlides: true,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,
			// Dotts
			pagination: {
				el: '.slider-new-detail__pagging',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.slider-new-detail__buttons .slider-arrow_next',
				prevEl: '.slider-new-detail__buttons .slider-arrow_prev',
			},
			breakpoints: {
				375: {
					slidesPerView: 1.3,
					// autoHeight: true,
				},
				480: {
					slidesPerView: 1.8,
					spaceBetween: 10,
					// autoHeight: true,
				},
				540: {
					slidesPerView: 2.3,
					spaceBetween: 10,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 2.8,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 17,
				},
			},
			on: {

			}
		});
	}

	if (document.querySelector('.main-maps-game__slider')) {
		new Swiper('.main-maps-game__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 16,
			// autoHeight: true,
			speed: 1500,
			centeredSlides: true,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,
			// Dotts
			pagination: {
				el: '.main-maps-game__fraction',
				type: 'fraction', // Используем фракции
				clickable: true,
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
						'<span class="' + totalClass + '"></span>';
				}
			},
			// Arrows
			navigation: {
				nextEl: '.main-maps-game__buttons .slider-arrow_next',
				prevEl: '.main-maps-game__buttons .slider-arrow_prev',
			},
			breakpoints: {
				375: {
					slidesPerView: 1.3,
				},
				480: {
					slidesPerView: 1.8,
					spaceBetween: 10,
				},
				540: {
					slidesPerView: 2.3,
				},
				768: {
					slidesPerView: 2.6,
				},
				992: {
					slidesPerView: 3.6,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4.3,
					spaceBetween: 16,
				},
			},
			on: {

			}
		});
	}

	if (document.querySelector('.popup-maps__slider')) {
		new Swiper('.popup-maps__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 1000,
			// centeredSlides: true,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,
			// Dotts
			pagination: {
				el: '.popup-maps__pagging',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.popup-maps__buttons .slider-arrow_next',
				prevEl: '.popup-maps__buttons .slider-arrow_prev',
			},
			// breakpoints: {
			// 	375: {
			// 		slidesPerView: 1.3,
			// 		// autoHeight: true,
			// 	},
			// 	480: {
			// 		slidesPerView: 1.8,
			// 		spaceBetween: 10,
			// 		// autoHeight: true,
			// 	},
			// 	540: {
			// 		slidesPerView: 2.3,
			// 		spaceBetween: 10,
			// 		// autoHeight: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2.3,
			// 		spaceBetween: 10,
			// 	},
			// 	992: {
			// 		slidesPerView: 2.8,
			// 		spaceBetween: 10,
			// 	},
			// 	1024: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 17,
			// 	},
			// },
			on: {

			}
		});
	}

	if (document.querySelector('.main-modes__slider') && document.querySelector('.thumbs-images__slider')) {
		// Инициализация слайдера с миниатюрами
		const thumbsSwiper = new Swiper('.thumbs-images__slider', {
			modules: [Navigation, Pagination, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 0,
			speed: 1500,
			// centeredSlides: true,
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			slideToClickedSlide: true,
			// другие настройки
		});

		// Инициализация основного слайдера
		const mainSwiper = new Swiper('.main-modes__slider', {
			modules: [Navigation, Pagination, Thumbs, Controller, EffectFade],
			// loop: true,
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true
			// },
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			// slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 1500,
			// centeredSlides: true,
			loop: true,
			navigation: {
				nextEl: '.main-modes__arrow-next',
				prevEl: '.main-modes__arrow-prev',
			},
			thumbs: {
				swiper: thumbsSwiper
			},
			controller: {
				control: thumbsSwiper
			},
			// другие настройки
		});
	}

	if (document.querySelector('.arsenal-slider')) {
		new Swiper('.arsenal-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 1000,
			simulateTouch: false, // Отключаем свайп мышью
			allowTouchMove: false, // Отключаем свайп на сенсорных устройствах
			// centeredSlides: true,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			// lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.popup-maps__pagging',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.actions-arsenal-sl__arrow-next',
				prevEl: '.actions-arsenal-sl__arrow-prev',
			},
			// breakpoints: {
			// 	375: {
			// 		slidesPerView: 1.3,
			// 		// autoHeight: true,
			// 	},
			// 	480: {
			// 		slidesPerView: 1.8,
			// 		spaceBetween: 10,
			// 		// autoHeight: true,
			// 	},
			// 	540: {
			// 		slidesPerView: 2.3,
			// 		spaceBetween: 10,
			// 		// autoHeight: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2.3,
			// 		spaceBetween: 10,
			// 	},
			// 	992: {
			// 		slidesPerView: 2.8,
			// 		spaceBetween: 10,
			// 	},
			// 	1024: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 17,
			// 	},
			// },
			on: {

			}
		});
	}

	document.querySelectorAll('.arsenal-thumbs__slider').forEach((thumbsSlider, index) => {
		const thumbsSwiper = new Swiper(thumbsSlider, {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs],
			/*
			effect: 'fade',
			autoplay: {
				 delay: 3000,
				 disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 12,
			// autoHeight: true,
			speed: 1000,
			slideToClickedSlide: true,
			// centeredSlides: true,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			// lazy: true,
			// Dotts
			// pagination: {
			// el: '.popup-maps__pagging',
			// clickable: true,
			// },
			// Arrows
			// navigation: {
			// nextEl: '.actions-arsenal-sl__arrow-next',
			// prevEl: '.actions-arsenal-sl__arrow-prev',
			// },
			// breakpoints: {
			// 375: {
			//     slidesPerView: 1.3,
			//     // autoHeight: true,
			// },
			// 480: {
			//     slidesPerView: 1.8,
			//     spaceBetween: 10,
			//     // autoHeight: true,
			// },
			// 540: {
			//     slidesPerView: 2.3,
			//     spaceBetween: 10,
			//     // autoHeight: true,
			// },
			// 768: {
			//     slidesPerView: 2.3,
			//     spaceBetween: 10,
			// },
			// 992: {
			//     slidesPerView: 2.8,
			//     spaceBetween: 10,
			// },
			// 1024: {
			//     slidesPerView: 3,
			//     spaceBetween: 17,
			// },
			// },
			on: {}
		});

		const imageSlider = document.querySelectorAll('.arsenal-image-sl__item')[index];
		new Swiper(imageSlider, {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs, EffectFade],
			// autoplay: {
			// delay: 3000,
			// disableOnInteraction: false,
			// },
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 1000,
			// centeredSlides: true,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			thumbs: {
				swiper: thumbsSwiper
			},
			//preloadImages: false,
			// lazy: true,
			// Dotts
			// pagination: {
			// el: '.popup-maps__pagging',
			// clickable: true,
			// },
			// Arrows
			// navigation: {
			// nextEl: '.actions-arsenal-sl__arrow-next',
			// prevEl: '.actions-arsenal-sl__arrow-prev',
			// },
			// breakpoints: {
			// 375: {
			//     slidesPerView: 1.3,
			//     // autoHeight: true,
			// },
			// 480: {
			//     slidesPerView: 1.8,
			//     spaceBetween: 10,
			//     // autoHeight: true,
			// },
			// 540: {
			//     slidesPerView: 2.3,
			//     spaceBetween: 10,
			//     // autoHeight: true,
			// },
			// 768: {
			//     slidesPerView: 2.3,
			//     spaceBetween: 10,
			// },
			// 992: {
			//     slidesPerView: 2.8,
			//     spaceBetween: 10,
			// },
			// 1024: {
			//     slidesPerView: 3,
			//     spaceBetween: 17,
			// },
			// },
			on: {}
		});
	});
}
// }

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});