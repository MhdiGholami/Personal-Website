// Dom Selection
const openStickyNavbar = document.querySelector('#openStickyNavbar')
const closeNavbar = document.querySelector('#closeNavbar')
const themeToggle = document.querySelector('#theme-toggle')
const sidebarParent = document.querySelector('.sidebar-parent')
const stickyHeader = document.querySelector('#sticky-header')
const scrollButton = document.querySelector('#scroll-button')
const circle = scrollButton.querySelector('circle');
const circumference = 2 * Math.PI * 25;
const bodyEl = document.querySelector('body')


function dropDownAction(event) {
    targetElem = event.target

    targetElem.nextElementSibling.classList.toggle('active')
    targetElem.parentElement.classList.toggle('active-color')

    if (targetElem.parentElement.classList.contains('active-color')) {
        targetElem.lastElementChild.classList.remove('fa-plus')
        targetElem.lastElementChild.classList.add('fa-minus')
    } else {
        targetElem.lastElementChild.classList.remove('fa-minus')
        targetElem.lastElementChild.classList.add('fa-plus')
    }
}

// Swiper JS Code
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 25,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function openNavbarMenu() {
    sidebarParent.style.transform = 'translateX(0px)'
}

function closeNavbarMenu() {
    sidebarParent.style.transform = 'translateX(101%)'
}

function scrollActions() {
    let position = Math.ceil(window.scrollY)

    if (position >= 250) {
        stickyHeader.classList.remove('hide')
        scrollButton.classList.remove('active-scrollBtn')
    } else {
        stickyHeader.classList.add('hide')
        scrollButton.classList.add('active-scrollBtn')
    }

    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = scrollTop / docHeight;
    let offset = circumference * (1 - progress);
    circle.style.strokeDashoffset = offset;

    scrollButton.style.display = scrollTop > 100 ? "flex" : "none";
}

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// function changeTheme(event) {

//     if (event.target.dataset.theme === 'false') {
//         // go light mode
//         event.target.classList.remove('fa-sun')
//         event.target.classList.add('fa-moon')
//         event.target.dataset.theme = 'true'
//     } else {
//         // go dark mode
//         event.target.classList.remove('fa-moon')
//         event.target.classList.add('fa-sun')
//         event.target.dataset.theme = 'false'
//     }
// }

// addEventListeners
openNavbar.addEventListener('click', openNavbarMenu)
openStickyNavbar.addEventListener('click', openNavbarMenu)
closeNavbar.addEventListener('click', closeNavbarMenu)
window.addEventListener('scroll', scrollActions)
// themeToggle.addEventListener('click', changeTheme)