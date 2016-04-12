$(function() {
    var pull = $('.small-menu'),
    menu = $('.nav'),
    menuHeight = menu.height(),
    slideHome = $('.slide-home'),
    slideBrands = $('.slide-brands');

   $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 768 ) {
            menu.removeAttr('style');
        }
    });

    $(slideHome).slick({
        arrows: false,
        dots: true,
        mobileFirst: true
    });

    $(slideBrands).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

});



