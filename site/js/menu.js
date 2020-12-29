// läd die Labels im menü, sobald die Seite geladen hat
$(window).on("load", () => {
    setTimeout(() => {
        $("#siteName").text(siteName);
        $("#projectDude").text(projectDude);
        $("#backMenuBtn").attr("src", imgPath + "icons/arrow_back-white-24dp.svg");
        $("#homeMenuBtn").attr("src", imgPath + "icons/home-white-24dp.svg");
    }, 100);
});
