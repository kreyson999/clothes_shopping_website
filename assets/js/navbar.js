const nav = document.querySelector('nav');
const header = document.querySelector('header');
const navHeight = nav.clientHeight;

const navOptions = {
    threshold: 0,
}
const navObserver = new IntersectionObserver(changeNav, navOptions)

function changeNav(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.style.paddingTop = `${navHeight}px`;
            nav.classList.add('active');
        } else {
            header.style.paddingTop = `0px`;
            nav.classList.remove('active');
        }
    });
}
navObserver.observe(header);

const countdown = document.querySelector('.timer');
const headerHotdropTimer = document.querySelector('.timer');
const dateToEnd = new Date('Dec 30, 2021 00:00').getTime();

var updateDate = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = dateToEnd - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    updateDateItem(0, days);
    updateDateItem(1, hours);
    updateDateItem(2, minutes);
    updateDateItem(3, seconds);
}
, 1000);

function updateDateItem(index, unit) {
    headerHotdropTimer.children[index].children[1].textContent = unit < 10 ? `0${unit}` : unit;
}

