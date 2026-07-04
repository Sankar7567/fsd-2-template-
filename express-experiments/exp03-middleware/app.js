const express = require("express");

const app = express();

function auth(req, res, next) {

    const password = req.query.password;

    console.log("Entered password:", password);

    if (password === "123") {

        console.log("Authentication successful");

        next();

    } else {

        console.log("Authentication failed");

        res.send("Access Denied");

    }

}

app.get("/", (req, res) => {

    res.send("Public home page");

});

app.get("/dashboard", auth, (req, res) => {

    res.send("Welcome to dashboard");

});

app.listen(3000, () => {

    console.log("Server running");

});