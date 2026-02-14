const cards = document.querySelectorAll(".card");
const glow = document.querySelector(".cursor-glow");

/* Cursor glow movement */
document.addEventListener("mousemove", (e) => {
    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
});

/* Cinematic 3D tilt */
cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;
        const rotateY = (x - centerX) / 12;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
    });

});
