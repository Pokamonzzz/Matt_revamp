function toggleNav() {
    var dropdown = document.getElementById("mySidenav");
    var isOpen = dropdown.classList.toggle('menu');

    if (isOpen) {
        // Set the height to fullscreen when opening
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
