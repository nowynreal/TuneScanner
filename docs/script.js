const urlParams = new URLSearchParams(window.location.search);
const song = urlParams.get('song') || "Bilinmeyen Şarkı";
document.getElementById("song-title").innerText = song;

document.getElementById("spotify").addEventListener("click", () => {
  window.open(`https://open.spotify.com/search/${encodeURIComponent(song)}`, '_blank');
});

document.getElementById("youtube").addEventListener("click", () => {
  window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(song)}`, '_blank');
});

document.getElementById("appleMusic").addEventListener("click", () => {
  window.open(`https://music.apple.com/us/search?term=${encodeURIComponent(song)}`, '_blank');
});
