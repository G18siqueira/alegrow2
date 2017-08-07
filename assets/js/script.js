$(document).ready(function () {
    $("#lightgallery").lightGallery();
});
$(document).ready(function () {
    $('#imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 9,
        slideMargin: 0,
        enableDrag: false,
        keyPress: true,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });
});
jQuery(document).ready(function ($) {
    $("#light-slider-hero").lightSlider({
        item: 1,
        slideMargin: 0,
        controls: true,
        keyPress: true,
        pause: 3500,
        speed: 1500,
        mode: 'fade',
        auto: true,
        loop: true,
        enableTouch: true,
    });
});
jQuery(document).ready(function ($) {
    $("#lightSlider").lightSlider({
        item: 5,
        slideMove: 5,
        slideMargin: 10,
        keyPress: true,
        speed: 1000,
        loop: false,
        enableTouch: true,
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#lightSlider .lslide'
            });
        },
        responsive: [{
            breakpoint: 770,
            settings: {
                item: 4
            }
        }]
    });
});
jQuery(document).ready(function ($) {
    $("#light-slider").lightSlider({
        item: 1,
        loop: false,
        slideMove: 1,
        responsive: [{
            breakpoint: 770,
            settings: {
                item: 1,
                slideMove: 1,
                slideMargin: 10
            }
        }, {
            breakpoint: 370,
            settings: {
                item: 1,
                slideMove: 1,
                slideMargin: 5
            }
        }, ],
    });
});

/*LAZY LOAD*/

var loadImages;

$(document).ready(function(){
    $(".lazy-img img").on("load", function(){
        $(this).addClass("loaded");
    });

    $(document).on("scroll",function(){
        loadImages();
    });

    (loadImages = function loadImages(){
        $.each($(".lazy-img"), function(){
            var block = $(this);
            var image = block.find("img");

            if(isOnScreen(block)){
                var url = image.data("url");

                if(image.attr("src") != url){
                    image.attr("src",url);
                };
            }
        });
    })();
});

function isOnScreen(element){
    var win = $(window);
    
    var screenTop = win.scrollTop();
    var screenBottom = screenTop + win.height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}