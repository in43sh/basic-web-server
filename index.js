// Import
const express = require("express");
const app = express();
// const port = 3000;
// app.set('port', process.env.PORT || 3000)
const port = process.env.PORT || 3000;

app.use(express.static('./public/views'));

// Set Routes
// send static file as response
app.get("/", (req, res) => {
  res.render("", { text: "This is EJS" });
  // res.type('text/html');
  // res.sendFile('/index.html');
});

// send plain text response
app.get("/about", (req, res) => {
  // res.render("index", { text: "This is EJS" });
  res.type('text/plain');
  res.send('About page');
});

// define 404 handler
app.use((req,res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

// let listener = app.listen();
// console.log(`Listening to port number ${listener.address().port}`);
const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
