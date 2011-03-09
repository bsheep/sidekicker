// Copyright (c) 2011 bsheep
// under the MIT License
// http://d.hatena.ne.jp/bsheep/20110309/1299683130

(function($) {
 $.fn.sidekicker = function(option) {
     $(this).live('click', function() {
         var kicked = $(this);
         var kicker = (option && option.kicker) ? $(option.kicker) : $('#kicker');
         var container = (option && option.container) ? $(option.container) : $('#container');
         var kickback = (option && option.kickback) ? $(option.kickback) : $('#kickback');
         container.animate({
             left: '-850px'
         }, 1000, function() {
             var kicker_left = kicked.offset().left + 310;
             var kicker_top = $('html, body').scrollTop() + 10;
             kicker.appendTo('body').css({left: kicker_left, top: kicker_top}).show('slow');
         });
         kickback.live('click', function() {
             kicker.hide('normal');
             container.animate({left:'0px'});
             return false;
         });
         return false;
     });
 };
})(jQuery);
