// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// start slide
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function toggleTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
        t.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="toggleTab('${tab}')"]`).classList.add('active');
}
// template
(function($) {
    'use strict';

    // ----------------------------
    // AOS
    // ----------------------------
    AOS.init({
        once: true
    });


    $(window).on('scroll', function() {
        //.Scroll to top show/hide
        var scrollToTop = $('.scroll-top-to'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) {
            scrollToTop.fadeIn(200);
        } else {
            scrollToTop.fadeOut(100);
        }
    });
    // scroll-to-top
    $('.scroll-top-to').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(document).ready(function() {

        // navbarDropdown
        if ($(window).width() < 992) {
            $('.main-nav .dropdown-toggle').on('click', function() {
                $(this).siblings('.dropdown-menu').animate({
                    height: 'toggle'
                }, 300);
            });
        }

        // -----------------------------
        //  Testimonial Slider
        // -----------------------------
        $('.testimonial-slider').slick({
            slidesToShow: 2,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });


        // -----------------------------
        //  Video Replace
        // -----------------------------
        $('.video-box i').click(function() {
            var video = '<iframe class="border-0" allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
            $(this).replaceWith(video);
        });


        // -----------------------------
        //  Count Down JS
        // -----------------------------
        var syoTimer = $('#simple-timer');
        if (syoTimer) {
            $('#simple-timer').syotimer({
                year: 2023,
                month: 9,
                day: 1,
                hour: 0,
                minute: 0
            });
        }


        // -----------------------------
        //  Story Slider
        // -----------------------------
        $('.about-slider').slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });


        // -----------------------------
        //  Quote Slider
        // -----------------------------
        $('.quote-slider').slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });


        // -----------------------------
        //  Client Slider
        // -----------------------------
        $('.client-slider').slick({
            slidesToShow: 4,
            infinite: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [{
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                }
            ]
        });


        // scroll
        // $('.scrollTo').on('click', function (e) {
        //   e.preventDefault();
        //   var target = $(this).attr('href');
        //   $('html, body').animate({
        //     scrollTop: ($(target).offset().top)
        //   }, 500);
        // });

    });

})(jQuery);