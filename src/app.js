const express = require("express");
const indexRoutes = require("./routes/indexRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRoutes);
app.use("/categories", categoryRoutes);
app.use("/categories/:categoryId/items", itemRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
