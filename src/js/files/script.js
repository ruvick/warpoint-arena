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

// Вернутся назад 
const backButton = document.querySelector('.back-btn');
if (backButton) {
		backButton.addEventListener('click', function() {
				window.history.back();
		});
}
//========================================================================================================================================================

// Slider Arsenal 
// function lerp({ x, y }, { x: targetX, y: targetY }) {
// 	const fraction = 0.1;
// 	x += (targetX - x) * fraction;
// 	y += (targetY - y) * fraction;
// 	return { x, y };
// }
// class Slider {
// 	constructor(el) {
// 		const imgClass = this.IMG_CLASS = 'sl-img-item';
// 		const textClass = this.TEXT_CLASS = 'sl-text-item';
// 		const activeImgClass = this.ACTIVE_IMG_CLASS = `${imgClass}-active`;
// 		const activeTextClass = this.ACTIVE_TEXT_CLASS = `${textClass}-active`;
// 		this.el = el;
// 		this.contentE0 = document.getElementById('slider');
// 		this.contentEl = document.getElementById('slider-content');
// 		this.onMouseMove = this.onMouseMove.bind(this);
// 		this.activeImg = el.getElementsByClassName(activeImgClass);
// 		this.activeText = el.getElementsByClassName(activeTextClass);
// 		this.images = el.getElementsByTagName('img');
// 		document.getElementById('sl-nav-dots').addEventListener('click', this.onDotClick.bind(this));
// 		document.getElementById('left').addEventListener('click', this.prev.bind(this));
// 		document.getElementById('right').addEventListener('click', this.next.bind(this));
// 		window.addEventListener('resize', this.onResize.bind(this));
// 		this.onResize();
// 		this.length = this.images.length;
// 		this.lastX = this.lastY = this.targetX = this.targetY = 0;
// 	}
// 	onResize() {
// 		const htmlStyles = getComputedStyle(document.documentElement);
// 		const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');
// 		const isMobile = this.isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;
// 		this.halfWidth = this.contentE0.offsetWidth / 2;
// 		this.halfHeight = this.contentE0.offsetHeight / 2;
// 		this.zDistance = htmlStyles.getPropertyValue('--z-distance');
// 		if (!isMobile && !this.mouseWatched) {
// 			this.mouseWatched = true;
// 			this.el.addEventListener('mousemove', this.onMouseMove);
// 			this.el.style.setProperty(
// 				'--img-prev',
// 				`url(${this.images[+this.activeImg[0].dataset.id - 1].src})`
// 			);
// 			this.contentEl.style.setProperty('transform', `translateZ(${this.zDistance})`);
// 		} else if (isMobile && this.mouseWatched) {
// 			this.mouseWatched = false;
// 			this.el.removeEventListener('mousemove', this.onMouseMove);
// 			this.contentEl.style.setProperty('transform', 'none');
// 		}
// 	}
// 	getMouseCoefficients({ clientX, clientY } = {}) {
// 		const halfWidth = this.halfWidth;
// 		const halfHeight = this.halfHeight;
// 		const xCoeff = ((clientX || this.targetX) - halfWidth) / halfWidth;
// 		const yCoeff = (halfHeight - (clientY || this.targetY)) / halfHeight;
// 		return { xCoeff, yCoeff }
// 	}
// 	onMouseMove({ clientX, clientY }) {
// 		this.targetX = clientX - this.contentE0.getBoundingClientRect().left;
// 		this.targetY = clientY - this.contentE0.getBoundingClientRect().top;
// 		if (!this.animationRunning) {
// 			this.animationRunning = true;
// 			this.runAnimation();
// 		}
// 	}
// 	runAnimation() {
// 		if (this.animationStopped) {
// 			this.animationRunning = false;
// 			return;
// 		}
// 		const maxX = 10;
// 		const maxY = 10;
// 		const newPos = lerp({
// 			x: this.lastX,
// 			y: this.lastY
// 		}, {
// 			x: this.targetX,
// 			y: this.targetY
// 		});
// 		const { xCoeff, yCoeff } = this.getMouseCoefficients({
// 			clientX: newPos.x,
// 			clientY: newPos.y
// 		});
// 		this.lastX = newPos.x;
// 		this.lastY = newPos.y;
// 		this.positionImage({ xCoeff, yCoeff });
// 		this.contentEl.style.setProperty('transform', `
// 			  translateZ(${this.zDistance})
// 			  rotateX(${maxY * yCoeff}deg)
// 			  rotateY(${maxX * xCoeff}deg)
// 		 `);
// 		if (this.reachedFinalPoint) {
// 			this.animationRunning = false;
// 		} else {
// 			requestAnimationFrame(this.runAnimation.bind(this));
// 		}
// 	}
// 	get reachedFinalPoint() {
// 		const lastX = ~~this.lastX;
// 		const lastY = ~~this.lastY;
// 		const targetX = this.targetX;
// 		const targetY = this.targetY;
// 		return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX)
// 			&& (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
// 	}
// 	positionImage({ xCoeff, yCoeff }) {
// 		const maxImgOffset = 1;
// 		const currentImage = this.activeImg[0].children[0];
// 		currentImage.style.setProperty('transform', `
// 			  translateX(${maxImgOffset * -xCoeff}em)
// 			  translateY(${maxImgOffset * yCoeff}em)
// 		 `);
// 	}
// 	onDotClick({ target }) {
// 		if (this.inTransit) return;
// 		const dot = target.closest('.sl-nav-dot');
// 		if (!dot) return;
// 		const nextId = dot.dataset.id;
// 		const currentId = this.activeImg[0].dataset.id;
// 		if (currentId == nextId) return;
// 		this.startTransition(nextId);
// 	}
// 	transitionItem(nextId) {
// 		function onImageTransitionEnd(e) {
// 			e.stopPropagation();
// 			nextImg.classList.remove(transitClass);
// 			self.inTransit = false;
// 			this.className = imgClass;
// 			this.removeEventListener('transitionend', onImageTransitionEnd);
// 		}
// 		const self = this;
// 		const el = this.el;
// 		const currentImg = this.activeImg[0];
// 		const currentId = currentImg.dataset.id;
// 		const imgClass = this.IMG_CLASS;
// 		const textClass = this.TEXT_CLASS;
// 		const activeImgClass = this.ACTIVE_IMG_CLASS;
// 		const activeTextClass = this.ACTIVE_TEXT_CLASS;
// 		const subActiveClass = `${imgClass}-subactive`;
// 		const transitClass = `${imgClass}-transit`;
// 		const nextImg = el.querySelector(`.${imgClass}[data-id='${nextId}']`);
// 		const nextText = el.querySelector(`.${textClass}[data-id='${nextId}']`);
// 		let outClass = '';
// 		let inClass = '';
// 		this.animationStopped = true;
// 		nextText.classList.add(activeTextClass);
// 		el.style.setProperty('--from-left', nextId);
// 		currentImg.classList.remove(activeImgClass);
// 		currentImg.classList.add(subActiveClass);
// 		if (currentId < nextId) {
// 			outClass = `${imgClass}-next`;
// 			inClass = `${imgClass}-prev`;
// 		} else {
// 			outClass = `${imgClass}-prev`;
// 			inClass = `${imgClass}-next`;
// 		}
// 		nextImg.classList.add(outClass);
// 		requestAnimationFrame(() => {
// 			nextImg.classList.add(transitClass, activeImgClass);
// 			nextImg.classList.remove(outClass);
// 			this.animationStopped = false;
// 			this.positionImage(this.getMouseCoefficients());
// 			currentImg.classList.add(transitClass, inClass);
// 			currentImg.addEventListener('transitionend', onImageTransitionEnd);
// 		});
// 		if (!this.isMobile)
// 			this.switchBackgroundImage(nextId);
// 	}
// 	startTransition(nextId) {
// 		function onTextTransitionEnd(e) {
// 			if (!e.pseudoElement) {
// 				e.stopPropagation();
// 				requestAnimationFrame(() => {
// 					self.transitionItem(nextId);
// 				});
// 				this.removeEventListener('transitionend', onTextTransitionEnd);
// 			}
// 		}
// 		if (this.inTransit) return;
// 		const activeText = this.activeText[0];
// 		const backwardsClass = `${this.TEXT_CLASS}-backwards`;
// 		const self = this;
// 		this.inTransit = true;
// 		activeText.classList.add(backwardsClass);
// 		activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
// 		activeText.addEventListener('transitionend', onTextTransitionEnd);
// 		requestAnimationFrame(() => {
// 			activeText.classList.remove(backwardsClass);
// 		});
// 	}
// 	next() {
// 		if (this.inTransit) return;
// 		let nextId = +this.activeImg[0].dataset.id + 1;
// 		if (nextId > this.length)
// 			nextId = 1;
// 		this.startTransition(nextId);
// 	}
// 	prev() {
// 		if (this.inTransit) return;
// 		let nextId = +this.activeImg[0].dataset.id - 1;
// 		if (nextId < 1)
// 			nextId = this.length;
// 		this.startTransition(nextId);
// 	}
// 	switchBackgroundImage(nextId) {
// 		function onBackgroundTransitionEnd(e) {
// 			if (e.target === this) {
// 				this.style.setProperty('--img-prev', imageUrl);
// 				this.classList.remove(bgClass);
// 				this.removeEventListener('transitionend', onBackgroundTransitionEnd);
// 			}
// 		}
// 		const bgClass = 'slider--bg-next';
// 		const el = this.el;
// 		const imageUrl = `url(${this.images[+nextId - 1].src})`;
// 		el.style.setProperty('--img-next', imageUrl);
// 		el.addEventListener('transitionend', onBackgroundTransitionEnd);
// 		el.classList.add(bgClass);
// 	}
// }
// const sliderEl = document.getElementById('slider');
// const slider = new Slider(sliderEl);
// let timer = 0;
// function autoSlide() {
// 	requestAnimationFrame(() => {
// 		slider.next();
// 	});
// 	timer = setTimeout(autoSlide, 4000);
// }
// function stopAutoSlide() {
// 	clearTimeout(timer);
// 	this.removeEventListener('touchstart', stopAutoSlide);
// 	this.removeEventListener('mousemove', stopAutoSlide);
// }
// sliderEl.addEventListener('mousemove', stopAutoSlide);
// sliderEl.addEventListener('touchstart', stopAutoSlide);
// timer = setTimeout(autoSlide, 4000);

