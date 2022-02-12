
/**
 * Swaps languages in the navbar
 * @returns newly selected language
 */
function changeLangView() {
    var $firstLang = $('#first-lang');
    var $secondLang = $('#second-lang');
    var $firstLangClass = $firstLang.attr('class');
    var $firstLangText = $firstLang.text();
    var $secondLangClass = $secondLang.attr('class');
    var $secondLangText = $secondLang.text();
    $firstLang.removeClass($firstLangClass);
    $firstLang.addClass($secondLangClass);
    $secondLang.removeClass($secondLangClass);
    $secondLang.addClass($firstLangClass);
    $firstLang.text($secondLangText);
    $secondLang.text($firstLangText);
    return $secondLangClass
}
$(function () {
    $(document).scroll(function () {
        var $header = $('#header');
        var $hero = $('.img-nis');
        $header.toggleClass('scrolled', $(this).scrollTop() > $hero.height() - $header.height());
    });
    $( document ).ready(function() {
        var $firstLang = $('#first-lang');
        var $secondLang = $('#second-lang');
        var url = new URL(window.location.href);
        var lang = url.searchParams.get("lang");
        if (lang == "gb") {
            changeLangView();
        }
    })
    $('#second-lang').click(function (){
        var selectedLang = changeLangView();
        var url = new URL(window.location.href);
        url.searchParams.set("lang", selectedLang);
        window.location.href = url.href;
    }) 
    $('.navbar-toggler').click(function (){
        $('#header').addClass('scrolled');
    })
});
