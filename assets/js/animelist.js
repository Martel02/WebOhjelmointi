const table = document.getElementById("joo")
const linkki = document.getElementById("linkki");

function joo() {
    const socials = {github:"https://github.com/Martel02", discord:"cpu_cartel", anilist:"https://anilist.co/user/Cartel/"};
    linkki.innerHTML = socials.anilist;
}

function insertIntoTable() {
    for (let i = 1; i < 21; i++) {
        const array = ["placeholdeer", "#1", "Manga messias","#1","Gon","#1","This Gorilla Will Die In 1 Day","#1","HUNTER×HUNTER","#1","Among Us","#1","Housekino","#1","Horimiya","#1","Dungeon Meshi","#1","Witch Hat Atelier","#1","NEW GAME!"];
        const cell = document.getElementById(i);
        cell.innerHTML = array[i];
    }
}

window.onload = function() {
    insertIntoTable()

}
