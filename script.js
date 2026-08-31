/* =========================
   START WEBSITE
========================= */

function startWebsite() {

    // Hide welcome
    document
        .getElementById("welcome")
        .classList.add("hidden");

    // Show birthday
    document
        .getElementById("birthday")
        .classList.remove("hidden");

    // Play music
    const music =
        document.getElementById("birthdayMusic");

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

    // Scroll to birthday
    document
        .getElementById("birthday")
        .scrollIntoView({
            behavior: "smooth"
        });

    createHearts();
}


/* =========================
   SHOW MEMORIES
========================= */

function showMemories() {

    document
        .getElementById("birthday")
        .classList.add("hidden");

    document
        .getElementById("memories")
        .classList.remove("hidden");

    document
        .getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   OPEN MEMORY
========================= */

function openMemory(title, text, image) {

    const modal =
        document.getElementById("memoryModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalText =
        document.getElementById("modalText");

    const modalImage =
        document.getElementById("modalImage");


    modalTitle.textContent = title;

    modalText.textContent = text;

    modalImage.src = image;

    modal.style.display = "flex";
}


/* =========================
   CLOSE MEMORY
========================= */

function closeMemory() {

    document
        .getElementById("memoryModal")
        .style.display = "none";
}


/* =========================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE
========================= */

window.onclick = function(event) {

    const modal =
        document.getElementById("memoryModal");

    if (event.target === modal) {

        modal.style.display = "none";
    }
};


/* =========================
   SHOW LETTER
========================= */

function showLetter() {

    document
        .getElementById("memories")
        .classList.add("hidden");

    document
        .getElementById("letter")
        .classList.remove("hidden");

    document
        .getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

    startTyping();
}


/* =========================
   TYPING EFFECT
========================= */

function startTyping() {

    const text =
`Dear Sister ❤️

Today is your special day, and I just want you to know how lucky I feel to have you in my life.

We have shared so many memories together — our childhood, our silly fights, our laughter, our family moments and all those little things that made us smile.

You may not always realize it, but you are a very important part of my life.

I hope this birthday brings you lots of happiness, success, love and beautiful memories.

Keep smiling, keep shining and always be the amazing person you are.

Happy Birthday, Sister! 🎂❤️

With lots of love,
Your Brother ❤️`;

    const element =
        document.getElementById("typingText");

    element.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(type, 35);
        }
    }

    type();
}


/* =========================
   SHOW GIFT
========================= */

function showGift() {

    document
        .getElementById("letter")
        .classList.add("hidden");

    document
        .getElementById("gift")
        .classList.remove("hidden");

    document
        .getElementById("gift")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    const gift =
        document.querySelector(".gift-box");

    const message =
        document.getElementById("giftMessage");


    gift.style.transform =
        "scale(0) rotate(360deg)";

    setTimeout(() => {

        gift.style.display = "none";

        message.style.display = "block";

        createConfetti();

    }, 500);
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        const animation =
            heart.animate(

                [
                    {
                        transform:
                            "translateY(0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(-${window.innerHeight + 100}px)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 3000 + 3000,

                    easing: "linear"
                }
            );


        animation.onfinish = () => {

            heart.remove();
        };
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["🎉", "🎊", "❤️", "✨", "🎈"]
            [Math.floor(Math.random() * 5)];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "2000";

        confetti.style.pointerEvents =
            "none";

        document.body.appendChild(confetti);


        const animation =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(${window.innerHeight + 100}px) rotate(720deg)`,

                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 3000 + 2000,

                    easing: "ease-out"
                }
            );


        animation.onfinish = () => {

            confetti.remove();
        };
    }
}