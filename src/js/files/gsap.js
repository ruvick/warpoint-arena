// // import { isMobile, bodyLock, bodyUnlock, _slideToggle, _slideUp, _slideDown } from "./functions.js";
// import { gsap } from 'gsap'

// // After update OptimizedHTML5
// let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

// // document.addEventListener('DOMContentLoaded', () => {

// 	// Custom JS

// const body = document.querySelector('.images-arsenal__slider')

// 	 cx = window.innerWidth / 2
// 	 cy = window.innerHeight / 2

// 	body.addEventListener('mousemove', e => { 

// 		clientX = e.pageX
// 		clientY = e.pageY

// 		request = requestAnimationFrame(updateMe)

// 		mouseCoords(e)
// 		cursor.classList.remove('hidden')
// 		follower.classList.remove('hidden')

// 	})

// 	function updateMe() {

// 		dx     = clientX - cx
// 		dy     = clientY - cy
// 		tiltx  = dy / cy
// 		tilty  = dx / cx
// 		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
// 		// degree = radius * 180 / Math.PI
// 		degree = radius * 12
// 		gsap.to('.slide-arsenal__img', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

// 	}
	
// 	gsap.to('.card', { zoom: .98 })
// 	gsap.to('.l_main', { opacity: 1, duration: .1 })
// 	gsap.to('.l2_main', { opacity: 1, left: -10, top: 10, duration: .25, delay: .25 })
// 	gsap.to('.l3_main', { opacity: 1, left: -20, top: 20, duration: .25, delay: .25 })
// 	gsap.to('.card-russia', { opacity: .07, duration: .1 })
// 	gsap.to('.card-logo_w', { opacity: 1, duration: .225 })
// 	gsap.to('.card-chip', { opacity: 1, duration: .225 })
// 	gsap.to('.card-valid', { opacity: 1, zoom: 1, duration: .1, delay: .25 })
// 	gsap.to('.card-number-holder', { opacity: 1, zoom: 1, duration: .1, delay: .25 })

// 	const cursor   = document.getElementById('cursor'),
// 				follower = document.getElementById('aura'),
// 				links    = document.getElementsByTagName('a')

// 	mouseX = 0, mouseY = 0, posX = 0, posY = 0

// 	function mouseCoords(e) {

// 		mouseX = e.pageX
// 		mouseY = e.pageY

// 	}

// 	gsap.to({}, .01, {

// 		repeat: -1,

// 		onRepeat: () => {

// 			posX += (mouseX - posX) / 5
// 			posY += (mouseY - posY) / 5

// 			gsap.set(cursor, {
// 				css: {
// 					left: mouseX,
// 					top: mouseY
// 				}
// 			})

// 			gsap.set(follower, {
// 				css: {
// 					left: posX - 14,
// 					top: posY - 14
// 				}
// 			})

// 		}

// 	})

// 	for(let i = 0; i < links.length; i++) {

// 		links[i].addEventListener('mouseover', () => {
// 			cursor.classList.add('active')
// 			follower.classList.add('active')
// 		})

// 		links[i].addEventListener('mouseout', () => {
// 			cursor.classList.remove('active')
// 			follower.classList.remove('active')
// 		})

// 	}

// 	body.addEventListener('mouseout', () => {
// 		cursor.classList.add('hidden')
// 		follower.classList.add('hidden')
// 	})

// // })
//========================================================================================================================================================

