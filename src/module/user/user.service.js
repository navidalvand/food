const autoBind = require("auto-bind");
const { UserModel } = require("./user.model");
const { otp } = require("../../common/util/otp");

class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async register({ phone }) {
    try {
      const user = await this.#model.findOne({ phone });

      const randomNum = otp();
      const twoMinuteMS = 1000 * 60 * 2;
      const now = new Date().getTime();
      const twoMinuteLater = now + twoMinuteMS;
      if (user) {
        if (user.isValidated == true) return;

        if (user.otp.expiresIn > now) return;

        user.otp.code = randomNum;
        user.otp.expiresIn = twoMinuteLater;
        await user.save();
      } else {
        const newUser = await this.#model.create({ phone });

        newUser.otp.code = randomNum;
        newUser.otp.expiresIn = twoMinuteLater;
        await newUser.save();
        return newUser;
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  UserService: new UserService(),
};
