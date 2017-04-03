var Accordion = (function ($) {
	var init = function() {
        $(document).ready(function(){
			$('.c-accordion__button').click(function(){
				$('.c-accordion_item').removeClass('js-active');
				$(this).parent('.c-accordion_item').toggleClass('js-active');
			});
		});
	};

	return {
		init: init
	};

})(jQuery);
