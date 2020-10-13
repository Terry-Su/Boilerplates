const express = require("express");
const http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
app.use(expressSession({
    secret: `shh, it's a secret!`,
    resave: true,
    saveUninitialized: true
}))

app.get("/", (req, res) => {
  const htmlTexts = fs.readFileSync("./index.html");
  res.setHeader("Content-Type", "text/html");
  res.end(htmlTexts);
});

app.post("/test", (req, res) => {
  if (req.session.count == null) {
    req.session.count = 0
  } else {
    req.session.count++
  }
//   console.log(req.body);
  res.send({data: req.session.count});
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
