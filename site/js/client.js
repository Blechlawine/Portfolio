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
    $(".projectBackgroundImage").css("transform", "translateX(" + -(offset * currentImageIndex) + "%)");
    // let images = document.getElementsByClassName("projectBackgroundImage");
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
