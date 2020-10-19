$(document).ready(function () {
      // Close outside to hide content
      $(document).mouseup(function(e) {
        var containerSlute = $(".guest__information-detail-slute");
        var containerGender = $(".guest__information-detail-gender-list");
        var containerLuggage = $(".guest__information-luggage-option-list");
        // if the target of the click isn't the container nor a descendant of the container
        if (!containerSlute.is(e.target) && containerSlute.has(e.target).length === 0) 
        {
            containerSlute.hide();
        }   
        if (!containerGender.is(e.target) && containerGender.has(e.target).length === 0) 
        {
            containerGender.hide();
        }   
        if (!containerLuggage.is(e.target) && containerLuggage.has(e.target).length === 0) 
        {
            containerLuggage.hide();
        }   
        
    });
    

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
        // $(this).parent()
        $(this).parent().find(".result__view-detail-head-item").removeClass('active');
        $(this).addClass('active');
        let idx =  $(this).attr('idx');
        $(".result__view-detail-item").hide();
        $(".result__view-detail-item:nth-child("+idx+")").show();
        if (idx == 3) {
            $(".result__view-detail-policy-bottom").css("display","flex");
            $(".result__view_name-infor-list").css("padding-left","7rem");
        } else {
            $(".result__view-detail-policy-bottom").hide();
            $(".result__view_name-infor-list").css("padding-left","5rem");
        }
    })

   

    $(".result__view-detail-head-item-pd").on('click',function(){
        $(".result__view-detail-head-item-pd").removeClass('active');
        $(this).addClass('active');
        let idx =  $(this).attr('idx');
        $(".result__view-detail-item-pd").hide();
        $(".result__view-detail-item-pd:nth-child("+idx+")").show();
        if (idx == 3) {
            $(".result__view-detail-policy-bottom-pd").css("display","flex");
        } else {
            $(".result__view-detail-policy-bottom-pd").hide();
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


    // Passenger Detail


    $(".bill-fly-service-add-text").click(function(){
        $(".bill-fly-service-add__content").toggle();
        $(".bill-fly-service-add-icon .fa-sort-up").toggle();
        $(".bill-fly-service-add-icon .fa-sort-down").toggle();
    })


    $(".adult-1 .guest__information-detail-nick-box").click(function () {
        $(".adult-1 .guest__information-detail-slute").show();
        $(".adult-1 .guest__information-slute-item").click(function () {
            $(".adult-1 .guest__information-slute-item").removeClass('active');
            $(this).addClass('active');
            $(".adult-1 .guest__information-detail-nick-box span").text($(this).text());
            $(".adult-1 .guest__information-detail-nick-box").css("color","#404057");
            $(".adult-1 .guest__information-detail-nick-box").css("font-weight","bold");
            $(".adult-1 .guest__information-detail-slute").hide();
        })
    })
    $(".child-1 .guest__information-detail-nick-box").click(function () {
        $(".child-1 .guest__information-detail-slute").show();
        $(".child-1 .guest__information-slute-item").click(function () {
            $(".child-1 .guest__information-slute-item").removeClass('active');
            $(this).addClass('active');
            $(".child-1 .guest__information-detail-nick-box span").text($(this).text());
            $(".child-1 .guest__information-detail-nick-box").css("color","#404057");
            $(".child-1 .guest__information-detail-nick-box").css("font-weight","bold");
            $(".child-1 .guest__information-detail-slute").hide();
        })
    })


    

    $(".adult-1 .guest__information-detail-gender-box").click(function () {
        $(".adult-1 .guest__information-detail-gender-list").show();
        $(".adult-1 .guest__information-gender-item").click(function () {
            $(".adult-1 .guest__information-gender-item").removeClass('active');
            $(this).addClass('active');
            $(".adult-1 .guest__information-detail-gender-box span").text($(this).text());
            $(".adult-1 .guest__information-detail-gender-box").css("color","#404057");
            $(".adult-1 .guest__information-detail-gender-box").css("font-weight","bold");
            $(".adult-1 .guest__information-detail-gender-list").hide();
        })
    })

    $(".child-1 .guest__information-detail-gender-box").click(function () {
        $(".child-1 .guest__information-detail-gender-list").show();
        $(".child-1 .guest__information-gender-item").click(function () {
            $(".child-1 .guest__information-gender-item").removeClass('active');
            $(this).addClass('active');
            $(".child-1 .guest__information-detail-gender-box span").text($(this).text());
            $(".child-1 .guest__information-detail-gender-box").css("color","#404057");
            $(".child-1 .guest__information-detail-gender-box").css("font-weight","bold");
            $(".child-1 .guest__information-detail-gender-list").hide();
        })
    })





    $(".adult-1 .guest__information-luggage-option").click(function () {
        $(".adult-1 .guest__information-luggage-option-list").show();
        $(".adult-1 .guest__information-luggage-option-item").click(function () {
            $(".adult-1 .guest__information-luggage-option-item").removeClass('active');
            $(this).addClass('active');
            $(".adult-1 .guest__information-luggage-option-lable span").text($(this).text());
            $(".adult-1 .guest__information-luggage-option-lable").css("color","#404057");
            $(".adult-1 .guest__information-luggage-option-lable").css("font-weight","bold");
            $(".adult-1 .guest__information-luggage-option-list").hide();
        })
    })

    $(".child-1 .guest__information-luggage-option").click(function () {
        $(".child-1 .guest__information-luggage-option-list").show();
        $(".child-1 .guest__information-luggage-option-item").click(function () {
            $(".child-1 .guest__information-luggage-option-item").removeClass('active');
            $(this).addClass('active');
            $(".child-1 .guest__information-luggage-option-lable span").text($(this).text());
            $(".child-1 .guest__information-luggage-option-lable").css("color","#404057");
            $(".child-1 .guest__information-luggage-option-lable").css("font-weight","bold");
            $(".child-1 .guest__information-luggage-option-list").hide();
        })
    })



    $(".guest__add-service-item-delete").click(function () {
        $(".guest__add-service-item").removeClass('active');
        $(".guest__add-service-btn").removeClass('disabled');
    });

    $(".guest__add-service-btn").click(function () {
        let idx = $(this).attr('idx');
        console.log(idx);
        $(".guest__add-service-item").removeClass('active');
        $(".guest__add-service-item:nth-child("+idx+")").addClass('active');
        $(".guest__add-service-btn").removeClass('disabled');
        $(".guest__add-service-btn[idx='" + idx + "']").addClass('disabled');
    })

    $(".guest__information-tick-infant").find("input").click(function () {
        console.log("12");
        if($(this).is(':checked') == true) {
            $(".guest__information-tick-infant").css("color","#404057");
        } else {
            $(".guest__information-tick-infant").css("color","#b4b4c8");
        }
    })


    // Payment 

    $(".box__pay-type-item").click(function () {
        $(".box__pay-type-item").removeClass('active');
        $(this).addClass('active');
    })


});

