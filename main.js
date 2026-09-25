const options = {
    strings: ["Student", "Python Developer","Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true
};

const typed = new Typed(".text", options);
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills");
    const aboutSection = document.querySelector(".about"); // Select the about section

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-skills");
                    entry.target.classList.add("animate-about");
                    observer.unobserve(entry.target); // Unobserve after animation is applied
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    observer.observe(skillsSection);
    observer.observe(aboutSection); // Observe the about section
});