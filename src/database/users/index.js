const userRoutes = require("./usuarios-rotas");
const userController = require("../controllers/users/usersController");
const userModel = require("../models/users");

module.exports = {
  userRoutes,
  userController,
  userModel,
};
