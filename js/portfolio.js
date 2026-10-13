(function () {
    "use strict";

    var menuButton = document.querySelector(".menu-button");
    var menu = document.querySelector("#site-navigation");
    var copyrightYear = document.querySelector("#copyright-year");

    if (copyrightYear) {
        copyrightYear.textContent = String(new Date().getFullYear());
    }

    if (!menuButton || !menu) {
        return;
    }

    function setMenuOpen(isOpen) {
        menu.classList.toggle("is-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

        if (isOpen) {
            var firstLink = menu.querySelector("a");
            if (firstLink) {
                firstLink.focus();
            }
        } else if (document.activeElement !== menuButton) {
            menuButton.focus();
        }
    }

    menuButton.addEventListener("click", function () {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
        }
    });

    document.addEventListener("click", function (event) {
        if (menuButton.getAttribute("aria-expanded") === "true" &&
            !menu.contains(event.target) &&
            !menuButton.contains(event.target)) {
            setMenuOpen(false);
        }
    });
}());
