const express = require("express");
const path = require("path");
const morgan = require("morgan");

let app = express();
let port = 80;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Portfolio listening on port ${port}`);
});
