$(function ($) {
    $('#newForm').submit(function (event) {
        event.preventDefault();
        
        $.ajax({
        url: "https://formspree.io/contato@alegrow.com.br", 
        method: "POST",
        data: {
            nome: $("#news_name").val(),
            email: $("#news_email").val()
        },
        dataType: "json"
        }).done(function(){
            $("#news_name").val("");
            $("#news_email").val("");
            alert("Cadastro realizado com sucesso!")
            
        }).fail(function(){
            alert("Erro ao enviar o cadastro!")
        });
    });
});


$(function ($) {
    $('#form').submit(function (event) {
        event.preventDefault();
        
        $.ajax({
        url: "https://formspree.io/contato@alegrow.com.br", 
        method: "POST",
        data: {
            nome: $("#name").val(),
            email: $("#email").val(),
            telefone: $("#phone").val(),
            assunto: $("#subject").val(),
            menssagem: $("#message").val()
        },
        dataType: "json"
        }).done(function(){
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#subject").val("")
            $("#message").val("")
            alert("Email enviado com sucesso!")
            
        }).fail(function(){
            alert("Erro ao enviar o email!")
        });
    });
});
