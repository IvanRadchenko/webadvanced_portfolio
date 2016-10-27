"use strict";

var menuModule = {
	mainMenu: function() {
		var elem = document.querySelector(".overlay"),
			hamburger = document.querySelector('.hamburger'),
			menuList = document.querySelector('.menu__list'),
			menuItems = document.querySelectorAll('.menu__item');

		hamburger.addEventListener('click', function(e) {
			e.preventDefault();

			hamburger.classList.toggle('hamburger--cross');
			elem.classList.toggle('overlay--isactive');
			menuList.classList.toggle('menu__list--open');

            menuItems.forEach(function (el, i) {
                el.classList.toggle('menu__item--animate-in');
            });
		});

		return this;
	},


	blogMenu: function() {
		console.log("Hey");
		return this;
	}
};

menuModule.mainMenu();