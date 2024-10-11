const express = require("express");
const db = require("../db/queries");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}!`);
});
