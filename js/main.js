$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
        setTimeout(function(){
            $('#loader-wrapper').remove();
        }, 3000);
    }, 3000);
});


