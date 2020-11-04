(function ($) {
  "use strict";
  $.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
  }
  /* Loader Code Start */
  $(window).on("load", function () {
    $(".section-loader").fadeOut("slow");
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        queue: true
      }
    });
    $('.portfolio-nav li').click(function () {
      $('.portfolio-nav .current').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true
        }
      });
      return false;
    });
  });
  /* Loader Code End */
  /*
  |====================
  | Mobile NAv trigger
  |=====================
  */
  var trigger = $('.navbar-toggler'),
    overlay = $('.overlay'),
    navc = $('.navbar-collapse'),
    active = false;
  $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
    $('.navbar-toggler').toggleClass('active')
    //   $('#js-navbar-menu').toggleClass('active');
    //   $('.navbar-collapse').toggleClass('show');
    overlay.toggleClass('active');
    navc.toggleClass('active');
  });
  /*
  |=================
  | Onepage Nav
  |================
  */
  $('#mh-header').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });
  /*
  |=================
  | fancybox
  |================
  */
  $("[data-fancybox]").fancybox({});
  /*
  |===============
  | WOW ANIMATION
  |==================
  */
  var wow = new WOW({
    mobile: false
  });
  wow.init();

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });
  /*
  |=================
  | Progress bar
  |================
  */
  $(".determinate").each(function () {
    var width = $(this).text();
    $(this).css("width", width)
      .empty()
      .append('<i class="fa fa-circle"></i>');
  });

  $('#portfolio-item').mixItUp();

  $('.mh-project-testimonial').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
  });
  /*
  |=================
  | Single Project review
  |================
  */
  $('#single-project').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
  });
  /*
  |=================
  | Project review slide
  |================
  */
  $('.mh-single-project-slide-by-side').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover: true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
  });

  jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  });
}(jQuery));
