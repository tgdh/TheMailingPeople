var BannerPara = (function ($) {
	'use strict';

    var parallaxImage = $('.js-parallax-image');
    var lastScrollTop = 0;
    var scrollTimeout;
    var throttleTimeout = 50;

    var imageScroll = function(position){
        parallaxImage.css('transform', "translate3d(0," + position + 'px, 0)');
    };

    var parallaxImageScroll = function(win){           
        var st = win.scrollTop();
        var headerHeight = $('.c-header__super').height();
        if (st > lastScrollTop){
            if(st > headerHeight ) {
                st = st - headerHeight;
                imageScroll(st);
            }
            if(st > 250 ) {
                parallaxImage.css('margin-top', '-2rem');
            } else {
                parallaxImage.css('margin-top', '0');
            }
            } else {
                if(st < headerHeight ) {
                    parallaxImage.css('transform', 'none');
                } else {
                    st = st - headerHeight;
                    imageScroll(st);
                }
            }
        lastScrollTop = st;
    };

    var throttle = function(){  
        $(window).on('scroll', function (e) {
            var _self = $(this);
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {
                    parallaxImageScroll(_self);
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