// function lerp({ x, y }, { x: targetX, y: targetY }) {
// 	const fraction = 0.1; 
// 	x += (targetX - x) * fraction;
// 	y += (targetY - y) * fraction;
// 	return { x, y };
// }
// class Slider {
// 	constructor (el) {
// 			const imgClass = this.IMG_CLASS = 'sl-img-item';
// 			const textClass = this.TEXT_CLASS = 'sl-text-item';
// 			const activeImgClass = this.ACTIVE_IMG_CLASS = `${imgClass}-active`;
// 			const activeTextClass = this.ACTIVE_TEXT_CLASS =  `${textClass}-active`;
// 			this.el = el;
// 			this.contentE0 = document.getElementById('slider');
// 			this.contentEl = document.getElementById('slider-content');
// 			this.onMouseMove = this.onMouseMove.bind(this);
// 			this.activeImg = el.getElementsByClassName(activeImgClass);
// 			this.activeText = el.getElementsByClassName(activeTextClass);
// 			this.images = el.getElementsByTagName('img');
// 			document.getElementById('sl-nav-dots').addEventListener('click', this.onDotClick.bind(this));
// 			document.getElementById('left').addEventListener('click', this.prev.bind(this));
// 			document.getElementById('right').addEventListener('click', this.next.bind(this));
// 			window.addEventListener('resize', this.onResize.bind(this));
// 			this.onResize();
// 			this.length = this.images.length;
// 			this.lastX = this.lastY = this.targetX = this.targetY = 0;
// 	}
// 	onResize () {
// 			const htmlStyles = getComputedStyle(document.documentElement);
// 			const mobileBreakpoint =  htmlStyles.getPropertyValue('--mobile-bkp');
// 			const isMobile = this.isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;
// 			this.halfWidth = this.contentE0.offsetWidth / 2;
// 			this.halfHeight = this.contentE0.offsetHeight / 2;
// 			this.zDistance = htmlStyles.getPropertyValue('--z-distance');
// 			if (!isMobile && !this.mouseWatched) {
// 					this.mouseWatched = true;
// 					this.el.addEventListener('mousemove', this.onMouseMove);
// 					this.el.style.setProperty(
// 							'--img-prev', 
// 							`url(${this.images[+this.activeImg[0].dataset.id - 1].src})`
// 					);
// 					this.contentEl.style.setProperty('transform', `translateZ(${this.zDistance})`);
// 					} else if (isMobile && this.mouseWatched) {
// 					this.mouseWatched = false;
// 					this.el.removeEventListener('mousemove', this.onMouseMove);
// 					this.contentEl.style.setProperty('transform', 'none');
// 			}
// 	}
// 	getMouseCoefficients ({ clientX, clientY } = {}) {
// 			const halfWidth = this.halfWidth;
// 			const halfHeight = this.halfHeight;
// 			const xCoeff = ((clientX || this.targetX) - halfWidth) / halfWidth;
// 			const yCoeff = (halfHeight - (clientY || this.targetY)) / halfHeight;
// 			return { xCoeff,  yCoeff }
// 	}
// 	onMouseMove ({ clientX, clientY }) { 
// 			this.targetX = clientX - this.contentE0.getBoundingClientRect().left;
// 			this.targetY = clientY - this.contentE0.getBoundingClientRect().top;
// 			if (!this.animationRunning) {
// 					this.animationRunning = true;
// 					this.runAnimation();
// 			}
// 	}
// 	runAnimation () {
// 			if (this.animationStopped) {
// 					this.animationRunning = false;
// 					return;
// 			}
// 			const maxX = 10;
// 			const maxY = 10;
// 			const newPos = lerp({
// 					x: this.lastX,
// 					y: this.lastY
// 					}, {
// 					x: this.targetX,
// 					y: this.targetY
// 			});
// 			const { xCoeff, yCoeff } = this.getMouseCoefficients({
// 					clientX: newPos.x, 
// 					clientY: newPos.y
// 			});  
// 			this.lastX = newPos.x;
// 			this.lastY = newPos.y;
// 			this.positionImage({ xCoeff, yCoeff }); 
// 			this.contentEl.style.setProperty('transform', `
// 					translateZ(${this.zDistance})
// 					rotateX(${maxY * yCoeff}deg)
// 					rotateY(${maxX * xCoeff}deg)
// 			`);
// 			if (this.reachedFinalPoint) {
// 					this.animationRunning = false;
// 					} else {
// 					requestAnimationFrame(this.runAnimation.bind(this)); 
// 			}
// 	}
// 	get reachedFinalPoint () {
// 			const lastX = ~~this.lastX;
// 			const lastY = ~~this.lastY;
// 			const targetX = this.targetX;
// 			const targetY = this.targetY;
// 			return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) 
// 			&& (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
// 	}
// 	positionImage ({ xCoeff, yCoeff }) {
// 			const maxImgOffset = 1;
// 			const currentImage = this.activeImg[0].children[0];
// 			currentImage.style.setProperty('transform', `
// 					translateX(${maxImgOffset * -xCoeff}em)
// 					translateY(${maxImgOffset * yCoeff}em)
// 			`);  
// 	}
// 	onDotClick ({ target }) {
// 			if (this.inTransit) return;
// 			const dot = target.closest('.sl-nav-dot');
// 			if (!dot) return;
// 			const nextId = dot.dataset.id;
// 			const currentId = this.activeImg[0].dataset.id;
// 			if (currentId == nextId) return;
// 			this.startTransition(nextId);
// 	}
// 	transitionItem (nextId) {
// 			function onImageTransitionEnd (e) {
// 					e.stopPropagation();
// 					nextImg.classList.remove(transitClass);
// 					self.inTransit = false;
// 					this.className = imgClass;
// 					this.removeEventListener('transitionend', onImageTransitionEnd);
// 			}
// 			const self = this;
// 			const el = this.el;
// 			const currentImg = this.activeImg[0];
// 			const currentId = currentImg.dataset.id;
// 			const imgClass = this.IMG_CLASS;
// 			const textClass = this.TEXT_CLASS;
// 			const activeImgClass = this.ACTIVE_IMG_CLASS;
// 			const activeTextClass = this.ACTIVE_TEXT_CLASS;
// 			const subActiveClass = `${imgClass}-subactive`;
// 			const transitClass = `${imgClass}-transit`;
// 			const nextImg = el.querySelector(`.${imgClass}[data-id='${nextId}']`);
// 			const nextText = el.querySelector(`.${textClass}[data-id='${nextId}']`);
// 			let outClass = '';
// 			let inClass = '';
// 			this.animationStopped = true;
// 			nextText.classList.add(activeTextClass);
// 			el.style.setProperty('--from-left', nextId);
// 			currentImg.classList.remove(activeImgClass);
// 			currentImg.classList.add(subActiveClass);
// 			if (currentId < nextId) {
// 					outClass = `${imgClass}-next`;
// 					inClass = `${imgClass}-prev`;
// 					} else {
// 					outClass = `${imgClass}-prev`;
// 					inClass = `${imgClass}-next`;
// 			}
// 			nextImg.classList.add(outClass);
// 			requestAnimationFrame(() => {
// 					nextImg.classList.add(transitClass, activeImgClass);
// 					nextImg.classList.remove(outClass);
// 					this.animationStopped = false;
// 					this.positionImage(this.getMouseCoefficients());
// 					currentImg.classList.add(transitClass, inClass);
// 					currentImg.addEventListener('transitionend', onImageTransitionEnd);
// 			});
// 			if (!this.isMobile)
// 			this.switchBackgroundImage(nextId);
// 	}
// 	startTransition (nextId) {
// 			function onTextTransitionEnd(e) {
// 					if (!e.pseudoElement) {
// 							e.stopPropagation();
// 							requestAnimationFrame(() => {
// 									self.transitionItem(nextId);
// 							});
// 							this.removeEventListener('transitionend', onTextTransitionEnd);
// 					}
// 			}
// 			if (this.inTransit) return;
// 			const activeText = this.activeText[0];
// 			const backwardsClass = `${this.TEXT_CLASS}-backwards`;
// 			const self = this; 
// 			this.inTransit = true;
// 			activeText.classList.add(backwardsClass);
// 			activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
// 			activeText.addEventListener('transitionend', onTextTransitionEnd);
// 			requestAnimationFrame(() => {
// 					activeText.classList.remove(backwardsClass);
// 			});
// 	}
// 	next () {
// 			if (this.inTransit) return;
// 			let nextId = +this.activeImg[0].dataset.id + 1;
// 			if (nextId > this.length)
// 			nextId = 1;
// 			this.startTransition(nextId);
// 	}
// 	prev () {
// 			if (this.inTransit) return;
// 			let nextId = +this.activeImg[0].dataset.id - 1;
// 			if (nextId < 1)
// 			nextId = this.length;
// 			this.startTransition(nextId);
// 	}
// 	switchBackgroundImage (nextId) {
// 			function onBackgroundTransitionEnd (e) {
// 					if (e.target === this) {
// 							this.style.setProperty('--img-prev', imageUrl);
// 							this.classList.remove(bgClass);
// 							this.removeEventListener('transitionend', onBackgroundTransitionEnd);
// 					}
// 			}
// 			const bgClass = 'slider--bg-next';
// 			const el = this.el;
// 			const imageUrl = `url(${this.images[+nextId - 1].src})`;
// 			el.style.setProperty('--img-next', imageUrl);
// 			el.addEventListener('transitionend', onBackgroundTransitionEnd);
// 			el.classList.add(bgClass);
// 	}
// }
// const sliderEl = document.getElementById('slider');
// const slider = new Slider(sliderEl);
// let timer = 0;
// function autoSlide () {
// 	requestAnimationFrame(() => {
// 			slider.next();
// 	});
// 	timer = setTimeout(autoSlide, 4000);
// }
// function stopAutoSlide () {
// 	clearTimeout(timer);
// 	this.removeEventListener('touchstart', stopAutoSlide);
// 	this.removeEventListener('mousemove', stopAutoSlide);  
// }
// sliderEl.addEventListener('mousemove', stopAutoSlide);
// sliderEl.addEventListener('touchstart', stopAutoSlide);
// timer = setTimeout(autoSlide, 4000);   
//========================================================================================================================================================

