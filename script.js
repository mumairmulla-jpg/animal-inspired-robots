// ==========================================
// --- OPTIMIZATION UTILITY: THROTTLE ---
// ==========================================

history.scrollRestoration = "manual";

window.onbeforeunload = function () {

    window.scrollTo(0, 0);
};

function throttle(func, limit){

    let inThrottle;

    return function(){

        const args = arguments;

        const context = this;

        if(!inThrottle){

            func.apply(context, args);

            inThrottle = true;

            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ==========================================
// --- ACCORDION CODES ---
// ==========================================

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    accordion.addEventListener("click", () => {

        const panel =
        accordion.nextElementSibling;

        if(panel){

            if(panel.style.display === "block"){

                panel.style.display = "none";

            }else{

                panel.style.display = "block";
            }
        }
    });
});

// ==========================================
// --- ADVANCED SCROLL REVEAL ---
// ==========================================

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight =
    window.innerHeight;

    const revealPoint = 120;

    reveals.forEach((section) => {

        const revealTop =
        section.getBoundingClientRect().top;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }else{

            section.classList.remove("active");
        }
    });
}

window.addEventListener(
    "scroll",
    throttle(revealSections, 30)
);

window.addEventListener(
    "load",
    revealSections
);

// ==========================================
// --- NAVBAR CLICK RE-ANIMATION ---
// ==========================================

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const targetId =
        link.getAttribute("href");

        if(targetId && targetId.startsWith("#")){

            const targetSection =
            document.querySelector(targetId);

            if(targetSection){

                targetSection.classList.remove("active");

                setTimeout(() => {

                    targetSection.classList.add("active");

                }, 200);
            }
        }
    });
});

// ==========================================
// --- ACTIVE NAVBAR LINKS TRACKING ---
// ==========================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll("nav a");

function updateActiveNavbar(){

    let current = "";

    const scrollPos =
    window.scrollY ||
    document.documentElement.scrollTop;

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop;

        if(scrollPos >= sectionTop - 120){

            current =
            section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {

        link.classList.remove("active-link");

        const href =
        link.getAttribute("href");

        if(current && href === `#${current}`){

            link.classList.add("active-link");
        }
    });
}

window.addEventListener(
    "scroll",
    throttle(updateActiveNavbar, 50)
);

// ==========================================
// --- COUNTER ANIMATION ---
// ==========================================

const counters =
document.querySelectorAll(".counter");

counters.forEach((counter) => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 25);

        }else{

            counter.innerText = target;
        }
    };

    const observer =
    new IntersectionObserver((entries) => {

        if(entries[0].isIntersecting){

            updateCounter();

            observer.disconnect();
        }

    }, { threshold: 0.2 });

    observer.observe(counter);
});

// ==========================================
// --- HIGH PERFORMANCE CURSOR GLOW ---
// ==========================================

const cursorGlow =
document.querySelector(".cursor-glow");

if(cursorGlow){

    let mouseX = 0;

    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;

        mouseY = e.clientY;
    });

    function renderGlow(){

        cursorGlow.style.left =
        mouseX + "px";

        cursorGlow.style.top =
        mouseY + "px";

        requestAnimationFrame(renderGlow);
    }

    requestAnimationFrame(renderGlow);
}

// ==========================================
// --- FUTURISTIC LOADER & AUDIO ---
// ==========================================

const startupSound =
document.getElementById("startupSound");

document.addEventListener("DOMContentLoaded", () => {

    const loader =
    document.querySelector(".loader");

    if(startupSound){

        startupSound.volume = 1;

        startupSound.currentTime = 0;

        document.addEventListener("click", () => {

    startupSound.play();

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1550);

}, { once: true });

    }else{

        loader.classList.add("hidden");
    }
});

// ==========================================
// --- FLOATING PARTICLES ---
// ==========================================

const particles =
document.querySelector(".particles");

if(particles){

    for(let i = 0; i < 45; i++){

        const particle =
        document.createElement("span");

        particle.style.left =
        Math.random() * 100 + "vw";

        particle.style.animationDuration =
        6 + Math.random() * 10 + "s";

        particle.style.animationDelay =
        Math.random() * 5 + "s";

        particle.style.opacity =
        Math.random();

        particles.appendChild(particle);
    }
}

// ==========================================
// --- HERO PARALLAX EFFECT ---
// ==========================================

const hero =
document.querySelector(".hero");

if(hero){

    window.addEventListener("scroll",

        throttle(() => {

            let offset =
            window.pageYOffset;

            hero.style.backgroundPositionY =
            offset * 0.35 + "px";

        }, 10)
    );
}

// ==========================================
// --- MAGNETIC HERO BUTTON ---
// ==========================================

const magneticButton =
document.querySelector(".hero button");

if(magneticButton){

    magneticButton.addEventListener("mousemove", (e) => {

        const rect =
        magneticButton.getBoundingClientRect();

        const x =
        e.clientX - rect.left - rect.width / 2;

        const y =
        e.clientY - rect.top - rect.height / 2;

        magneticButton.style.transform =
        `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    magneticButton.addEventListener("mouseleave", () => {

        magneticButton.style.transform =
        "translate(0,0)";
    });
}