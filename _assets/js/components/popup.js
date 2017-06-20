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

				fixedContentPos: false,
				iframe: {
		            markup: '<div class="mfp-close close"></div>'+
							'<div class="mfp-iframe-scaler">'+
					            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					        '</div>',
		        },
			});
			$('.js-popup__image').magnificPopup({
				type: "image",
				disableOn: 700,
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false,
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
			$('.js-staff-popup').magnificPopup({
				type: 'inline',
				preloader: false,
				modal: true,
				mainClass: 'mfp-fade',
			});
			$(document).on('click', '.popup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});
		});
	};

	return {
		init: _popupMagic
	};

})(jQuery);
