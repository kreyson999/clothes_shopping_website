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
