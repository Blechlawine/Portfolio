$("img.preview").click(function() {
    // füllt das Overlay mit dem passendem Bild und dessen Beschreibung, die in alt steht
    let previewDesc = $(this).attr("alt");
    let previewSrc = $(this).attr("src");
    $("#modal-content").attr("src", previewSrc);
    $("#modal").css("display", "block");
    $("#caption").text(previewDesc);
});

// Overlay schließen
$("#close").click(() => {
    $("#modal").css("display", "none");
});
