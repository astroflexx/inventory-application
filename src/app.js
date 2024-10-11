const express = require("express");
const db = require("../db/queries");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}!`);
});
