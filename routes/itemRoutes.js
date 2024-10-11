const AsyncRouter = require('express-async-router').AsyncRouter;
const {
    getItemsInCategory,
    getNewItemForm,
    postNewItem,
    getItem,
    getUpdateItemForm,
    updateItem,
    deleteItem
} = require('../controllers/itemController');

const itemRouter = AsyncRouter();

itemRouter.get('/', getItemsInCategory);

itemRouter.get('/new', getNewItemForm);

itemRouter.post('/new', postNewItem);

itemRouter.get('/:itemId', getItem);

itemRouter.get('/:itemId/update', getUpdateItemForm);

itemRouter.post('/:itemId/update', updateItem);

itemRouter.post('/:itemId', deleteItem);

module.exports = itemRouter;
