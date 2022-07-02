
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result'); 

// API URL
const apiurl = 'https.//api.lyrics.ovh';

// listen event in form input
form.addEventListener ('submit', e=> {
    e.preventDefault ();
    searchValue = searchValue.trim ();

    if(!searchValue){
        alert('There is nothing to search!')
    }
    else {
        searchSong (searchValue);
    }
}

)

// Search song
async function searchSong (searchValue){
    const searchResult = await fetch ('$apiUrl')/suggest ${searchValue};
    const data= await searchResult.json ();

    console.log (data);
    showData(data);
}

// Display final result
function showData (data){
    result.innerHTML =
    <ul class="song list">
    ${data.data.map}(song =>);
    <li>
        <div>
            <img src="${song.artist.picture"></img>
            <strong>${song.artist.name}</strong>
        </div>
        <span data-artist="${song.artist.name"> data-song-title="${song.title}"</span>
        .join (``);
    </li>
    </ul>
    
}

// Event listener for get lyrics button
result.addEventListener ('click', e => {
    
    const clickElement = e.target;

    // checking clicking element is button or not
    if(clickElement.tagName == 'SPAN'){
        const artist = clickElement.getAttribute ('data.artist');
        const songTitle = clickElement.getAttribute ('data.songtitle');
        
        getLyrics (artist, songTitle)

    }
}
)

// get Lyrics for song
async function getLyrics (artist, songTitle)
    const res =await fetch (`#{apiURL}/v1${artist}${songTitle}`);

    const data= await.res.json ();

    const lyrics= data.lyrics.replace 

    result.innerHTML =
<div class="full-lyrics">
<h2>${arist} - ${songTitle}</h2>
<p>${lyrics}</p>
</div>