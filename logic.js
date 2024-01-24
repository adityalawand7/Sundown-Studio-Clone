const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixedImage = document.querySelector("#fixed-image")
var elemC = document.querySelector("#elem-container")

elemC.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block"
})
elemC.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none"
})

// var elem1 = document.getElementById("elem1")
// elem1.addEventListener("mouseenter", () => {
//     var imageUrl = elem1.getAttribute("data-image")
//     fixedImage.style.backgroundImage = `url(${imageUrl})`
// })
// elem1.addEventListener("mouseleave", () => {
//     var imageUrl = elem1.getAttribute("data-image")
//     fixedImage.style.background = "transparent"
// })

var elems = document.querySelectorAll(".elem")
elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        fixedImage.style.zIndex = "99"
        var imageUrl = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${imageUrl})`
    })
    // e.addEventListener("mouseleave", () => {
    //     var imageUrl = elem1.getAttribute("data-image")
    //     fixedImage.style.background = "transparent"
    // })
})