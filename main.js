/* navigation  */

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});


/* slideshow */

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);



const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{
  slide.style.left = slideWidth * index +'px';
};

slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, tragetSlide) => {
  track.style.transform  = 'translateX(-'+ tragetSlide.style.left +')';
 

}


dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const tragetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, tragetSlide);

  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
  
});





/* OwlCarousel */
$(document).ready(function(){
  $('.testimonial-slide').owlCarousel({
      loop:true,
      margin:80,
      nav:false,
      dots: true,
     
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }

  })
});


/* Scroll Back To Top Button */
