$("img.preview").click(function() {
    let previewDesc = $(this).attr("alt");
    let previewSrc = $(this).attr("src");
    $("#modal-content").attr("src", previewSrc);
    $("#modal").css("display", "block");
    $("#caption").text(previewDesc);
});

$("#close").click(() => {
    $("#modal").css("display", "none");
});
