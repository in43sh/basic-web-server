// Import
const express = require("express");
const app = express();
// const port = 3000;
// app.set('port', process.env.PORT || 3000)
const port = process.env.PORT || 3000;

app.use(express.static('./public'));

// Set Routes
app.get("", (req, res) => {
  res.render("index", { text: "This is EJS" });
});

app.get("/about", (req, res) => {
  res.render("index", { text: "This is EJS" });
});

// let listener = app.listen();
// console.log(`Listening to port number ${listener.address().port}`);
const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
