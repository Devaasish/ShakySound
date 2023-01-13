var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var again = document.querySelector('.again');
var myIcon = document.getElementById("myIcon");
var songCard = document.querySelector('.songCard');

var musicPlayer = document.querySelector('.musicPlayer');
var musicHolder = document.querySelector('.musicHolder');

var songs = ["VarahaRoopam", "PeddaPuli", "TamilFolkDance-MadrasWeek", "DiaDiaDole", "TELANGANADAPPULU", "Bhangra", "KannadaFolk", "NagadaSangDhol", "BulletuBandi", "Mirzapunjabifolk"]
var names = ["Varaha Roopam", "Pedda Puli", "Tamil Folk Dance - Madras Week", "Dia Dia Dole", "Telangana Dappulu", "Bhangra", "Kannada Folk", "Nagada Sang Dhol", "Bulletu Bandi", "Mirza Punjabi Folk"]
var artists = ["Disto & Todd Helder", "Andreas Stone & Denniz Jamm", "Sara Skinner", "Doctor Neiman & Micah Martin", "Elektronimia", "Beauz & Jvna", "Harley Bird", "Levianth & Axol", "The Weekend", "Alan Walker"]

var music = document.querySelector('audio');

var songName = document.querySelector('.songName');
var songComposer = document.querySelector('.songComposer');

var songIndex = 0;
var nameIndex = 0;
// var artistIndex = 0;

myIcon.style.animation = "";

again.addEventListener("click", () => {
    music.currentTime = 0;
    music.play();
});

music.addEventListener("timeupdate", () => {
    progressPercent = (music.currentTime / music.duration) * 100;
    musicPlayer.style.width = `${progressPercent}%`
    // console.log(progressPercent);
});

music.addEventListener("ended", () => {
    songIndex = songIndex + 1;
    nameIndex = nameIndex + 1;
//     artistIndex = artistIndex + 1;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    if (nameIndex > names.length - 1) {
        nameIndex = 0;
    }

//     if (artistIndex > artists.length - 1) {
//         artistIndex = 0;
//     }

    music.src = songs[songIndex] + ".mp3";
    songName.innerText = names[nameIndex];
//     songComposer.innerText = artists[artistIndex];
    music.play();
});

musicHolder.addEventListener("click", (e) => {
    const width = musicHolder.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;

    music.currentTime = clickX / width * duration;
});

musicPlayer.addEventListener("ondrag", () => {
    const width = musicHolder.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;

    music.currentTime = clickX / width * duration;
});

play.onclick = function change() {
    pause.classList.remove("changer");
    play.classList.add("changer");
    music.play();
    myIcon.style.animation = "shake 3s ease infinite";
}

pause.onclick = function change() {
    pause.classList.add("changer");
    play.classList.remove("changer");
    myIcon.style.animation = "";
    music.pause();
}

next.addEventListener("click", () => {
    songIndex = songIndex + 1;
    nameIndex = nameIndex + 1;
//     artistIndex = artistIndex + 1;

    pause.classList.remove("changer");
    play.classList.add("changer");
    myIcon.style.animation = "shake 3s ease infinite";

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    if (nameIndex > names.length - 1) {
        nameIndex = 0;
    }

//     if (artistIndex > artists.length - 1) {
//         artistIndex = 0;
//     }

    music.src = songs[songIndex] + ".mp3";
    songName.innerText = names[nameIndex];
//     songComposer.innerText = artists[artistIndex];
    music.play();
});

previous.addEventListener("click", () => {
    songIndex = songIndex - 1;
    nameIndex = nameIndex - 1;
//     artistIndex = artistIndex - 1;

    pause.classList.remove("changer");
    play.classList.add("changer");
    myIcon.style.animation = "shake 3s ease infinite";

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    if (nameIndex < 0) {
        nameIndex = names.length - 1;
    }

    if (artistIndex < 0) {
        artistIndex = artists.length - 1;
    }

    music.src = songs[songIndex] + ".mp3";
    songName.innerText = names[nameIndex];
//     songComposer.innerText = artists[artistIndex];
    music.play();
});
