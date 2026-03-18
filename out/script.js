var navText = document.getElementById("nav-menu-text");

toggleMenu = () => {
    console.log(navText);
    if(navText.textContent === "MENU") {
        navText.textContent = "CLOSE";
    } else {
        navText.textContent = "MENU";
    }
}