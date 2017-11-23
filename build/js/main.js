window.onload = function () {
  
  var menu = document.querySelector("#main-nav");
  var closed = document.querySelector("#menu-closed");
  var formOk = document.querySelector("#form__ok");
  var btnOpen = document.querySelector("#menu-open");
  var menuLink = document.querySelector(".menu-link");
  var formClosed = document.querySelector("#form__closed");
  var mainSearch = document.querySelector("#main-search");
  var headerSearch = document.querySelector("#header__search");
  var headerToggle = document.querySelector("#header-toggle"); 
  var headerMagnify = document.querySelector("#header__magnify"); 
  var toDo = document.querySelector("#text-to");

  btnOpen.addEventListener("click", 
    function () {
      menu.classList.toggle("main-nav--hidden");
      btnOpen.classList.toggle("header-toggle__img--hidden");
      headerToggle.classList.add("header-toggle--big");
      closed.classList.remove("header-toggle__img--hidden");
      toDo.classList.toggle("header-toggle__text--to");
      menuLink.classList.toggle("menu__link--open");
      
    }, false);

  closed.addEventListener("click", 
    function () {
      menu.classList.toggle("main-nav--hidden");	
      closed.classList.add("header-toggle__img--hidden");
      btnOpen.classList.toggle("header-toggle__img--hidden");
      headerToggle.classList.remove("header-toggle--big");
      toDo.classList.toggle("header-toggle__text--to");
      menuLink.classList.toggle("menu__link--open");
      
	}, false);
		
/*  mainSearch.addEventListener("onfocus", 
    function () {
      headerMagnify.classList.toggle("header__magnify--hidden");
  }, false);

  mainSearch.addEventListener("onblur", 
    function () {
      headerMagnify.classList.toggle("header__magnify--hidden");
  }, false);*/

  mainSearch.onfocus = function() {
    headerMagnify.classList.toggle("header__magnify--hidden");
  }
  mainSearch.onblur = function() {
    headerMagnify.classList.toggle("header__magnify--hidden");
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