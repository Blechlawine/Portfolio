// läd die Labels im menü, sobald die Seite geladen hat
$(window).on("load", () => {
    setTimeout(() => {
        $("#siteName").text(siteName);
        $("#projectDude").text(projectDude);
    }, 100);
});
