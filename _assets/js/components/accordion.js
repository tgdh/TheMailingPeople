var Accordion = (function ($) {
	var init = function() {
        $(document).ready(function(){
			$('.c-accordion__button').click(function(){
				$(this).parent('.c-accordion_item').toggleClass('js-active');
			});
			$('.js-toggle-accordion').click(function(){
				$(this).parent('.c-accordion_item').toggleClass('js-active');
			});
		});
	};

	return {
		init: init
	};

})(jQuery);
