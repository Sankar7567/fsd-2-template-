const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server working");
});

app.post("/student", (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    res.send(`received student ${name} age ${age}`);
});

app.listen(3000, () => {
    console.log("Server working on port 3000");
});