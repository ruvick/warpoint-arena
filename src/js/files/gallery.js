
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgThumbnail from 'lightgallery/plugins/thumbnail'

// Базовые стили
import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
// import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
// const galleries = document.querySelectorAll('[data-gallery]');
// if (galleries.length) {
// 	galleries.forEach(gallery => {
// 		lightGallery(gallery, {
// 			//plugins: [lgZoom, lgThumbnail],
// 			licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
// 			speed: 500,
// 		});
// 	});
// }

// Добавляем обработчик клика на кнопки
// const buttons = document.querySelectorAll('.gallery-btn');
// buttons.forEach(button => {
//   button.addEventListener('click', function() {
//     // Находим родительский элемент галереи
//     const gallery = this.closest('[data-gallery]');
//     // Находим все изображения в этой галерее
//     const images = gallery.querySelectorAll('img');
    
//     // Создаем массив для хранения объектов изображений
//     const items = Array.from(images).map(img => ({
//       src: img.src,
//       thumb: img.src, // Если есть миниатюры, замените на нужный путь
//       subHtml: img.alt // Если хотите добавить описание
//     }));

//     // Получаем индекс текущего изображения
//     const currentIndex = Array.from(images).indexOf(this.previousElementSibling);

//     // Открываем галерею с нужными изображениями и текущим индексом
//     lightGallery(gallery, {
//       dynamic: true,
//       dynamicEl: items,
//       index: currentIndex,
//       licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
//       speed: 500,
//     }).openGallery();
//   });
// });



const galleries = document.querySelectorAll('[data-gallery]');

// Обработчик для кнопки gallery-btn в первом экране
const firstScreenButton = document.querySelector('.first-screen__actions.gallery-btn');

if (firstScreenButton) {
  firstScreenButton.addEventListener('click', function() {
    // Получаем изображение, которое нужно открыть в галерее
    const imageToOpen = document.querySelector('.first-screen__img img');

    // Создаем массив с объектом изображения
    const items = [{
      src: imageToOpen.src,
      thumb: imageToOpen.src, // Замените на путь к миниатюре, если есть
      subHtml: imageToOpen.alt // Добавьте описание, если нужно
    }];

    // Открываем галерею с нужным изображением
    lightGallery(galleries[0], {
      dynamic: true,
      dynamicEl: items,
      index: 0, // Поскольку у нас только одно изображение
      licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
      speed: 500,
    }).openGallery();
  });
}

// Добавляем обработчик клика на кнопки в других галереях
galleries.forEach(gallery => {
  const buttons = gallery.querySelectorAll('.slide-maps-game__img-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const images = gallery.querySelectorAll('img');
      const items = Array.from(images).map(img => ({
        src: img.src,
        thumb: img.src,
        subHtml: img.alt
      }));

      const currentIndex = Array.from(images).indexOf(this.previousElementSibling);

      lightGallery(gallery, {
        dynamic: true,
        dynamicEl: items,
        index: currentIndex,
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
      }).openGallery();
    });
  });
});