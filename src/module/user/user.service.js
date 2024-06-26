const autoBind = require("auto-bind");
const { UserModel } = require("./user.model");
const { otp } = require("../../common/util/otp");
const jwt = require("jsonwebtoken");
const { getEnv } = require("../../common/util/getEnv");

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

        user.otp.code = randomNum.toString();

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

  async login({ phone, code }) {
    try {
      const user = await this.#model.findOne({ phone });
      if (!user) throw { message: "user not found" };
      const now = new Date().getTime();

      if (user?.otp?.expiresIn < now) throw { message: "otp code has expired" };
      if (user?.otp?.code !== code)
        throw { message: "otp code is wrong or its used once" };
      if (!user.isValidated) user.isValidated = true;
      user.otp = {};
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }

  generateToken(payload) {
    try {
      const { phone } = payload;
      const SECRET_KEY = getEnv("SECRET_KEY");
      const token = jwt.sign({ phone }, SECRET_KEY, { expiresIn: "1d" });
      return token;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  UserService: new UserService(),
};
