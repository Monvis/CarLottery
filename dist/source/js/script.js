//burgerMenu
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
});

//swiperJs
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/// Learning

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) break firstFor;
        console.log(size);
    }
}