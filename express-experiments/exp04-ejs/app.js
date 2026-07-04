const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    console.log("EJS Route");

    res.render("home");

});

app.listen(3000, () => {

    console.log("Server running");

});