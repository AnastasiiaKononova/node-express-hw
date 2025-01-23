const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/index.html", (req, res) => {
  fs.readFile("./dist/index.html", "utf-8")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send("Error reading HTML file");
    });
});

// app.get('/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'style.css'));
// });

// app.get('/dist.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'dist.js'));
// });

module.exports = app;
