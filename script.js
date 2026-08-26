const audio = document.getElementById("audio");

const enterButton =
    document.getElementById("enterButton");

const enterScreen =
    document.getElementById("enterScreen");

const website =
    document.getElementById("website");

const playButton =
    document.getElementById("playButton");

const progress =
    document.getElementById("progress");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const views =
    document.getElementById("views");


/* ENTER WEBSITE */

enterButton.addEventListener("click", () => {

    audio.volume = 0.5;

    audio.play()
        .then(() => {

            playButton.textContent = "❚❚";

        })
        .catch((error) => {

            console.log("Music error:", error);

        });


    enterScreen.classList.add("hide");

    website.classList.add("show");

});


/* PLAY / PAUSE */

playButton.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        playButton.textContent = "❚❚";

    } else {

        audio.pause();

        playButton.textContent = "▶";

    }

});


/* MUSIC DURATION */

audio.addEventListener("loadedmetadata", () => {

    progress.max = audio.duration;

    duration.textContent =
        formatTime(audio.duration);

});


/* MUSIC PROGRESS */

audio.addEventListener("timeupdate", () => {

    progress.value =
        audio.currentTime;

    currentTime.textContent =
        formatTime(audio.currentTime);

});


progress.addEventListener("input", () => {

    audio.currentTime =
        progress.value;

});


/* FORMAT TIME */

function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return `${minutes}:${secs
        .toString()
        .padStart(2, "0")}`;

}


/* VISITOR COUNTER */

let count =
    localStorage.getItem("views");

if (!count) {

    count = 0;

}

count++;

localStorage.setItem(
    "views",
    count
);

views.textContent = count;
const particlesContainer =
    document.getElementById("particles");

const particles = [
    "🌸",
    "✦",
    "✧",
    "★",
    "❀",
     "💀",
    "✨"
    
];

function createParticle() {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.innerHTML =
        particles[
            Math.floor(
                Math.random() *
                particles.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.fontSize =
        Math.random() * 20 + 12 + "px";

    particle.style.animationDuration =
        Math.random() * 6 + 5 + "s";

    particle.style.opacity =
        Math.random() * 0.7 + 0.3;

    particlesContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 11000);

}


/* إنشاء ورود ونجوم باستمرار */

setInterval(createParticle, 350);


/* أول مجموعة */

for (let i = 0; i < 20; i++) {

    setTimeout(
        createParticle,
        i * 200
    );

}
async function loadDiscordServer() {

    const inviteCode = "FhjyWQnkJH";

    try {

        const response = await fetch(
            `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`
        );

        const data = await response.json();

        console.log(data);


        /* SERVER NAME */

        document.getElementById("serverName").textContent =
            data.guild.name;


        /* MEMBER COUNT */

        document.getElementById("memberCount").textContent =
            data.approximate_member_count.toLocaleString();


        /* ONLINE COUNT */

        document.getElementById("onlineCount").textContent =
            data.approximate_presence_count.toLocaleString();


        /* SERVER ICON */

        if (data.guild.icon) {

            const iconUrl =
                `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png?size=256`;

            document.getElementById("serverIcon").src =
                iconUrl;
        }

    } catch (error) {

        console.error(
            "Discord server error:",
            error
        );

        document.getElementById("serverName").textContent =
            "EGO !";
    }

}


loadDiscordServer();
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});