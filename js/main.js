window.onload = function () {

  var open = document.querySelector("#menu-open");
  var closed = document.querySelector("#menu-closed");
  var menu = document.querySelector("#main-nav");
  var headerToggle = document.querySelector("#header-toggle"); 
  var search = document.querySelector("#form__search");
  var headerMagnify = document.querySelector("#header__magnify");
  var headerSearch = document.querySelector("#header__search");
  var formOk = document.querySelector("#form__ok");
  var formClosed = document.querySelector("#form__closed");
  var menuLink = document.querySelector(".menu-link");

  open.addEventListener("click", 
    function () {
      menu.classList.toggle("main-nav--hidden");
      open.classList.add("header-toggle__img--hidden");
      headerToggle.classList.add("header-toggle--big");
      closed.classList.remove("header-toggle__img--hidden");
      menuLink.classList.toggle("menu__link--open");
    }, false);

  closed.addEventListener("click", 
    function () {
      menu.classList.toggle("main-nav--hidden");	
      closed.classList.add("header-toggle__img--hidden");
      open.classList.remove("header-toggle__img--hidden");		  
      headerToggle.classList.remove("header-toggle--big");
      menuLink.classList.toggle("menu__link--open");
	}, false);
		
  search.onfocus = function() {
    headerMagnify.classList.toggle("header__magnify--hidden");
  }
  search.onblur = function() {
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