//open dropdown menu
function toggleNav() {
    var dropdown = document.getElementById("mySidenav");
    dropdown.classList.toggle('show');

    if (dropdown.classList.contains('show')) {
        // Set height for fullscreen
        dropdown.style.height = "100%";
    } else {
        // Reset the height when closing
        dropdown.style.height = "0";
    }
}

function closeNav() {
    var dropdown = document.getElementById("mySidenav");
    dropdown.classList.remove('show');
    dropdown.style.height = "0";
}
// when refreshed it goes back to the top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}