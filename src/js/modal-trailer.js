import { refs } from './refs';
import { renderMarkupModal } from './modal-film';
import { spinnerOn, spinnerOff } from './spinner';
import * as basicLightbox from 'basiclightbox';
import axios from 'axios';
import Notiflix from 'notiflix';
import 'basiclightbox/dist/basicLightbox.min.css';
import { spinnerOn, spinnerOff } from './spinner';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'fa9433e46ed4abfaeb75bcf31f473feb';

async function onTrailerClick() {
  await fetchTrailer(currentId);
}

async function fetchTrailer(currentId) {
  spinnerOn();
  try {
    const response = await axios.get(
      `${BASE_URL}${currentId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const key = response.data.results[0].key;
    renderTrailer(key);
  } catch (error) {
    Notiflix.Notify.failure('Sorry, there is no trailer for this movie');
  }
  spinnerOff();
}

function renderTrailer(key) {
  const instance = basicLightbox.create(
    `<div class="modal-trailer">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEsc);
      },
    }
  );
    instance.show();
     function onEsc(evt) {
       if (evt.key === 'Escape') {
         instance.close();
       }
     }
}


export { fetchTrailer };
