// const { UserController } = require("./user.controller");
// const { AuthGuard } = require("./user.guard");
// const { UserValidationPipe } = require("./user.pipe");

const { AuthGuard } = require("../user/user.guard");
const { RestaurantController } = require("./restaurant.controller");

const router = require("express").Router();

router.post("/", AuthGuard.authorizeUser, RestaurantController.create);

module.exports = {
  restaurantRouter: router,
};
