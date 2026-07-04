const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("welcome to my express server!");
});

app.get("/about", (req, res) => {
    res.send("welcome to my express about page");
});

app.get("/contact", (req, res) => {
    res.send("contact us as example123@gmail.com");
});

app.get("/user/:name", (req, res) => {

    const userName = req.params.name;

    res.send(`Hello, ${userName}! Welcome to your profile.`);

});

app.get("/product/:category/:item", (req, res) => {

    const category = req.params.category;

    const item = req.params.item;

    res.send(`you are looking at: ${item} in category: ${category}`);

});

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});