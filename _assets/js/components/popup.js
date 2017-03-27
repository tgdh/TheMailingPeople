var PopupMagic = (function ($) {
	'use strict';
	var _popupMagic = function() {
		$(document).ready(function(){
			$('.js-popup__video').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		});
	};

	return {
		init: _popupMagic
	};

})(jQuery);
