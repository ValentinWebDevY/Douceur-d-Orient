/* ========== BURGER MENU ========== */

// Variables burger menu
const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
const nav_link = document.querySelectorAll(".nav-link");

// function open and close burger menu
function menuMobile() {
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
}

// eventListener burger menu
hamburger.addEventListener("click", menuMobile);
// nav_link.addEventListener("click", menuMobile);

nav_link.forEach((n) => n.addEventListener("click", menuMobile));
/* ========== MEDIA QUERIES ========== */

// create two new media query object to detect tablet and pc screen size
const media_query_tablet = window.matchMedia('(min-width: 768px)');
const media_query_pc = window.matchMedia('(min-width: 992px)');

const contents_to_display = document.querySelectorAll(".js-target");

// if my screen size is pc or tablet, toggle hide class
// it will display all the content and hide some button in my mobile version
if (media_query_tablet.matches || media_query_pc.matches) {
    for (let content of contents_to_display) {
        content.classList.toggle("hide");
    }
}

// does the same thing but with an eventListener on change.
media_query_tablet.addEventListener("change", (event) => {
    // if my event matches my media query
    if (event.matches) {
        // toggle class "hide" for each content with de class "js-target"
        for (let content of contents_to_display) {
            content.classList.toggle("hide");
        }
    } else {
        for (let content of contents_to_display) {
            content.classList.toggle("hide");
        }
    }
});

/* ========== POP UP NEWSLETTER ========== */

// const close_btn = document.getElementById("close-pop-up");
// const newsletter_container = document.getElementById("pop-up-newsletter");
//
// let already_pop = false;
//
// // close the pop-up
// close_btn.addEventListener("click", () => {
//     newsletter_container.classList.toggle("active");
// })
//
// setTimeout(() => {
//     newsletter_container.classList.toggle("active");
// }, 2000);

const close_btn = document.getElementById("close-pop-up");
const newsletter_container = document.getElementById("pop-up-newsletter");

// Prevent my newsletter to pop every page change
// Check if the newsletter has been shown before
if (sessionStorage.getItem("newsletterShown") !== "true") {
    // If not, show the newsletter after 2 seconds
    setTimeout(() => {
        newsletter_container.classList.toggle("active");
        // set session storage to true
        sessionStorage.setItem("newsletterShown", "true");
    }, 2000);
}

// Close the pop-up
close_btn.addEventListener("click", () => {
    newsletter_container.classList.toggle("active");
});