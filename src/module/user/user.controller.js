const autoBind = require("auto-bind");
const { UserService } = require("./user.service");
const { Response } = require("../../common/res/responses");

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = UserService;
  }

  async register(req, res, next) {
    try {
      const { phone } = req.body;

      const user = await this.#service.register({ phone });
      next(new Response.ResCreated("Created", { code: user.otp.code }));
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }

  async login(req, res, next) {
    try {
      const { code, phone } = req.body;
      const user = await this.#service.login({ code, phone });

      const token = await this.#service.generateToken({ phone });

      res.cookie("accessToken", token);

      next(new Response.ResOk("logged in successfully", user));
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }

  logout(req, res, next) {
    try {
      res.cookie("accessToken", "");
      next(new Response.ResOk());
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }
}

module.exports = {
  UserController: new UserController(),
};
