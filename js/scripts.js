(function ($) {
  $(document).ready(function () {
    // Scroll to Top
    jQuery(".scrolltotop").click(function () {
      jQuery("html").animate({ scrollTop: "0px" }, 400);
      return false;
    });

    jQuery(window).scroll(function () {
      var upto = jQuery(window).scrollTop();
      if (upto > 500) {
        jQuery(".scrolltotop").fadeIn();
      } else {
        jQuery(".scrolltotop").fadeOut();
      }
    });

    //sticky header

    $(document).ready(function () {
      jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop()) {
          jQuery("#header").addClass("shadow-lg");
        } else {
          jQuery("#header").removeClass("shadow-lg");
        }
      });
    });

    // code for owl caursol
    $(".products-slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 2.2,
          margin: 5,
        },
        768: {
          items: 2.2,
          margin: 5,
        },
        960: {
          items: 2.5,
          margin: 15,
        },
        1200: {
          items: 3.2,
          margin: 15,
        },

        1360: {
          items: 4,
          margin: 15,
        },
        1920: {
          items: 4,
        },
      },
    });

    var owl = $(".products-slider");
    owl.owlCarousel();
    $(".owl-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".owl-prev").click(function () {
      owl.trigger("prev.owl.carousel", [300]);
    });

    // marquee slider
    $(".slick.marquee").slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
    });
  });
})(jQuery);
