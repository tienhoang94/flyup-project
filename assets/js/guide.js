$(document).ready(function () {
    if ($(window).width() <= 1023){ 
        $(".fotorama").attr("data-width",$(window).width()-5);
    }

    $(".profile_infor-picture").click(function() {
        console.log("aaaa");
        $("#upload-photo").change(function() {
            var fullPath = document.getElementById('upload-photo').value;
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                $('.upload-name-file').text(filename);
            }

           
        })
    });

    
});

