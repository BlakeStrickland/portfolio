# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
// $(document).ready(function() {
//   if ($("js-parallax-window").length) {
//     parallax();
//   }
// });
//
// $(window).scroll(function(e) {
//   if ($("#js-parallax-window").length) {
//     parallax();
//   }
// });
//
// function parallax(){
//   if( $("#js-parallax-window").length > 0 ) {
//     var plxBackground = $("#js-parallax-background");
//     var plxWindow = $("#js-parallax-window");
//
//     var plxWindowTopToPageTop = $(plxWindow).offset().top;
//     var windowTopToPageTop = $(window).scrollTop();
//     var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
//
//     var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
//     var windowInnerHeight = window.innerHeight;
//     var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
//     var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
//     var plxSpeed = 0.35;
//
//     plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
//   }
// }

// $(document).ready(function () {
//   $('.accordion-tabs-minimal').each(function(index) {
//     $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
//   });
//   $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
//     if (!$(this).hasClass('is-active')) {
//       event.preventDefault();
//       var accordionTabs = $(this).closest('.accordion-tabs-minimal');
//       accordionTabs.find('.is-open').removeClass('is-open').hide();
//
//       $(this).next().toggleClass('is-open').toggle();
//       accordionTabs.find('.is-active').removeClass('is-active');
//       $(this).addClass('is-active');
//     } else {
//       event.preventDefault();
//     }
//   });
// });
