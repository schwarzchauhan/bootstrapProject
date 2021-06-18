var mainCarouselOfWebsite = document.querySelector('#mainCarouselOfWebsite');
var carousel = new bootstrap.Carousel(mainCarouselOfWebsite, {
    interval: 2000,
    wrap: true,
    ride: 'carousel'
});


// to initialize owl carousel
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

var price1 = 5;
var price2 = 6;
var total = price1 + price2;
console.log(price1, price2, total);