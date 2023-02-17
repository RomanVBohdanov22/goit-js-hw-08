// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
//npm install simplelightbox

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </li>
`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryMurkup);

console.log(gallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

//var lightbox = new SimpleLightbox('.gallery a'); //, { captionDelay: 250, captionsData: "alt",});

/*lightbox.on('show.simplelightbox', function () {
	// Do something…
});*/
