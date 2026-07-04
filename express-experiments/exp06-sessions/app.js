const express = require("express");

const session = require("express-session");

const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(session({

    secret: "mySecretKey",

    resave: false,

    saveUninitialized: true

}));

app.get("/", (req, res) => {

    res.send(`
        <h1>Home Page</h1>

        <a href="/login">Login</a>
    `);

});

app.get("/login", (req, res) => {

    res.send(`

<form action="/login" method="POST">

<input type="text" name="username" placeholder="Enter username">

<br><br>

<button type="submit">

Login

</button>

</form>

`);

});

app.post("/login", (req, res) => {

    const username = req.body.username;

    req.session.user = username;

    console.log(req.session);

    res.send(`

<h1>Login Successful</h1>

<a href="/dashboard">

Go to Dashboard

</a>

`);

});

app.get("/dashboard", (req, res) => {

    if (req.session.user) {

        res.send(`

<h1>

Welcome ${req.session.user}

</h1>

`);

    }

    else {

        res.send("Access Denied. Please login.");

    }

});

app.listen(3000, () => {

    console.log("Server running");

});