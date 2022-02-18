$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu__list').toggleClass('active');
        $('body').toggleClass('lock')
    })
})

$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 1,
        sliderToScroll: 1,
        speed: 1500,
        infinite: false,
        initialSlide: 0,
    })
})