import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup)

galleryContainer.addEventListener('click', onGalleryContainerClik)


function createGalleryPicturesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a  class="gallery__link" href="${original}">
    <img 
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
   
    />
  </a>
</div>`}).join('');
}
function onGalleryContainerClik(event)
{
  onLinkBan();

  onClassCheck();

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" heigth="600">
  `, {
    onShow: () =>{ document.addEventListener("keydown", onEscKeyPress);
  },
		onClose: () => { document.removeEventListener("keydown", onEscKeyPress);}
	});
  instance.show();


}

function onClassCheck(event)
{
  const isGalleryEl = event.target.classList.contains('gallery__image');

  if (!isGalleryEl) {
    return;

  }
}

 function onLinkBan(event) {
    event.preventDefault();
  }

 function onEscKeyPress(event) 
  {
    if (event.code === "Escape") {
      instance.close();
    }
  }