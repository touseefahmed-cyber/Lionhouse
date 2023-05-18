(function() {
//Video Play Pause Control Start
let playButton = document.getElementById("play_button");
let pauseButton = document.getElementById("pause_button");
playButton.addEventListener("click", function() {
video.play();
playButton.classList.add('vplay');
pauseButton.classList.remove('vpause');
document.querySelector('html').classList.add('playvideo');
});

pauseButton.addEventListener("click", function() {
video.pause();
 playButton.classList.remove('vplay');
pauseButton.classList.add('vpause');
});

/*
//Video Play Pause Control End
//Video Sound on & off Ctrl Start
let soundOff = document.getElementById("sound-off");
let soundOn = document.getElementById("sound-on");
let soundCtrl = document.querySelector(".sound-ctrl");

soundOff.addEventListener("click", function() {
video.muted = true;
soundCtrl.classList.add('soundctrlshow');
});

soundOn.addEventListener("click", function() {
video.muted = false;
soundCtrl.classList.remove('soundctrlshow'); 
});


*/
//Video Sound on & off Ctrl End
video.onended = function() {
  document.querySelector('html').classList.remove('playvideo');
 playButton.classList.remove('vplay');
};


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
/*
var tl = gsap.timeline({scrollTrigger:{
  trigger:"#banner",
   markers:true,
  start:"20% 50%",
  end:"30% 50%",
  scrub:2,
  pin:true
}});
tl.to(".banner-heading",{
  y: -300
},'a')



**/
})();

const $body = document.querySelector('body');
const toggleOffcanvas = () => {
    $body.classList.toggle('has-offcanvas');
}
document.querySelector('.hamburger-toggle').addEventListener('click', toggleOffcanvas);