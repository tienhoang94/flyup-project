$(document).ready(function () {
    var stt = 0;
    var endImg = $(".service-plus__item:last").attr("idx");
    console.log(endImg);
    $(".service-plus__pagination-item-view").click(function () {
        stt = $(this).attr("idx");
        console.log(stt);
        changeImg(stt);
    });

    $(".service-plus__pagination-item:first-child").click(function () {
        if (++stt > endImg) {
            stt = 0;
        }

        changeImg(stt);
    });

    $(".service-plus__pagination-item:last-child").click(function () {
        if (--stt < 0) {
            stt = endImg;
        }

        changeImg(stt);
    });

    var interval = 0;
    var timer = function () {
        interval = setInterval(function () {
            $(".service-plus__pagination-item:last-child").click();
        }, 5000);
    };
    // timer();

    //Hide all image slide and show image have index "stt"
    //Remove active all buttton and set "active" for button have index "stt"
    //Reset timer when change image
    function changeImg(stt) {
        $(".service-plus__item").hide();
        $(".service-plus__item").eq(stt).fadeIn(500);
        // $(".service-plus__item [idx='"+stt+"']").fadeIn(500);
        $(".service-plus__pagination-item-view").removeClass(".service-plus__pagination--active");
        $(".service-plus__pagination-item-view").eq(stt).addClass(".service-plus__pagination--active");

        // clearInterval(interval);
        // timer();
    };
});


