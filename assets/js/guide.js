$(document).ready(function () {
    if ($(window).width() <= 1023){ 
        $(".fotorama").attr("data-width",$(window).width()-5);
        console.log($(window).width());
    }

    
});

