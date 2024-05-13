const autoBind = require("auto-bind");

class UserService {
  constructor() {
    autoBind(this);
  }
  fuck() {
    console.log("fuck");
  }
}

module.exports = {
  UserService: new UserService(),
};
