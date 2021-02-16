function openSlideMenu() {
    document.getElementById("menu").style.width="250px"
    document.getElementById("content").style.marginLeft = "250px"
    document.getElementById("burgermenu").style.visibility = "hidden"
}

function closeSlideMenu() {
    document.getElementById("menu").style.width="0"
    document.getElementById("content").style.marginLeft = "0"
    document.getElementById("burgermenu").style.visibility = "visible"
}