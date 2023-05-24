let video = document.getElementById('miVideo');
let opcions = document.getElementById('opcions');
let projectes = document.getElementById('projectesVideo');
let final = document.getElementById('final');

setTimeout(() => {
    video.play();
}, 1000);

video.ontimeupdate = function() {
    if (video.currentTime >= 8 && video.currentTime <= 15) {
        opcions.style.display = "flex";
        projectes.style.display = "none";
        final.style.display = "none";
    } else if (video.currentTime >= 39 && video.currentTime <= 45) {
        projectes.style.display = "flex";
        opcions.style.display = "none";
        final.style.display = "none";
    } else if ((video.currentTime >= 57 && video.currentTime <= 63) || (video.currentTime >= 75 && video.currentTime <= 81)) {
        final.style.display = "flex";
        projectes.style.display = "none";
        opcions.style.display = "none";
    } else {
        opcions.style.display = "none";
        projectes.style.display = "none";
        final.style.display = "none";
    }
};

window.saltar = function(segons) {
    video.currentTime = segons;
}
