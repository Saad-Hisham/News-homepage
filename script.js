const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
openIcon.onclick = function () {
    document.querySelector("nav.nav-bar ul").classList.add("open")
    document.querySelector("nav.nav-bar ul").classList.remove("close")
    openIcon.style.display = "none"
    closeIcon.style.display = "inline"
}

closeIcon.onclick = function () {
    document.querySelector("nav.nav-bar ul").classList.add("close")
    document.querySelector("nav.nav-bar ul").classList.remove("open")
    openIcon.style.display = "inline"
    closeIcon.style.display = "none"
}



function isDesktopScreen() {
    var screenWidth = window.innerWidth;
    return screenWidth >= 992; // Adjust the threshold as needed
}

function handleResize() {
    if (isDesktopScreen()) {
        document.querySelector("nav.nav-bar ul").classList.remove("open")
        document.querySelector("nav.nav-bar ul").classList.remove("close")
        openIcon.style.display = "none"
        closeIcon.style.display = "none"
    } else {
        document.querySelector("nav.nav-bar ul").classList.add("close")
        openIcon.style.display = "block"
    }
}

// Bind the handleResize function to the window's resize event
window.addEventListener('resize', handleResize);

// Initial check on page load
handleResize();