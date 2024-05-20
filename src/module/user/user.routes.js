const { UserController } = require("./user.controller");
const { AuthGuard } = require("./user.guard");
const { UserValidationPipe } = require("./user.pipe");

const router = require("express").Router();

router.post(
  "/auth/send-code",
  UserValidationPipe.registerPipe,
  UserController.register
);
router.post(
  "/auth/check-code",
  UserValidationPipe.loginPipe,
  UserController.login
);
router.post("/auth/logout", AuthGuard.authorizeUser, UserController.logout);
// router.post("/forget-pass");

module.exports = {
  userRouter: router,
};
