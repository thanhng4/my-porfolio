// MENU MOBILE

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});


// ANIMATION SCROLL

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 300;
        const height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            section.classList.add("show");
        }

    });

});


// CONTACT BUTTON

const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Cảm ơn bạn đã liên hệ!");
});