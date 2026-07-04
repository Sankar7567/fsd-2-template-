const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.render("form");

});

app.post("/submit", (req, res) => {

    const name = req.body.name;

    const age = req.body.age;

    res.send(`Student ${name} age ${age} submitted`);

});

app.listen(3000, () => {

    console.log("Server running");

});