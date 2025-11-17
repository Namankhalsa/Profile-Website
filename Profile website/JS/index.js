const videoA = document.getElementById("videoA");
const videoB = document.getElementById("videoB");

const clips = [
    { src: "/videos/clip4.mp4", duration: 1 },
    { src: "/videos/clip1.mp4", duration: 0.98},
    { src: "/videos/clip2.mp4", duration: 0.97}
];

let index = 0;
let isAplaying = true;

function playNext() {
    const nextClip = clips[index];

    if (isAplaying) {
        videoB.src = nextClip.src;
        videoB.currentTime = 0;
        videoB.play();

        videoA.style.opacity = 0;
        videoB.style.opacity = 1;
    } else {
        videoA.src = nextClip.src;
        videoA.currentTime = 0;
        videoA.play();

        videoB.style.opacity = 0;
        videoA.style.opacity = 1;
    }

    // Prepare next index
    index = (index + 1) % clips.length;
    isAplaying = !isAplaying;

    setTimeout(playNext, nextClip.duration * 1000);
}

playNext();
