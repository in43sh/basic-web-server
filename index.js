// import
const express = require("express");
const app = express();
// const port = 3000;
// app.set('port', process.env.PORT || 3000)
const port = process.env.PORT || 3000;


// set routes
// send static file as response
app.get("/", (req, res) => {
  // res.render("", { text: "This is EJS" });
  // res.type('text/html');
  res.sendFile('./public/views/index.html', { root: __dirname });
});

// send plain text response
app.get("/about", (req, res) => {
  // res.render("index", { text: "This is EJS" });
  // res.type('text/plain');
  res.sendFile('./public/views/about.html', { root: __dirname });
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
