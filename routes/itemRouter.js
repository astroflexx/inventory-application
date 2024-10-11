const AsyncRouter = require("express-async-router").AsyncRouter;
const {
  getItemsInCategory,
  getNewItemForm,
  postNewItem,
  getItem,
  getUpdateItemForm,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const itemRouter = AsyncRouter();

itemRouter.get("/:categoryId/items", getItemsInCategory);

itemRouter.get("/:categoryId/items/new", getNewItemForm);

itemRouter.post("/:categoryId/items/new", postNewItem);

itemRouter.get("/:categoryId/items/:itemId", getItem);

itemRouter.get("/:categoryId/items/:itemId/update", getUpdateItemForm);

itemRouter.post("/:categoryId/items/:itemId/update", updateItem);

itemRouter.post("/:categoryId/items/:itemId", deleteItem);

module.exports = itemRouter;
