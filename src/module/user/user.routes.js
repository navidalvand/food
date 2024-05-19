const { UserController } = require("./user.controller");
const { UserValidationPipe } = require("./user.pipe");

const router = require("express").Router();

router.post(
  "/auth/send-code",
  UserValidationPipe.registerPipe,
  UserController.register
);
router.post("/check-code", UserValidationPipe.loginPipe, UserController.login);
// router.post("/logout");
// router.post("/forgot-pass");

module.exports = {
  userRouter: router,
};
