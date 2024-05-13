const { UserController } = require("./user.controller");

const router = require("express").Router();

router.get("/register", UserController.register);
// router.post("/login");
// router.post("/logout");
// router.post("/forgot-pass");

module.exports = {
  userRouter: router,
};
