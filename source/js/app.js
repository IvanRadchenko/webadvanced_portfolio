"use strict";

var menuModule = (function () {
  function mainMenu() {
    var elem = document.querySelector(".overlay"),
        hamburger = document.querySelector('.hamburger');


    hamburger.addEventListener('click', function(e) {

			e.preventDefault();

      hamburger.classList.toggle('hamburger--cross');
			elem.classList.toggle('overlay--isactive');
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