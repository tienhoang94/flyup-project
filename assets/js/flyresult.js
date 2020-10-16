$(document).ready(function () {
    $(".search__mf").css("display","block");
    $(".result__range-item").on('click',function(){
        $(".result__range-item").removeClass('active');
        $(this).addClass('active');
    })
    $(".result__range-item-return").on('click',function(){
        $(".result__range-item-return").removeClass('active');
        $(this).addClass('active');
    })
    $(".result__view-detail-head-item").on('click',function(){
        $(".result__view-detail-head-item").removeClass('active');
        $(this).addClass('active');
        let idx =  $(this).attr('idx');
        $(".result__view-detail-item").hide();
        $(".result__view-detail-item:nth-child("+idx+")").show()
        if (idx == 3) {
            $(".result__view-detail-policy-bottom").show();
            $(".result__view_name-infor-list").css("padding-left","7rem");
        } else {
            $(".result__view-detail-policy-bottom").hide();
            $(".result__view_name-infor-list").css("padding-left","5rem");
        }
    })
    $(".bill-fly-total__title-icon").click(function() {
        $(".bill-fly-price__list").toggle("slow");
    })
    if ($(".result__container").length == 1 || $(".result__container-return").css("display") == "none") {
        $(".result__container").css("width","100%");
        $(".result__view-time-total").css("padding-left","10rem");
        $(".result__view-time-total").css("padding-right","10rem");
        $(".result__view-head-name").css("font-size","4rem");
        
    } else {
        $(".result__container").css("width","49%");
        $(".result__view-time-total").css("padding-left","4.4rem");
        $(".result__view-time-total").css("padding-right","4.4rem");
        $(".result__view-detail-price").css("top","7rem");
        $(".result__view-head-name").css("font-size","1.9rem");

    }

    if ($(".bill-fly__return").attr("display") == "none") {
        $(".btn-next-page").css("padding-right","14rem");
    } else {
        $(".btn-next-page").css("padding-right","0");
    }

    $(".result__view-btn-detail").click(function() {
        let idx = $(this).attr("idx");
        $(".result__view-detail__container[idx='" + idx + "']").toggle("slow");
        $(".result__view-detail__container:not([idx='" + idx + "'])").hide("slow");
    })
    $(".result__view-btn-detail-return").click(function() {
        let idx = $(this).attr("idx");
        $(".result__view-detail__container-return[idx='" + idx + "']").toggle("slow");
        $(".result__view-detail__container-return:not([idx='" + idx + "'])").hide("slow");
    })

    $("#scrollBarPrevious").click (function () {
        var leftPos = $('.result__range-item-group').scrollLeft();
        $(".result__range-item-group").animate({scrollLeft: leftPos - 200}, 300);
    })
    $("#scrollBarNext").click (function () {
        var leftPos = $('.result__range-item-group').scrollLeft();
        $(".result__range-item-group").animate({scrollLeft: leftPos + 200}, 300);
    })

    $("#scrollBarPreviousReturn").click (function () {
        var leftPosReturn = $('.result__range-item-group-return').scrollLeft();
        $(".result__range-item-group-return").animate({scrollLeft: leftPosReturn - 200}, 300);
    })
    $("#scrollBarNextReturn").click (function () {
        var leftPosReturn = $('.result__range-item-group-return').scrollLeft();
        $(".result__range-item-group-return").animate({scrollLeft: leftPosReturn + 200}, 300);
    })
    
});

