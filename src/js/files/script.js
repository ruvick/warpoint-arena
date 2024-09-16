// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile, bodyLock, bodyUnlock, _slideToggle, _slideUp, _slideDown } from "./functions.js";

window.onload = function () {

	const navigationBoxList = document.querySelector('.navigation-box__list');

	if (!navigationBoxList) return

	// Добавляем обработчики событий mouseover и mouseout только для десктопных устройств
	if (!isMobile.any()) {
		navigationBoxList.addEventListener('mouseover', function () {
			this.classList.add('_active');
			document.body.classList.add('navi-show');
		});

		navigationBoxList.addEventListener('mouseout', function () {
			this.classList.remove('_active');
			document.body.classList.remove('navi-show');
		});
	}

	// Добавляем обработчики событий click только для мобильных устройств
	if (window.innerWidth > 768 && isMobile.any()) {
		navigationBoxList.addEventListener('click', function (e) {
			this.classList.toggle('_active');
			document.body.classList.toggle('navi-show');
		});

		document.addEventListener('click', function (e) {
			if (!e.target.closest('.navigation-box__list')) {
				navigationBoxList.classList.remove('_active');
				document.body.classList.remove('navi-show');
			}
		});
	}

};
//========================================================================================================================================================

// Play Film First Screen
if (document.querySelector('.first-screen__actions')) {
	document.querySelector('.first-screen__actions').addEventListener('click', () => {
		if (document.querySelector('.first-screen')) {
			document.querySelector('.first-screen').classList.add('_play');
		}
	});
}

if (document.querySelector('.first-screen')) {
	document.querySelector('.first-screen').addEventListener('click', (e) => {
		if (e.target.classList.contains('_play')) {
			e.target.classList.remove('_play');
		}
	});
}
//========================================================================================================================================================

// Вернутся назад 
const backButton = document.querySelector('.back-btn');
if (backButton) {
		backButton.addEventListener('click', function() {
				window.history.back();
		});
}
//========================================================================================================================================================

document.querySelectorAll('.arsenal-thumbs__body').forEach((arsenalThumbsBody, index) => {
	const arsenalThumbsBtn = document.querySelectorAll('.arsenal-thumbs__btn')[index];

	if (arsenalThumbsBody && arsenalThumbsBtn) {
		arsenalThumbsBtn.addEventListener('click', () => {
			arsenalThumbsBtn.classList.toggle('_active');
			_slideToggle(arsenalThumbsBody);
		});
	}
	if (window.innerWidth <= 1024) {
		_slideDown(arsenalThumbsBody);
	}
});
//========================================================================================================================================================

// 3D Slider 
// if (!isMobile.any()) {
// 	const slides = document.querySelectorAll('.slide-arsenal__img');

// 	if (slides.length) {
// 			slides.forEach(slide => {
// 					if (slide) {
// 							slide.addEventListener('mousemove', (e) => {
// 									const rect = slide.getBoundingClientRect();
// 									const x = e.clientX - rect.left; // Положение курсора по оси X относительно слайда
// 									const y = e.clientY - rect.top; // Положение курсора по оси Y относительно слайда
// 									const centerX = rect.width / 2;
// 									const centerY = rect.height / 2;
// 									const deltaX = (x - centerX) / centerX;
// 									const deltaY = (y - centerY) / centerY;

// 									slide.style.transform = `rotateY(${deltaX * 25}deg) rotateX(${-deltaY * 25}deg) scale(1)`;
// 									slide.classList.remove('returning'); // Убираем класс возвращения при движении курсора
// 							});

// 							slide.addEventListener('mouseleave', () => {
// 									slide.classList.add('returning'); // Добавляем класс возвращения при уходе курсора
// 									slide.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
// 							});
// 					}
// 			});
// 	}
// }

//========================================================================================================================================================

 // Получаем элементы
 const headerWrapper = document.querySelector('.header__wrapper');
 const header = document.querySelector('.header');

 // Функция для установки min-height
 const setMinHeight = () => {
	const height = headerWrapper.offsetHeight;
	header.style.minHeight = `${height}px`;
 };

 // Инициализация начальной высоты
 setMinHeight();

 // Создаем MutationObserver для отслеживания изменений
 const observer = new MutationObserver(() => {
	setMinHeight();
 });

 // Настраиваем наблюдатель для отслеживания изменений атрибутов и дочерних элементов
 observer.observe(headerWrapper, { attributes: true, childList: true, subtree: true });

 // Дополнительно можно использовать ResizeObserver для отслеживания изменений размеров
 const resizeObserver = new ResizeObserver(() => {
	setMinHeight();
 });

 // Начинаем наблюдение за изменениями размеров
 resizeObserver.observe(headerWrapper);
//========================================================================================================================================================



