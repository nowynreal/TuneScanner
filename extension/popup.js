document.addEventListener("DOMContentLoaded", () => {
    updateSongInfo();
    setInterval(updateSongInfo, 3000);
  });
  
  function updateSongInfo() {
    chrome.runtime.sendMessage({ action: "getSong" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Mesaj alma hatası:", chrome.runtime.lastError);
        return;
      }
      const song = (response && response.song) || "Waiting for host to play a song...";
      document.getElementById("song-title").innerText = song;
      generateQRCode(song);
    });
  }
  
  function generateQRCode(song) {
    const baseUrl = "https://nowynreal.github.io/TuneScanner";
    const urlWithParam = `${baseUrl}/?song=${encodeURIComponent(song)}`;
  
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; 
  
    new QRCode(qrContainer, {
      text: urlWithParam,
      width: 280,
      height: 280,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
  