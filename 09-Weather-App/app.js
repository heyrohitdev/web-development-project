const express = require("express")           // Input express module
const fetch = require("node-fetch")          // Input fetch module

const app = express()                        // Input app module

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/weather", async (req, res) => {

    const city = req.query.city

    const apiKey = "7d061184c72d5428dc65c8c66c3caba7"           // Weather App API key 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`  // Weather url

    const response = await fetch(url)

    const data = await response.json()

    res.render("index", {weather: data, city: city})

})

app.listen(3000, () => {                      
    console.log("Server started")
})