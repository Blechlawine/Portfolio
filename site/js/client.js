$("#alex").click(() => {
    window.location.href = "alex/projects.html";
});

$("#korbi").click(() => {
    window.location.href = "korbi/projects.html";
});

$("#marc").click(() => {
    window.location.href = "marc/projects.html";
});

// Slideshow
let currentImageIndex = 0;
let offset = 100;

function setActiveImage(imageIndex) {
    currentImageIndex = imageIndex;
    // let images = document.getElementsByClassName("projectBackgroundImage");
    $(".projectBackgroundImage").css("transform", "translateX(" + -(offset * currentImageIndex) + "%)");
    // for (let x = 0; x < images.length; x++) {
    //     $(images[x]).css("transform", "translateX(" + -(offset * currentImageIndex) + "%)");
    // }
}

function nextImage() {
    if (currentImageIndex == maxImageIndex) {
        setActiveImage(0);
    } else {
        setActiveImage(currentImageIndex + 1);
    }
}

function prevImage() {
    if (currentImageIndex == 0) {
        setActiveImage(maxImageIndex);
    } else {
        setActiveImage(currentImageIndex - 1);
    }
}

$("#slideshowRightArrow").click(() => {
    nextImage();
});

$("#slideshowLeftArrow").click(() => {
    prevImage();
});


// let currentImageIndex = 0;
// for (let currentImage in backgroundImages) {
//     $(".backgroundImages").addClass("moveLeft");
//     currentImageIndex++;
// }
