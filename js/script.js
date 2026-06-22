// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else{
        navLinks.style.display = "flex";
    }
});


// CONTACT BUTTON

const contactBtn = document.querySelector(".contact-container button");

contactBtn.addEventListener("click", () => {
    alert("Cảm ơn bạn đã liên hệ với tôi!");
});


// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    // hiện nút khi scroll xuống

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});