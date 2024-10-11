const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../db/queries");

const getCategories = async (req, res) => {
  const categories = await getAllCategories();
  res.render("categories", { categories });
};

const getNewCategoryForm = (req, res) => {
  res.render("new-category");
};

const postNewCategory = async (req, res) => {
  const { name, description } = req.body;
  const categoryId = await createCategory(name, description);
  res.redirect(`/category/${categoryId}`);
};

const getCategory = async (req, res) => {
  const { categoryId } = req.params;
  const category = await getCategoryById(categoryId);
  res.render("category", { category });
};

const getUpdateCategoryForm = async (req, res) => {
  const { categoryId } = req.params;
  const category = await getCategoryById(categoryId);
  res.render("update-category", { category });
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name, description } = req.body;
  await updateCategory(categoryId, name, description);
  res.redirect(`/categories/${categoryId}`);
};

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  await deleteCategory(categoryId);
  res.redirect("/categories");
};

module.exports = {
  getCategories,
  getNewCategoryForm,
  postNewCategory,
  getCategory,
  getUpdateCategoryForm,
  updateCategory,
  deleteCategory,
};
