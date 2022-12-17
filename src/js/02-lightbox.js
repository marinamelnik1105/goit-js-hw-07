import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryPicturesMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('afterbegin',galleryMarkup )
galleryContainer.addEventListener('click', onGalleryContainerClik)


function createGalleryPicturesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `}).join('');
}
function onGalleryContainerClik(event)
{
    event.preventDefault();

    const isGalleryEl = event.target.classList.contains('gallery__image');

    if (!isGalleryEl) {
        return;
    }
    const lightBoxOptions={captions: true,
        captionsData: "alt",
        captionDelay: 250}
    const lightBox = new SimpleLightbox('.gallery a', lightBoxOptions)
   
}

