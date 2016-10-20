var menuModule = (function () {
	function mainMenu() {
		document.querySelector('.svg__hamburger').addEventListener('click', function(e) {
			e.preventDefault();
      
      var elem = document.querySelector(".overlay");
      
			elem.classList.toggle('overlay--isactive');
	});
	}


	function blogMenu() {
		console.log("ok");
	}

	 return {
        mainMenu: mainMenu,
        blogMenu: blogMenu
    };
})();

menuModule.mainMenu();