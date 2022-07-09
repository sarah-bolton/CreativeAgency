// PSEUDOCODE

// the hamburger menu icon appears in media query at 1050px
// when the user clicks on the hamburger menu icon the slide out navigation will appear
// if the user wants to exit the slive out nav they will then click the 'x' and it will disappear

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const sideNav = document.querySelector(".sideNav");
const closeBtn= document.querySelector(".closeBtn");

hamburgerMenu.addEventListener('click', function(event) {
    event.preventDefault()
    hamburgerMenu.classList.toggle("active");
    sideNav.classList.toggle("active");
    console.log("hi")
})

closeBtn.addEventListener('click', function(event) {
    event.preventDefault()
    hamburgerMenu.classList.remove("active");
    sideNav.classList.remove("active");
    console.log("sup")
})

// help from bootcamp notes,
// https://www.codinglabweb.com/2021/04/responsive-side-navigation-bar-in-html.html
// &
// https://www.w3schools.com/howto/howto_js_sidenav.asp
