let currentSong = "";
let currentArtist = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Gelen Mesaj:", message);
    if (message.action === "updateSong") {
        currentSong = message.song;
        currentArtist = message.artist;
        sendResponse({ song: currentSong, artist: currentArtist });
    } else if (message.action === "getSong") {
        sendResponse({ song: currentSong, artist: currentArtist });
    }
});
