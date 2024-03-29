(function ($) {
  'use strict'; // Start of use strict

  function showMessage(message, isError) {
    var popupClass = isError ? 'error' : 'success';
    var $popup = $(
      '<div class="popup ' + popupClass + '">' + message + '</div>'
    );

    $('body').append($popup);

    // Remove the popup after a few seconds
    setTimeout(function () {
      $popup.animate({ opacity: 0 }, 500, function () {
        $popup.remove();
      });
    }, 3000);
  }

  // Closes the sidebar menu
  $('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
    $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass(
      'fa-bars fa-times'
    );
    $(this).toggleClass('active');
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function () {
    $('#sidebar-wrapper').removeClass('active');
    $('.menu-toggle').removeClass('active');
    $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass(
      'fa-bars fa-times'
    );
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
})(jQuery); // End of use strict
