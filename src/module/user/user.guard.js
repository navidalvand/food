const jwt = require("jsonwebtoken");
const { Response } = require("../../common/res/responses");
const { getEnv } = require("../../common/util/getEnv");

class AuthGuard {
  authorizeUser(req, res, next) {
    try {
      const { accessToken } = req.cookies;
      if (!accessToken) throw { message: "accessToken not found" };
      const SECRET_KEY = getEnv("SECRET_KEY");
      const verifyToken = jwt.verify(accessToken, SECRET_KEY);
      if (!verifyToken) throw { message: "token has not verified" };
      const user = { phone: verifyToken.phone };
      req.user = user;
      next();
    } catch (err) {
      next(new Response.UnAuthorizedException(err.message));
    }
  }
}

module.exports = {
  AuthGuard: new AuthGuard(),
};
