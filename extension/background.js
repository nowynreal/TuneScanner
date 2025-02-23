let currentSong = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Gelen Mesaj:", message);
    if (message.action === "updateSong") {
        currentSong = message.song;
        sendResponse({ success: true });
    } else if (message.action === "getSong") {
        sendResponse({ song: currentSong });
    }
});
