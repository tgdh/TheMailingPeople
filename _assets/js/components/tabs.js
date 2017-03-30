var Tabs = (function ($) {
	'use strict';
	var _init = function() {
		$(document).ready(function(){
			$('#tabs2').scrollTabs();
			$('.c-tabs__nav-list .c-tabs__nav-item').first().addClass('tab_selected');
			$('.c-tabs__content .c-tabs__content-tab').first().addClass('is-active');
			$('.c-tabs__nav-item').click(function(){
				var tab_id = $(this).attr('data-tab');
				$('.c-tabs__content-tab').removeClass('is-active');
				$("#"+tab_id).addClass('is-active');
			});
		});
	};

	return {
		init: _init
	};

})(jQuery);
