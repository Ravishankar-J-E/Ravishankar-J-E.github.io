// ============================
// AOS INIT
// ============================

AOS.init({
    duration: 1000,
    once: true
});

// ============================
// TYPING EFFECT
// ============================

const typingText = document.getElementById("typing-text");

const words = [
    "Java Backend Developer",
    "BCA Graduate",
    "MCA Student",
    "Problem Solver",
    "Linux Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 100
    );
}

typeEffect();

// ============================
// COUNTER ANIMATION
// ============================

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter =
                    entry.target;

                const target =
                    +counter.dataset.target;

                let count = 0;

                const speed =
                    target / 80;

                const updateCounter = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.floor(count);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            target + "+";
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);
            }
        });

    });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ============================
// SKILL BAR ANIMATION
// ============================

const progressBars =
    document.querySelectorAll(".progress-bar");

const progressObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar =
                    entry.target;

                const width =
                    bar.dataset.width;

                bar.style.width = width;

                progressObserver.unobserve(bar);
            }
        });

    });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ============================
// BACK TO TOP BUTTON
// ============================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

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

// hide initially

topBtn.style.display = "none";

// ============================
// SMOOTH NAVIGATION
// ============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ============================
// MOBILE MENU
// ============================

const menuIcon =
    document.getElementById("menu-icon");

const navbar =
    document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// ============================
// INTERACTIVE AVATAR MESSAGES
// ============================

const bubble =
    document.querySelector(".speech-bubble");

const messages = [

    "👋 Welcome to my portfolio!",

    "🚀 Check out my projects!",

    "💻 I love Java Development!",

    "🔥 Building real-world applications!",

    "🤝 Let's connect together!"
];

let messageIndex = 0;

setInterval(() => {

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    bubble.style.opacity = 0;

    setTimeout(() => {

        bubble.innerText =
            messages[messageIndex];

        bubble.style.opacity = 1;

    }, 500);

}, 4000);

// ============================
// AVATAR MOUSE FOLLOW
// ============================

const avatar =
    document.querySelector(".home-image img");

document.addEventListener(
    "mousemove",
    (e) => {

        const x =
            (window.innerWidth / 2 - e.pageX) / 40;

        const y =
            (window.innerHeight / 2 - e.pageY) / 40;

        avatar.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);

// ============================
// HEADER SHADOW ON SCROLL
// ============================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow =
            "none";
    }
});

// ============================
// ACTIVE NAV LINK
// ============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

// ============================
// CONSOLE MESSAGE
// ============================

console.log(
    "%cPortfolio Loaded Successfully 🚀",
    "color:#7c3aed;font-size:16px;font-weight:bold;"
);