function expand(i) {
    var preview = document.getElementById(i);
    var modal = document.getElementById('modal');
    var caption = document.getElementById('caption');

    $('#modal-content').attr("src", preview.src);
    modal.style.display = "block";
    caption.innerHTML = preview.alt;
}

$("img.preview").click(function() {
    let previewDesc = $(this).attr("alt");
    let previewSrc = $(this).attr("src");
    $("#modal-content").attr("src", previewSrc);
    $("#modal").css("display", "block");
    $("#caption").text(previewDesc);
});

document.getElementById('close').addEventListener("click", close);

function close() {
    $("#modal").css("display", "none");
}
