// Import required modules
const express = require("express")

// Create express app
const app = express()

// Set view engine as Pug
app.set("view engine", "pug")

// Serve static files (CSS, images)
app.use(express.static("public"))

// Home route (default page)
app.get("/", (req, res) => {
  res.render("index")
})

// Weather route (handles city search)
app.get("/weather", async (req, res) => {

  // Get city from query (user input)
  const city = req.query.city

  // Your OpenWeather API key
  const apiKey = "7d061184c72d5428dc65c8c66c3caba7"

  // API URL (fetch weather data)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  // Fetch data from API
  const response = await fetch(url)

  // Convert response to JSON
  const data = await response.json()

  // Render index.pug and send data
  res.render("index", { weather: data, city: city })
})

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000")
})
