const express = require("express");
const app = express();

app.use(express.json());

app.post("/testing1", (req, res) => {
  res.send(req.body);
});



app.listen(3300);
