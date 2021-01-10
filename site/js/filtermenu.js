const highlightOffset = 24 + 24; // Das ist der Abstand von Mitte zu Mitte zwischen 2 Icons im Filtermenü: 24px Abstand zwischen Ober- und Unterkante der 2 Icons im Filtermenü + 24px Höhe der Icons

function moveHighlight(elementToHighlightID) {
    let clickedPosition = $("#" + elementToHighlightID).position().top; // holt sich die vertikale Position des übergebenen Icons
    let calculatedHighlightPosition = clickedPosition - 8 - 8; // berechnet die vertikale Position des Highlights
    $("#filterHighlight").css("margin-top", calculatedHighlightPosition + "px"); // verschiebt das Highlight um den berechneten Abstand
}

$(".filterButton").click(function() { //arrowfunction funktioniert hier nicht, weil "this" auf den angeklickten Filterbutton zeigen muss
    let placeToJumpTo = this.id.replace("FilterButton", "Category"); //Die ID der Kategorie, die zum angeklickten Filterbutton gehört
    window.location.href = "#" + placeToJumpTo;
    moveHighlight(this.id);
});

$(window).scroll(() => {
    // Sucht nach der Kategorie, die am nächsten bei der Oberkante der Seite liegt, um das Highlight im Filtermenü an die passende Stelle zu schieben
    let currentScrollPos = $(window).scrollTop();
    let closestCategoryID = null;
    let closestDistance = null;
    $(".projectCategory").each(function() {
        let tempTopOffset = $(this).offset().top;
        let currentDistance = Math.abs(tempTopOffset - currentScrollPos); // Abstand der Kategorie zur Seitenoberkante
        if(closestDistance == null || closestDistance > currentDistance) { // vergleicht den Abstand zum bisher kürzesten
            // und aktualisiert den bisher kürzesten, falls der aktuellen kürzer ist
            closestDistance = currentDistance;
            closestCategoryID = this.id;
        }
    });
    // und wieder das Hightlight verschieben
    let closestCategoryButtonID = closestCategoryID.replace("Category", "FilterButton");
    moveHighlight(closestCategoryButtonID);
});
