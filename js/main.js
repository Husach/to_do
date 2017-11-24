window.onload = function () {
  
  var btnOpen = document.querySelector("#menu-open"),
      btnClosed = document.querySelector("#menu-closed"),
      menu = document.querySelector("#main-nav"),
      toDo = document.querySelector("#text-to"),
      headerToggle = document.querySelector("#header-toggle"),
      mainSearch = document.querySelector("#main-search"),
      Magnify = document.querySelector("#header__magnify"); 
  
  var formOk = document.querySelector("#form__ok");
  var formClosed = document.querySelector("#form__closed");  
  var headerSearch = document.querySelector("#header__search");
  
  if (window.innerWidth < 1440) {
    btnOpen.addEventListener("click", resizeMenu, false);
    btnClosed.addEventListener("click", resizeMenu, false);
  }

  if (window.innerWidth < 1440 && window.innerWidth > 1023) {
    btnOpen.addEventListener("click", menuTablet, false);
    btnClosed.addEventListener("click", menuTablet, false);
  }

  mainSearch.addEventListener("focus", 
    function() {
      Magnify.classList.toggle("header__magnify--hidden");
  }, false);

  mainSearch.addEventListener("blur", 
    function() {
      Magnify.classList.toggle("header__magnify--hidden");
  }, false);

  function resizeMenu() {
    menu.classList.toggle("main-nav--hidden");  
    btnOpen.classList.toggle("header-toggle__img--hidden");
    btnClosed.classList.toggle("header-toggle__img--hidden");
  } 

  function menuTablet() {
    toDo.classList.toggle("hidden");
    headerToggle.classList.toggle("header-toggle--big");
  }






  headerSearch.onfocus = function() {
    formOk.classList.toggle("form__ok--hidden");
    formClosed.classList.toggle("form__closed--hidden");
  }
  headerSearch.onblur = function() {
    formOk.classList.toggle("form__ok--hidden");
    formClosed.classList.toggle("form__closed--hidden");
  }
}