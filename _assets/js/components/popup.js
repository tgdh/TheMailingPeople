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

			var contentModal = function() {
				$('.js-info-modal').magnificPopup({
					removalDelay: 500, //delay removal by X to allow out-animation
					callbacks: {
						beforeOpen: function() {
							this.st.mainClass = "mfp-zoom-in";
						},

					},
					midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
				});
			};


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
				removalDelay: 500, //delay removal by X to allow out-animation
				callbacks: {
					beforeOpen: function() {
						this.st.mainClass = 'mfp-zoom-in';
					},
				},
				overflowY: 'scroll',
				midClick: true
			});

			
		});

		
	};

	return {
		init: _popupMagic
	};

})(jQuery);
