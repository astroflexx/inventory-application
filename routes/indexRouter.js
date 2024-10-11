const AsyncRouter = require("express-async-router").AsyncRouter;
const { getHomePage } = require('../controllers/indexController');

const indexRouter = AsyncRouter();

indexRouter.get('/', getHomePage);

module.exports = indexRouter;
