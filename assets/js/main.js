$(document).ready(function () {
    $.ModuleViewAction = function () {
        let arrTopSale = [
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

        // Close outside to hide content
        $(document).mouseup(function(e) {
            var containerDestination = $(".destination__container");
            var containerFlyDirection = $(".search__container-option-ticket-list");
            var containerFlyClass = $(".search__container-option-class-list");
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

            
        });

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
            $("#topSaleBackground").css("background-image","url(" + arrTopSale[targetIndex-1].img + ")");
        })


        // Box search
        $("#selectTypeFlyDirection").click(function(){ 
            $(".search__container-option-ticket-list").slideToggle("fast");
            $(".search__container-option-ticket-item").click(function () {
                $(".search__container-option-ticket-item").removeClass("active");
                $(this).addClass("active");
                let textType = $(this).find("span").text();
                $("#typeTicketlableSelected").text(textType);
            })
        })

    

        $("#selectTypeFlyClass").click(function(){ 
            $(".search__container-option-class-list").slideToggle("fast");
            $(".search__container-option-class-item").click(function () {
                $(".search__container-option-class-item").removeClass("active");
                $(this).addClass("active");
                let textType = $(this).find("span").text();
                $("#classTicketlableSelected").text(textType);
            })
        })

        

        $("#des__name-from").click(function() {
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
            console.log(desText);
            $("#des__name-from").text(desText);
        })

        function ChangeSlideServicePlus () {
            var stt = 1;
            var endImg = $(".service-plus__item:last-child").attr("idx");
            $(".service-plus__pagination-item-view").click(function () {
                stt = $(this).attr("idx");
                console.log(stt);
                changeImg(stt);
            });
        
            $(".service-plus__pagination-item:first-child").click(function () {
                stt = $(this).attr("idx");
                if (++stt > endImg) {
                    stt = 1;
                }
        
                changeImg(stt);
            });
        
            $(".service-plus__pagination-item:last-child").click(function () {
                stt = $(this).attr("idx");
                if (--stt < 1) {
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
        }

        ChangeSlideServicePlus ();
      
    }
    
    $.ModuleCountDown = function () { 
      
        function GetTimeNow () {
            var timeNow = new Date;
            var hour = timeNow.getUTCHours();
            var minute = timeNow.getUTCMinutes();
            var second = timeNow.getUTCSeconds();
            if (hour + 7 < 10) {
                hour = "0" + hour;
            }
            if (minute < 10) {
                minute = "0" + minute;
            }
            if (second < 10) {
                second = "0" + second;
            }
            $("#dateTimeCountDown").text(hour + 7);
            $("#hourTimeCountDown").text(minute);
            $("#minuteTimeCountDown").text(second);

        }

        // var canvas = document.getElementById("hourTimeCountDown");
        // var ctx = canvas.getContext("2d");
        // ctx.beginPath();
        // ctx.arc(75, 75 , 73, (- Math.PI/2), 60*30* Math.PI - Math.PI/2);
        // ctx.fillStyle = "transparent";
        // ctx.fill();
        // ctx.stroke();
        // setInterval(function () {
        //     GetTimeNow ();
        // }, 1000);



        // $('.countdown').final_countdown({
        //     start: '1362139200',
        //     end: '1388461320',
        //     now: '1387461319',
        //     selectors: {
        //         value_seconds: '#minuteTimeCountDown .index',
        //         canvas_seconds: 'minuteTimeCountDown',
        //         value_minutes: 'hourTimeCountDown',
        //         canvas_minutes: 'hourTimeCountDown',
        //         value_hours: 'dateTimeCountDown',
        //         canvas_hours: 'dateTimeCountDown',
        //         value_days: '.dateTimeCountDown1',
        //         canvas_days: 'dateTimeCountDown1'
        //     },
        //     seconds: {
        //         borderColor: '#7995D5',
        //         borderWidth: '6'
        //     },
        //     minutes: {
        //         borderColor: '#ACC742',
        //         borderWidth: '6'
        //     },
        //     hours: {
        //         borderColor: '#ECEFCB',
        //         borderWidth: '6'
        //     },
        //     days: {
        //         borderColor: '#FF9900',
        //         borderWidth: '6'
        //     }}, function() {
        //     // Finish callback
        // });
    }
    // $.ModuleCountDown ();
    $.ModuleViewAction();
    

});

