// // app.use(express.static(publicPath));
// // app.use('/static', express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, 'public')));


// app.listen(port, () => {
//     console.log('localhost' + port);
// });



const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
