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

		//Paul Lewis Scroll optimization example https://www.html5rocks.com/en/tutorials/speed/animations/
    blogMenu: function() {
        var mover       = document.querySelector('.blog-navigation__list'),
        		articles    = document.querySelectorAll('.blogpost__title'),
        		navlinks     = document.querySelectorAll('.blog-navigation__link'),
            lastScrollY  = 0,
            ticking      = false;
        
        function onScroll() {
            lastScrollY = window.scrollY;
            requestTick();
        }

/**
 * Calls rAF if it's not already
 * been done already
 */
        function requestTick() {
            if(!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }

/**
 * Our animation callback
 */
        function update() {
            var articleFirstTop = articles[0].offsetTop,
            		article = null,
            		articlesTop = [],
                // halfWindowHeight    = window.innerHeight * 0.7,
                offset              = 0;
                
                // first loop is going to do all
								// the reflows (since we use offsetTop)
							    for(var m = 0; m < articles.length; m++) {

							        article       = articles[m];
							        articlesTop[m] = article.offsetTop;
							    }

							    //second loop goes through the articles and
							    //adds class active to the navigation links
							    for(var m = 0; m < articles.length; m++) {

							        var navlink       = navlinks[m];

							        if(lastScrollY+150 >= articlesTop[m] && lastScrollY < articlesTop[m+1]-150) {
							            navlink.classList.add('blog-navigation__link--active');
							        } else {
							            navlink.classList.remove('blog-navigation__link--active');
							        }

							    }

                // adding left class
                // to the elements' classlist
                if(lastScrollY > articleFirstTop) {
                    mover.classList.add('blog-navigation__list--fixed');
                } else {
                    mover.classList.remove('blog-navigation__list--fixed');
                }

            // allow further rAFs to be called
            ticking = false;
         }

        // only listen for scroll events
        window.addEventListener('scroll', onScroll, false);

        return this;
    }
};

menuModule.mainMenu();
menuModule.blogMenu();