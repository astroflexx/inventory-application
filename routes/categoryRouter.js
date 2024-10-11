const AsyncRouter = require("express-async-router").AsyncRouter;
const {
  getCategories,
  getNewCategoryForm,
  postNewCategory,
  getCategory,
  getUpdateCategoryForm,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const categoryRouter = AsyncRouter();

categoryRouter.get("/", getCategories);

categoryRouter.get("/new", getNewCategoryForm);

categoryRouter.post("/new", postNewCategory);

categoryRouter.get("/:categoryId", getCategory);

categoryRouter.get("/:categoryId/update", getUpdateCategoryForm);

categoryRouter.post("/:categoryId/update", updateCategory);

categoryRouter.post("/:categoryId", deleteCategory);

module.exports = categoryRouter;
