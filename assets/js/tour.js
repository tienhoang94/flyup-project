$(document).ready(function () {
      // Close outside to hide content
      $(document).mouseup(function(e) {
        var containerSlute = $(".guest__information-detail-slute");
      
        // if the target of the click isn't the container nor a descendant of the container
        if (!containerSlute.is(e.target) && containerSlute.has(e.target).length === 0) 
        {
            containerSlute.hide();
        }   
      
        
    });
    
    // Pagination list tour

    $(".search-tour__paginate-item:not(':first-child, :last-child')").on('click',function(){
        let idxLast = $(".search-tour__paginate-item:last-child").index();

        $(".search-tour__paginate-item").removeClass('active');
        $(this).addClass('active');
        if($(this).index() == 1) {
            $(".search-tour__paginate-item:first-child, .search-tour__paginate-item:last-child").removeClass('disabled');
            $(".search-tour__paginate-item:first-child").addClass('disabled');
        } else if ( $(this).index() == parseInt(idxLast) - 1) {
            $(".search-tour__paginate-item:first-child, .search-tour__paginate-item:last-child").removeClass('disabled');
            $(".search-tour__paginate-item:last-child").addClass('disabled');
        } else {
            $(".search-tour__paginate-item:first-child, .search-tour__paginate-item:last-child").removeClass('disabled');
        }
    })

    $(".search-tour__paginate-item:first-child").click(function(){
        let idxCurrent = $(".search-tour__paginate-item.active").index();
        if (idxCurrent > 1) {
            $(".search-tour__paginate-item").removeClass('active');
            $(".search-tour__paginate-item:nth-child("+ parseInt(idxCurrent)+")").addClass('active');
            $(".search-tour__paginate-item:last-child").removeClass('disabled');
        } 
        if (idxCurrent == 2) {
            $(".search-tour__paginate-item:first-child, .search-tour__paginate-item:last-child").removeClass('disabled');
            $(this).addClass('disabled');
        }
    })
    $(".search-tour__paginate-item:last-child").click(function(){
        let idxCurrent = $(".search-tour__paginate-item.active").index();
        let idxLast = $(".search-tour__paginate-item:last-child").index();
        if (idxCurrent < parseInt(idxLast) - 1) {
            $(".search-tour__paginate-item").removeClass('active');
            $(".search-tour__paginate-item:nth-child("+ (parseInt(idxCurrent)+2)+")").addClass('active');
            $(".search-tour__paginate-item:first-child").removeClass('disabled');
        }
        if (idxCurrent == parseInt(idxLast) - 2) {
            $(".search-tour__paginate-item:first-child, .search-tour__paginate-item:last-child").removeClass('disabled');
            $(this).addClass('disabled');
        }
    })

    $(".tour__filter-item-title").click(function () {
        $(this).next().toggle();
    })

    $(".tour__style-item").click(function(){
        $(".tour__style-item").removeClass('active');
        $(this).addClass('active');
    })


    // Tour route

    // $(".tour__body__tab-item").click(function(){
    //     $(".tour__body__tab-item").removeClass('active');
    //     $(this).addClass('active');
    // })

    $(".tour__body__month-item").click(function(){
        $(".tour__body__month-item").removeClass('active');
        $(this).addClass('active');
    })

    // $(".tour__body__tab-item").click(function () {
    //     let idx = $(this).attr("idx");
    //     $(".tour__body__detail-item").hide();
    //     $(".tour__body__detail-item:nth-child("+idx+")").show();
    // })

    $(".change-seach-tour").click(() => {
        $(".change-seach-tour").toggle();
        $(".form__search-tour-body").css("display","flex");
    })
    $(".form__search-tour-btn").click(() => {
        if ($(window).width() <= 1023){ 
            $(".form__search-tour-body").toggle();
            $(".change-seach-tour").toggle();
        }
    })
    
    var arrTourRouteDetail = $(".tour__route-detail");
    if (arrTourRouteDetail.length > 1) {
        for ( let item in arrTourRouteDetail) {
            // if (item > 0) {
                $(arrTourRouteDetail[item]).hide();
            // }
        }
    }

    $(".tour__route-icon").click(function()  {
        $(this).parent().next().toggle("slow");
    })
    
    window.onscroll = function() {stickyChangeNav()};
    var navbar = document.getElementById("navRouteTour");
    // var sticky = navbar.offsetTop;

    var scheduleDetail = document.getElementById("scheduleDetail");
    var departureDetail = document.getElementById("departureDetail");
    var policyDetail = document.getElementById("policyDetail");

    function stickyChangeNav() {
        if (navbar) {
            if ($(window).width() >= 740){ 
                if (window.pageYOffset >= navbar.offsetTop) {
                    $(".tour__body__tab-list").addClass("sticky-route");
                    $(".tour-price").addClass("sticky-price");
                    if (window.pageYOffset >= scheduleDetail.offsetTop-50 && window.pageYOffset < departureDetail.offsetTop-50) { 
                        $(".tour__body__tab-item").removeClass('active');
                        $(".tour__body__tab-item:nth-child(1)").addClass('active');
                    } else if (window.pageYOffset >= departureDetail.offsetTop-50 && window.pageYOffset < policyDetail.offsetTop-50) {
                        $(".tour__body__tab-item").removeClass('active');
                        $(".tour__body__tab-item:nth-child(2)").addClass('active');
                    } else {
                        $(".tour__body__tab-item").removeClass('active');
                        $(".tour__body__tab-item:nth-child(3)").addClass('active');
                    }
    
                } else {
                    $(".tour__body__tab-list").removeClass("sticky-route");
                    $(".tour-price").removeClass("sticky-price");
                }
    
            }
        }
    }

    $('a').click(function(){		
        var hashindex = $(this).attr("href").indexOf('#');
        var hreflen = $(this).attr("href").length;
        var anchortag = $(this).attr("href").substr(hashindex, hreflen);
        $('html, body').animate({
            scrollTop: $( anchortag ).offset().top - 50
        }, 700);
        return false;
	});

    
});

