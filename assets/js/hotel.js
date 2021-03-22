$(document).ready(function () { 
    moment.locale('vi');
    $('input[name="dates"]').daterangepicker({
        locale: {
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
            "separator": " -> ",
        }
    });
    $('#aniimated-thumbnials').lightGallery({
        thumbnail:true,
        animateThumb: true,
        showThumbByDefault: false
    }); 
});
