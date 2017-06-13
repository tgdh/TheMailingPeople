var StaffPopup = (function ($) {
	'use strict';

	var _staffPopup = function() {
		$(document).ready(function(){
			$('.js-staff-popup').on('click' ,function() {
		       var target = $(this).attr('data-name');
               if(target !== null && target !== ""){
                  $('.js-popup').addClass('is--showing');
                  $('.js-popup-staff[id="'+target+'"]').addClass('is--showing');
               }
	     	});
            $('.js-close-popup').on('click',function(){
                $('.js-popup').removeClass('is--showing');
                $('.js-popup-staff').removeClass('is--showing');
            });
		});
        $(document).on('keyup',function(e) {
            if (e.keyCode == 27) {
                if($('.js-close-popup').hasClass('is--showing') || $('.js-popup-staff').hasClass('is--showing')){
                    $('.js-popup').removeClass('is--showing');
                    $('.js-popup-staff').removeClass('is--showing');
                }
            }
        });
	};

	return {
		init: _staffPopup
	};

})(jQuery);
