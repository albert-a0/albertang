$(document).ready(function () {

    // get all current states
    var current = $(".lang").css("border-radius");

    $(".lang").hover(function () {
        $(this).css("border-radius","20px");
    }, function () {
        $(this).css("border-radius","0px");
    });
});