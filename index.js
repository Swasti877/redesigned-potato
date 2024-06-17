const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 5000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/api/successfullyPayment", (req, res) => {
  console.log('req >> ', req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
