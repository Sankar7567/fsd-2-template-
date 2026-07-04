const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/college")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log(err);
});

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {

    const student = new Student({
        name: req.body.name,
        age: req.body.age
    });

    await student.save();

    res.send(student);

});

app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.send(students);

});

app.put("/students/:id", async (req, res) => {

    const id = req.params.id;

    await Student.findByIdAndUpdate(
        id,
        {
            age: req.body.age
        }
    );

    res.send("Student updated");

});

app.delete("/students/:id", async (req, res) => {

    const id = req.params.id;

    await Student.findByIdAndDelete(id);

    res.send("Student deleted");

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});