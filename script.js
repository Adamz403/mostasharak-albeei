/* ==========================================
   EMAILJS INITIALIZATION
========================================== */

/*
استبدل القيم التالية بعد إنشاء حساب EmailJS

YOUR_PUBLIC_KEY
YOUR_SERVICE_ID
YOUR_TEMPLATE_ID

*/

(function() {

    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
    });

})();


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    submitBtn.innerHTML = "جاري الإرسال...";
    submitBtn.disabled = true;

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )

    .then(function() {

        alert(
            "تم إرسال طلبك بنجاح، سيتم التواصل معك في أقرب وقت."
        );

        contactForm.reset();

        submitBtn.innerHTML = "إرسال الطلب";
        submitBtn.disabled = false;

    })

    .catch(function(error) {

        console.error(error);

        alert(
            "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى."
        );

        submitBtn.innerHTML = "إرسال الطلب";
        submitBtn.disabled = false;

    });

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

const hiddenElements = document.querySelectorAll(
    ".service-card, .feature, .step, .about-image, .about-text"
);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";

    }

});


/* ==========================================
   SMOOTH BUTTON EFFECT
========================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});