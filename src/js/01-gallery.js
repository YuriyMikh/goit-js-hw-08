// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </div>`
    )
    .join('');
}

// переопределяем captionDelay и captionsData в момент создания нового экземпляра
let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});








//-----------
//все что ниже - скопировано из 7-й домашки

// const galleryContainerRef = document.querySelector('.gallery');
// const galleryMarkup = createGalleryMarkup(galleryItems);

// galleryContainerRef.insertAdjacentHTML('afterbegin', galleryMarkup);

// function createGalleryMarkup(array) {
//   return array
//     .map(
//       ({ preview, original, description }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//     )
//     .join('');
// }

// galleryContainerRef.addEventListener('click', onGalleryClickShowImage);

// function onGalleryClickShowImage(event) {
//   event.preventDefault();
//     if (event.target.nodeName !== 'IMG') return;
//     var gallery = $('.gallery a').simpleLightbox();
//     gallery.next();

//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `);
//   instance.show();

  //закрываем изображение оригинального размера по нажатию на Escape (через анонимную функцию)
//   document.addEventListener('keydown', event => {
//     const visible = basicLightbox.visible();
//     if (visible && event.code === 'Escape') {
//       instance.close();
//     }
//   });
// }

//вариант закрытия изображения по клавише Escape через отдельную функцию:
// document.addEventListener('keydown', onCloseModalEscapeKey);

// function onCloseModalEscapeKey(event) {
//   const visible = basicLightbox.visible();
//   if (visible && event.code === 'Escape') instance.close();
// }
