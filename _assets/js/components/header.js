var Header = (function ($) {
	'use strict';

	var spaceBodyTop = function() {
		var headerHeight = $('.c-header').height();
		var headerMainHeight = $('.c-header__main').height();
		var cssMediaQueryBP = 1350;
		if($(window).width() < cssMediaQueryBP ) {
			$('body').css('padding-top', headerMainHeight + 'px');
		} else {
			$('body').css('padding-top', headerHeight + 'px');
		}
	};

	var _header = function() {		
		$(document).ready(function(){
			$('.c-header').addClass('js-sticky');	
					
			spaceBodyTop();
			$(window).resize(spaceBodyTop);			

			$('.c-banner__heading').html(function(index, curHTML) {
		       var text = curHTML.split(/[\s-]/),
		           newtext = '<span>' + text.pop() + '</span>';
		       return text.join(' ').concat(' ' + newtext);
	     	});
		});
	};

	return {
		init: _header
	};

})(jQuery);
