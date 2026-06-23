const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";
typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

Typebot.initBubble({
  typebot: "quiz-e69vmn3",
  theme: {
    button: { backgroundColor: "#4A8BB2" },
    chatWindow: { backgroundColor: "#F8F8F8" },
  },
});
`;
document.body.append(typebotInitScript);


// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});


// CONTACT BUTTON

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = document.getElementById("contactForm");

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        await fetch(
            "https://script.google.com/macros/s/AKfycbzMUPt06kuABkTePLjWGftfp9vICBCCY7GcdKnAT5T8G6teYqvUZ7AdFMD7dsVBkVVl/exec",
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        // thông báo thành công
        alert("Gửi thành công!");

        // clear toàn bộ input
        form.reset();

    } catch (error) {
        console.error(error);
        alert("Gửi thất bại");
    }
});


// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    // hiện nút khi scroll xuống

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
