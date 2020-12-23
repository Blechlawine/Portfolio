$(document).ready(() => {
    $("#siteName").text(siteName);
    $("#projectDude").text(projectDude);
});

$("#about").click(() => {
    console.log("Clicked on About Me");
    if(projectDude == "Alexander Baur") {
        window.location.href = "alex/aboutme.html";
    }
    if(projectDude == "Marc Zinser") {
        window.location.href = "marc/aboutme.html";
    }
    if(projectDude == "Korbinian Maag") {
        window.location.href = "korbi/aboutme.html";
    }
});