//========================================================================================================================================================

// function lerp(start, end, fraction) {
// 	return start + (end - start) * fraction;
// }

// class BlockFollower {
// 	constructor(el) {
// 		this.el = el;
// 		this.lastX = this.lastY = this.targetX = this.targetY = 0;
// 		this.onMouseMove = this.onMouseMove.bind(this);
// 		this.runAnimation = this.runAnimation.bind(this);
// 		this.el.addEventListener('mousemove', this.onMouseMove);
// 		this.animationRunning = false;
// 	}

// 	onMouseMove(event) {
// 		const rect = this.el.getBoundingClientRect();
// 		this.targetX = event.clientX - rect.left;
// 		this.targetY = event.clientY - rect.top;
// 		if (!this.animationRunning) {
// 			this.animationRunning = true;
// 			this.runAnimation();
// 		}
// 	}

// 	runAnimation() {
// 		if (!this.animationRunning) return;

// 		const newPosX = lerp(this.lastX, this.targetX, 0.1);
// 		const newPosY = lerp(this.lastY, this.targetY, 0.1);
// 		this.lastX = newPosX;
// 		this.lastY = newPosY;

// 		const xCoeff = (newPosX - this.el.offsetWidth / 2) / (this.el.offsetWidth / 2);
// 		const yCoeff = (this.el.offsetHeight / 2 - newPosY) / (this.el.offsetHeight / 2);

