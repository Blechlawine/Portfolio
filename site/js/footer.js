$("footer").load(partialsPath + "footer.html");

$(window).on("load", () => {
    setTimeout(() => {
        let maxPhotoProjects = 2;
        let maxVideoProjects = 0;
        let currentProjectID = window.location.href.split("/")[4];
        let previousProjectID = currentProjectID.substring(0, 2) + (Number(currentProjectID.split("-")[1]) - 1);
        let nextProjectID = currentProjectID.substring(0, 2) + (Number(currentProjectID.split("-")[1]) + 1);
        console.log(nextProjectID);
        $("#prevProjectButton").click(() => {

        });
        $("#nextProjectButton").click(() => {

        });
    }, 100);
});
