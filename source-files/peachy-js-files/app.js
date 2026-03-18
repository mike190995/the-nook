// ------------------------------------------------
// Project Name: Peachy - Bright Coming Soon & Landing Page Template
// Project Description: Peachy - bright and stylish coming soon & landing page template to kick-start your project. Feel summer vibes with Peachy!
// Tags: mix_design, peachy, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 2.0.4
// Build Date: June 2019
// Last Update: July 2025
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: app.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. SVG Fallback
//  2. Chrome Smooth Scroll
//  3. Images Moving Ban
//  4. PhotoSwipe Gallery Images Replace
//  5. Popup Behavior
//  6. Main Menu & Sections Behavior
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {

  "use strict";

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  // Images Moving Ban
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // PhotoSwipe Gallery Images Replace
  $('.my-gallery__link')
    // Background set up
    .each(function(){
    $(this)
    // Add a photo container
    .append('<div class="picture"></div>')
    // Set up a background image for each link based on data-image attribute
    .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });

  // Popup Behavior
  // Declaring Variables
  var notifyTrigger = $('#notify-trigger'),
      notifyPopup = $('.notify'),
      notifyClose = $('#notify-close'),
      letstalkTrigger = $('#letstalk-trigger'),
      letstalkPopup = $('.letstalk'),
      letstalkClose = $('#letstalk-close');

      notifyTrigger.on('click', function(event) {
        event.preventDefault();
        notifyPopup.addClass('is-visible');
        setTimeout(function(){
          $('.notify .popup__content').addClass('is-visible');
        }, 200);
        setTimeout(function(){
          notifyClose.addClass('is-scaled-up');
        }, 1000);
      });

      notifyClose.on('click', function(event) {
        event.preventDefault();
        notifyClose.removeClass('is-scaled-up');
        $('.notify .popup__content').removeClass('is-visible');
        setTimeout(function(){
          notifyPopup.removeClass('is-visible');
        }, 300);
      });

      letstalkTrigger.on('click', function(event) {
        event.preventDefault();
        letstalkPopup.addClass('is-visible');
        setTimeout(function(){
          $('.letstalk .popup__content').addClass('is-visible');
        }, 200);
        setTimeout(function(){
          letstalkClose.addClass('is-scaled-up');
        }, 1000);
      });

      letstalkClose.on('click', function(event) {
        event.preventDefault();
        letstalkClose.removeClass('is-scaled-up');
        $('.letstalk .popup__content').removeClass('is-visible');
        setTimeout(function(){
          letstalkPopup.removeClass('is-visible');
        }, 300);
      });

  // Main Menu & Sections Behavior
  // Declaring Variables
  var menuTrigger        = $('#menu-trigger'),
      menuClose          = $('#menu-close'),
      menu               = $('#menu'),
      mainSection        = $('#main'),
      aboutSection       = $('#about'),
      portfolioSection   = $('#portfolio'),
      contactSection     = $('#contact'),
      homeTrigger        = $('#home-trigger'),
      aboutTrigger       = $('#about-trigger'),
      portfolioTrigger   = $('#portfolio-trigger'),
      contactTrigger     = $('#contact-trigger'),
      aboutClose         = $('#about-close'),
      portfolioClose     = $('#portfolio-close'),
      contactClose       = $('#contact-close');

      // Menu Open
      menuTrigger.on('click', function(event){
        event.preventDefault();

        $('body').addClass('overflow-hidden');

        var animateinMenu = anime({
          targets: '#menu',
          width: '100%',
          easing: 'easeOutElastic(1, 1.2)',
          duration: 1000
        });

        $('.menu__caption').addClass('is-visible');

        setTimeout(function(){
          var animateItems = anime({
            targets: '.menu__navigation li a',
            translateX: -40,
            opacity: 1,
            delay: function(el, i, l) {
              return i * 100;
            },
            endDelay: function(el, i, l) {
              return (l - i) * 100;
            }
          });
          menuClose.addClass('is-scaled-up');
          $('.menu-btn').removeClass('is-visible');
        }, 400);

      });

      // Menu Close
      menuClose.on('click', function(event){
        event.preventDefault();

        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){

          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            easing: 'easeInElastic(1, 1.2)',
            duration: 1000
          });
          $('.menu-btn').addClass('is-visible');
          $('body').removeClass('overflow-hidden');

        }, 100);

      });

      $('.menu__navigation li a').on('click', function(event) {
        $('body').removeClass('overflow-hidden');
      });

      // Home Trigger Behavior
      homeTrigger.on('click', function(event){
        event.preventDefault();
        $('.active').removeClass('active is-visible');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            easing: 'easeInElastic(1, 1.2)',
            duration: 1000
          });
          $('.menu-btn').addClass('is-visible');
        },100);

      });

      // About Section Open
      aboutTrigger.on('click', function(event) {
        event.preventDefault();
        $('.active').removeClass('active is-visible');
        $('.section-close').removeClass('is-scaled-up');
        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            duration: 50
          });
          aboutSection.addClass('active is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            aboutClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          });
          if($('html').hasClass('no-csstransitions')) {
            aboutClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          };
          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.addClass('section-active-dark');
          };
        }, 400);

      });

      // Portfolio Section Open
      portfolioTrigger.on('click', function(event) {
        event.preventDefault();
        $('.active').removeClass('active is-visible');
        $('.section-close').removeClass('is-scaled-up');
        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            duration: 50
          });
          portfolioSection.addClass('active is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            portfolioClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          });
          if($('html').hasClass('no-csstransitions')) {
            portfolioClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          };
          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.addClass('section-active-dark');
          };
        }, 400);

      });

      // Contact Section Open
      contactTrigger.on('click', function(event) {
        event.preventDefault();
        $('.active').removeClass('active is-visible');
        $('.section-close').removeClass('is-scaled-up');
        $('.menu__caption').removeClass('is-visible');
        menuClose.removeClass('is-scaled-up');

        var animateItems = anime({
          targets: '.menu__navigation li a',
          translateX: 0,
          opacity: 0,
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });

        setTimeout(function(){
          var animateinMenu = anime({
            targets: '#menu',
            width: '0%',
            duration: 50
          });
          contactSection.addClass('active is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            contactClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          });
          if($('html').hasClass('no-csstransitions')) {
            contactClose.addClass('is-scaled-up');
            $('.menu-btn').addClass('is-visible');
          };
          if (mainSection.hasClass('fullheight-mobile')) {
            menuTrigger.addClass('section-active-dark');
          };
        }, 400);

      });

      // About Section Close
      aboutClose.on('click', function(event) {
        event.preventDefault();

        $('.active').removeClass('is-visible');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        var animateoutSection = anime({
          targets: '#about',
          translateX: '100%',
          easing: 'easeInElastic(1, 1.2)',
          duration: 1000
        });

        setTimeout(function(){
          var animateinSection = anime({
            targets: '#about',
            translateX: '0%',
            duration: 1
          });
          $('.active').removeClass('active');
        }, 1000);
      });

      // Portfolio Section Close
      portfolioClose.on('click', function(event) {
        event.preventDefault();

        $('.active').removeClass('is-visible');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        var animateoutSection = anime({
          targets: '#portfolio',
          translateX: '100%',
          easing: 'easeInElastic(1, 1.2)',
          duration: 1000
        });

        setTimeout(function(){
          var animateinSection = anime({
            targets: '#portfolio',
            translateX: '0%',
            duration: 1
          });
          $('.active').removeClass('active');
        }, 1000);
      });

      // Contact Section Close
      contactClose.on('click', function(event) {
        event.preventDefault();

        $('.active').removeClass('is-visible');
        $('.section-close').removeClass('is-scaled-up');
        if (mainSection.hasClass('fullheight-mobile')) {
          menuTrigger.removeClass('section-active-dark');
        };

        var animateoutSection = anime({
          targets: '#contact',
          translateX: '100%',
          easing: 'easeInElastic(1, 1.2)',
          duration: 1000
        });

        setTimeout(function(){
          var animateinSection = anime({
            targets: '#contact',
            translateX: '0%',
            duration: 1
          });
          $('.active').removeClass('active');
        }, 1000);
      });

});