// 		this.el.style.transform = `rotateY(${xCoeff * 25}deg) rotateX(${yCoeff * 25}deg)`;

// 		if (Math.abs(this.lastX - this.targetX) < 1 && Math.abs(this.lastY - this.targetY) < 1) {
// 			this.animationRunning = false;
// 		} else {
// 			requestAnimationFrame(this.runAnimation);
// 		}
// 	}
// }

// // Инициализация для всех блоков с классом .arsenal-image-sl__slide
// document.querySelectorAll('.arsenal-image-sl__slide').forEach(slide => {
// 	new BlockFollower(slide);
// });
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

// Parallax 
// let bg = document.querySelectorAll('.mouse-parallax');
// for (let i = 0; i < bg.length; i++) {
// 	window.addEventListener('mousemove', function (e) {
// 		let x = e.clientX / window.innerWidth;
// 		let y = e.clientY / window.innerHeight;
// 		bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
// 	});
// }
//========================================================================================================================================================

// New Slider
// function lerp({ x, y }, { x: targetX, y: targetY }) {
// 	const fraction = 0.1;
// 	x += (targetX - x) * fraction;
// 	y += (targetY - y) * fraction;
// 	return { x, y };
// }

// class Slider {
// 	constructor(el) {
// 		this.el = el;
// 		this.contentEl = el.querySelector('.arsenal-image-sl__slide');
// 		this.onMouseMove = this.onMouseMove.bind(this);
// 		this.activeImg = el.querySelector('.swiper-slide-active');
// 		this.images = el.getElementsByTagName('img');
// 		this.onResize();
// 		this.lastX = this.lastY = this.targetX = this.targetY = 0;
// 	}

