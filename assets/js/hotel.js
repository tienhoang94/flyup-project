$(document).ready(function () {
    $(document).mouseup(function(e) {
        var containerNumber = $(".search-number .number__container");
        var containerLocation = $(".search-input .select-location");
        var containerSelectTypeRoom = $(".roomItem__flex .roomItem__bed");
        // if the target of the click isn't the container nor a descendant of the container
        if (!containerNumber.is(e.target) && containerNumber.has(e.target).length === 0) 
        {
            $(".search-number .number__container .select-number").hide();
        }
        if (!containerLocation.is(e.target) && containerLocation.has(e.target).length === 0) 
        {
            $(".search-input .select-location").hide();
        }
        if (!containerSelectTypeRoom.is(e.target) && containerSelectTypeRoom.has(e.target).length === 0) 
        {
            $(".roomItem__flex .roomItem__bed .select-type-room").hide();
        } 
        
    });

    moment.locale('vi');
    $('input[name="dates"]').daterangepicker({
        locale: {
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
            "separator": " -> ",
        }
    });
    $('input[name="dates"]').daterangepicker({
        locale: {
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
            "separator": " -> ",
        }
    });
    // $('#aniimated-thumbnials').lightGallery({
    //     thumbnail:true,
    //     animateThumb: true,
    //     showThumbByDefault: false
    // });

    // search location
    $('.search-text .search-input').click(function () {
        $('.search-input .select-location').show();
    });
    $('.search-text .search-input input').on('input',function() {
        let inputContent = $(this).val().toLowerCase();
        $(".search-text .search-input .select-location .list-position li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(inputContent) > -1)
        });
    });
    $(".search-text .search-input .select-location .list-position li").on('click', function () {
        const contentSelect = $(this).find('.top').text();
        $('.search-text .search-input input').val(contentSelect);
        $(".search-input .select-location").hide();
        console.log( $(".search-input .select-location"));
    });

    // select number room, people 
    $('#boxNumberRoom').click(function () {
        $('.select-number').toggle();
    });
    function getValueNumber(selector) {
        let value = $(selector).text();
        return parseInt(value);
    }
    // Room
    $('.room .minus').click(function () {
        const numberCurrent = getValueNumber('.room .number');
        const numberAct = numberCurrent > 1 ? numberCurrent - 1 : numberCurrent;
        $('.room .number').text(numberAct);
        $('#boxNumberRoom .room').text(numberAct);
    });

    $('.room .plus').click(function () {
        const numberCurrent = getValueNumber('.room .number');
        const numberAct = numberCurrent + 1;
        numberAct > getValueNumber('.guest .number')
            ? (
                $('.guest .number').text(numberAct) && $('#boxNumberRoom .guest').text(numberAct)
            )
            : null;
        $('.room .number').text(numberAct);
        $('#boxNumberRoom .room').text(numberAct);
    });
    // Guest
    $('.guest .minus').click(function () {
        const numberCurrent = getValueNumber('.guest .number');
        const numberAct = numberCurrent > 1 ? numberCurrent - 1 : numberCurrent;
        $('.guest .number').text(numberAct);
        $('#boxNumberRoom .guest').text(numberAct);
    });

    $('.guest .plus').click(function () {
        const numberCurrent = getValueNumber('.guest .number');
        const numberAct = numberCurrent + 1;
        $('.guest .number').text(numberAct);
        $('#boxNumberRoom .guest').text(numberAct);
    });

    //search
    $('.search-button').click(function () {
        console.log("search");
    })

    $('.liItem button').click(function () {
        $(this).toggleClass('select')
    })
    
    // select type room
    $('.roomItem__flex .roomItem__bed button').click(function () {
        $(this).parent().find('.select-type-room').toggle();
    });
    $('.roomItem__flex .roomItem__bed .item').click(function () {
        const contentType = $(this).find('span').text();
        const selector = $(this).parent().parent().prev();
        $(selector).find('span').text(contentType);
        $(this).parent().parent().hide();
    });


});
