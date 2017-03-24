var Nav = (function ($) {
	'use strict';
	var _nav = function() {
		$(document).ready(function(){
			$('.js-toggle').click(function(){
				$('.c-header__main__right').toggleClass('js-active');
				$(this).toggleClass('js-active');
				$('.c-page__wrapper').toggleClass('js-nav-active');
				$('header').toggleClass('js-nav-active');
				$('footer').toggleClass('js-nav-active');
				$('.c-header__nav-wrap').toggleClass('js-nav-active');
			});
			$('.c-nav__sub-chevron').click(function(){
				$('.c-nav__list--sub').removeClass('js-active');
				$(this).siblings('.c-nav__list--sub').toggleClass('js-active');
			});
			$('.c-nav__close').click(function(){
				$('.c-nav__list--sub').removeClass('js-active');
			});
			$('.c-page__wrapper').click(function(){
				$('.c-header__toggle-menu-button').removeClass('js-active');
				$(this).removeClass('js-nav-active');
				$('header').removeClass('js-nav-active');
				$('footer').removeClass('js-nav-active');
				$('.c-header__nav-wrap').removeClass('js-nav-active');
				$('.c-header__main__right').removeClass('js-active');
			});
		});
	};

	return {
		init: _nav
	};

})(jQuery);
