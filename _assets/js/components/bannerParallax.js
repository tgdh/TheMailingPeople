var BannerPara = (function ($) {
	'use strict';

    var parallaxImage = $('.js-parallax-image');

    var imageScroll = function(position){
        parallaxImage.css('transform', "translate3d(0," + position + 'px, 0)');
    };

	var _init = function() {

		
			$(window).on('scroll', function() {

                var scrollPos = $(this).scrollTop();  

                imageScroll(scrollPos);

                console.log( scroll );

            });
	};

	return {
		init: _init
	};

})(jQuery);
