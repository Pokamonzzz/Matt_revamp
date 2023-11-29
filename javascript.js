function toggleNav() {
    var dropdown = document.getElementById("mySidenav");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}
function closeNav() {
    var dropdown = document.getElementById("mySidenav");
    dropdown.style.display = "none";
}
window.onclick = function (event) {
    if (!event.target.matches('.dpmenu') && !event.target.closest('.menu')) {
        var dropdown = document.getElementById("mySidenav");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}