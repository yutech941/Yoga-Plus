$(function() {

    // フロートヘッダーメニュー
    var targetHeight = $('.js-float-menu-target').height();
    $(window).on('scroll', function () {
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

// spメニュー
    $('.js-toggle-sp-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

//メニューを押して閉じる
    $('.js-click-close-menu').on('click', function () {
        $('.js-toggle-sp-menu').removeClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
});
