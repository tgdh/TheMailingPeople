var BannerPara = (function ($) {
	'use strict';

    var parallaxImage = $('.js-parallax-image');

    var imageScroll = function(position){
        parallaxImage.css('transform', "translate3d(0," + position + 'px, 0)');
    };

    var throttle = function(){
        var scrollTimeout;
        var throttle = 50;
        var parallaxImageScroll = function(){
            var lastScrollTop = 0;
            $(window).on('scroll', function(e){

                var st = $(this).scrollTop();
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
            });
        };

        $(window).on('scroll', function () {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {
                    parallaxImageScroll();
                    scrollTimeout = null;
                }, throttle);
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
