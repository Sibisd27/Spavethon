// 📱 Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ⚔️ Page Enter
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
    const slash = document.getElementById("slash-transition");
    // remove any previous transition classes
    slash.classList.remove("active", "left", "right", "top", "slide-left", "slide-right");
});

// ⚔️ Page Exit with Loading Counter + Per-Link Direction
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href.startsWith("#") || this.target === "_blank") return;

        e.preventDefault();

        const slash = document.getElementById("slash-transition");
        const text = document.getElementById("loading-text");

    // 🎯 PER-LINK ANIMATION RULES
    // Use sliding overlay for specific pages for a smoother feeling
    if (href.includes("hackathon")) slash.classList.add("slide-left");
    else if (href.includes("register")) slash.classList.add("slide-right");
    else slash.classList.add("top");

        slash.classList.add("active");
        document.body.classList.remove("page-loaded");

        // 🔢 Loading counter
        let percent = 0;
        text.textContent = "Entering the arena… 0%";

        const interval = setInterval(() => {
            percent += Math.floor(Math.random() * 8) + 3;
            if (percent >= 100) percent = 100;
            text.textContent = `Entering the arena… ${percent}%`;

            if (percent === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        }, 80);
    });
});

    // (smooth-scrolling handler removed — reverting to previous behaviour)

