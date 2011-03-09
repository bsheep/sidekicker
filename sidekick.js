(function($) {
 $(document).ready(function() {
     $('#sidekick').bind('click', function() {
         var kicked = $(this);
         $('#container').animate({
             left: '-850px'
         }, 1000, function() {
             var kicker_left = kicked.offset().left + 310;
             var kicker_top = $('html, body').scrollTop() + 10;
             $('#kicker').appendTo('body').css({left: kicker_left, top: kicker_top}).show('slow');
         });
         return false;
     });

     });
     $('#kickback').live('click', function() {
         $('#kicker').hide('normal');
         $('#container').animate({left:'0px'});
         return false;
     });
 })(jQuery);
