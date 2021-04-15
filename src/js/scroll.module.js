export function scrollToView() {
  let skills = document.getElementById("skills");
  let reviews = document.getElementById("reviews");
  let connect = document.getElementById("connect");

  skills.addEventListener("click", function () {
    document.getElementById('div-skills').scrollIntoView({
      behavior: 'smooth'
    });
  });
  reviews.addEventListener("click", function () {
    document.getElementById('div-reviews').scrollIntoView({
      behavior: 'smooth'
    });
  });
  connect.addEventListener("click", function () {
    document.getElementById('div-connect').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

export function scrollVisible() {
  var Animation = function ({ offset } = { offset: 10 }) {
    var _elements;

    // Define a dobra superior, inferior e laterais da tela
    var windowTop = offset * window.innerHeight / 100;
    var windowBottom = window.innerHeight - windowTop;
    var windowLeft = 0;
    var windowRight = window.innerWidth;

    function start(element) {
      // Seta os atributos customizados
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;
      // Inicia a animacao setando a classe da animacao
      element.classList.add(element.dataset.animation);
      // Seta o elemento como animado
      element.dataset.animated = "true";
    }

    function isElementOnScreen(element) {
      // Obtem o boundingbox do elemento
      var elementRect = element.getBoundingClientRect();
      var elementTop =
        elementRect.top + parseInt(element.dataset.animationOffset) ||
        elementRect.top;
      var elementBottom =
        elementRect.bottom - parseInt(element.dataset.animationOffset) ||
        elementRect.bottom;
      var elementLeft = elementRect.left;
      var elementRight = elementRect.right;

      // Verifica se o elemento esta na tela
      return (
        elementTop <= windowBottom &&
        elementBottom >= windowTop &&
        elementLeft <= windowRight &&
        elementRight >= windowLeft
      );
    }

    // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
    function checkElementsOnScreen(els = _elements) {
      for (var i = 0, len = els.length; i < len; i++) {
        // Passa para o proximo laço se o elemento ja estiver animado
        if (els[i].dataset.animated) continue;

        isElementOnScreen(els[i]) && start(els[i]);
      }
    }

    // Atualiza a lista de elementos a serem animados
    function update() {
      _elements = document.querySelectorAll(
        "[data-animation]:not([data-animated])"
      );
      checkElementsOnScreen(_elements);
    }

    // Inicia os eventos
    window.addEventListener("load", update, false);
    window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
    window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);

    // Retorna funcoes publicas
    return {
      start,
      isElementOnScreen,
      update
    };
  };

  // Initialize
  var options = {
    offset: 20 //percentage of window
  };
  new Animation(options);
}

export function scrollToTop() {

  var basicScrollTop = function () {
    // The button
    var btnTop = document.querySelector('#goTop');
    // Reveal the button
    var btnReveal = function () {
      if (window.scrollY >= 100) {
        btnTop.classList.add('is-visible');
      } else {
        btnTop.classList.remove('is-visible');
      }
    }
    // Smooth scroll top
    // Thanks to => http://stackoverflow.com/a/22610562
    var TopscrollTo = function () {
      if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 30);
          TopscrollTo();
        }, 5);
      }
    }
    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);

  };
  basicScrollTop();
}