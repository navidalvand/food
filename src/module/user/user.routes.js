const { UserController } = require("./user.controller");
const { UserValidationPipe } = require("./user.pipe");

const router = require("express").Router();

router.post(
  "/auth/register",
  UserValidationPipe.registerPipe,
  UserController.register
);
// router.post("/login");
// router.post("/logout");
// router.post("/forgot-pass");

module.exports = {
  userRouter: router,
};
