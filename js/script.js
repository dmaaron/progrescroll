(function($){
      
$(function(){
      var wrapper_top = $(".progress .wrapper").offset().top;
      $(window).scroll(function (){
        

        // Affixes Progress Bars
        var scrollDistance = $(this).scrollTop();

        if (scrollDistance > wrapper_top - 10) {   // if scrolled just above the top of the scroll-bar holder, add affix class, fixing the holder in place.
            $(".progress .wrapper").addClass("affix");
        }
        else {
                $(".progress .wrapper").removeClass("affix");
        }


        // Calculate each progress section
        $(".content div").each(function(i){
            var this_top = $(this).offset().top;
            var height = $(this).height();
            var this_bottom = this_top + height;
            var percent = 0;

            // Scrolled within current section
            if (scrollDistance >= this_top && scrollDistance <= this_bottom) { 
                percent = ((scrollDistance - this_top) / (height - 150)) * 100;
                if (percent >= 100) {
                    percent = 100;
                    $(".progress .wrapper .bar:eq("+i+") i").css("color", "#fff");
                }
                else {
                    $(".progress .wrapper .bar:eq("+i+") i").css("color", "#36a7f3");
                }
            }
            //scrolled past content
            else if (scrollDistance > this_bottom) {
                percent = 100;
                $(".progress .wrapper .bar:eq("+i+") i").css("color", "#fff");
            }
            console.log(i);
            $(".progress .wrapper .bar:eq("+i+") span").css("width", percent + "%");//fills width of content bar based on percentage of content scrolled through
        });
      });
    

      // Smooth Scroll Links
      $(".wrapper .bar a").click(function (e){
        e.preventDefault();

        var hash = this.hash.substr(1);
        console.log(hash);
        $('html, body').animate({
        scrollTop: $("#"+ hash).offset().top - 10
    }, 500);

      });
    }); // end of document ready
})(jQuery);