// function lerp({ x, y }, { x: targetX, y: targetY }) {
// 	const fraction = 0.1;
// 	x += (targetX - x) * fraction;
// 	y += (targetY - y) * fraction;
// 	return { x, y };
// }

// class Slider {
// 	constructor (el) {
// 			this.el = el;
// 			this.contentE0 = document.querySelector('.images-arsenal__box');
// 			this.contentEl = document.querySelector('.arsenal-slider');
// 			this.onMouseMove = this.onMouseMove.bind(this);
// 			this.images = el.getElementsByTagName('img');
// 			window.addEventListener('resize', this.onResize.bind(this));
// 			this.onResize();
// 			this.lastX = this.lastY = this.targetX = this.targetY = 0;
// 	}

// 	onResize () {
// 			const htmlStyles = getComputedStyle(document.documentElement);
// 			const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');
// 			const isMobile = this.isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;
// 			this.halfWidth = this.contentE0.offsetWidth / 2;
// 			this.halfHeight = this.contentE0.offsetHeight / 2;
// 			this.zDistance = htmlStyles.getPropertyValue('--z-distance');
// 			if (!isMobile && !this.mouseWatched) {
// 					this.mouseWatched = true;
// 					this.el.addEventListener('mousemove', this.onMouseMove);
// 					this.contentEl.style.setProperty('transform', `translateZ(${this.zDistance})`);
// 			} else if (isMobile && this.mouseWatched) {
// 					this.mouseWatched = false;
// 					this.el.removeEventListener('mousemove', this.onMouseMove);
// 					this.contentEl.style.setProperty('transform', 'none');
// 			}
// 	}

