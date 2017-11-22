window.onload = function () {

	var open = document.getElementById("menu-open");
	var closed = document.getElementById("menu-closed");
	var menu = document.getElementById("main-nav");
	var headerToggle = document.getElementById("header-toggle");
	var menuLink = document.getElementsByClassName("menu-link");
	var search = document.getElementById("form__search");
	var headerMagnify = document.getElementById("header__magnify")

	open.addEventListener("click", 
	  function () {
		  menu.classList.toggle("main-nav--hidden");	
		  open.classList.add("header-toggle__img--hidden");
		  headerToggle.classList.add("header-toggle--big");
		  closed.classList.remove("header-toggle__img--hidden");
		  menuLink.classList.add("menu__link--open");
		}, false);

	closed.addEventListener("click", 
	  function () {
		  menu.classList.toggle("main-nav--hidden");	
		  closed.classList.add("header-toggle__img--hidden");
		  open.classList.remove("header-toggle__img--hidden");		  
		  headerToggle.classList.remove("header-toggle--big");
		  menuLink.classList.remove("menu__link--open");
		}, false);
		
	search.onmouseover = function() {
		headerMagnify.classList.toggle("header__magnify--hidden");
	}
	search.onmouseout = function() {
		headerMagnify.classList.toggle("header__magnify--hidden");
	}
}