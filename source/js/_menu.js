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
        var mover       = document.querySelector('.blog-navigation__list'),
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
            var moverTop            = 0,
                halfWindowHeight    = window.innerHeight * 0.5,
                offset              = 0;

                moverTop = mover.offsetTop;

                // adding left class
                // to the elements' classlist
                if(lastScrollY > moverTop[m] - halfWindowHeight) {
                    mover.classList.add('left');
                } else {
                    mover.classList.remove('left');
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
