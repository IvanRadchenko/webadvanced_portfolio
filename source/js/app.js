"use strict";

var menuModule = (function () {
  function mainMenu() {
    var elem = document.querySelector(".overlay"),
        hamburger = document.querySelector('.hamburger'),
		menuList = document.querySelector('.menu__list');


    hamburger.addEventListener('click', function(e) {
			e.preventDefault();

      hamburger.classList.toggle('hamburger--cross');
		  elem.classList.toggle('overlay--isactive');
		menuList.classList.toggle('menu__list--open');
	});
	}


	function blogMenu() {
		console.log(overlayRight);
	}

	 return {
        mainMenu: mainMenu,
        blogMenu: blogMenu
    };
})();

menuModule.mainMenu();