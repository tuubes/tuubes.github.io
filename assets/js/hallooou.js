/*
    Template: Hallooou HTML5 Responsive template <http://www.mauritiusdsilva.com/themes/hallooou>
    Original author: Mauritius D'Silva <hello@mauritiusdsilva.com>
    Modified by: TheElectronWill <theelectronwill@gmail.com>
*/

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".scroll-top").fadeIn('1000', "easeInOutExpo");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".scroll-top").fadeOut('1000', "easeInOutExpo");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.overlay-menu ul li a,.scroll-top a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// WOW.js initialise
// WOW.js uses animate.css to animate/reveal elements.
// Browse the list of animation effects available here-> https://daneden.github.io/animate.css/
$(function() {
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
});

// jQuery Parallax. More info here-> https://github.com/IanLunn/jQuery-Parallax
$(function() {
    // apply parallax effect only when body has the ".parallax-page" class
    if ($('body').hasClass('parallax-page')) {
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

        $('#parallax-slide').parallax("50%", 0.1);
        $('#advantages').parallax("50%", 0.1);
        $('#portfolio').parallax("50%", 0.1);
        $('#page-aboutus').parallax("50%", 0.1);
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.overlay-menu ul li a').click(function() {
    $('.button_container:visible').click();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Navigation show/hide
$('.toggle').click(function() {
    if ($('#overlay.open')) {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    }
});

// Client testimonials
$(function() {
    var owl = $(".news-bubbles");
    owl.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

});

// Counter
$(function() {
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});

// Carousel Slider
$(function() {
    $('.carousel').carousel({
            interval: 8000 //changes the speed
    })
});

// HTML5 Player
$(function() {
    var vid = $("#html5-video").get(0);
    $('#html5-video-play').click(function(event) {
        event.preventDefault();
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
        $(this).toggleClass('fa-play fa-pause');
        return false;
    });

    $('#html5-video-volume').click(function(event) {
        event.preventDefault();
        if (vid.muted) {
            vid.muted = false;
        } else {
            vid.muted = true;
        }
        $(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });
});
