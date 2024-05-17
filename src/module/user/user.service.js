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
      const now = new Date().getTime();
      const twoMinuteMS = 1000 * 60 * 2;
      const twoMinuteLater = now + twoMinuteMS;
      if (user) {
        if (user.otp.expiresIn > now)
          throw {
            message: `you have ${
              (user.otp.expiresIn - now) / 1000
            } scconds left`,
          };

        user.otp.code = randomNum;
        user.otp.expiresIn = twoMinuteLater;
        await user.save();
        return user;
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
