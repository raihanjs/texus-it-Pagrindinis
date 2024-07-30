$(document).ready(function () {
  // Mobile Menu Start
  var $nav = $("#main-nav");
  var $toggle = $(".toggle");
  var data = {};
  var defaultData = {
    maxWidth: 768,
    customToggle: $toggle,
    navTitle: null,
    levelTitles: true,
    pushContent: ".container",
  };

  // calling like this only for demo purposes

  const initNav = function (conf) {
    var $old = $(".hc-offcanvas-nav");

    setTimeout(
      function () {
        if ($old.length) {
          // clear previous instance
          $old.remove();
        }
      },
      $toggle.hasClass("toggle-open") ? 420 : 0
    );

    if ($toggle.hasClass("toggle-open")) {
      $toggle.click();
    }

    // remove old toggle click event
    $toggle.off("click");

    // remember data
    $.extend(data, conf);

    // call the plugin
    $nav.clone().hcOffcanvasNav($.extend({}, defaultData, data));
  };
  initNav({ side: "right", levelOpen: "expand", levelSpacing: 25 });
  // Mobile Menu End

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
