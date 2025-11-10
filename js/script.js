//CODIGO DEL SPLASH SCREEN
const splash = document.querySelector('.splash');

const loaded = sessionStorage.getItem("loaded") === "true";
loaded && splash.classList.add("display-none");

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        sessionStorage.setItem("loaded", "true");
        splash.classList.add('display-none');
    }, 2000);
})