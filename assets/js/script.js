$(document).ready(function() {
            $("#lightgallery").lightGallery();            
        });
        
        $(document).ready(function() {
            $('#imageGallery').lightSlider({
                gallery:true,
                item:1,
                loop:true,
                thumbItem:9,
                slideMargin:0,
                enableDrag: false,
                keyPress: true,
                currentPagerPosition:'left',
                onSliderLoad: function(el) {
                    el.lightGallery({
                        selector: '#imageGallery .lslide'
                    });
                }   
            });  
          });


jQuery(document).ready(function($){
    $("#light-slider-hero").lightSlider({
        item: 1,//mostra a quantidade de itens no slider
        //slideMove: 5,
        slideMargin: 0,
        controls: true,
        keyPress: true,
        pause: 3500,
        speed: 1500,
        mode: 'fade',
        auto: true,
        //pause: 3000,
        //gallery: true,//ativa a galeria em thumb
        //thumbItem: 1//quantos fotos vão aparecer no thumb  
        loop: true,//ativa o loop no slider(sempre volta ao inicio)
        //vertical: false,
        enableTouch: true,
    });
});



jQuery(document).ready(function($){
    $("#lightSlider").lightSlider({
        item: 5,//mostra a quantidade de itens no slider
        slideMove: 5,
        slideMargin: 10,
        keyPress: true,
        speed: 1000,
        //auto: true,
        //pause: 3000,
        //gallery: true,//ativa a galeria em thumb
        //thumbItem: 1//quantos fotos vão aparecer no thumb  
        loop: false,//ativa o loop no slider(sempre volta ao inicio)
        //vertical: false,
        enableTouch: true,
        
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#lightSlider .lslide'
            });
        },
        
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    item: 4
                }
            }
        ]
    });
});


jQuery(document).ready(function($){
    $("#light-slider").lightSlider({
        
        item: 1,//mostra a quantidade de itens no slider
        loop: false,//ativa o loop no slider(sempre volta ao inicio)
        slideMove: 1,//muda o slide de 3 em 3 por exemplo
        //auto: true,
        //pause: 5000,
        //speed: 1000,//velocidade em milisegundos
       // slideMargin: ,//margem entre imagens ou textos
        
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 10
                }
            },
            
            {
                breakpoint: 370,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 5
                }
            },
        ],
        //autoWidth: true,//se adapta conforme conteudo
        //adaptiveHeight: true, //se adapta conforme conteudo
        //rtl: true //o fluxo do slide fica ao contrário
    });
});