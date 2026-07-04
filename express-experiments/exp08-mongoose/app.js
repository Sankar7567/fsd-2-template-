const express = require("express");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/college")

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});

const studentSchema = new mongoose.Schema({

    name: String,

    age: Number

});

const Student = mongoose.model("Student", studentSchema);

app.get("/add", async (req, res) => {

    const student = new Student({

        name: "Sankar",

        age: 20

    });

    await student.save();

    res.send("Student Saved");

});

app.listen(3000, () => {

    console.log("Server running");

});