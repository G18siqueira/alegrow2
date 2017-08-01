/*FUNÇÃO PARA ATIVAR MENU E DESATIVA O MENU TOGGLE*/
$(function(){
            $('.toggle').click(function(){
                $('.menu-responsivo').toggleClass('ativo');
                $(this).toggleClass('ativo');
            });
            
            $('.link-toggle').click(function(){
                $('.menu-responsivo').removeClass('ativo');    
                $(this).removeClass('ativo'); 
                $('.toggle').removeClass('ativo')     
                $(this).removeClass('ativo')
            });       
        }); 

/***************************************************

/*FUNÇÃO PARA ATIVAR O SCROLLSPY*/
$(function(){
   
    var navLinks = $('nav .container ul li a'),
        navH = $('nav').height(),
        section = $('section'),
        documentEL = $(document);
    
    documentEL.on('scroll', function(){
        var currentScrollPos = documentEL.scrollTop();
        
        section.each(function(){
            var self = $(this);
            
            if(self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ){
                var targetClass = '.' + self.attr('class') + '-marker';   
                navLinks.removeClass('active');
                $(targetClass).addClass('active');
            }
        });
    });
});