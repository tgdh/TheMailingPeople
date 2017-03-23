(function($) {
    'use strict';
    var $window = window,
        $html = $('html');

    var enhanceEdgeCaseBrowsers = function() {

        if (!Modernizr.classlist) {
            $html.removeClass('no-enhance').addClass('enhance');
        }

    };

    /* ===========================================================
		# breakpoints
=========================================================== */

    var breakpoints = [{
        context: ['small-max', 'small', 'medium'],
        call_for_each_context: false,
        match: function() {
            //console.log('small');
//            mobileNavigation($('.js-nav'));
        },
        unmatch: function() {
            // unbind and scripts if possible
            location.reload();
        }
    }, {
        context: ['large', 'x-large', 'xx-large'],
        call_for_each_context: false,
        match: function() {
            //console.log('medium - xxl');
//            compactHeader();
        },
        unmatch: function() {
            // unbind and scripts if possible
            location.reload();
        }
    }];

    var featuredContentCarousel = function() {
        var $carousel = $('.js-carousel--featured');
        $carousel.addClass('owl-carousel');

        $carousel.owlCarousel({
            loop: true,
            autoHeight: true,
            autoplay: false,
            autoplayTimeout: 15000,
            navText: ['<i class="ico-arrow-left"></i> <span class="u-hide-text">Prev</span>', '<span class="u-hide-text">Next</span> <i class="ico-arrow-right"></i>'],
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    dots: true,
                    loop: false,
                    margin: 25
                },
                650: {
                    items: 3,
                    nav: false,
                    dots: true,
                    margin: 35,
                    loop: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    dots: false,
                    margin: 40
                }
            }
        });
    };

    /* ===========================================================

	# Init

=========================================================== */

    if ($window.IsModern) {

        enhanceEdgeCaseBrowsers();
        featuredContentCarousel();
        //		$window.ToggleClass.init();
        //		$('select').selectric();
        //		scrollTo($('a[href^="#"]:not(".js-no-scroll")'));
        //		$('.js-tabs').tabs();

        // $window.Carousel.init($('.js-carousel'));
        //		$window.Modal.init( $('.js-modal') );
        //		$window.Accordion.init();
        //		$window.GMaps.init();
        $window.ValidateForms.init($('.js-form'));
        $window.Header.init();

        //		MQ.init(breakpoints);
    }

    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

})(jQuery);
