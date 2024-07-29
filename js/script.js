$(document).ready(function () {
  // Mobile Menu btn
  $(".mobile-menu").click(function () {
    $(".main-menu").toggleClass("menu-right");
  });
  // Calendar
  $("#calendar")
    .mobiscroll()
    .datepicker({
      controls: ["calendar"],
      display: "inline",
      headerText: "Trečiadienis, 05-19 ",
    });
  mobiscroll.setOptions({
    theme: "ios",
    themeVariant: "light",
  });

  $(".mbsc-calendar-body").prepend("<b>Appended text</b>");

  // News Slider
  new Swiper(".news-slider", {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // Partners Slider
  new Swiper(".partners-slider", {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
