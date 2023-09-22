var Music = document.getElementById('Paudio')

var songData;

// URL to your external JSON file
var jsonUrl;

// Function to play a song

function itemsAdd(url, element) {
    jsonUrl = url
    // Fetch the JSON data and create elements
    fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
    songData = data; // Assign the loaded data to the global variable

    // Get a reference to the container element where you want to append the songs
    var container = document.getElementById(element);

    // Loop through the songs in the JSON data
    for (var songKey in songData) {
    if (songData.hasOwnProperty(songKey) && songKey.startsWith("SONG")) {
        var song = songData[songKey];

        // Create a new div element for each song
        var songDiv = document.createElement('div');
        //songDiv.className = 'song'; // Assign a class
        songDiv.classList.add('item')
        songDiv.innerHTML = `
            <img src="${song.COVER}" alt="${song.TITLE} Cover" class="coverSmall">
            <p class="smallTXT">${song.TITLE}</p>
            <p class="art">${song.BY}</p>
            <i class="material-icons playSmall">play_arrow</i>

        `;
        
        // Assign an onclick attribute that calls the play function with song information
        songDiv.onclick = function () {
            play(song.path, song.TITLE, song.BY, song.COVER); // Pass the song info to the play function
        };

        // Append the song div to the container
        container.appendChild(songDiv);
    }
    }
    })
    .catch(error => console.error('Error loading JSON:', error));

}