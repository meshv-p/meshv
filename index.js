$(document).ready(function () {
    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Web Developer.", "Web Designer.", "Programmer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //top btn
    $(window).scroll(function () {
        if (this.scrollY > 300) {
            $('.topbutton').addClass("topbtn");
            console.log("done");
        } else {
            $('.topbutton').removeClass("topbtn");
        }
    })


    //owl carousel
    $(".owl-carousel").owlCarousel();


    // $('.owl-carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    })



