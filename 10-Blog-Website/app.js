const express = require("express");
const path = require("path");

const app = express();

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Dummy blog data
const posts = [
    {
        id: 1,
        title: "How I Built My First Weather App",
        date: "March 2026",
        short: "I explain step-by-step how I created a weather app.",
        content: `
Step 1: First I installed Node.js
Step 2: Then I installed Express
Step 3: I used OpenWeather API
Step 4: I created UI using Pug

Final Result:
Weather app successfully working 🎉
`
    },
    {
        id: 2,
        title: "What I Learned This Week",
        date: "April 2026",
        short: "I learned Node.js and server structure.",
        content: "This week I learned about backend, routing, API handling..."
    }
];

// Home route
app.get("/", (req, res) => {
    res.render("index", { posts });
});

// Single post route
app.get("/post/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("post", { post });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});