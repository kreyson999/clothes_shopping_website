const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = Array.from(carouselTrack.children);
const carouselTime = parseInt(getComputedStyle(document.body).getPropertyValue('--carousel-time'));
let currentIndex = 0;

carouselItems.forEach((item, index) => {
    const itemImage = item.querySelector('img');
    itemImage ? itemImage.addEventListener('dragstart', (e) => e.preventDefault()) : null;
    console.log(item.getBoundingClientRect().width);
    item.style.left = `${item.getBoundingClientRect().width * index}px`
});

let carouselInterval = setInterval(function() {
    currentIndex += 1;
    if (currentIndex === carouselItems.length) {
        currentIndex = 0;  
    }
    changeItemPosition(currentIndex);
}, carouselTime * 1000);

function changeItemPosition(index) {
    carouselTrack.style.transform = `translateX(-${carouselItems[0].getBoundingClientRect().width * index}px)`;
}