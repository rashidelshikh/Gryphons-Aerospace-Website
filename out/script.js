var navText = document.getElementById("nav-menu-text");
var burgerT = document.getElementById("burger-t");
var burgerB = document.getElementById("burger-b");


toggleMenu = () => {
    console.log(navText);
    console.log(burgerT);
    console.log(burgerB);

    // Change nav menu's text (Desktop + Tablet)
    if (navText.textContent === "MENU") {
        navText.textContent = "CLOSE";
        // Animate burger menu to cross
        burgerT.style.transform = "rotate(45deg) translate(-2px, 4px)";
        burgerB.style.transform = "rotate(-45deg) translate(1px, -6px)";
    } else {
        navText.textContent = "MENU";
        // Change burger menu back to default
        burgerT.style.transform = "rotate(0deg) translate(0px, 0px)";
        burgerB.style.transform = "rotate(-0deg) translate(0px, 0px)";
    }


}