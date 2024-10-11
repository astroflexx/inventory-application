const {
  getAllItemsByCategoryId,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../db/queries");

const getItemsInCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const items = await getAllItemsByCategoryId(categoryId);
  res.render("items", { items, categoryId });
};

const getNewItemForm = (req, res) => {
  res.render("new-item");
};

const postNewItem = async (req, res) => {
  const categoryId = req.params.categoryId;
  const { name, description, quantity, price } = req.body;
  const itemId = await createItem(
    categoryId,
    name,
    description,
    quantity,
    price
  );
  res.redirect(`/categories/${categoryId}/items/${itemId}`);
};

const getItem = async (req, res) => {
  const categoryId = req.params.categoryId;
  const itemId = req.params.itemId;
  const item = await getItemById(categoryId, itemId);
  res.render("item", { item, categoryId });
};

const getUpdateItemForm = async (req, res) => {
  const categoryId = req.params.categoryId;
  const itemId = req.params.itemId;
  const item = await getItemById(categoryId, itemId);
  res.render("update-item", { item, categoryId });
};

const patchUpdateItem = async (req, res) => {
  const categoryId = req.params.categoryId;
  const itemId = req.params.itemId;
  const { name, description, quantity, price } = req.body;
  await updateItem(categoryId, itemId, name, description, quantity, price);
  res.redirect(`/categories/${categoryId}/items/${itemId}`);
};

const deleteItem = async (req, res) => {
  const categoryId = req.params.categoryId;
  const itemId = req.params.itemId;
  await deleteItem(categoryId, itemId);
  res.redirect(`/categories/${categoryId}/items`);
};

module.exports = {
  getItemsInCategory,
  getNewItemForm,
  postNewItem,
  getItem,
  getUpdateItemForm,
  patchUpdateItem,
  deleteItem,
};
