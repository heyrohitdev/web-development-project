const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/coachingDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const contactSchema = new mongoose.Schema({
    name: String,
    class: String,
    dob: String,
    number: String,
    email: String,
    address: String
});

// Model
const Contact = mongoose.model("Contact", contactSchema);

// 👉 Home Page (index.pug)
app.get("/", (req, res) => {
    res.render("index");
});

// 👉 Form Page
app.get("/form", (req, res) => {
    res.render("form");
});

// 👉 Save Data
app.post("/contact", (req, res) => {
    let data = new Contact(req.body);

    data.save()
    .then(() => {
        res.send("Data Saved Successfully");
    })
    .catch(() => {
        res.send("Error Saving Data");
    });
});

// Server
app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});