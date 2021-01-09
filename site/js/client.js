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
let circleOffsetPx = 18 + 8;
let initialCircleOffset = null;

$(window).on("load", () => {
    setTimeout(() => {
        let circleAmount = $(".slideShowCircle").length;
        initialCircleOffset = (circleAmount / 2) * circleOffsetPx - (circleOffsetPx + 3) / 2; // +3 deshalb, weil der aktive Kreis einen 3px größeren radius hat
        $(".slideShowCircle").css("transform", "translateX(" + (initialCircleOffset) + "px)");
        $(".slideShowCircle").eq(currentImageIndex).addClass("activeCircle");

        $(".slideShowCircle").each(function(i) { //arrowfunction funktioniert hier aus irgendeinem grund nicht
            $(this).click(() => {
                setActiveImage(i);
            });
        });
    }, 100);
});

function setActiveImage(imageIndex) {
    $(".slideShowCircle").eq(currentImageIndex).removeClass("activeCircle");
    currentImageIndex = imageIndex;
    $(".projectBackgroundImage").css("transform", "translateX(" + -(offset * currentImageIndex) + "%)");
    $(".slideShowCircle").css("transform", "translateX(" + (initialCircleOffset - (circleOffsetPx * currentImageIndex)) + "px)");
    $(".slideShowCircle").eq(currentImageIndex).addClass("activeCircle");
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
