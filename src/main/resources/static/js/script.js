/* =====================================================
   TYPING EFFECT
===================================================== */

const roles = [

    "Full-Stack Developer",

    "Software Developer",

    "Web Developer",

    "Graphic Designer"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


const typingElement =
    document.getElementById("typing");


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
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

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex >= roles.length
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



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


if (
    menuButton &&
    navLinks
) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

}



/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 500
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* =====================================================
   SCROLL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .service-card, .project-card"
    );


const animationObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(
    function (element) {

        animationObserver.observe(
            element
        );

    }
);



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();

        }
    );

}