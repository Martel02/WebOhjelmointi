const seconds = document.getElementById("loading");
const load = document.getElementById("load");

setInterval(countDown, 1000);

let i = 3;

function countDown() {
    if(i > 0) {
        seconds.innerHTML = i;
        i--;
        loadPage();
    } else {
        clearInterval();
        seconds.remove();
        load.remove();
    }
}

function loadPage() {
    
}