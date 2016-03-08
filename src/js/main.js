$(function() {
    var pull = $('.icon-hamburger');
    menu = $('.main-nav');
    menuHeight = menu.height();

   $(pull).on('click', function(e) {
    e.preventDefault();
    menu.fadeToggle();
    $('body').toggleClass('hidden-scroll');
});

$(window).resize(function(){
        var w = $(window).width();
        if(w > 992 ) {
        menu.removeAttr('style');
        $('body').removeClass('hidden-scroll');
        }
    });
});

$(function(){
    rockola = $(".btn-rockola"),
    sPlayer = $(".player-list");
    sHide = $(".play-hide");

    $(rockola).on("click", function(e){
        e.preventDefault();
        $(this).parents().find(sPlayer).fadeToggle();
    });
});

$(function(){
    $(sHide).on("click", function(e){
        e.preventDefault();
        $(this).parents().find(sPlayer).fadeToggle();
    });
});


(function() {
    var script = document.createElement("script");

    script.type = "text/javascript";
    script.async = true;
    script.src = "//sd.toneden.io/production/v2/toneden.loader.js"

    var entry = document.getElementsByTagName("script")[0];
    entry.parentNode.insertBefore(script, entry);
}());

ToneDenReady = window.ToneDenReady || [];
ToneDenReady.push(function() {
    ToneDen.configure({
        soundcloudConsumerKey: '81b30d1e0691564e9128e5257eb09954'
    });
    // This is where all the action happens:
    ToneDen.player.create({
        dom: "#player",
        eq: "waves",
        skin: "dark",
        tracksPerArtist: 20,
        urls: [
            "https://soundcloud.com/el-bandido-bistro"
        ]
    });
});