$(function() {
    var pull = $('.small-menu'),
    menu = $('.nav'),
    menuHeight = menu.height(),
    slideHome = $('.slide-home'),
    slideBrands = $('.slide-brands'),
    isDraggin = false,
    contactNav = $("#contact-nav"),
    contactDiv = $(".contact"),
    contactClose = $(".contact .close"),
    rangeSelector = $(".range");

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

    $(contactNav).on('click', function(){
        $(contactDiv).fadeToggle();
        $(".modal-backdrop").fadeIn();
    });

    $(contactClose).on('click', function(){
        $(contactDiv).fadeToggle();
         $(".modal-backdrop").fadeOut();
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


    $(".range-item").ionRangeSlider({
        type: "single",
        values: [0, 10, 100, 1000, 10000, 100000, 1000000]
    });

    function range() {
        var rangeText = $('.irs-single').text();
        return $(".range").find("#price-number").text(rangeText);
    }

    // setInterval(function range() {
    //     var rangeText = $('.irs-single').text();
    //     return $(".range").find("#price-number").text(rangeText);
    // }, 5);



});



