
const swiper = new Swiper('.comand__slider', {
  // loop: true,
  speed: 1500,
  pagination: {
    el: '.comand-pagination',
    clickable: false,
  },
  slidesPerView: 3,
  spaceBetween: 170,
  breakpoints: {
    0: {
      centeredSlides: true,
      spaceBetween: 50,
      slidesPerView: 1,
      pagination: {
        el: '.comand-pagination',
        clickable: true,
      },
    },
    1330: {
      slidesPerView: 3,
      spaceBetween: 170,
    },
  },
  touchEventsTarget: 'container', // Привязываем события касания к контейнеру
  touchRatio: 1, // Устанавливаем коэффициент для лучшего управления
  simulateTouch: true,
});


const swiper4 = new Swiper('.tarif__slider', {
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: false, // глобальная настройка для всех breakpoints
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    0: {
      centeredSlides: true,
      spaceBetween: 20,
      autoHeight: true, 
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination-tarif',
        clickable: true, // глобальная настройка для всех breakpoints
      },
    },
    1180: {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination-tarif',
        clickable: true, // глобальная настройка для всех breakpoints
      },
    },
    1335: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  touchEventsTarget: 'container',
  touchRatio: 1,
  simulateTouch: true,

  on: {

  },
});




const swiper2 = new Swiper('.viddeo__slider', {
  speed: 1500,
  pagination: {
    el: '.viddeo-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.viddeo-button-next',
    prevEl: '.viddeo-button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    0: {
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: '.viddeo-pagination',
        clickable: true,
      },
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  touchEventsTarget: 'container',
  touchRatio: 1,
  simulateTouch: true,

  on: {
    breakpoint: function (swiper) {
      // Обновляем состояние навигации при изменении брейкпоинта
      setTimeout(() => {
        swiper.update();
        swiper.navigation.update();  // Обновляем состояние стрелок навигации
      }, 1); // Задержка для корректного обновления
    },
    slideChange: function (swiper) {
      // Обновляем состояние навигации при смене слайда
      swiper.navigation.update();
    },
  },
});


const swiper3 = new Swiper('.vibor__slider', {
  speed: 1500,
  pagination: {
    el: '.vibor-pagination',
    clickable: false,
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    0: {
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: '.vibor-pagination',
        clickable: true,
      },
    },
    1180: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  touchEventsTarget: 'container',
  touchRatio: 1,
  simulateTouch: true,

  on: {

  },
});


const swiper6 = new Swiper('.vid__slider', {
  speed: 1500,
  pagination: {
    el: '.vid-pagination',
    clickable: false,
  },
  slidesPerView: 6,
  spaceBetween: 10,
  breakpoints: {
    0: {
      // centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 2,
      pagination: {
        el: '.vid-pagination',
        clickable: true,
      },
    },
    735: {
      // centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 3,
      pagination: {
        el: '.vid-pagination',
        clickable: true,
      },
    },
      1224: {
        // centeredSlides: true,
        spaceBetween: 20,
        slidesPerView: 5,
        pagination: {
          el: '.vid-pagination',
          clickable: true,
        },
      },
      
    1316: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
  touchEventsTarget: 'container',
  touchRatio: 1,
  simulateTouch: true,

  on: {

  },
});



const swiper5 = new Swiper('.otsiv__slider', {
  speed: 1000,
  pagination: {
    // el: '.swiper-pagination-otsiv',
    clickable: false, // глобальная настройка для всех breakpoints
  },
  navigation: {
    nextEl: '.swiper-button-otsiv-next',
    prevEl: '.swiper-button-otsiv-prev',
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    0: {
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination-otsiv',
        clickable: true, // глобальная настройка для всех breakpoints
      },
    },
    0: {
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination-otsiv',
        clickable: true, // глобальная настройка для всех breakpoints
      },
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  touchEventsTarget: 'container',
  touchRatio: 1,
  simulateTouch: true,

  on: {

  },
});



function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");
  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }
  this.arraySort(this.оbjects);
  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });
  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];
    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    //for (let i = 0; i < оbjects.length; i++) {
    for (let i = оbjects.length - 1; i >= 0; i--) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};
// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
}
// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}
// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};
// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
const da = new DynamicAdapt("max");
da.init();



