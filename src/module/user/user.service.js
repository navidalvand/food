const autoBind = require("auto-bind");
const { UserModel } = require("./user.model");

class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async register({ phone, password }) {
    try {
      const user = await this.#model.create({ phone, password });
      return user;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  UserService: new UserService(),
};
