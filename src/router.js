const { restaurantRouter } = require("./module/restaurant/restaurant.routes");
const { userRouter } = require("./module/user/user.routes");

const router = require("express").Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);

module.exports = {
  mainRouter: router,
};
