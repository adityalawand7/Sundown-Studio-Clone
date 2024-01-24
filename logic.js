const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixedImage = document.querySelector("#fixed-image")
var elemC = document.querySelector("#elem-container")
elemC.addEventListener("mouseenter", ()=>{
    fixedImage.style.display = "block"
})
elemC.addEventListener("mouseleave", ()=>{
    fixedImage.style.display = "none"
})