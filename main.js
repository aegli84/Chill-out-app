// const button = document.querySelector ('button');
// const body = document.querySelector ('section');
// const videos = ['rain.mp4', 'video.mp4' ]

// body.source.backgroundVideo = 'beach.mp4';
// button.addEventListener('click', changeVideo)

// function changeVideo() {
//     const videoIndex = parseInt(Math.random() * videos.length)
//     section.body.backgroundVideo = videos[videoIndex]

//     console.log(changeVideo);
// }

// function play() {
//     const audioPlay = new Audio("./Waves Crashing on Rock Beach.mp3");
//     audioPlay.pause();
// }

// function pause() {
//     const audioPause = new Audio("./Waves Crashing on Rock Beach.mp3");
//     audioPause.pause();
// }



const audioWaves = document.getElementById('sound-waves');

function toggleWaves() {
    if (audioWaves.paused) {
        audioWaves.play();
    }
    else {
        audioWaves.pause();
    }
};

const audioBirds = document.getElementById('sound-birds');

function toggleBirds() {
    if (audioBirds.paused) {
        audioBirds.play();
    }
    else {
        audioBirds.pause();
    }
};