/*-----------------------------SCROLL TOP---------------------------------------*/
function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const scrollButton = document.querySelector('.footer-up');
scrollButton.addEventListener('click', scrollToTop);