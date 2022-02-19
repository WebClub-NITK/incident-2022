var scene = document.getElementById('landing-view-scene');
var parallaxInstance = new Parallax(scene)

// const navbarToggleButton = document.getElementById('toggle-navbar');
// console.log(navbarToggleButton)
function navbarToggleFun() {
    console.log('togglne')
    document.getElementById('navbar').classList.toggle('open');
}