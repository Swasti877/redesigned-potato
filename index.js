const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.post("/api/successfullyPayment", (req, res) => {
  console.log('req >> ', req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
