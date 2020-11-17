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
    

    $(".search__mf").css("display","none");



    $(".change-flight-btn span").click(function() {
        $(".change-flight-btn span").hide();
        $(".search__mf").css("display","block");
    })

    $(".search__mf__submit button").click(function() {
        $(".change-flight-btn span").show();
        $(".search__mf").css("display","none");
    })



    $(".result__range-item").on('click',function(){
        $(".result__range-item").removeClass('active');
        $(this).addClass('active');
    })
    $(".result__range-item-return").on('click',function(){
        $(".result__range-item-return").removeClass('active');
        $(this).addClass('active');
    })
    $(".result__view-detail-head-item").on('click',function(){
        $(this).parent().find(".result__view-detail-head-item").removeClass('active');
        $(this).addClass('active');
        let idx =  $(this).attr('idx');
        let classParent = $(this).closest("div").attr('class');
        let idxParent = $(this).closest("div").attr('idx');
        $( "." + classParent + "[idx="+idxParent+"] .result__view-detail-item").hide();
        $( "." +classParent + "[idx="+idxParent+"] .result__view-detail-item:nth-child("+idx+")").show();
        if (idx == 3) {
            $("." + classParent + "[idx="+idxParent+"] .result__view-detail-policy-bottom").css("display","flex");
            $("." + classParent + "[idx="+idxParent+"] .result__view_name-infor-list").css("padding-left","7rem");
        } else {
            $("." + classParent + "[idx="+idxParent+"] .result__view-detail-policy-bottom").hide();
            $("." + classParent + "[idx="+idxParent+"] .result__view_name-infor-list").css("padding-left","5rem");
        }
    })

    $(".result_item_time-route-list-hide").click(function(){
        let classParent = $(this).parent().attr('class');
        let idxParent = $(this).parent().attr('idx');
        $(this).hide();
        $( "." +classParent + "[idx="+idxParent+"] .result_item_time-route-list-show").css("display","block");

        $( "." +classParent + "[idx="+idxParent+"] .result_item_time-route-item-inter:nth-child(n+3)").css("display","none");
    })

    $(".result_item_time-route-list-show").click(function(){
        let classParent = $(this).parent().attr('class');
        let idxParent = $(this).parent().attr('idx');
        $(this).hide();
        $( "." +classParent + "[idx="+idxParent+"] .result_item_time-route-list-hide").css("display","block");

        $( "." +classParent + "[idx="+idxParent+"] .result_item_time-route-item-inter:nth-child(n+3)").css("display","flex");
    })

    for (let item of $(".result_item_time-route-list-inter") ) {
        let numberFlight = $(item).find(" .result_item_time-route-item-inter").length;
        let idx = $(item).attr('idx');
        let classParent = $(item).attr('class');
        if ( numberFlight >= 3) {
            $( "." +classParent + "[idx="+idx+"] .result_item_time-route-list-show").show();
            $( "." +classParent + "[idx="+idx+"] .result_item_time-route-list-show span").text(numberFlight-2);
        }; 
    }

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

    $(".result__view-detail-head-item-pd-return").on('click',function(){
        $(".result__view-detail-head-item-pd-return").removeClass('active');
        $(this).addClass('active');
        let idx =  $(this).attr('idx');
        $(".result__view-detail-item-pd-return").hide();
        $(".result__view-detail-item-pd-return:nth-child("+idx+")").show();
        if (idx == 3) {
            $(".result__view-detail-policy-bottom-pd-return").css("display","flex");
        } else {
            $(".result__view-detail-policy-bottom-pd-return").hide();
        }
    })


    $(".bill-fly-total__title-icon").click(function() {
        $(".bill-fly-price__list").toggle("slow");
    })
    if ($(".result__container").length == 1 || $(".result__container-return").css("display") == "none") {
        $(".result__container").css("width","100%");
        let width = $(window).width(); 
        if (width >= 1024){ 
            $(".result__container-departure .result__view-time-total").css("padding-left","10rem");
            $(".result__container-departure .result__view-time-total").css("padding-right","10rem");
        }

        $(".result__view-head-name").css("font-size","4rem");   
        
        $(".bill-fly__container .bill-fly__return").hide();
    } else {
        $(".result__container").css("width","49%");
        let width = $(window).width();
        if (width <= 739){ 
            $(".result__view-time-total").css("padding-left","10%");
            $(".result__view-time-total").css("padding-right","10%");
        }
        $(".result__view-detail-price").css("top","7rem");
        $(".result__view-head-name").css("font-size","1.9rem");

        $(".bill-fly__container .bill-fly__return").show();
    }

    if ($(".bill-fly__return").attr("display") == "none") {
        $(".btn-next-page").css("padding-right","14rem");
    } else {
        $(".btn-next-page").css("padding-right","0");
    }


    $(".result__view-btn-detail, .result__view-btn-detail-inter").click(function() {
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

    if ($(window).width() <= 739){
        let arrPrice = $(".result__view_price-number");
        for (let item of arrPrice) {
            let priceItem = $(item).text().replace(".000đ","K");
            $(item).text(priceItem);
        }

        let arrPriceInter = $(".result_item-inter-price");
        for (let item of arrPriceInter) {
            let priceItemInter = $(item).text().replace(".000đ","K");
            $(item).text(priceItemInter);
        }

        let arrDate = $(".result__range-date");
        for (let item of arrDate) {
            let dateItem = $(item).text().replace("tháng","/");
            $(item).text(dateItem);
        }

        let arrRangePrice = $(".result__range-price");
        for (let item of arrRangePrice) {
            let priceRangeItem = $(item).text().replace(".000đ","K");
            $(item).text(priceRangeItem);
        }
    }


    // Passenger Detail


    $(".bill-fly-service-add-text").click(function(){
        $(".bill-fly-service-add__content").toggle();
        $(".bill-fly-service-add-icon .fa-sort-up").toggle();
        $(".bill-fly-service-add-icon .fa-sort-down").toggle();
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
        $(".guest__add-service-item").removeClass('active');
        $(".guest__add-service-item:nth-child("+idx+")").addClass('active');
        $(".guest__add-service-btn").removeClass('disabled');
        $(".guest__add-service-btn[idx='" + idx + "']").addClass('disabled');
    })

    $(".guest__email-tel-policy h5:first-child input").click(function() {
        let classParent = $(this).parent();
        if ($(this).is(":checked") === true) {
            $(classParent).css('color','#404057');
            $(".guest__email-export-bill").css("display","flex");
        } else {
            $(classParent).css('color','#b4b4c8');
            $(".guest__email-export-bill").css("display","none");
        }
    })

    $(".guest__information-mb-choose").click(function(){
        let classluggage = $(this).find('span');
        $(".buy__luggage__overlay").show();
        $(".buy__luggage-mb").css("transform","translateY(100%)");

        $(".buy__luggage-mb-item").click(function() {
            $(classluggage).text($(this).find('h5').text().replace('Mua ',''));
        })

    })

    $(".buy__luggage-close").click(function() {
        $(".buy__luggage-mb").css("transform","translateY(200%)");
        $(".buy__luggage__overlay").hide();
    })

    $(".guest__information-mb-check input").click(function() {
        if ($(this).is(":checked") === true) {
            $(".guest__information-mb-option").show();
        } else {
            $(".guest__information-mb-option").hide();
        }
    })




    // Payment 

    $(".box__pay-type-item").click(function () {
        $(".box__pay-type-item").removeClass('active');
        $(this).addClass('active');
        console.log($(this).attr('pay'));
        if ($(this).find('img').attr('pay') == 'transfer' ) {
            $(".box__pay-input-list").hide();
            $(".box__pay-acc-company").css('display','flex');
        } else {
            $(".box__pay-input-list").show();
            $(".box__pay-acc-company").hide();
        }
    })

    $(".box__pay-btn-copy").click(function() {
        let copyText = $(this).prev().text();
        /* Copy the text inside the text field */

        var $temp = $("<input>");

        $("body").append($temp);
        $temp.val(copyText).select();
        document.execCommand("copy");
        $temp.remove();
      
    })


});

