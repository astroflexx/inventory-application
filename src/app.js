const express = require("express");
const indexRouter = require("../routes/indexRouter");
const categoryRouter = require("../routes/categoryRouter");
const itemRouter = require("../routes/itemRouter");
const errorHandler = require("../middlewares/errorHandler");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRouter);
app.use("/categories", categoryRouter);
app.use("/categories", itemRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
