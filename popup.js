document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ action: "getSong" }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("Mesaj alma hatası:", chrome.runtime.lastError);
            return;
        }
        console.log("Popup Mesajı:", response);
        if (response) {
            document.getElementById("song-title").innerText = response.song || "Şarkı bulunamadı";
        } else {
            console.log("Şarkı bilgisi alınamadı.");
        }
    });
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "songDetected") {
        document.getElementById("song-title").innerText = message.song;
    }
});
