$(document).ready(function() {
    $('.section-product .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 34,
        navText: [
            '<a href="javascript:;" class="owl_next prev_owl"><img src="assets/image/left.svg" alt="left"></a>',
            '<a href="javascript:;" class="owl_prev next_owl"><img src="assets/image/next.svg" alt="right"></a>'
        ],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

 if ($('#dropdownAddress').length > 0){
     $('#dropdownAddress').select2();
 }
});