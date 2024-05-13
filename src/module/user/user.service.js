const autoBind = require("auto-bind");

class UserService {
  constructor() {}
  fuck() {
    console.log("fuck");
  }
}

module.exports = {
  UserService: new UserService(),
};
