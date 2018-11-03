$(function () {
    'use strict';
    //Различные "вылеты"
    new WOW({
        mobile: false
    }).init()

    //Фиксированный заголовок
    $('.header').sticky({
        topSpacing: 0
    });

    //Подсветка пунктов меню, при скроллировании
    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 70
    });

    //BG главного экрана
    $(".screen-height").height($(window).height());
    $(window).resize(function () {
        $(".screen-height").height($(window).height());
    });

    //Плавный скролл
    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    // Фиксация заголовка при скроллировании
    $('#nav').affix({
        offset: {
            top: $('header').height()
        }
    });

    // Мои умения
    $('.skills').waypoint(function () {
        $('.chart').each(function () {
            $(this).easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    }, {offset: '80%'});

    // Мои работы
    var $container = $('.portfolio-items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.cat a').click(function () {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    // Небольшая статистика
    if ($("span.count").length > 0) {
        $('span.count').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Всплывалки
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
});
   