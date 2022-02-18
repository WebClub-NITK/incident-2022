var scene = document.getElementById('landing-view-scene');
var parallaxInstance = new Parallax(scene);

// var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    if(hamburger.classList.length==1){
        hamburger.classList.add("selected");
    }else{
        hamburger.classList.remove("selected");
    }
})