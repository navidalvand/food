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
      const { phone, password } = req.body;

      const user = await this.#service.register({ password, phone });
      next(new Response.ResCreated("Created", user));
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }
}

module.exports = {
  UserController: new UserController(),
};
