document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const tabi = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__contry-item")
          .forEach(function (tabContent) {
            tabContent.classList.remove("is-active");
            document
              .querySelector(`[data-path="${tabi}"]`)
              .classList.add("is-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const tab = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-target="${tab}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const dato = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-list")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-list-active");
            document
              .querySelector(`[data-dat="${dato}"]`)
              .classList.add("catalog__story-list-active");

            $(
              "#accordion,#accordion1,#accordion2,#accordion3,#accordion4"
            ).accordion("refresh"); //обновляем
          });
      });
    });
  // Имена
  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabs) {
      tabs.addEventListener("click", function (event) {
        const names = event.currentTarget.dataset.name;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-name="${names}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsi) {
      tabsi.addEventListener("click", function (event) {
        const lames = event.currentTarget.dataset.lame;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-lame="${lames}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsit) {
      tabsit.addEventListener("click", function (event) {
        const itmes = event.currentTarget.dataset.it;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-it="${itmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsru) {
      tabsru.addEventListener("click", function (event) {
        const rumes = event.currentTarget.dataset.ru;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-ru="${rumes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const belmes = event.currentTarget.dataset.bel;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-bel="${belmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const beirlmes = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-puro="${beirlmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const beirlmes = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-pur2="${beirlmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const beirlmes = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-pur3="${beirlmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const beirlmes = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-pur4="${beirlmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  document
    .querySelectorAll(".catalog__contry-item")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const beirlmes = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__story-item-names")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-item-purple");
            document
              .querySelector(`[data-pur5="${beirlmes}"]`)
              .classList.add("catalog__story-item-purple");
          });
      });
    });

  // emit
  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baalmes = event.currentTarget.dataset.name;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit="${baalmes}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiailmes = event.currentTarget.dataset.it;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit="${baiailmes}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baialmes = event.currentTarget.dataset.lame;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit="${baialmes}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmes = event.currentTarget.dataset.ru;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit="${baiarlmes}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmesb = event.currentTarget.dataset.bel;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit="${baiarlmesb}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmesi = event.currentTarget.dataset.lame;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit2="${baiarlmesi}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmesi = event.currentTarget.dataset.it;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit3="${baiarlmesi}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmesi = event.currentTarget.dataset.ru;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit4="${baiarlmesi}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmesi = event.currentTarget.dataset.bel;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit5="${baiarlmesi}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".catalog__story-item-names")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const baiarlmesi = event.currentTarget.dataset.name;

        document
          .querySelectorAll(".catalog__story-countrys")
          .forEach(function (tabContent) {
            tabContent.classList.remove("catalog__story-countrys-active");
            document
              .querySelector(`[data-emit1="${baiarlmesi}"]`)
              .classList.add("catalog__story-countrys-active");
          });
      });
    });

  document
    .querySelectorAll(".gallery-swiper__image")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function (event) {
        const popuper = event.currentTarget.dataset.but;

        document.querySelectorAll(".popup").forEach(function (tabContent) {
          tabContent.classList.remove("popup-active");
          document
            .querySelector(`[data-pop="${popuper}"]`)
            .classList.add("popup-active");
        });
      });
    });

  // Галерея + popup

  const popupClose = document.querySelectorAll(".popup-close");
  const popupBtn = document.querySelectorAll(".popup__btn");
  const popup = document.querySelectorAll(".popup");

  popupClose.forEach(function (popupclose) {
    popupclose.addEventListener("click", function () {
      popup.forEach(function (popupItem) {
        popupItem.classList.remove("popup-active");
      });
    });
  });

  popupBtn.forEach(function (popupclose) {
    popupclose.addEventListener("click", function () {
      popup.forEach(function (popupItem) {
        popupItem.classList.remove("popup-active");
      });
    });
  });

  document
    .querySelectorAll(".gallery-swiper__image")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function () {
        document.querySelector("body").classList.add("lock");
      });
    });

  document
    .querySelectorAll(".popup-close,.popup__btn")
    .forEach(function (tabsbel) {
      tabsbel.addEventListener("click", function () {
        document.querySelector("body").classList.remove("lock");
      });
    });

  // все события
  const devbtn1 = document.querySelector(".btn1");
  const devbtn2 = document.querySelector(".btn2");
  const devitem = document.querySelectorAll(".dev__cards-item");
  devbtn1.addEventListener("click", function () {
    devitem.forEach(function (devitems) {
      devitems.classList.add("card-active");
    });
    devbtn2.classList.add("btn-active");
    devbtn1.classList.add("btn-disabled");
  });

  devbtn2.addEventListener("click", function () {
    devitem.forEach(function (devitems) {
      devitems.classList.remove("card-active");
    });
    devbtn2.classList.remove("btn-active");
    devbtn1.classList.remove("btn-disabled");
  });

  // Сделать чтобы не скролился при нажатиии

  //   document.querySelector('.dev__cards-item').addEventListener('click', function() {
  //     document.querySelector('body').classList.toggle('lock')
  // })

  // accordion

  $(function () {
    $("#accordion,#accordion1,#accordion2,#accordion3,#accordion4").accordion({
      // active: false,
      collapsible: true,
      animate: 400,
    });
  });

  // swiper

  const galleryswiper = new Swiper(".gallery-swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 50,

    // If we need pagination
    pagination: {
      el: ".gallery-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
  });

  const Izdanswiper = new Swiper(".izdan-swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",

    // If we need pagination
    pagination: {
      el: ".izdan-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".izdan-button-next",
      prevEl: ".izdan-button-prev",
    },
  });

  const Porjectsswiper = new Swiper(".projects-swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    speed: 800,
    // If we need pagination
    pagination: {
      el: ".projects-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".projects-button-next",
      prevEl: ".projects-button-prev",
    },
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
  });

  // ApiYandex

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.81, 37.32],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 9,
    });

    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.809544, 37.024757], // координаты точки
      },
    });

    var myPlacemark = new ymaps.Placemark(
      [55.810987, 37.023485],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "location-svgrepo-com (1).svg",
        iconImagesize: [30, 42],
        iconImageoffset: [-3, -42],
      }
    );

    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }

  // header

  const params = {
    btnClassName: "header__item-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled",
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(
        params.disabledClassName,
        params.activeClassName
      );
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(
        `.${params.activeClassName}`
      );

      if (
        activeElements.length &&
        !evt.target.closest(`.${params.activeClassName}`)
      ) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const pith = btn.dataset.pith;
        const drop = document.querySelector(`[data-tirget="${pith}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();

  const element = document.querySelector(".gallery__select");
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: "Шооооо? Пиши внятно ",
    shouldSort: false,
  });

});
