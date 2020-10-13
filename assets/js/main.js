$(document).ready(function () {
    $.ModuleViewAction = function () {
        var arrTopSale = [
            {
                header : 'Quảng Châu chỉ từ 5.699K',
                content : '8 Ngày 7 đêm, bay khứ hồi, khách sạn 4 sao và full dịch vụ khác',
                destination : 'Citic Plaza, sông Pearl, công viên Việt Tú,..',
                img : 'https://media.metrip.vn/images/1900px-Hotel-Fasano-Rio-de-Janeiro-Brazil.jpg'
            },
            {
                header : 'Tour du lịch trong nước Sapa',
                content : 'Thời gian: 3 ngày 2 đêm',
                destination : 'Fansipan | Hà Nội | Vịnh Hạ Long',
                img : 'https://www.ingridzenmoments.com/wp-content/uploads/2018/01/sunny-4593168_1920.jpg'
            },
            {
                header : 'Lễ hội bay trên mùa vàng',
                content : 'Hành trình tour du lich Tây Bắc với mức giá ưu đãi bao gồm dịch vụ trọn gói từ A->Z',
                destination : 'Hà Nội | Mù Cang Chải | Tú Lệ',
                img : 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/pw1wmiovn4wwtfhvja5b/Tour%20Ng%C3%A0y%20Tham%20Quan%20Ph%C3%BA%20Qu%E1%BB%91c%20B%E1%BA%B1ng%20T%C3%A0u%20Cao%20T%E1%BB%91c%20v%E1%BB%9Bi%20D%C3%B9ng%20B%E1%BB%AFa%20t%E1%BA%A1i%20Tr%C3%AAn%20Nh%C3%A0%20H%C3%A0ng%20N%E1%BB%95i.jpg'
            }
        ]

        var arrDealAttractionFly = [
            {
                id: 1,
                fromName : "hà nội",
                toName : "sài gòn",
                turn : "1" , //1: một chiều, 2: khứ hồi
                price : "736.000đ",
                totalDate : "5 ngày",
                amountSold : "130",
                description : "Đã bao gồm tất cả các loại thuế phí",
                linkImg : "https://mytourcdn.com/upload_images/Image/Nhu_Ha%20Long/c%C3%B4n%20%C4%91%E1%BA%A3o/hon%20bay%20canh.jpg"
            },
            {
                id: 2,
                fromName : "hồ chí minh",
                toName : "đà nẵng",
                turn : "1" , //1: một chiều, 2: khứ hồi
                price : "888.000đ",
                totalDate : "2 ngày",
                amountSold : "100",
                description : "Đã bao gồm dịch vụ ăn uống",
                linkImg : "https://www.bambooairways.com/image/d3AtY29udGVudC91cGxvYWRzL3NpdGVzLzYvMjAyMDA5MTcxNDI4NTIvMDExLmpwZw==?q=85&w=727&h=528&focus_top=50&focus_left=50"
            },
            {
                id: 3,
                fromName : "cam ranh",
                toName : "hà nội",
                turn : "2" , //1: một chiều, 2: khứ hồi
                price : "666.000đ",
                totalDate : "2 ngày",
                amountSold : "100",
                description : "Đã bao gồm tất cả các loại thuế phí",
                linkImg : "https://vnn-imgs-f.vgcloud.vn/2019/04/10/18/phu-quoc.jpg"
            },
            {
                id: 4,
                fromName : "phú quốc",
                toName : "hà nội",
                turn : "2" , //1: một chiều, 2: khứ hồi
                price : "999.000đ",
                totalDate : "1 ngày",
                amountSold : "130",
                description : "Đã bao gồm tất cả các loại thuế phí",
                linkImg : "https://cdn1.ivivu.com/iVivu/2020/06/20/14/vinpearl-phu-quoc-resort-spa-cr-800x450.jpg"
            },
            {
                id: 5,
                fromName : "hà nội",
                toName : "sài gòn",
                turn : "1" , //1: một chiều, 2: khứ hồi
                price : "736.000đ",
                totalDate : "5 ngày",
                amountSold : "130",
                description : "Đã bao gồm tất cả các loại thuế phí",
                linkImg : "https://dongtayland.vn/wp-content/uploads/2019/12/Khach-san-cao-cap-o-Phu-quoc-tang-truong-nhanh.jpg"
            },
        ]

        // Close outside to hide content
        $(document).mouseup(function(e) {
            var containerDestination = $(".destination__container");
            var containerFlyDirection = $(".search__container-option-ticket-list");
            var containerFlyClass = $(".search__container-option-class-list");
            var containerGuestNumber = $(".search__container__number");
            var containerCalendar = $(".calendar__container");
            // if the target of the click isn't the container nor a descendant of the container
            if (!containerDestination.is(e.target) && containerDestination.has(e.target).length === 0) 
            {
                containerDestination.hide();
            }   
            if (!containerFlyDirection.is(e.target) && containerFlyDirection.has(e.target).length === 0) 
            {
                containerFlyDirection.hide();
            }   
            if (!containerFlyClass.is(e.target) && containerFlyClass.has(e.target).length === 0) 
            {
                containerFlyClass.hide();
            }   
            if (!containerGuestNumber.is(e.target) && containerGuestNumber.has(e.target).length === 0) 
            {
                containerGuestNumber.hide();
            }   
        
            if (!containerCalendar.is(e.target) && containerCalendar.has(e.target).length === 0) 
            {
                containerCalendar.hide();
            }   
        

            
        });
        
        //Header

        $("#openTabMenu").click (function () {
            $(".navbar__overlay").show();
            $(".nav__mobile").css("transform","translateX(0)");
            // $("body .noscroll").css("overflow","hidden","position","fixed");
        })

        $(".nav_mobile-close").click(function() {
            $(".nav__mobile").css("transform","translateX(-100%)");
            $(".navbar__overlay").hide();
        })
        $(".navbar__overlay").click(function() {
            $(".nav__mobile").css("transform","translateX(-100%)");
            $(".navbar__overlay").hide();
        })
    
        // Flash Sales 
        $("#flashSaleClick").click(function(){
            $(".flash__sale").slideToggle("slow");
           
        });
        $(".deal__head-nav-item:not('.deal__head-nav-item:first-child')").click(function(){
            $(".deal__head-nav-item:not('.deal__head-nav-item:first-child')").removeClass("active");
            $(this).addClass("active");
           
        });

        // Top__Sale

        $(".top__sale-icon-item").click(function(){ 
        
            let action = $(this).attr("action");
            var targetIndex;
            let currIndex = $(".top__sale-number--active").attr("idx");
            currIndex = parseInt(currIndex)
            if (action == 'previous') {
                targetIndex = currIndex - 1;
                if (targetIndex == 0) targetIndex = 3;
            } else {
                targetIndex = currIndex + 1;
                if (targetIndex > 3) targetIndex = 1;
            }
            $(".top__sale-number-text").removeClass("top__sale-number--active");
            $(".top__sale-number-text:nth-child("+targetIndex+")").addClass("top__sale-number--active");
            $(".top__sale-item-header").text(arrTopSale[targetIndex-1].header);
            $(".top__sale-item-content").text(arrTopSale[targetIndex-1].content);
            $(".top__sale-item-place-name").text(arrTopSale[targetIndex-1].destination);
            $("#topSaleBackground").animate({opacity: '0.5'}, "slow",function() {
                $(this).animate({opacity: '1'}, "slow");
            }).css("background-image","url(" + arrTopSale[targetIndex-1].img + ")");
        })

        // interval = setInterval(function () {
        //     $("#top__sale-icon-item--next").click();
        // }, 5000);


        // Box search
        $("#selectTypeFlyDirection").click(function(){ 
            $(".search__container-option-ticket-list").toggle();
            $(".search__container-option-ticket-item").click(function () {
                $(".search__container-option-ticket-item").removeClass("active");
                $(this).addClass("active");
                let textType = $(this).find("span").text();
                $("#typeTicketlableSelected").text(textType);
            })
        })

        $("#selectNumberGuest").click(function(){ 
    
            $(".search__container__number").show();
            let adultNumber, childrenNumber, infantNumber;
            adultNumber = parseInt($("#adultNumber").text());
            childrenNumber = parseInt($("#childrenNumber").text());
            infantNumber = parseInt($("#infantNumber").text());
            $("#plusAdultNumber").click(function(){
                ++adultNumber;
                $("#adultNumber").text(adultNumber);
            })
            $("#minusAdultNumber").click(function(){
                if (adultNumber > 1) {
                    --adultNumber;
                    $("#adultNumber").text(adultNumber);
                }
            })
            $("#plusChildrenNumber").click(function(){
                ++childrenNumber;
                $("#childrenNumber").text(childrenNumber);
            })
            $("#minusChildrenNumber").click(function(){
                if (childrenNumber > 0) {
                    --childrenNumber;
                    $("#childrenNumber").text(childrenNumber);
                }
            })
            $("#plusInfantNumber").click(function(){
                ++infantNumber;
                $("#infantNumber").text(infantNumber);
            })
            $("#minusInfantNumber").click(function(){
                if (infantNumber > 0) {
                    --infantNumber;
                    $("#infantNumber").text(infantNumber);
                }
            })
            $("#totalNumberGuest").text(adultNumber + childrenNumber + infantNumber);

            $("#closeTabNumberGuest").click(function(){
                console.log("AAA");
                $(".search__container__number").show();
            })

        })

        $("#dateDepature").click(function() {
            $(".calendar__container").show();
            let date = new Date($("#valueDateDeparture").val());
            console.log(date);
        })

       
        $("#selectTypeFlyClass").click(function(){ 
            $(".search__container-option-class-list").toggle();
            $(".search__container-option-class-item").click(function () {
                $(".search__container-option-class-item").removeClass("active");
                $(this).addClass("active");
                let textType = $(this).find("span").text();
                $("#classTicketlableSelected").text(textType);
            })
        })


        $("#des__name-from").click(function() {
            $(".destination__container").css("left","0%")
            $(".destination__container").toggle();
        })

        $("#des__name-to").click(function() {
            $(".destination__container").css("left","20%")
            $(".destination__container").toggle();
        })


        $(".des_country").click(function(){
            $(".des_country").removeClass("des_country--active");
            $(this).addClass("des_country--active");
            let currIndex = parseInt($(this).attr("idx"));
            $(".des__tab-panel").removeClass("des__tab-panel--active");
            $(".des__tab-panel:nth-child("+currIndex+")").addClass("des__tab-panel--active");
        });

        $(".destination__search-bar input").on('input',function() {
            let inputContent = $(this).val();
            if (inputContent.length > 0) {
                $(".des__wrapper").hide();
                $(".airport__result__wrapper").show();
            } else {
                $(".des__wrapper").show();
                $(".airport__result__wrapper").hide();
            }
        });

        $(".des__suggestion__city").click(function () {
            let desText = $(this).text();
            $(".destination__container").hide();
            if ($(".destination__container").css("left") == "0%") {
                $("#des__name-from").text(desText);
            } else {
                $("#des__name-to").text(desText);
                $("#des__name-to").removeClass("placeholderName");
            }
        })
        $(".airport__result__item:not(.airport__result__item.airport__result__item--no-result)").click(function() {
            let airportText = $(this).text();
            $(".destination__container").hide();
            $("#des__name-from").text(airportText);
        });

        $(".turn__des-icon").click(function() {
            let airportNameFrom = $("#des__name-from").text();
            $("#des__name-from").text($("#des__name-to").text());
            $("#des__name-to").text(airportNameFrom);
        })
        
        // Deal attraction
        
        $(".deal__attraction-img__left").css("background-image","url(" + arrDealAttractionFly[1-1].linkImg + ")");
        $(".deal__attraction-img__right").css("background-image","url(" + arrDealAttractionFly[3-1].linkImg + ")");
        $(".deal__attraction-img").css("background-image","url(" + arrDealAttractionFly[2-1].linkImg + ")");
        $(".float-content-view-date span").text(arrDealAttractionFly[2-1].totalDate);
        $(".float-content-view-amount span").text(arrDealAttractionFly[2-1].amountSold);
        $(".float-content__left-des span:first-child").text(arrDealAttractionFly[2-1].fromName);
        $(".float-content__left-des span:last-child").text(arrDealAttractionFly[2-1].toName);
        $(".float-content__price").text(arrDealAttractionFly[2-1].price);
        $(".float-content__note").text(arrDealAttractionFly[2-1].description);
        if (arrDealAttractionFly[2-1].turn == "1") {
            $(".float-content__left-direction i:last-child").hide();
        }        
        $(".deal__attraction-img__right").click(function(){
            
        })
        // scroll back to top
        $('.btn-scroll-to-top').fadeOut();
        $(window).scroll(function() {
            $('.btn-scroll-to-top').css('display', 'flex');
            if ($(this).scrollTop()) {
                $('.btn-scroll-to-top').fadeIn();
            } else {
                $('.btn-scroll-to-top').fadeOut();
            }
        });
        
        $(".btn-scroll-to-top").click(function(){
            $("html, body").animate({scrollTop: 0}, 1000);
        })


        function ChangeSlideServicePlus () {
            var stt = 1;
            var endImg = $(".service-plus__item:last-child").attr("idx");
            var iconShow = 0;
            var listIconShowHtml = "";
            if (endImg%3 == 0) {
                iconShow = endImg/3;
            } else {
                iconShow = Math.floor(endImg/3) + 1;
            }
            for (let i = 1; i <= iconShow; ++i) {
                if (i == 1) {
                    listIconShowHtml += '<li class="service-plus__pagination-item-view service-plus__pagination--active" idx="'+i+'"> </li>';
                } else {
                    listIconShowHtml += '<li class="service-plus__pagination-item-view " idx="'+i+'"> </li>';
                }
                if (i == iconShow) {
                    $(".service-plus__pagination-view").html(listIconShowHtml);
                }
            }
            $(".service-plus__pagination-item-view").click(function () {
                stt = $(this).attr("idx");
                stt = parseInt(stt)*2 + (stt - 2);
                changeImg(stt);
            });
        
           
            $(".service-plus__pagination-item:first-child").click(function () {
                stt -=3;
                if (stt < 1) {
                    if (endImg%3 == 0) {
                        stt = endImg - 2;
                    } else {
                        stt = Math.floor(endImg/3)*3 + 1;
                    }
                }
        
                changeImg(stt);
            });
            $(".service-plus__pagination-item:last-child").click(function () {
                stt +=3;
                if (stt > endImg) {
                    stt = 1;
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
                stt = parseInt(stt)
                $(".service-plus__item").hide();
                // $(".service-plus__item:nth-child("++")").fadeIn(500);
                $(".service-plus__item:nth-child("+stt+")").fadeIn(1000);
                $(".service-plus__item:nth-child("+(++stt)+")").fadeIn(1000);
                $(".service-plus__item:nth-child("+(++stt)+")").fadeIn(1000);
                $(".service-plus__pagination-item-view").removeClass("service-plus__pagination--active");
                $(".service-plus__pagination-item-view:nth-child("+(stt/3)+")").addClass("service-plus__pagination--active");
                
                clearInterval(interval);
                // timer();
            };
        }

        ChangeSlideServicePlus ();

        
      
    }
    
    $.ModuleCountDown = function () {
        // var currTimeNow = 0;
        // var targetTime = 172800;
        // var restTime = targetTime - currTimeNow;
        // var minute = restTime / (60*1000);
        // var hour = minute / 60;
        // var day = hour/24;
        
        // var activeBorder = $(".time__number__container");

        var timeNow, hour, minute, second;

        function GetTimeNow () {
            
            timeNow = new Date;
            hour = timeNow.getUTCHours();
            minute = timeNow.getUTCMinutes();
            second = timeNow.getUTCSeconds();
            if (hour + 7 < 10) {
                hour = "0" + hour;
            }
            if (minute < 10) {
                minute = "0" + minute;
            }
            if (second < 10) {
                second = "0" + second;
            }

            $("#dateTimeCountDown span").text(hour + 7);
            $("#hourTimeCountDown span").text(minute);
            $("#minuteTimeCountDown span").text(second);
          
            fillColorBorder(second*6,  $("#minuteTimeCountDown"));
            fillColorBorder(minute*6,  $("#hourTimeCountDown"));
            fillColorBorder((hour + 7)*6,  $("#dateTimeCountDown"));
            
            function fillColorBorder(deg, domBorder) {
                if (deg <= 180){
                    domBorder.css('background-image','linear-gradient(' + (90+deg) + 'deg, transparent 50%, #99def8 50%),linear-gradient(90deg, #99def8 50%, transparent 50%)');
                }
                else{
                    domBorder.css('background-image','linear-gradient(' + (deg-90) + 'deg, transparent 50%, #a6ce39 50%),linear-gradient(90deg, #99def8 50%, transparent 50%)');
                }
            }
          
        }

        // setInterval(function () {
        //     GetTimeNow ();
        // }, 1000);


    }
    $.ModuleCountDown ();
    $.ModuleViewAction();
    


});

