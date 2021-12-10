$(function () {
    $(document).scroll(function () {
        var $header = $("#header");
        var $hero = $(".img-nis");
        $header.toggleClass('scrolled', $(this).scrollTop() > $hero.height() - $header.height());
    });
});