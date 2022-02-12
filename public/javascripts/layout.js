
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
/**
 * Returns currently selected language
 * @returns currently selected language
 */
function getLang() {
    var firstPath = $(location).attr('pathname');
    firstPath.indexOf(1);
    firstPath.toLowerCase();
    return firstPath.split("/")[1];
}
$(function () {
    $(document).ready(function() {
        var lang = getLang();
        if (lang == "gb") {
            changeLangView();
        }
    })
    $('#second-lang').click(function (){
        var oldLang = getLang();
        var newLang = changeLangView();
        var url = new URL(window.location.href.replace(`/${oldLang}/`, `/${newLang}/`));
        window.location.href = url.href;
    }) 
});
