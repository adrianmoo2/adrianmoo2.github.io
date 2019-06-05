
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

    // ----- Navbar offset attempt #5000 (SUCCESS!)-----

    $('.nav-link').click(function(){
        divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 5000
        }, 100);
    })

    // ---- Navbar shows on up-scroll functionality----
});