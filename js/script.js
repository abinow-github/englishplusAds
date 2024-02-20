function whatsapp(){
    window.location.href = 'https://wa.me/918891213047';
}
window.onload = function () {
        setTimeout(function () {
            window.location.href = 'https://wa.me/918891213047';
        }, 20000);
    
};

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0.0001, // Adjust the autoplaySpeed to a reasonable value
        speed: 2000, // Adjust the speed as needed
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});