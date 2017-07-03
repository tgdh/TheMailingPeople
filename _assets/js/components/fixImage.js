var FixImage = (function ($) {
	'use strict';

    var imageWrap = $('.js-parallax-image-wrap');
    var headerHeight = $('.c-header__main').height();
    var superHeaderHeight = $('.c-header__super').height();
    var lastScrollTop = 0;
    var scrollTimeout;
    var throttleTimeout = 100;
    var scrollDelta = 300;

    var fixImage = function(win){        
        var st = win.scrollTop();
        if (st > lastScrollTop){ 
            // Scroll DOWN 
            if(st > scrollDelta ) {
                imageWrap.css('transform', 'translateY(-2rem)'); 
            }

        } else {
            // Scroll UP
            if(st < scrollDelta ) {
                imageWrap.css('transform', 'translateY(2rem)'); 
            }
        }
        lastScrollTop = st;
    }; 

    var throttle = function(){  
        imageWrap.addClass('js-parallax-image-wrap--fix');

        $(window).on('scroll', function (e) {
            var _self = $(this);
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {
                    fixImage(_self);
                    scrollTimeout = null;
                    console.log("scroll");
                }, throttleTimeout);
            }
        });
    };

	var _init = function() {        
        throttle();
	};

	return {
		init: _init
	};

})(jQuery);
