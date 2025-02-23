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
      const song = (response && response.song) || "Şarkı bulunamadı";
      document.getElementById("song-title").innerText = song;
      generateQRCode(song);
    });
  }
  
  function generateQRCode(song) {
    const baseUrl = "https://www.mysite.com";
    const urlWithParam = `${baseUrl}/?song=${encodeURIComponent(song)}`;
  
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
  
    new QRCode(qrContainer, {
      text: urlWithParam,
      width: 180,
      height: 180,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
  