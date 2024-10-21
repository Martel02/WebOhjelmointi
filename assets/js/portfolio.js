const seconds = document.getElementById("loading");
const load = document.getElementById("load");
const timer = setInterval(countDown, 1000);
let i = 3;

function countDown() {
    switch (i) {
        case 0:
            clearInterval(timer);
            seconds.remove();
            load.remove();
            loadPage();     
            break;
        case 1:
            seconds.innerHTML = i;
            i--;          
            break;
        case 2:
            seconds.innerHTML = i;
            i--;          
            break;
        case 3:
            seconds.innerHTML = i;
            i--;   
            break;
    } 
}

function loadPage() {
    const parsehtml = new DOMParser().parseFromString('<iframe width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=vhSt_cqFf9M1cqk3&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>', "text/html");
    document.body.appendChild(parsehtml.body.lastChild);
}