function onPageLoad() {
    let videoTitle = document.title;
    console.log("Video Başlığı:", videoTitle);

    // " - YouTube" kısmını başlığın sonundan temizle
    videoTitle = videoTitle.replace(/\s*-\s*YouTube$/, "").trim();

    const songInfo = {
        song: videoTitle
    };

    console.log("Şarkı Bilgisi:", songInfo);
    chrome.runtime.sendMessage({ action: "updateSong", song: songInfo.song });
}

let observer = new MutationObserver(() => {
    onPageLoad();
});

observer.observe(document.querySelector("title"), { childList: true });

window.onload = onPageLoad;
