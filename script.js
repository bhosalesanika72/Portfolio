// ===============================
// TYPING ANIMATION
// ===============================

const typingText = document.getElementById("typingText");

const roles = [
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot Developer",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeAnimation, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeAnimation,
        deleting ? 50 : 100
    );
}

typeAnimation();


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");
    }
});


// Close mobile menu after clicking link

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");
    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const animatedSections =
    document.querySelectorAll(".section, .cta");

function revealSections() {

    animatedSections.forEach(function (section) {

        const position =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            section.classList.add("show");

        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    const mailBody =
        `Hello Sanika,%0D%0A%0D%0A` +
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A%0D%0A` +
        `${message}`;


    window.location.href =
        `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailBody}`;

});


// ===============================
// BUTTON HOVER EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "";

    });

});
