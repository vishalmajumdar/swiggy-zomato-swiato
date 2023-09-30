//  Add environment variables for security of the application
require("dotenv").config();
// Add Express
const express = require("express");
const mongoose = require("mongoose");

// Get env variables
const PORT = process.env.PORT || 5000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Initialize Express
const app = express();

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.n9hlsdr.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB : ", error);
  });

// Create GET request
app.get("/", (req, res) => {
  // Sending an HTML response
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swiato - Swiggy + Zomato (API)</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="${FRONTEND_URL}favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="${FRONTEND_URL}favicon-16x16.png"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playball&family=Playfair+Display&family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      span {
        font-family: "Playfair Display";
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Playball", serif;
      }
      a,
      p {
        font-family: "Poppins", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="flex flex-col justify-center items-center h-screen text-center">
      <h1 class="text-[#aa0055] text-6xl">
        Swiato <br />
        <span class="text-4xl text-[#e3e3e3] font-bold">Swiggy + Zomato</span>
      </h1>
      <span class="mt-4 font-bold"
        >This is your backend (API). Visit the frontend.</span
      >
      <br />
      <a href="${FRONTEND_URL}" class="text-white"
        ><button class="bg-[#aa0055] rounded-lg py-2 px-4 font-bold">
          Click to Visit
        </button></a
      >
    </div>
  </body>
</html>
  `);
});

// Initialize server
app.listen(PORT, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
