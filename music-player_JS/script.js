let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");
let audioSource = document.getElementById("audioSource");

let songs =
[
    {
        title: "A Thousand Years",
        artist: "Christina Perri",
        src: "assets/1.mpeg",
        img: "/assets/1.jpg"

    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        src: "assets/2.mpeg",
        img: "/assets/2.jpg"

    }, 
    {
        title: "Until I Found You",
        artist: "Stephen Sanchez ft. Em Beihold",
        src: "assets/3.mpeg",
        img: "/assets/3.jpg"

    }, 
    {
        title: "Night Changes",
        artist: "One Direction",
        src: "assets/4.mpeg",
        img: "/assets/4.jpg"
    }, 
    {
        title: "Somewhere only we know",
        artist: "keane",
        src: "assets/5.mpeg",
        img: "/assets/5.jpg"
    }
   
]

let currentSongIndex = 0;

function loadSong(songIndex) {
    songTitle.textContent = songs[songIndex].title;
    songArtist.textContent = songs[songIndex].artist;
    audioSource.src = songs[songIndex].src;
    songImg.src = songs[songIndex].img;
    song.load();
    progress.max = song.duration;
    progress.value = song.currentTime;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    song.play();
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song.ontimeupdate = function(){
    progress.value = song.currentTime;
};


function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}



if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function (){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault(); 
        playPause();
    }
});




loadSong(currentSongIndex);

console.log("hii");