window.onload = function () {

	var open = document.getElementById("menu-open");
	var closed = document.getElementById("menu-closed");
	var menu = document.getElementById("main-nav");

	open.addEventListener("click", 
	  function () {
		  menu.classList.toggle("main-nav--hidden");	
		  open.classList.add("header-toggle__img--hidden");
		  closed.classList.remove("header-toggle__img--hidden");
		}, false);

	closed.addEventListener("click", 
	  function () {
		  menu.classList.toggle("main-nav--hidden");	
		  open.classList.remove("header-toggle__img--hidden");
		  closed.classList.add("header-toggle__img--hidden");
		}, false);
	
}