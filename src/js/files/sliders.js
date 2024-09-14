/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, Thumbs, Controller, Autoplay } from 'swiper';
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

	if (document.querySelector('.main-history__slider')) {
		const swiper = new Swiper('.main-history__slider', {
			modules: [Navigation, Pagination, EffectFade, Autoplay],
			observer: true,
			observeParents: true,
			// loop: true,
			centeredSlides: true,
			initialSlide: 3,
			slidesPerView: 1.3,
			spaceBetween: 5,
			speed: 1100,
			navigation: {
				nextEl: '.main-history__buttons .slider-arrow_next',
				prevEl: '.main-history__buttons .slider-arrow_prev',
			},
			breakpoints: {
				375: {
					slidesPerView: 2.3,
				},
				768: {
					slidesPerView: 2.8,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 5.6,
					spaceBetween: 10,
				},
				1280: {
					slidesPerView: 5.6,
				},
				1360: {
					slidesPerView: 7.6,
					spaceBetween: 10,
				},
			},
		});

		// Добавляем обработчик клика на слайды
		swiper.slides.forEach((slide, index) => {
			slide.addEventListener('click', () => {
				swiper.slideToLoop(index);
			});
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
			// loop: true,
			initialSlide: 2,
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
				nextEl: '.main-maps-game__arrow-next',
				prevEl: '.main-maps-game__arrow-prev',
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
    const modalSlider = new Swiper('.popup-maps__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			pagination: {
					el: '.popup-maps__pagging',
					clickable: true,
			},
			navigation: {
					nextEl: '.popup-maps__buttons .slider-arrow_next',
					prevEl: '.popup-maps__buttons .slider-arrow_prev',
			},
	});

	// Получаем все кнопки "Подробнее" в карточках
	const detailButtons = document.querySelectorAll('.slide-maps-game__btn');

	// Добавляем обработчик события для каждой кнопки "Подробнее"
	detailButtons.forEach(button => {
			button.addEventListener('click', function () {
					const slideIndex = button.getAttribute('data-slide-index');
					modalSlider.slideToLoop(slideIndex); // Используем slideToLoop для корректной работы с loop
			});
	});
	}

	if (document.querySelector('.main-modes__slider') && document.querySelector('.thumbs-images__slider')) {
		// Инициализация слайдера с миниатюрами
		const thumbsSwiper = new Swiper('.thumbs-images__slider', {
			modules: [Navigation, Pagination, EffectFade, Thumbs, Controller,],
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
			on: {
        slideChangeTransitionStart: function () {
            const currentSlide = this.slides[this.activeIndex];
            currentSlide.classList.add('animate');
        },
        slideChangeTransitionEnd: function () {
            const previousSlide = this.slides[this.previousIndex];
            previousSlide.classList.remove('animate');
        },
    },
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
    const swiper = new Swiper('.arsenal-slider', {
        modules: [Navigation, Pagination, Thumbs, EffectFade],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.actions-arsenal-sl__item_next',
            prevEl: '.actions-arsenal-sl__item_prev',
        },
        on: {
            init: function () {
                updateSlideNames(this);
                updateActiveItems(this);
            },
            slideChange: function () {
                updateSlideNames(this);
                updateActiveItems(this);
            },
            slideChangeTransitionStart: function () {
                document.querySelectorAll('.actions-arsenal-sl__item').forEach(item => {
                    item.classList.remove('_active');
                });
                document.querySelectorAll('.slide-arsenal__body').forEach(body => {
                    body.classList.remove('_active');
                });
            },
            slideChangeTransitionEnd: function () {
                updateActiveItems(this);
            },
        }
    });

    function updateSlideNames(swiper) {
        const slides = swiper.slides;
        const totalSlides = slides.length;

        slides.forEach((slide, index) => {
            const prevIndex = (index - 1 + totalSlides) % totalSlides;
            const nextIndex = (index + 1) % totalSlides;

            const prevSlideName = slides[prevIndex].querySelector('.slide-arsenal__name').textContent;
            const nextSlideName = slides[nextIndex].querySelector('.slide-arsenal__name').textContent;

            const prevNameElement = slide.querySelector('.actions-arsenal-sl__name_prev');
            const nextNameElement = slide.querySelector('.actions-arsenal-sl__name_next');

            if (prevNameElement) {
                prevNameElement.textContent = prevSlideName;
            }

            if (nextNameElement) {
                nextNameElement.textContent = nextSlideName;
            }
        });
    }

    function updateActiveItems(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const prevItem = activeSlide.querySelector('.actions-arsenal-sl__item_prev');
        const nextItem = activeSlide.querySelector('.actions-arsenal-sl__item_next');
        const slideArsenalBody = activeSlide.querySelector('.slide-arsenal__body');
        
        if (slideArsenalBody) slideArsenalBody.classList.add('_active');
        if (prevItem) prevItem.classList.add('_active');
        if (nextItem) nextItem.classList.add('_active');
    }
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
			slidesPerView: 2.6,
			spaceBetween: 5,
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
			breakpoints: {
				// 375: {
				// 	slidesPerView: 2.6,
				// 	spaceBetween: 10,
				// },
				540: {
					slidesPerView: 2.8,
				},
				768: {
					slidesPerView: 3.6,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 12,
				},
			},
			on: {}
		});

		const imageSlider = document.querySelectorAll('.arsenal-image-sl__item')[index];
		new Swiper(imageSlider, {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs, EffectFade],
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