import '../css/style.css';

import BlazeSlider from 'blaze-slider';
import 'blaze-slider/dist/blaze.css';

(function() {


const ell = document.querySelector('#blaze-slider2');
new BlazeSlider(ell, {
  all: {
    autoplayDirection: 'to Right',
    enableAutoplay: true,
    autoplayInterval: 2000,
    transitionDuration: 300,
    slidesToShow: 6,
  },
  '(max-width: 900px)': {
    slidesToShow: 2,
  },
  '(max-width: 500px)': {
    slidesToShow: 6,
  },
})



const el = document.querySelector('#blaze-slider1');
new BlazeSlider(el, {
  all: {
    autoplayDirection: 'to Right',
    enableAutoplay: true,
    autoplayInterval: 2000,
    transitionDuration: 300,
    slidesToShow: 3,
  },
  '(max-width: 900px)': {
    slidesToShow: 2,
  },
  '(max-width: 500px)': {
    slidesToShow: 1,
  },
});



})();