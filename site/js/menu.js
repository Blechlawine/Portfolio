// lädt das menü nach, damit wir den Menü code nicht 100 mal schreiben müssen, falls man die Seite irgendwann hostet, sollte das mittels Serverside rendering gemacht werden 
$("nav").load(partialsPath + "menu.html");

// lädt die Labels und Icons im menü, sobald die Seite geladen hat
$(window).on("load", () => {
    setTimeout(() => {
        $("#siteName").text(siteName);
        $("#projectDude").text(projectDude);
        $("#backMenuBtn").attr("src", imgPath + "icons/arrow-left.svg");
        $("#homeMenuBtn").attr("src", imgPath + "icons/home-white-24dp.svg");
    }, 100);
});
