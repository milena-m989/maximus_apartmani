$(function () {
    $(document).scroll(function () {
        var $header = $('#header');
        var $hero = $('.img-nis');
        $header.toggleClass('scrolled', $(this).scrollTop() > $hero.height() - $header.height());
    });
    $('#second-lang').click(function (){
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
    }) 
});
