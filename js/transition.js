function transitionsuave (selector){

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });

}

transitionsuave ('a[href*=id-informacoes]');
transitionsuave ('a[href*=id-palestrante]');
transitionsuave ('a[href*=id-formulario]');

