$(document).ready(function () {

    $("div[data-change-color='true']")
        .on({
            mouseenter: function () {
                $(this).css('background-color', 'blue');
            },
            mouseleave: function () {
                $(this).css('background-color', 'red');
            },
            click: function () {
                $(this).css('background-color', 'green');
            }
        });

});
