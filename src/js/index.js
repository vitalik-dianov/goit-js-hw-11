import '../css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImage } from './fetchImage';
import { resetPage } from './fetchImage';
import { markup } from './markup';

const formRef = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtnRef = document.querySelector('.load-more');
let simpleLightBox;

formRef.addEventListener('submit', searchImage);
loadMoreBtnRef.addEventListener('click', addMarkup);

function searchImage(e) {
  e.preventDefault();
  const searchQuery = e.target.searchQuery.value.trim();
  loadMoreBtnRef.classList.remove('is-visible');
  resetPage();
  galleryRef.innerHTML = '';
  fetchImage(searchQuery)
    .then(image => {
      const arrayImage = image.data.hits;
      if (arrayImage.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      } else {
        arrayImage.map(createMarkup);
        createLightboxGallery();
        loadMoreBtnRef.classList.add('is-visible');
      }
    })
    .catch(error => error);
}

function createMarkup(data) {
  return galleryRef.insertAdjacentHTML('beforeend', markup(data));
}
function addMarkup() {
  simpleLightBox.destroy();
  fetchImage(formRef.searchQuery.value).then(image => {
    const arrayImage = image.data.hits;
    arrayImage.map(createMarkup);
    createLightboxGallery().refresh();
  });
}

function createLightboxGallery() {
  return (simpleLightBox = new SimpleLightbox('.photo-card a', {
    captionsData: 'alt',
    captionDelay: 250,
  }));
}
