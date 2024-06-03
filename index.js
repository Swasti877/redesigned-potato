const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.get("/api/successfullyPayment", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
