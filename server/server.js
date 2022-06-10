const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database");
const bp = require("body-parser");
const port = 3000;

app.use(cors());

app.get("/profile/:id", (req, res) => {
  const personId = req.params.id;
  db.get(`SELECT * FROM person WHERE id = ${personId}`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  }
)})

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
