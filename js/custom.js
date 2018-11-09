$(document).ready(function() {
    // $('.navbar-toggler').click(function() {
    //     $('.navbar-collapse').slideToggle();
    //    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 50) {
            $('.main-menu').addClass('sticky');

        } else {
            $('.main-menu').removeClass('sticky');
        }

    });


});