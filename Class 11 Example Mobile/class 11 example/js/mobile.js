$(function() {
    $("body").on("click", "#menu", function() {
        $("nav").toggleClass("menu-show");
    });
    $("nav > a").click(function() {
        $("nav").removeClass("menu-show");
    });
});