document.addEventListener("DOMContentLoaded", function () {
  const spollers = document.querySelectorAll('.header__spollers');

  spollers.forEach(spoller => {
    const button = spoller.querySelector('button');
    const body = spoller.querySelector('.header__body');
    const a = spoller.querySelector('.spoller__a');

    button.addEventListener('click', function (e) {
      e.preventDefault(); // чтобы ссылка не перенаправляла

      // Закрываем все открытые спойлеры перед открытием текущего
      spollers.forEach(otherSpoller => {
        if (otherSpoller !== spoller) {
          const otherBody = otherSpoller.querySelector('.header__body');
          const otherA = otherSpoller.querySelector('.spoller__a');
          otherBody.classList.remove('s-body__active');
          otherA.classList.remove('s-btn__active');
        }
      });

      // Открываем/закрываем текущий спойлер
      a.classList.toggle('s-btn__active');
      body.classList.toggle('s-body__active');
    });
  });

  // Закрытие всех спойлеров при клике вне спойлера
  document.addEventListener('click', function (e) {
    spollers.forEach(spoller => {
      if (!spoller.contains(e.target)) {
        const body = spoller.querySelector('.header__body');
        const a = spoller.querySelector('.spoller__a');
        body.classList.remove('s-body__active');
        a.classList.remove('s-btn__active');
      }
    });
  });
});


document.querySelectorAll('.select').forEach(select => {
  const title = select.querySelector('.select__title');
  const options = select.querySelector('.select__options');
  const optionItems = options.querySelectorAll('.select__option');
  
  // Открытие и закрытие списка опций при клике на заголовок
  title.addEventListener('click', () => {
    select.classList.toggle('_select-open');
  });
  
  // Выбор опции
  optionItems.forEach(option => {
    option.addEventListener('click', () => {
    const value = option.dataset.value;
    const text = option.textContent;
    
    title.textContent = text; // Обновляем заголовок
    select.classList.remove('_select-open'); // Закрываем список опций
  
    // Здесь можно выполнить дополнительные действия, например, обновить скрытое поле формы
    console.log(`Выбрано значение: ${value}`);
    });
  });
  
  // Закрытие списка при клике вне селекта
  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
    select.classList.remove('_select-open');
    }
  });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#popup form');

    // Обработчик отправки формы
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Отключаем стандартное поведение формы (перезагрузка)

        // Собираем данные формы
        const formData = new FormData(form);

        // Имитация отправки данных через AJAX (замените на реальный сервер)
        fetch('https://example.com/submit', { // Замените URL на свой сервер
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => {
              console.log('Успешная отправка:', data);

              // Закрываем первый попап
              closePopup(document.querySelector('#popup'));

              // Открываем второй попап после успешной отправки
              openPopup(document.querySelector('#popup2'));
          }).catch(error => {
              console.error('Ошибка при отправке:', error);
          });
    });

    // Функция для открытия попапа и блокировки скролла
    function openPopup(popup) {
        popup.setAttribute('aria-hidden', 'false');
        popup.classList.add('popup_show');
        document.body.classList.add('no-scroll');
    }

    // Функция для закрытия попапа и разблокировки скролла
    function closePopup(popup) {
        popup.setAttribute('aria-hidden', 'true');
        popup.classList.remove('popup_show');
        document.body.classList.remove('no-scroll');
    }

    // Открытие попапа при нажатии на кнопки
    document.querySelectorAll('[data-popup]').forEach(button => {
        button.addEventListener('click', function () {
            const popupId = this.getAttribute('data-popup');
            const popup = document.querySelector(popupId);
            openPopup(popup);
        });
    });

    // Закрытие попапа при нажатии на кнопки закрытия
    document.querySelectorAll('[data-close]').forEach(button => {
        button.addEventListener('click', function () {
            const popup = this.closest('.popup');
            closePopup(popup);
        });
    });

    // Закрытие попапа при клике вне контента
    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', function (event) {
            if (!event.target.closest('.popup__content')) {
                closePopup(popup);
            }
        });
    });
});




