import { galleryItems } from './gallery-items.js';

import "simplelightbox/dist/simple-lightbox.min.css";

import SimpleLightbox from  "simplelightbox";

console.log(galleryItems);

const paletteGallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems (galleryItems);


paletteGallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems (items) {
    return items.map(({preview, original, description}) => {
        return `
      <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      `;
    }).join('');
    
};



new SimpleLightbox('.gallery a',{
    captionsData: 'alt' ,
    captionDelay: 250,
   });

