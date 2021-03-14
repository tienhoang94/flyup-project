$(document).ready(function () { 
    moment.locale('vi');
    $('input[name="dates"]').daterangepicker({
        locale: {
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
            "separator": " -> ",
        }
    });

});