document.getElementById('myForm').addEventListener('submit', function(event) {
  // Отменяем стандартное поведение отправки формы
  event.preventDefault();
  
  // Получаем данные формы
  var formData = new FormData(this);
  
  // Отправляем данные с помощью Fetch API или другого метода
  fetch('/your-endpoint-url', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      // Обработка ответа
      console.log('Success:', data);
      // Вы можете добавить здесь код для отображения сообщений, очистки формы и т.д.
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});





function _slideUp(target, duration = 500) {
target.style.transitionProperty = 'height, margin, padding';
target.style.transitionDuration = duration + 'ms';
target.style.height = target.offsetHeight + 'px';
target.offsetHeight;
target.style.overflow = 'hidden';
target.style.height = 0;
target.style.paddingTop = 0;
target.style.paddingBottom = 0;
target.style.marginTop = 0;
target.style.marginBottom = 0;
window.setTimeout(() => {
    target.hidden = true;
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
}, duration);
}

function _slideDown(target, duration = 500) {
target.hidden = false;
let height = target.offsetHeight;
target.style.overflow = 'hidden';
target.style.height = 0;
target.style.paddingTop = 0;
target.style.paddingBottom = 0;
target.style.marginTop = 0;
target.style.marginBottom = 0;
target.offsetHeight;
target.style.transitionProperty = 'height, margin, padding';
target.style.transitionDuration = duration + 'ms';
target.style.height = height + 'px';
target.style.removeProperty('padding-top');
target.style.removeProperty('padding-bottom');
target.style.removeProperty('margin-top');
target.style.removeProperty('margin-bottom');
window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
}, duration);
}

function _slideToggle(target, duration = 500) {
if (window.getComputedStyle(target).display === 'none') {
    return _slideDown(target, duration);
} else {
    return _slideUp(target, duration);
}
}



