const { userRouter } = require("./module/user/user.routes");

const router = require("express").Router();

router.use("/user", userRouter);

module.exports = {
  mainRouter: router,
};