// 	getMouseCoefficients ({ clientX, clientY } = {}) {
// 			const halfWidth = this.halfWidth;
// 			const halfHeight = this.halfHeight;
// 			const xCoeff = ((clientX || this.targetX) - halfWidth) / halfWidth;
// 			const yCoeff = (halfHeight - (clientY || this.targetY)) / halfHeight;
// 			return { xCoeff, yCoeff }
// 	}

// 	onMouseMove ({ clientX, clientY }) {
// 			this.targetX = clientX - this.contentE0.getBoundingClientRect().left;
// 			this.targetY = clientY - this.contentE0.getBoundingClientRect().top;
// 			if (!this.animationRunning) {
// 					this.animationRunning = true;
// 					this.runAnimation();
// 			}
// 	}

// 	runAnimation () {
// 			if (this.animationStopped) {
// 					this.animationRunning = false;
// 					return;
// 			}
// 			const maxX = 10;
// 			const maxY = 10;
// 			const newPos = lerp({
// 					x: this.lastX,
// 					y: this.lastY
// 			}, {
// 					x: this.targetX,
// 					y: this.targetY
// 			});
// 			const { xCoeff, yCoeff } = this.getMouseCoefficients({
// 					clientX: newPos.x,
// 					clientY: newPos.y
// 			});
// 			this.lastX = newPos.x;
// 			this.lastY = newPos.y;
// 			this.positionImage({ xCoeff, yCoeff });
// 			this.contentEl.style.setProperty('transform', `
// 					translateZ(${this.zDistance})
// 					rotateX(${maxY * yCoeff}deg)
// 					rotateY(${maxX * xCoeff}deg)
// 			`);
// 			if (this.reachedFinalPoint) {
// 					this.animationRunning = false;
// 			} else {
// 					requestAnimationFrame(this.runAnimation.bind(this));
// 			}
// 	}

// 	get reachedFinalPoint () {
// 			const lastX = ~~this.lastX;
// 			const lastY = ~~this.lastY;
// 			const targetX = this.targetX;
// 			const targetY = this.targetY;
// 			return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX)
// 					&& (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
// 	}

