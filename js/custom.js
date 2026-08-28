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

  var mainSlider  = $('#main .swiper');

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
      var swiper = new Swiper('#main .swiper', {
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
    // Products 2x2 Grid Swiper Carousel Start
    // --------------------------------------------- //
    var productsGridSwiper = new Swiper('.products-grid-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 900,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.products-grid-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.products-grid-next',
        prevEl: '.products-grid-prev',
      },
    });
    // --------------------------------------------- //
    // Products 2x2 Grid Swiper Carousel End
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
  // Multi-Product Order Popup Logic Start
  // --------------------------------------------- //
  var orderTrigger = $("#order-trigger"),
      orderPopup = $(".order-popup"),
      orderClose = $("#order-close"),
      backBtn = $(".back-to-products"),
      selectionView = $(".product-selection-view"),
      formView = $(".order-form-view"),
      btnProceed = $("#btn-proceed-order");

  // Cart State: { "Luxury Accent Chair": { qty: 1, price: 899 }, ... }
  var orderCart = {};

  function updateCartUI() {
    var totalItems = 0;
    var grandTotal = 0;

    $(".product-card").each(function() {
      var card = $(this);
      var productName = card.data("product");
      var item = orderCart[productName] || { qty: 0 };
      var qty = item.qty;

      card.find(".card-qty-num").text(qty);
      if (qty > 0) {
        card.addClass("is-selected");
        card.find(".selected-badge").removeClass("is-hidden").find(".badge-qty").text(qty);
      } else {
        card.removeClass("is-selected");
        card.find(".selected-badge").addClass("is-hidden");
      }
    });

    Object.keys(orderCart).forEach(function(name) {
      var item = orderCart[name];
      if (item.qty > 0) {
        totalItems += item.qty;
        grandTotal += item.qty * item.price;
      }
    });

    $("#selection-items-count").text(totalItems === 1 ? "1 item selected" : totalItems + " items selected");
    $("#selection-total-price").text("Total: $" + grandTotal.toLocaleString());
    btnProceed.prop("disabled", totalItems === 0);

    // Build Step 2 Breakdown List
    var breakdownHtml = "";
    Object.keys(orderCart).forEach(function(name) {
      var item = orderCart[name];
      if (item.qty > 0) {
        var lineTotal = item.qty * item.price;
        breakdownHtml += '<div class="order-item-row">' +
          '<div class="item-left">' +
            '<span class="item-badge">' + item.qty + 'x</span>' +
            '<span class="item-name">' + name + ' ($' + item.price.toLocaleString() + ' each)</span>' +
          '</div>' +
          '<div class="item-total">$' + lineTotal.toLocaleString() + '</div>' +
        '</div>';
      }
    });

    $("#order-items-list").html(breakdownHtml);
    $("#form-grand-total").text("$" + grandTotal.toLocaleString());
    $("#btn-submit-order-text").text("Confirm & Place Order ($" + grandTotal.toLocaleString() + ")");
  }

  // Open popup
  orderTrigger.on("click", function(e) {
    e.preventDefault();
    selectionView.removeClass("is-hidden");
    formView.addClass("is-hidden");
    updateCartUI();
    
    orderPopup.addClass("is-visible");
    setTimeout(function() {
      $(".order-popup .popup__content").addClass("is-visible");
    }, 200);
    setTimeout(function() {
      orderClose.addClass("is-scaled-up");
    }, 1000);
  });

  // Direct Order button from Carousel Slides & 2x2 Grid
  $(document).on("click", ".btn-grid-order, .btn-product-order", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var product = $(this).data("product");
    var price = Number($(this).data("price"));

    if (!orderCart[product]) {
      orderCart[product] = { qty: 1, price: price };
    } else if (orderCart[product].qty === 0) {
      orderCart[product].qty = 1;
      orderCart[product].price = price;
    }
    updateCartUI();

    // Show form view directly
    selectionView.addClass("is-hidden");
    formView.removeClass("is-hidden");
    
    // Initialize active style on payment options
    $('.payment-option').removeClass('is-selected');
    $('input[name="payment_method"]:checked').closest('.payment-option').addClass('is-selected');
    
    orderPopup.addClass("is-visible");
    setTimeout(function() {
      $(".order-popup .popup__content").addClass("is-visible");
    }, 200);
    setTimeout(function() {
      orderClose.addClass("is-scaled-up");
    }, 1000);
  });

  // Quantity Plus
  $(document).on("click", ".btn-qty-plus", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var card = $(this).closest(".product-card");
    var product = card.data("product");
    var price = Number(card.data("price"));

    if (!orderCart[product]) {
      orderCart[product] = { qty: 0, price: price };
    }
    orderCart[product].qty += 1;
    orderCart[product].price = price;
    updateCartUI();
  });

  // Quantity Minus
  $(document).on("click", ".btn-qty-minus", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var card = $(this).closest(".product-card");
    var product = card.data("product");

    if (orderCart[product] && orderCart[product].qty > 0) {
      orderCart[product].qty -= 1;
      updateCartUI();
    }
  });

  // Proceed to details
  btnProceed.on("click", function(e) {
    e.preventDefault();
    selectionView.addClass("is-hidden");
    formView.removeClass("is-hidden");

    // Initialize active style on payment options
    $('.payment-option').removeClass('is-selected');
    $('input[name="payment_method"]:checked').closest('.payment-option').addClass('is-selected');
  });

  // Handle payment options toggling
  $(document).on("change", 'input[name="payment_method"]', function() {
    $('.payment-option').removeClass('is-selected');
    $('input[name="payment_method"]:checked').closest('.payment-option').addClass('is-selected');
  });

  // Back to Selection
  backBtn.on("click", function(e) {
    e.preventDefault();
    formView.addClass("is-hidden");
    selectionView.removeClass("is-hidden");
    updateCartUI();
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

  // Form Submission to Google Sheets
  $("#order-form").submit(function(e) {
    e.preventDefault();
    var th = $(this);
    var submitBtn = th.find('button[type="submit"]');
    var originalBtnText = submitBtn.find('.btn-caption').text();
    
    // Prepare items array
    var selectedItems = [];
    var totalAmount = 0;
    Object.keys(orderCart).forEach(function(name) {
      var item = orderCart[name];
      if (item.qty > 0) {
        var lineTotal = item.qty * item.price;
        totalAmount += lineTotal;
        selectedItems.push({
          product_name: name,
          quantity: item.qty,
          unit_price: item.price,
          line_total: lineTotal
        });
      }
    });

    if (selectedItems.length === 0) {
      alert("Please select at least one item to place an order.");
      formView.addClass("is-hidden");
      selectionView.removeClass("is-hidden");
      return;
    }

    var orderId = "NOOK-" + Math.floor(100000 + Math.random() * 900000);
    var payload = {
      order_id: orderId,
      timestamp: new Date().toISOString(),
      name: th.find('input[name="name"]').val(),
      contact: th.find('input[name="contact"]').val(),
      location: th.find('input[name="location"]').val(),
      payment_method: th.find('input[name="payment_method"]:checked').val() || "Bank Transfer",
      notes: th.find('textarea[name="notes"]').val() || "",
      total_amount: totalAmount,
      items: selectedItems
    };

    // Disable button during submission
    submitBtn.prop("disabled", true);
    submitBtn.find('.btn-caption').text("Submitting Order...");

    // Google Apps Script URL
    var scriptURL = "https://script.google.com/macros/s/AKfycbzTeRtxzO0t-2qn7HpZKsWS-bMq2vqCXGaSHgrXHbvUG4FxJHRoifALA5j4rpDY5KaUjQ/exec";

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors for simple requests without preflight
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    })
    .then(function() {
      alert("Thank you, " + payload.name + "! Your order (" + orderId + ") has been received. We will contact you shortly to confirm delivery.");
      orderCart = {};
      updateCartUI();
      orderClose.click();
      th.trigger("reset");
    })
    .catch(function(error) {
      console.error('Order submission error:', error);
      alert("Something went wrong while placing your order. Please try again or reach out to us directly.");
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
