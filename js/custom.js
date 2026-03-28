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
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader Animation
//  2. Swiper Slider
//  3. YTPlayer Settings
//  4. Vegas Settings
//  5. KBW-Countdown Settings
//  6. Mailchimp Notify Form
//  7. Let's Talk Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    //$("#main").addClass('active');
    $(".loader__content .logo").removeClass('slideInDown').addClass('fadeOutUp');
    $(".loader__content .caption").removeClass('slideInUp').addClass('fadeOutDown');
  }, 500);

  var mainSlider  = $('.swiper');

  setTimeout(function(){

    var animateLeft = anime({
      targets: '.loader__slideleft',
      width: '0%',
      easing: 'easeOutElastic(1, 1.2)',
      duration: 800
    });

    var animateRight = anime({
      targets: '.loader__slideright',
      width: '0%',
      easing: 'easeOutElastic(1, 1.2)',
      duration: 800
    });

    // --------------------------------------------- //
    // Swiper Slider Start
    // --------------------------------------------- //
    if (mainSlider.length) {
      var swiper = new Swiper('.swiper', {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        parallax: true,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };
    // --------------------------------------------- //
    // Swiper Slider End
    // --------------------------------------------- //

    // --------------------------------------------- //
    // Animation On Load Reveal
    // --------------------------------------------- //
    var orderBtnReveal = anime({
      targets: '.animate-on-load',
      translateY: [30, 0],
      opacity: [0, 1],
      easing: 'easeOutQuart',
      duration: 1000,
      delay: 500
    });

  },1000);

  setTimeout(function(){
    $(".loader").addClass('fade loaded');
  }, 1500);
  // --------------------------------------------- //
  // Loader Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // YTPlayer Settings Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");

  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  };
  // --------------------------------------------- //
  // YTPlayer Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1000x1400/636363/8e8e8e" },
        { src: "https://dummyimage.com/1000x1400/636363/8e8e8e" },
        { src: "https://dummyimage.com/1000x1400/636363/8e8e8e" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1920x1080/636363/8e8e8e" },
        { src: "https://dummyimage.com/1920x1080/636363/8e8e8e" },
        { src: "https://dummyimage.com/1920x1080/636363/8e8e8e" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2025, 11, 15), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2025, 11, 15), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://club.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900&amp;f_id=00b64ae4f0'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Let's Talk Form Start
  // --------------------------------------------- //
  $("#letstalk-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.letstalk').find('.form').addClass('is-hidden');
      $('.letstalk').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.letstalk').find('.reply-group').removeClass('is-visible');
        $('.letstalk').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Let's Talk Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Order Popup Logic Start
  // --------------------------------------------- //
  var orderTrigger = $("#order-trigger"),
      orderPopup = $(".order-popup"),
      orderClose = $("#order-close"),
      productCard = $(".product-card"),
      backBtn = $(".back-to-products"),
      selectionView = $(".product-selection-view"),
      formView = $(".order-form-view");

  // Open popup
  orderTrigger.on("click", function(e) {
    e.preventDefault();
    // Default to selection view
    selectionView.removeClass("is-hidden");
    formView.addClass("is-hidden");
    
    orderPopup.addClass("is-visible");
    setTimeout(function() {
      $(".order-popup .popup__content").addClass("is-visible");
    }, 200);
    setTimeout(function() {
      orderClose.addClass("is-scaled-up");
    }, 1000);
  });

  // Close popup
  orderClose.on("click", function(e) {
    e.preventDefault();
    orderClose.removeClass("is-scaled-up");
    $(".order-popup .popup__content").removeClass("is-visible");
    setTimeout(function() {
      orderPopup.removeClass("is-visible");
    }, 300);
  });

  // Product Selection
  productCard.on("click", function() {
    var product = $(this).data("product");
    var price = $(this).data("price");
    
    // Set form fields
    $("#form-product-name").val(product);
    $("#form-product-price").val(price);
    
    // Set display text
    $("#selected-product-display").text(product);
    $("#selected-price-display").text("$" + price.toLocaleString());
    
    // Switch views
    selectionView.addClass("is-hidden");
    formView.removeClass("is-hidden");
  });

  // Back to Selection
  backBtn.on("click", function(e) {
    e.preventDefault();
    formView.addClass("is-hidden");
    selectionView.removeClass("is-hidden");
  });

  // Form Submission to Google Sheets
  $("#order-form").submit(function(e) {
    e.preventDefault();
    var th = $(this);
    var submitBtn = th.find('button[type="submit"]');
    var originalBtnText = submitBtn.find('.btn-caption').text();
    
    // Prepare data
    var formData = {};
    th.serializeArray().forEach(function(item) {
      formData[item.name] = item.value;
    });

    // Disable button during submission
    submitBtn.prop("disabled", true);
    submitBtn.find('.btn-caption').text("Sending...");

    // Google Apps Script URL
    var scriptURL = "https://script.google.com/a/macros/thenook.shop/s/AKfycbzTeRtxzO0t-2qn7HpZKsWS-bMq2vqCXGaSHgrXHbvUG4FxJHRoifALA5j4rpDY5KaUjQ/exec";

    if (scriptURL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      alert("Please provide the Google Apps Script URL to enable live data capture. \n\nCaptured Data (Mock):\n" + JSON.stringify(formData, null, 2));
      submitBtn.prop("disabled", false);
      submitBtn.find('.btn-caption').text(originalBtnText);
      orderClose.click();
      th.trigger("reset");
      return;
    }

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors if not handling preflight
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function() {
      alert("Thank you for your order! We will contact you soon.");
      orderClose.click();
      th.trigger("reset");
    })
    .catch(function(error) {
      console.error('Error!', error.message);
      alert("Something went wrong. Please try again or contact us directly.");
    })
    .finally(function() {
      submitBtn.prop("disabled", false);
      submitBtn.find('.btn-caption').text(originalBtnText);
    });
  });
  // --------------------------------------------- //
  // Order Popup Logic End
  // --------------------------------------------- //

});
