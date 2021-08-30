//burgerMenu
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
});

//anchors

let anchors = document.querySelectorAll('nav a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            anchorID = this.getAttribute('href');
            console.log(anchorID);
            document.querySelector(anchorID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

//swiperJs
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});