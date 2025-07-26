"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// ==== Sticky Menu ====
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

// ::::: GLobal Javascript ::::
// ================================Animate Interaction on Scroll ==================================
JOS.init({
  // disable: false, // Disable JOS gloabaly | Values :  'true', 'false'
  // debugMode: true, // Enable JOS debug mode | Values :  'true', 'false'
  passive: false, // Set the passive option for the scroll event listener | Values :  'true', 'false'

  once: true, // Disable JOS after first animation | Values :  'true', 'false' || Int : 0-1000
  animation: "fade-up", // JOS global animation type | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  // animationInverse: "static", // Set the animation type for the element when it is scrolled out of view | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  timingFunction: "ease", // JOS global timing function | Values :  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'steps()', 'cubic-bezier()', 'my-custom-timing-function'
  //mirror : false, // Set whether the element should animate back when scrolled out of view | Values :  'true', 'false'
  threshold: 0, // Set gloabal the threshold for the element to be visible | Values :  0-1
  delay: 0.3, // Set global the delay for the animation to start | Values :  0,1,2,3,4,5
  duration: 0.5, // Set global the duration for the animation playback | Values :  flota : 0-1 & int : 0,1,2,3,4,5

  // startVisible: "true", // Set whether the element should animate when the page is loaded | Values :  'true', 'false' || MS : 0-10000
  scrollDirection: "down", // Set the scroll direction for the element to be visible | Values :  'up', 'down', 'none'
  //scrollProgressDisable: true // disable or enable scroll callback function | Values :  'true', 'false'
  // intersectionRatio: 0.4, // Set the intersection ratio between which the element should be visible | Values :  0-1 (automaticaly set)
  // rootMargin_top: "0%", // Set by which percent the element should animate out (Recommended value between 10% to -30%)
  // rootMargin_bottom: "-50%", // Set by which percent the element should animate out (Recommended value between -10% to -60%)
  rootMargin: "0% 0% 15% 0%", // Set the root margin for the element to be visible | Values :  _% _% _% _%  (automaticaly set)
});

// ======================================== Accordion ======================================
let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-header");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

//=========== Pricing Button =============
function toggleSwitch() {
  var month = document.querySelectorAll(".month");
  var annual = document.querySelectorAll(".annual");
  for (var i = 0; i < month.length; i++) {
    if (document.getElementById("toggle").checked == true) {
      month[i].classList.add("hidden");
      annual[i].classList.remove("hidden");
    } else {
      month[i].classList.remove("hidden");
      annual[i].classList.add("hidden");
    }
  }
}

//=========== Progress Bar =============
// Find the element with the class 'progress-bar'
const progressBars = document.querySelectorAll(".progress-bar");

// Iterate over each progress bar element
progressBars.forEach((progressBar) => {
  // Get the value of the 'data-percentage-value' attribute for each progress bar
  const percentageValue = progressBar.getAttribute("data-percentage-value");
  progressBar.style.width = percentageValue + "%";
});

//=========== Pricing Button =============
// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listeners to tab buttons
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all tab buttons and hide all tab content
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Get the data-tab attribute of the clicked button
    const tabId = button.getAttribute("data-tab");
    const correspondingTab = document.getElementById(tabId);

    // Add 'active' class to the clicked button and show the corresponding tab content
    button.classList.add("active");
    correspondingTab.classList.remove("hidden");
  });
});

// =========== Show Image On Hover =============
function showImage(event) {
  const hoverOnItem = event.currentTarget;
  const hoverOnImage = hoverOnItem.querySelector(".hover-on-image");
  const hoveredImage = document.getElementById("hoveredImage");

  // Set the hovered image source to the hoverOn image source
  hoveredImage.src = hoverOnImage.src;

  // Show the hovered image
  hoveredImage.style.display = "block";

  // Move the hovered image with the cursor
  document.addEventListener("mousemove", moveImage);

  function moveImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    hoveredImage.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Hide the hovered image when mouse leaves the hoverOn item
  hoverOnItem.onmouseleave = () => {
    hoveredImage.style.display = "none";
    document.removeEventListener("mousemove", moveImage);
  };
}

/* ::::::::::::::::::::::
:: Template Javascript ::
::::::::::::::::::::::::: */

// =========== Client Logo Slider =============
const clientSlider = new Swiper(".client-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// =========== Testimonial Slider =============
const testimonialSlider = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 8000,
  spaceBetween: 24,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const testimonialSliderTwo = new Swiper(".testimonial-slider-2", {
  slidesPerView: 1,
  loop: true,
  speed: 8000,
  spaceBetween: 24,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const testimonialSliderThree = new Swiper(".testimonial-slider-3", {
  slidesPerView: 1,
  loop: true,
  speed: 300,
  spaceBetween: 24,
  navigation: {
    nextEl: ".testimonial-slider-button-next",
    prevEl: ".testimonial-slider-button-prev",
  },
});

// =========== Testimonial Slider Reverse =============
const testimonialSliderReverse = new Swiper(".testimonial-slider-reverse", {
  slidesPerView: 1,
  loop: true,
  speed: 8000,
  spaceBetween: 24,
  autoplay: {
    reverseDirection: true,
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

// ===========  Currency Slider =============
const currencySlider = new Swiper(".currency-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  spaceBetween: 80,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
    1800: {
      slidesPerView: 7,
    },
  },
});

// ===========  Testimonial Slider =============
var testimonialThumb = new Swiper(".testimonial-thumbs", {
  slidesPerView: 3,
  clickable: true,
  direction: "vertical",
  // spaceBetween: 10,
  //
});
var testimonialGallery = new Swiper(".testimonial-gallery", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".testimonial-slider-button-next",
    prevEl: ".testimonial-slider-button-prev",
  },
  thumbs: {
    swiper: testimonialThumb,
  },
});

// =========== Integration Logo Slider =============
const integrationSlider = new Swiper(".integration-slider", {
  slidesPerView: 2,
  loop: true,
  speed: 3000,
  spaceBetween: 24,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
const integrationSliderTwo = new Swiper(".integration-slider-2", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

const integrationVerticalSlider = new Swiper(".integration-slider-vertical", {
  slidesPerView: 6,
  spaceBetween: 16,
  loop: true,
  speed: 3000,
  direction: "vertical",
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
const integrationVerticalReverseSlider = new Swiper(
  ".integration-slider-vertical-reverse",
  {
    slidesPerView: 6,
    spaceBetween: 16,
    loop: true,
    speed: 3000,
    direction: "vertical",
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  },
);

// ========== Button Effect ===============
// Select all buttons with the 'ripple-button' class
const buttons = document.querySelectorAll(".ripple-button");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Create the ripple element
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    // Get the size of the button
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    // Calculate the position of the ripple
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append the ripple to the button
    button.appendChild(ripple);

    // Remove the ripple after animation ends
    ripple.addEventListener("animationend", () => ripple.remove());
  });
});
