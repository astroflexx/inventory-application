const pool = require("./pool");

const getAllCategories = async () => {
  const res = await pool.query("SELECT * FROM categories ORDER BY id");
  return res.rows;
};

const getCategoryById = async (categoryId) => {
  const res = await pool.query("SELECT * FROM categories WHERE id = $1", [
    categoryId,
  ]);
  return res.rows[0];
};

const createCategory = async (name, description) => {
  await pool.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2)",
    [name, description]
  );
};

const updateCategory = async (categoryId, name, description) => {
  await pool.query(
    "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
    [name, description, categoryId]
  );
};

const deleteCategory = async (categoryId) => {
  await pool.query("DELETE FROM categories WHERE id = $1", [categoryId]);
};

const getAllItemsByCategoryId = async (categoryId) => {
  const res = await pool.query(
    "SELECT * FROM items WHERE category_id = $1 ORDER BY id",
    [categoryId]
  );
  return res.rows;
};

const getItemById = async (categoryId, itemId) => {
  const res = await pool.query(
    "SELECT * FROM items WHERE id = $1 AND category_id = $2",
    [itemId, categoryId]
  );
  return res.rows[0];
};

const createItem = async (categoryId, name, description, quantity, price) => {
  await pool.query(
    "INSERT INTO items (category_id, name, description, quantity, price) VALUES ($1, $2, $3, $4, $5)",
    [categoryId, name, description, quantity, price]
  );
};

const updateItem = async (
  categoryId,
  itemId,
  name,
  description,
  quantity,
  price
) => {
  await pool.query(
    "UPDATE items SET name = $1, description = $2, quantity = $3, price = $4 WHERE id = $5 AND category_id = $6",
    [name, description, quantity, price, itemId, categoryId]
  );
};

const deleteItem = async (categoryId, itemId) => {
  await pool.query("DELETE FROM items WHERE id = $1 AND category_id = $2", [
    itemId,
    categoryId,
  ]);
};

const checkPassword = async (inputPassword) => {
  const query = "SELECT password FROM passwords LIMIT 1";
  const result = await pool.query(query);

  const storedPassword = result.rows[0].password;

  return inputPassword === storedPassword;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllItemsByCategoryId,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  checkPassword
};
