function toggleNav() {
    var dropdown = document.getElementById("mySidenav");
    var isOpen = dropdown.classList.toggle('show');

    if (isOpen) {
        // Set the height to fullscreen when opening
        dropdown.style.height = "100%";
        dropdown.style.zIndex = "2"
    } else {
        // Reset the height when closing
        dropdown.style.height = "0";
        dropdown.style.zIndex = "0"
    }
}

function closeNav() {
    var dropdown = document.getElementById("mySidenav");
    dropdown.classList.remove('show');
    dropdown.style.height = "0";
    dropdown.style.zIndex = "0"
}
