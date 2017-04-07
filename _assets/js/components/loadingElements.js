var LoadingElements = (function ($) {
	'use strict';

	var _loadingElements = function() {
		$(document).ready(function(){
			banner();
			lastWeek();
			googleMapsLoad();
		});
		var throttled = _.throttle(throttle, 250);
		$(window).scroll(throttled);
		$(document).ready(throttled);
		function banner(){
			$('.c-banner__heading').addClass('is-showing');
			$('.c-banner__text').addClass('is-showing');
			$('.c-banner__link').each(function(i){
			  	setTimeout(function(){
					$('.c-banner__link').eq(i).addClass('is-showing');
				}, (1000 * (Math.exp(i * 0.1))) - 700);
			});
		}
		function lastWeek(){
			setTimeout(function(){
				$('.c-block__last-week .c-block__content-left').addClass('is-showing');
			},400);
			setTimeout(function(){
				$('.c-block__last-week .c-block__content-right').addClass('is-showing');
				$('.c-block__read-more').addClass('is-showing');
			},600);
		}
		function googleMapsLoad() {
			/* As the google maps API takes a second to kick in resulting in the page showing a grey box then the content just showing this makes that look nicer */
			setTimeout(function(){
				$('.c-contact__map').addClass('is-showing');
			},500);
		}
		function throttle() {
			var wScroll = $(this).scrollTop();
			animateIn( $('.c-staff_wrapper') , 1.2 , $('.c-block__staff-member') , wScroll );
			animateIn( $('.c-page__wrapper') , 1.2 , $('.c-services__item') , wScroll );
			animateIn( $('.c-page__wrapper') , 1.2 , $('.c-contact__item') , wScroll );
		}
		function animateIn(parentElement, windowAmount, itemElement, scroll){
			if(parentElement.length > 0){
				if(itemElement.length > 0) {
					if(scroll > parentElement.offset().top - ($(window).height() / windowAmount)) {
				    	itemElement.each(function(i){
					      setTimeout(function(){
					        itemElement.eq(i).addClass('is-showing');
					      }, (700 * (Math.exp(i * 0.14))) - 700);
					    });
				  	}
				}
			}
		}
	};

	return {
		init: _loadingElements
	};

})(jQuery);
