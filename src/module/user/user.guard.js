const jwt = require("jsonwebtoken");
const { Response } = require("../../common/res/responses");
const { getEnv } = require("../../common/util/getEnv");
const autoBind = require("auto-bind");
const { UserService } = require("./user.service");

class AuthGuard {
  #UserService;
  constructor() {
    autoBind(this);
    this.#UserService = UserService;
  }
  authorizeUser(req, res, next) {
    try {
      const { accessToken } = req.cookies;
      if (!accessToken) throw { message: "accessToken not found" };
      const SECRET_KEY = getEnv("SECRET_KEY");
      const verifyToken = jwt.verify(accessToken, SECRET_KEY);
      if (!verifyToken) throw { message: "token has not verified" };
      req.user = this.#UserService.findByPhone(verifyToken.phone);
      next();
    } catch (err) {
      next(new Response.UnAuthorizedException(err.message));
    }
  }
}

module.exports = {
  AuthGuard: new AuthGuard(),
};
