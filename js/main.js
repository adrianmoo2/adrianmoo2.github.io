
var divId;

jQuery(document).ready(function($) {

    //----- Preloader -----

    $(document).ready(function() {
        setTimeout(function() {
            $('body').addClass('loaded');
            setTimeout(function(){
                $('#loader-wrapper').remove();
            }, 3000);
        }, 3000);
    });
    
    // ---- Navbar shows on up-scroll functionality----

    $(window).scroll(function(e) {

        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.navbar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
        }
    
    });
});