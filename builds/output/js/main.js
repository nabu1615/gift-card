$(function() {
    var pull = $('.small-menu');
    menu = $('.nav');
    menuHeight = menu.height();

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
});



