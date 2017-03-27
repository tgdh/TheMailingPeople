var Header = (function ($) {
	'use strict';

	var _header = function() {
		$(window).scroll(function(){
			var wScroll = $(this).scrollTop();
			if(wScroll > 42){
				$('.c-header').addClass('js-sticky');
			}else{
				$('.c-header').removeClass('js-sticky');
			}
			if(wScroll > 300){
				$('.c-header').addClass('js-smaller');
			}else{
				$('.c-header').removeClass('js-smaller');
			}
		});
	};

	return {
		init: _header
	};

})(jQuery);
