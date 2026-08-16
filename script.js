// =====================================
// TYPING ANIMATION
// =====================================

const typingText =
    document.getElementById("typingText");

const roles = [
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex >=
                roles.length
            ) {
                roleIndex = 0;
            }
        }
    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();



// =====================================
// MOBILE MENU
// =====================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle(
            "open"
        );


        const icon =
            menuBtn.querySelector("i");


        if (
            navMenu.classList.contains(
                "open"
            )
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );
        }

    }
);



// =====================================
// CLOSE MENU AFTER CLICK
// =====================================

document
    .querySelectorAll("#navMenu a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "open"
                    );


                    const icon =
                        menuBtn.querySelector(
                            "i"
                        );


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        }
    );



// =====================================
// DARK / LIGHT MODE
// =====================================

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light"
        );


        const icon =
            themeToggle.querySelector(
                "i"
            );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

        } else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );
        }

    }
);



// =====================================
// CONTACT FORM
// =====================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please fill in all fields."
            );

            return;
        }


        const body =
            `Hello Sanika,

Name: ${name}
Email: ${email}

Message:
${message}`;


        window.location.href =
            "mailto:YOUR-EMAIL@gmail.com" +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);

    }
);



// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );
                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );
                }

            }
        );

    }
);
