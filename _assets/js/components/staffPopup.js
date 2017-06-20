var StaffPopup = (function ($) {
	'use strict';

	var _staffPopup = function() {
		$('.js-staff-popup').on('click', function(){
            console.log('test');
        });
	};

	return {
		init: _staffPopup
	};

})(jQuery);