// 	positionImage ({ xCoeff, yCoeff }) {
// 			const maxImgOffset = 1;
// 			const currentImage = this.images[0];
// 			if (currentImage) {
// 					currentImage.style.setProperty('transform', `
// 							translateX(${maxImgOffset * -xCoeff}em)
// 							translateY(${maxImgOffset * yCoeff}em)
// 					`);
// 			}
// 	}
// }

// const sliderEl = document.querySelector('.images-arsenal__box');
// if (sliderEl) {
// 	const slider = new Slider(sliderEl);
// }

function lerp({ x, y }, { x: targetX, y: targetY }) {
	const fraction = 0.1;
	x += (targetX - x) * fraction;
	y += (targetY - y) * fraction;
	return { x, y };
}

class Slider {
	constructor (el) {
			this.el = el;
			this.contentE0 = el.querySelector('.images-arsenal__slider');
			this.contentEl = el.querySelector('.arsenal-slider');
			this.onMouseMove = this.onMouseMove.bind(this);
			this.images = el.getElementsByTagName('img');
			window.addEventListener('resize', this.onResize.bind(this));
			this.onResize();
			this.lastX = this.lastY = this.targetX = this.targetY = 0;
	}

	onResize () {
			const htmlStyles = getComputedStyle(document.documentElement);
			const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');
			const isMobile = this.isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;
			this.halfWidth = this.contentE0.offsetWidth / 2;
			this.halfHeight = this.contentE0.offsetHeight / 2;
			this.zDistance = htmlStyles.getPropertyValue('--z-distance');
			if (!isMobile && !this.mouseWatched) {
					this.mouseWatched = true;
					this.el.addEventListener('mousemove', this.onMouseMove);
					this.contentEl.style.setProperty('transform', `translateZ(${this.zDistance})`);
			} else if (isMobile && this.mouseWatched) {
					this.mouseWatched = false;
					this.el.removeEventListener('mousemove', this.onMouseMove);
					this.contentEl.style.setProperty('transform', 'none');
			}
	}

	getMouseCoefficients ({ clientX, clientY } = {}) {
			const halfWidth = this.halfWidth;
			const halfHeight = this.halfHeight;
			const xCoeff = ((clientX || this.targetX) - halfWidth) / halfWidth;
			const yCoeff = (halfHeight - (clientY || this.targetY)) / halfHeight;
			return { xCoeff, yCoeff }
	}

	onMouseMove ({ clientX, clientY }) {
			this.targetX = clientX - this.contentE0.getBoundingClientRect().left;
			this.targetY = clientY - this.contentE0.getBoundingClientRect().top;
			if (!this.animationRunning) {
					this.animationRunning = true;
					this.runAnimation();
			}
	}

	runAnimation () {
			if (this.animationStopped) {
					this.animationRunning = false;
					return;
			}
			const maxX = 10;
			const maxY = 10;
			const newPos = lerp({
					x: this.lastX,
					y: this.lastY
			}, {
					x: this.targetX,
					y: this.targetY
			});
			const { xCoeff, yCoeff } = this.getMouseCoefficients({
					clientX: newPos.x,
					clientY: newPos.y
			});
			this.lastX = newPos.x;
			this.lastY = newPos.y;
			this.positionImage({ xCoeff, yCoeff });
			this.contentEl.style.setProperty('transform', `
					translateZ(${this.zDistance})
					rotateX(${maxY * yCoeff}deg)
					rotateY(${maxX * xCoeff}deg)
			`);
			if (this.reachedFinalPoint) {
					this.animationRunning = false;
			} else {
					requestAnimationFrame(this.runAnimation.bind(this));
			}
	}

	get reachedFinalPoint () {
			const lastX = ~~this.lastX;
			const lastY = ~~this.lastY;
			const targetX = this.targetX;
			const targetY = this.targetY;
			return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX)
					&& (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
	}

	positionImage ({ xCoeff, yCoeff }) {
			const maxImgOffset = 1;
			const currentImage = this.images[0];
			if (currentImage) {
					currentImage.style.setProperty('transform', `
							translateX(${maxImgOffset * -xCoeff}em)
							translateY(${maxImgOffset * yCoeff}em)
					`);
			}
	}
}

const sliderElements = document.querySelectorAll('.images-arsenal__slider');
sliderElements.forEach(sliderEl => {
	new Slider(sliderEl.closest('.tabs__body'));
});