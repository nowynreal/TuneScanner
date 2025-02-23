function getVideoTitle() {
    let title = document.title || "";
    title = title.replace(/\s*-\s*YouTube$/, "").trim(); // " - YouTube" kısmını temizle
    return title;
}

function sendSongUpdate() {
    let songTitle = getVideoTitle();
    console.log("Yeni Şarkı Bilgisi:", songTitle);

    chrome.runtime.sendMessage({ action: "updateSong", song: songTitle });
}

window.onload = sendSongUpdate;

let observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        sendSongUpdate();
    });
});

observer.observe(document.body, { childList: true, subtree: true });

setInterval(sendSongUpdate, 3000);
