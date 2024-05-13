const autoBind = require("auto-bind");
const { UserService } = require("./user.service");

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = UserService;
  }
  register(req, res, next) {
    this.#service.fuck();
  }
}

module.exports = {
  UserController: new UserController(),
};
