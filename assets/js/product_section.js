const productSections = document.querySelectorAll('.product-carousel');

productSections.forEach(scroll);

function scroll(section) {
    const carousel = section.querySelector('.container');
    const productWidth = section.querySelector('.product-card').clientWidth;
    const btnLeft = section.querySelector('.btn-left');
    const btnRight = section.querySelector('.btn-right');
    btnLeft.addEventListener('click', () => {
        carousel.scrollLeft -= productWidth;
    });
    btnRight.addEventListener('click', () => {
        carousel.scrollLeft += productWidth;
    });
}