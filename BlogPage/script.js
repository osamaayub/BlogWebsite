$(document).ready(function () {
    "use strict";
    var $header = $(".header-default"),
        $clone = $header.before($header.clone().addClass("clone"));
    $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        $('body').toggleClass("down", (fromTop > 300));

    })
})
