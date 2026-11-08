// SELECT HTML ELEMENTS

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


// MOBILE MENU OPEN AND CLOSE

menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// CLOSE MENU AFTER CLICKING A LINK

mainNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();