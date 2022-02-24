var scene = document.getElementById('landing-view-scene');
var parallaxInstance = new Parallax(scene);

var scene_1 = document.getElementById('theme-image');
var parallaxInstance_1 = new Parallax(scene_1);

ScrollOut();

function navbarToggleFun() {
    document.getElementById('navbar').classList.toggle('open');
}