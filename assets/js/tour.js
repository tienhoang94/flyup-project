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
    
    // Pagination

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

    // input range 
    
});