document.addEventListener("DOMContentLoaded", function () {
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
  // Получение обычных слойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  });
  // Инициализация обычных слойлеров
  if (spollersRegular.length) {
    initSpollers(spollersRegular);
  }
  // Получение слойлеров с медиа запросами
  let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
  if (mdQueriesArray && mdQueriesArray.length) {
    mdQueriesArray.forEach(mdQueriesItem => {
      // Событие
      mdQueriesItem.matchMedia.addEventListener("change", function () {
        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
      initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
    });
  }
  // Инициализация
  function initSpollers(spollersArray, matchMedia = false) {
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_spoller-init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove('_spoller-init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  }
  // Работа с контентом
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
    if (spollerTitles.length) {
      spollerTitles = Array.from(spollerTitles).filter(item => item.closest('[data-spollers]') === spollersBlock);
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');
          if (!spollerTitle.classList.contains('_spoller-active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }
  function setSpollerAction(e) {
    const el = e.target;
    if (el.closest('[data-spoller]')) {
      const spollerTitle = el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
      const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 650;
      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle('_spoller-active');
        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
      }
      e.preventDefault();
    }
  }
  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 650;
    if (spollerActiveTitle && !spollersBlock.querySelectorAll('._slide').length) {
      spollerActiveTitle.classList.remove('_spoller-active');
      _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
    }
  }
  // Закрытие при клике вне спойлера
  const spollersClose = document.querySelectorAll('[data-spoller-close]');
  if (spollersClose.length) {
    document.addEventListener("click", function (e) {
      const el = e.target;
      if (!el.closest('[data-spollers]')) {
        spollersClose.forEach(spollerClose => {
          const spollersBlock = spollerClose.closest('[data-spollers]');
          if (spollersBlock.classList.contains('_spoller-init')) {
            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 650;
            spollerClose.classList.remove('_spoller-active');
            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
          }
        });
      }
    });
  }
}
})



document.addEventListener("DOMContentLoaded", function () {
const openButton = document.querySelector('.button-menu__open');
const nav = document.querySelector('.nav');
const icon = document.querySelector('.icon-menu')

// Добавляем класс nav-active при нажатии на кнопку открытия
openButton.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  icon.classList.toggle('icon-active');
});


document.querySelector('.vid-fon-back__button').addEventListener('click', function() {
  // Переключаем иконки
  this.classList.toggle('vid-back__button-active');
  document.querySelector('.ri-sun-line').classList.toggle('ri-sun-line-active');
  
  // Переключаем видимость видео с использованием opacity
  const video1 = document.querySelector('.video1');
  const video2 = document.querySelector('.video2');
  
  if (video1.classList.contains('hidden')) {
      video1.classList.remove('hidden');
      video2.classList.add('hidden');
  } else {
      video1.classList.add('hidden');
      video2.classList.remove('hidden');
  }
})});






document.addEventListener("DOMContentLoaded", function () {
window.addEventListener('load', function() {
  const video = document.querySelector('.background-video');

  // Проверяем, готово ли видео для воспроизведения
  if (video.readyState >= 3) { // readyState 3 означает, что видео готово к проигрыванию
      video.classList.add('loaded');
  } else {
      // Если видео не готово, добавляем событие на его готовность
      video.addEventListener('canplaythrough', function() {
          video.classList.add('loaded');
      });
  }
})});




document.addEventListener("DOMContentLoaded", function () {
	// Проверяем ширину экрана
	if (window.innerWidth <= 991) {
		// Находим все блоки с видео
		document.querySelectorAll('.video__block').forEach(function(videoBlock) {
			const video = videoBlock.querySelector('.video__col');
			const button = videoBlock.querySelector('.play__icon');
			const buttonContainer = videoBlock.querySelector('.play');

			button.addEventListener('click', function() {
				// Проверяем, воспроизводится ли текущее видео
				if (video.paused) {
					// Если видео приостановлено, запускаем его и добавляем классы только для текущего блока
					video.play();
					video.classList.add('video-playing');
					buttonContainer.classList.add('button-active');
				} else {
					// Если видео воспроизводится, останавливаем его и удаляем классы только для текущего блока
					video.pause();
					video.classList.remove('video-playing');
					buttonContainer.classList.remove('button-active');
				}
			});

			// Добавляем клик по видео для удаления классов только у текущего элемента
			video.addEventListener('click', function() {
				// Останавливаем текущее видео и убираем классы
				video.pause();
				video.classList.remove('video-playing');
				buttonContainer.classList.remove('button-active');
			});
		});
	}
});





function initVideoScript() {
  document.querySelectorAll('.play__icon').forEach((btn, index) => {
      btn.addEventListener('click', () => {
          if (window.innerWidth <= 991) return; // Проверяем ширину экрана

          const videoBlock = btn.closest('.video__container');
          const video = videoBlock.querySelector('video');

          // Удаляем класс video__col-play у всех видео
          document.querySelectorAll('video').forEach(vid => {
              vid.classList.remove('video__col-play');
          });

          // Добавляем класс video__col-play только к выбранному видео
          video.classList.add('video__col-play');

          // Создаем полноэкранное окно с видео
          const fullscreenDiv = document.createElement('div');
          fullscreenDiv.classList.add('video__main', 'video__fullscreen');

          // Клонируем видео и добавляем его в полноэкранный блок
          const videoClone = video.cloneNode(true);
          videoClone.play();
          fullscreenDiv.appendChild(videoClone);

          // Добавляем крестик для закрытия
          const closeBtn = document.createElement('div');
          closeBtn.classList.add('close-btn');
          closeBtn.innerHTML = '✖'; // Иконка крестика
          fullscreenDiv.appendChild(closeBtn);

          // Добавляем стрелки для переключения
          const prevBtn = document.createElement('div');
          prevBtn.classList.add('prev-btn');
          prevBtn.innerHTML = '◀'; // Иконка стрелки
          fullscreenDiv.appendChild(prevBtn);

          const nextBtn = document.createElement('div');
          nextBtn.classList.add('next-btn');
          nextBtn.innerHTML = '▶'; // Иконка стрелки
          fullscreenDiv.appendChild(nextBtn);

          // Вставляем кнопку play в полноэкранный блок
          const playBtn = document.createElement('button');
          playBtn.type = 'button'; // Исправлено на 'button', чтобы не отправлял форму
          playBtn.classList.add('play__icon');
          playBtn.classList.add('button-active');  // Используем новый класс
          playBtn.innerHTML = `<img src="img/video/play.png" alt="">`; // Добавляем иконку play
          fullscreenDiv.appendChild(playBtn);

          // Вставляем полноэкранное окно в body
          document.body.appendChild(fullscreenDiv);

          // Функция для обновления видимости стрелок
          function updateArrowVisibility(currentIndex) {
              const totalVideos = document.querySelectorAll('.video__block').length;
              prevBtn.classList.toggle('hidden', currentIndex === 0);
              nextBtn.classList.toggle('hidden', currentIndex === totalVideos - 1);
          }

          // Обработчик закрытия видео
          closeBtn.addEventListener('click', () => {
              videoClone.pause();
              document.body.removeChild(fullscreenDiv);
              video.classList.remove('video__col-play');
              btn.closest('.play').classList.remove('button-active');
          });

          // Переключение видео
          prevBtn.addEventListener('click', () => {
              if (window.innerWidth <= 991) return; // Проверяем ширину экрана
              switchVideo(index - 1);
          });

          nextBtn.addEventListener('click', () => {
              if (window.innerWidth <= 991) return; // Проверяем ширину экрана
              switchVideo(index + 1);
          });

          function switchVideo(newIndex) {
              const totalVideos = document.querySelectorAll('.video__block').length;
              if (newIndex < 0 || newIndex >= totalVideos) {
                  return; // Выйти за пределы не позволяем
              }
              
              const nextBtn = document.querySelectorAll('.play__icon')[newIndex];
              if (nextBtn) {
                  videoClone.pause();
                  document.body.removeChild(fullscreenDiv);
                  nextBtn.click();
              }
          }

          // Добавляем воспроизведение видео при клике на иконку
          playBtn.addEventListener('click', () => {
              if (window.innerWidth <= 991) return; // Проверяем ширину экрана

              if (videoClone.classList.contains('video__col-play')) {
                  videoClone.pause();
                  videoClone.classList.remove('video__col-play');
                  playBtn.classList.remove('button-active');
              } else {
                  videoClone.play();
                  videoClone.classList.add('video__col-play');
                  playBtn.classList.add('button-active');
              }
          });

          // Обработка клика на видео для управления классами
          videoClone.addEventListener('click', () => {
              if (window.innerWidth <= 991) return; // Проверяем ширину экрана

              if (videoClone.classList.contains('video__col-play')) {
                  videoClone.pause();
                  videoClone.classList.remove('video__col-play');
                  playBtn.classList.remove('button-active');
              } else {
                  videoClone.play();
                  videoClone.classList.add('video__col-play');
                  playBtn.classList.add('button-active');
              }
          });

          // Обновляем видимость стрелок
          updateArrowVisibility(index);
      });
  });
}

// Инициализация скрипта при загрузке страницы
window.addEventListener('load', initVideoScript);

// Перепроверка при изменении размера окна
window.addEventListener('resize', () => {
  if (window.innerWidth > 991) {
      initVideoScript(); // Переинициализируем скрипт при изменении размера окна
  }
});


function initLightbox() {
  // Назначаем обработчики событий для изображений
  document.querySelectorAll('.photo__item img').forEach((img, index) => {
      img.addEventListener('click', () => {
          const lightbox = document.getElementById('photolightbox');
          const lightboxImage = lightbox.querySelector('.lightbox__image');
          lightboxImage.src = img.src;
          lightbox.style.display = 'flex';
          lightbox.setAttribute('data-current', index);

          // Показать кнопки переключения
          const prevBtn = lightbox.querySelector('.lightbox__prev');
          const nextBtn = lightbox.querySelector('.lightbox__next');
          prevBtn.classList.remove('lightbox__controls-hidden');
          nextBtn.classList.remove('lightbox__controls-hidden');
      });
  });

  // Обработчик для кнопки закрытия
  document.querySelector('.lightbox__close').addEventListener('click', () => {
      document.getElementById('photolightbox').style.display = 'none';
  });

  // Обработчики для кнопок переключения
  document.querySelector('.lightbox__prev').addEventListener('click', () => {
      const lightbox = document.getElementById('photolightbox');
      const currentIndex = parseInt(lightbox.getAttribute('data-current'));
      const newIndex = (currentIndex - 1 + document.querySelectorAll('.photo__item img').length) % document.querySelectorAll('.photo__item img').length;
      const newImage = document.querySelectorAll('.photo__item img')[newIndex];
      lightbox.querySelector('.lightbox__image').src = newImage.src;
      lightbox.setAttribute('data-current', newIndex);
  });

  document.querySelector('.lightbox__next').addEventListener('click', () => {
      const lightbox = document.getElementById('photolightbox');
      const currentIndex = parseInt(lightbox.getAttribute('data-current'));
      const newIndex = (currentIndex + 1) % document.querySelectorAll('.photo__item img').length;
      const newImage = document.querySelectorAll('.photo__item img')[newIndex];
      lightbox.querySelector('.lightbox__image').src = newImage.src;
      lightbox.setAttribute('data-current', newIndex);
  });

  // Показывать кнопки переключения при наведении на lightbox
  const lightbox = document.getElementById('photolightbox');
  lightbox.addEventListener('mouseenter', () => {
      const prevBtn = lightbox.querySelector('.lightbox__prev');
      const nextBtn = lightbox.querySelector('.lightbox__next');
      prevBtn.classList.remove('lightbox__controls-hidden');
      nextBtn.classList.remove('lightbox__controls-hidden');
  });

  lightbox.addEventListener('mouseleave', () => {
      // Не скрываем кнопки при выходе мыши
      // Можно удалить этот обработчик, если не нужен
  });
}

// Инициализация при загрузке страницы
initLightbox();

// Инициализация при изменении размера окна
window.addEventListener('resize', initLightbox);