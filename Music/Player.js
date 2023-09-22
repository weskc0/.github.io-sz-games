var Music = document.getElementById('Paudio')
var title = document.getElementById('SongName')
var artist = document.getElementById('Artist')
var cover2 = document.getElementById('Playericon')
//conditions 

var loop = false;

//FUNCTIONS








function showPlay() {
    document.getElementById('audio_play').style.display = 'none'
    document.getElementById('audio_pause').style.display = 'block'
}

function showPause() {
    document.getElementById('audio_play').style.display = 'block'
    document.getElementById('audio_pause').style.display = 'none'
}

function showLoop() {
    document.getElementById('loop').style.display = 'none'
    document.getElementById('loop2').style.display = 'block'
}

function showLoopp() {
    document.getElementById('loop').style.display = 'block'
    document.getElementById('loop2').style.display = 'none'
}













//END


    function play(song, title2, by, img) {
        //alert("Playing " + songInfo.TITLE + " by " + songInfo.BY);
        title.innerHTML = title2
        artist.innerHTML = by
        cover2.src = img
        Music.setAttribute('src', song)
        Music.addEventListener('canplaythrough', () => {
            Music.play()
        });
    }
    

    Music.addEventListener('play', () => {
        showPlay()
    });

    Music.addEventListener('pause', () => {
        showPause()
    });

    Music.addEventListener('ended', () => {
        if(loop===true) {
            Music.currentTime = 0;
        }
    });


   


if(Music.paused) {
    showPlay()

} else {
    showPause()
}

function playpause() {
    
    if(Music.paused) {
        Music.play()
    } else {
        Music.pause()
    }
}

function toggleL() {
    if(loop) {
        showLoop()
        loop = false
    } else {
        showLoopp()
        console.log('t')

        loop = true
    }
}




const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeElement = document.getElementById('curtime');
const totalTimeElement = document.getElementById('totaltime');

// Update the progress bar based on audio currentTime
Music.addEventListener('timeupdate', () => {
    const currentTime = Music.currentTime;
    const duration = Music.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    currentTimeElement.textContent = formattedTime;

    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    const formattedTotalTime = `${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;
    totalTimeElement.textContent = formattedTotalTime;
});

// Update the audio currentTime when the user clicks on the progress bar
progressContainer.addEventListener('click', (e) => {
    const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
    const containerWidth = progressContainer.clientWidth;
    const clickPercentage = (clickX / containerWidth);
    const newTime = Music.duration * clickPercentage;
    Music.currentTime = newTime;
});

setup()
function setup() {
    showPlay()
    showLoop()

}

const volumeRange = document.getElementById('volumeRange');
const volumeValue = document.getElementById('volumeValue');

// Set initial volume to 100%
Music.volume = 1;
volumeRange.value = 1;
//volumeValue.textContent = '100%';

// Update the volume and volume value when the slider is moved
volumeRange.addEventListener('input', () => {
    const newVolume = volumeRange.value;
    Music.volume = newVolume;
    //volumeValue.textContent = `${Math.round(newVolume * 100)}%`;
});