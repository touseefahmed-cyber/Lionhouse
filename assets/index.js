
/*
          * =======================================================
          *            Theme setup.
          * =======================================================
*/

var element =  document.getElementById('blaze-slider2');
if (typeof(element) != 'undefined' && element != null)
{
  const ell = document.querySelector('#blaze-slider2');
  new BlazeSlider(ell, {
    all: {
      autoplayDirection: 'to Right',
      enableAutoplay: false,
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


/*
          * =======================================================
          *            Theme setup.
          * =======================================================
*/

var element =  document.getElementById('blaze-slider1');
if (typeof(element) != 'undefined' && element != null)
{

const el = document.querySelector('#blaze-slider1');
new BlazeSlider(el, {
  all: {
    autoplayDirection: 'to Right',
    enableAutoplay: false,
    autoplayInterval: 2000,
    transitionDuration: 300,
    slidesToShow: 3,
    slideGap: '50px',
  },
  '(max-width: 900px)': {
    slidesToShow: 2,
  },
  '(max-width: 500px)': {
    slidesToShow: 1,
  },
});

}


/*
          * =======================================================
          *            Theme setup.
          * =======================================================
*/
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


/*
          * =======================================================
          *            Theme setup.
          * =======================================================
*/

var tl = gsap.timeline({scrollTrigger:{
  trigger:".upper-video-sec",
  markers:false,
  end:"30% 50%",
  start: "center center",
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
tl.to("video",{
  height:'auto',
  width:'100%',
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
  trigger:"#service-con",
   start: `top center`,
  end: "125% center",
  scrub: 0.5,
  markers: false,
  pin: false,
  toggleClass: 'sidebar-stick'
}});

/*
          * =======================================================
          *            Theme setup.
          * =======================================================
*/

const $body = document.querySelector('body');
const toggleOffcanvas = () => {
    $body.classList.toggle('has-offcanvas');
}
document.querySelector('.hamburger-toggle').addEventListener('click', toggleOffcanvas);


/*
          * =======================================================
          *            Theme setup.
          * =======================================================
*/

var joshele =  document.querySelector('.josh-js');
if (typeof(joshele) != 'undefined' && joshele != null)
{
const josh = new Josh({
  // DOM CSS class to Animate, default is "josh-js"
  initClass: "josh-js",

  // Animation CSS class from Animate.css library
  animClass: "animate__animated",

  // Element distance of viewport to triggering the animation. default is 0.2 means 20% of element view animation will trigger
  offset: 0.2,

  // Animation will trigger on Mobile or not. Default is true
  animateInMobile: true,

  // Animation will trigger on newly added element or not. Default is false
  onDOMChange: false,
});
}


var inputs = document.querySelectorAll('.marquee');

inputs.forEach(function(input) {
  input.addEventListener('mouseover', function hover() {
    this.classList.add("selected");
  });

  input.addEventListener('mouseleave', function leave() {
    this.classList.remove("selected");
  });
});
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});
