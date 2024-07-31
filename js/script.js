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

  // ========================Calendar========================
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

  var eventList = $(".events-list");
  var schedule = ["15", "20"];
  function showSchedule(schedule) {
    eventList.empty();
    for (i of schedule) {
      eventList.append(`
        <div class="events-item">
                  <div class="events-date">
                    <h3>${i}</h3>
                    <h4>Rugpjūtis</h4>
                  </div>
                  <div class="events-text">
                    <h4>Ąžuoliuko sodinimo ceremonija</h4>
                    <p><i class="fa-regular fa-clock"></i> 18:00 -19:00</p>
                    <p>
                      <i class="fa-solid fa-location-dot"></i> Prie Ignalinos
                      rajono kultūros centro (Ateities g. 43)
                    </p>
                  </div>
      </div>
      `);
    }
  }
  showSchedule(schedule);

  // Add schedule class after 3 seconds
  setTimeout(() => {
    $(
      ".mbsc-calendar-cell-text[aria-label='Thursday, Rugpjūtis 15, 2024'], .mbsc-calendar-cell-text[aria-label='Tuesday, Rugpjūtis 20, 2024']"
    ).addClass("schedule");
  }, 500);
  // Load Scheduled date
  setTimeout(() => {
    $(".schedule").click(function () {
      var selected = $(this).text();
      schedule = [selected];
      showSchedule(schedule);
    });
  }, 900);

  // ==========================News Slider==========================
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