// 	onResize() {
// 		const htmlStyles = getComputedStyle(document.documentElement);
// 		const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');
// 		const isMobile = this.isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;
// 		this.halfWidth = this.el.offsetWidth / 2;
// 		this.halfHeight = this.el.offsetHeight / 2;
// 		this.zDistance = htmlStyles.getPropertyValue('--z-distance');
// 		if (!isMobile && !this.mouseWatched) {
// 			this.mouseWatched = true;
// 			this.el.addEventListener('mousemove', this.onMouseMove);
// 			this.contentEl.style.setProperty('transform', `translateZ(${this.zDistance})`);
// 		} else if (isMobile && this.mouseWatched) {
// 			this.mouseWatched = false;
// 			this.el.removeEventListener('mousemove', this.onMouseMove);
// 			this.contentEl.style.setProperty('transform', 'none');
// 		}
// 	}

// 	getMouseCoefficients({ clientX, clientY } = {}) {
// 		const halfWidth = this.halfWidth;
// 		const halfHeight = this.halfHeight;
// 		const xCoeff = ((clientX || this.targetX) - halfWidth) / halfWidth;
// 		const yCoeff = (halfHeight - (clientY || this.targetY)) / halfHeight;
// 		return { xCoeff, yCoeff }
// 	}

// 	onMouseMove({ clientX, clientY }) {
// 		this.targetX = clientX - this.el.getBoundingClientRect().left;
// 		this.targetY = clientY - this.el.getBoundingClientRect().top;
// 		if (!this.animationRunning) {
// 			this.animationRunning = true;
// 			this.runAnimation();
// 		}
// 	}

// 	runAnimation() {
// 		if (this.animationStopped) {
// 			this.animationRunning = false;
// 			return;
// 		}
// 		const maxX = 10;
// 		const maxY = 10;
// 		const newPos = lerp({
// 			x: this.lastX,
// 			y: this.lastY
// 		}, {
// 			x: this.targetX,
// 			y: this.targetY
// 		});
// 		const { xCoeff, yCoeff } = this.getMouseCoefficients({
// 			clientX: newPos.x,
// 			clientY: newPos.y
// 		});
// 		this.lastX = newPos.x;
// 		this.lastY = newPos.y;
// 		this.positionImage({ xCoeff, yCoeff });
// 		this.contentEl.style.setProperty('transform', `
// 				translateZ(${this.zDistance})
// 				rotateX(${maxY * yCoeff}deg)
// 				rotateY(${maxX * xCoeff}deg)
// 		  `);
// 		if (this.reachedFinalPoint) {
// 			this.animationRunning = false;
// 		} else {
// 			requestAnimationFrame(this.runAnimation.bind(this));
// 		}
// 	}

// 	get reachedFinalPoint() {
// 		const lastX = ~~this.lastX;
// 		const lastY = ~~this.lastY;
// 		const targetX = this.targetX;
// 		const targetY = this.targetY;
// 		return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX)
// 			&& (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
// 	}

// 	positionImage({ xCoeff, yCoeff }) {
// 		const maxImgOffset = 1;
// 		const currentImage = this.el.querySelector('.swiper-slide-active img');
// 		if (currentImage) {
// 			currentImage.style.setProperty('transform', `
// 					 translateX(${maxImgOffset * -xCoeff}em)
// 					 translateY(${maxImgOffset * yCoeff}em)
// 				`);
// 		}
// 	}
// }

// const sliderEl = document.querySelector('.arsenal-image-sl__item');
// const slider = new Slider(sliderEl);
//========================================================================================================================================================

// document.querySelector('.history__btn').addEventListener('click', () => {
// 	document.querySelector('.card-history').classList.toggle('_active');
// });
//========================================================================================================================================================
