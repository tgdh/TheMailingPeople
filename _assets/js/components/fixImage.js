var FixImage = (function ($) {
	'use strict';
    
    var fixImage = function(){  
        var imageWrap = $('.js-parallax-image-wrap');  
        imageWrap.addClass('js-parallax-image-wrap--fix');    
    }; 

	var _init = function() {        
        fixImage();
	};

	return {
		init: _init
	};

})(jQuery);
