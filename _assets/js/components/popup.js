var PopupMagic = (function ($) {
	'use strict';
	var _popupMagic = function() {
		$(document).ready(function(){
			$('.js-popup__video').magnificPopup({
				type: 'iframe',
				iframe: {
		            markup: '<div class="mfp-close close"></div>'+
							'<div class="mfp-iframe-scaler">'+
					            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					        '</div>',
		        },
			});
			$('.js-popup__image').magnificPopup({
				type: "image",
		        image: {
		            markup: '<div class="c-popup">' +
		                        '<div class="mfp-toolbar"></div>' +
		                        '<div class="mfp-close"></div>' +
		                        '<figure>' +
		                            '<div class="mfp-img"></div>' +
		                        '</figure>' +
		                    '</div>'
		        },
		        gallery: {
		            enabled: true
		        },
			});
		});
	};

	return {
		init: _popupMagic
	};

})(jQuery);
