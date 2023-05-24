

var element =  document.getElementById('blaze-slider2');
if (typeof(element) != 'undefined' && element != null)
{
  const ell = document.querySelector('#blaze-slider2');
  new BlazeSlider(ell, {
    all: {
      autoplayDirection: 'to Right',
      enableAutoplay: true,
      autoplayInterval: 500,
      transitionDuration: 300,
      slidesToShow: 6,
      slideGap: '42px',
    },
    '(max-width: 1280px)': {
      slidesToShow: 5,
    },
    '(max-width: 900px)': {
      slidesToShow: 4,
    },
    '(max-width: 639px)': {
      slidesToShow: 2,
    },
  })
}

var element =  document.getElementById('blaze-slider1');
if (typeof(element) != 'undefined' && element != null)
{

  //****************************** */


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

}

//****************************** */
const body = document.body;
const triggerMenu = document.querySelector(".page-header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 100) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

//****************************** */

var tl = gsap.timeline({scrollTrigger:{
  trigger:".upper-video-sec",
  markers:false,
  start:"15% 50%",
  end:"30% 50%",
  scrub:2,
  pin:false
}});
tl.to(".banner-heading",{
  y: -120
},'a')
tl.to(".banner-heading-before",{
  y: -120
},'a')
tl.to("#video",{
  y: -120
},'a')

const $body = document.querySelector('body');
const toggleOffcanvas = () => {
    $body.classList.toggle('has-offcanvas');
}
document.querySelector('.hamburger-toggle').addEventListener('click', toggleOffcanvas);