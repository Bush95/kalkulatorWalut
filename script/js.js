$(document).ready(function() {

    $('#nav-js').on('click', 'a', function (e) {
        e.preventDefault();
        var target = $(this).attr('href').replace('#','.');
        $('body, html').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('.navbar-toggle').click();
    });

});