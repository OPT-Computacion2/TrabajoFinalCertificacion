// script.js — comportamiento compartido del sitio "Expediente: Futuros Distopicos"

document.addEventListener("DOMContentLoaded", function () {
  /* ---- Menú lateral de categorías ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".side-menu");
  if (toggle && menu) {
    var close = menu.querySelector(".side-menu__close");
    var backdrop = document.createElement("div");
    backdrop.className = "menu-backdrop";
    document.body.appendChild(backdrop);

    function setMenu(open) {
      menu.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-visible", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      if (open) menu.querySelector("a, button, summary").focus();
      else toggle.focus();
    }
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
    if (close) close.addEventListener("click", function () { setMenu(false); });
    backdrop.addEventListener("click", function () { setMenu(false); });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) setMenu(false);
    });
  }

  /* ---- Volver al inicio ---- */
  var scrollTop = document.createElement("button");
  scrollTop.type = "button";
  scrollTop.className = "scroll-top";
  scrollTop.setAttribute("aria-label", "Volver al inicio de la página");
  scrollTop.setAttribute("title", "Volver al inicio");
  scrollTop.textContent = "↑";
  document.body.appendChild(scrollTop);
  function updateScrollTop() {
    scrollTop.classList.toggle("is-visible", window.scrollY > 280);
  }
  window.addEventListener("scroll", updateScrollTop, { passive: true });
  updateScrollTop();
  scrollTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Carrusel de imagenes (requisito 7) ---- */
  var carousel = document.querySelector(".carousel");
  if (carousel) {
    var slides = carousel.querySelectorAll(".carousel__slide");
    var dotsWrap = carousel.querySelector(".carousel__dots");
    var previous = carousel.querySelector(".carousel__prev");
    var next = carousel.querySelector(".carousel__next");
    var current = 0;
    var timer;

    if (!slides.length) return;

    function goTo(index) {
      slides[current].classList.remove("is-active");
      if (dotsWrap) dotsWrap.children[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      if (dotsWrap) dotsWrap.children[current].classList.add("is-active");
    }

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Ir a la diapositiva " + (i + 1));
        if (i === 0) b.classList.add("is-active");
        b.addEventListener("click", function () {
          goTo(i);
          resetTimer();
        });
        dotsWrap.appendChild(b);
      });
    }

    if (previous) previous.addEventListener("click", function () { goTo(current - 1); resetTimer(); });
    if (next) next.addEventListener("click", function () { goTo(current + 1); resetTimer(); });
    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { goTo(current - 1); resetTimer(); }
      if (event.key === "ArrowRight") { goTo(current + 1); resetTimer(); }
    });

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () {
        goTo(current + 1);
      }, 4500);
    }
    resetTimer();
  }
});
