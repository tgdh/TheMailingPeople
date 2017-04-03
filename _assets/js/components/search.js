var Search = (function ($) {
	'use strict';
	var _search = function() {
		$(document).ready(function(){
			$('.c-header__search ').click(function(){
				$('.c-social--header .c-social__link').each(function(i){
			      setTimeout(function(){
			        $('.c-social--header .c-social__link').eq(i).toggleClass('js-search-active');
				  }, (700 * (Math.exp(i * 0.1))) - 700);
			    });
				setTimeout(function(){
					$('.c-search__form-wrapper').toggleClass('js-search-active');
				},400);
			});
			$('.close-nav').click(function(){
				$('.c-search__form-wrapper').removeClass('js-search-active');
				$('.c-social--header .c-social__link').each(function(i){
			      setTimeout(function(){
			        $('.c-social--header .c-social__link').eq(i).removeClass('js-search-active');
				}, (1000 * (Math.exp(i * 0.1))) - 700);
			    });
			});
		});
	};

	return {
		init: _search
	};

})(jQuery);
