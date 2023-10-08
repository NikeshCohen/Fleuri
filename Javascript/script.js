////////////// DOM Elements //////////////

const PageLinks = document.querySelectorAll(".link");
const acc = document.querySelectorAll(".faq-secondary-container");
const copyright = document.querySelector(".copyright");

////////////// Page Links //////////////

const removeHash = () => {
  history.replaceState(
    "",
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
};

PageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      removeHash();
    }),
      5;
  });
});

setTimeout(() => {
  history.replaceState(
    "",
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
}, 2);

////////////// FAQ Section //////////////

acc.forEach((item) => {
  item.addEventListener("click", function () {
    // When it's clicked, loop through all the items
    acc.forEach((el) => {
      // Close any open items
      if (el.classList.contains("active")) {
        closeAcc(el);
        // If it's the one that was clicked and it's closed, open it
      } else if (el === item) {
        openAcc(el);
      }
    });
  });
});

function closeAcc(el) {
  el.classList.remove("active");
  el.nextElementSibling.style.maxHeight = null;
}

function openAcc(el) {
  el.classList.add("active");
  el.nextElementSibling.style.maxHeight =
    el.nextElementSibling.scrollHeight + "px";
}

////////////// Testimonials Section //////////////

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//////////////////////////////////////

const nav = document.querySelector(".nav");

window.onscroll = function () {
  myFunctiondesk();
};

var sticky = nav.offsetTop;

function myFunctiondesk() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

////////////////////////////////////////////////////////////////////////////

const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
});
