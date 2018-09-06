(function ($) {
    'use strict';

    var $window = $(window);

    // :: 1.0 Preloader Active Code
    setTimeout(function () {
        $("#riyadh-loader").fadeOut("slow");
    }, 1500);

    // :: 2.0 Menu Active Code
    if ($.fn.classyNav) {
        $('#classyNav').classyNav({
            stickyNav: true,
            theme: "dark"
        });
    }

    // :: 3.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlider = $('.welcome_slides');

        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='ti-arrow-left'</i>", "<i class='ti-arrow-right'</i>"],
            dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $(".client_slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                320: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        $(".partners-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            margin: 10,
            center: true,
            responsive: {
                320: {
                    items: 3
                },
                576: {
                    items: 4
                },
                992: {
                    items: 7
                }
            }
        });
    }

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: 6.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 7.0 matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equal-height').matchHeight();
    }

    // :: 8.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_button').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: 9.0 Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 10.0 Jarallax Active Code
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 11.0 Toggler Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 12.0 Countdown Active Code
    $('#clock').countdown('2026/11/10', function (event) {
        $(this).html(event.strftime('<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>'));
    });

    // :: 13.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);