"use strict";

// var menuModule = (function () {
//   function mainMenu() {
//     var elem = document.querySelector(".overlay"),
//         hamburger = document.querySelector('.hamburger'),
// 		menuList = document.querySelector('.menu__list'),
// 		menuItems = document.querySelectorAll('.menu__item');
//
//
//     hamburger.addEventListener('click', function(e) {
// 			e.preventDefault();
//
//       hamburger.classList.toggle('hamburger--cross');
// 		  elem.classList.toggle('overlay--isactive');
// 		menuList.classList.toggle('menu__list--open');
//
// 		menuItems.forEach(function(i) {
// 			var item = menuItems[i];
// 			setTimeout(function() {
// 				console.log(item);
// 				item.classList.add('menu__item--animate-in');
// 			}, 500 * i);
// 		});
// 	});
// 	}
//
//
// 	function blogMenu() {
// 		console.log(overlayRight);
// 	}
//
// 	 return {
//         mainMenu: mainMenu,
//         blogMenu: blogMenu
//     };
// })();
//
// menuModule.mainMenu();

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
                if (el.classList.contains("menu__item--animate-in")){
                    el.classList.remove('menu__item--animate-in');
                } else {
                    setTimeout(function () {
                        el.classList.add('menu__item--animate-in');
                    }, 400 * i);
                }
            });
		});

		return this;
	},


	blogMenu: function() {
		console.log("Hey");
		return this;
	}
}

menuModule.mainMenu();