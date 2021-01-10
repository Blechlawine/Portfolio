const highlightOffset = 24 + 24;

function moveHighlight(elementToHighlightID) {
    let clickedPosition = $("#" + elementToHighlightID).position().top;
    let calculatedHighlightPosition = clickedPosition - 8 - 8;
    $("#filterHighlight").css("margin-top", calculatedHighlightPosition + "px");
}

$(".filterButton").click(function() { //arrowfunction funktioniert hier nicht
    let placeToJumpTo = this.id.replace("FilterButton", "Category");
    window.location.href = "#" + placeToJumpTo;
    moveHighlight(this.id);
});

$(window).scroll(() => {
    let currentScrollPos = $(window).scrollTop();
    let closestCategoryID = null;
    let closestDistance = null;
    $(".projectCategory").each(function() {
        let tempTopOffset = $(this).offset().top;
        let currentDistance = Math.abs(tempTopOffset - currentScrollPos);
        if(closestDistance == null || closestDistance > currentDistance) {
            closestDistance = currentDistance;
            closestCategoryID = this.id;
        }
    });
    let closestCategoryButtonID = closestCategoryID.replace("Category", "FilterButton");
    moveHighlight(closestCategoryButtonID);
    // console.log(closestDistance, closestCategoryButtonID);
});
