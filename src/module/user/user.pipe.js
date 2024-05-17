const Joi = require("joi");
const { Response } = require("../../common/res/responses");

class UserValidationPipe {
  registerPipe(req, res, next) {
    try {
      const { phone, password, confirm_password } = req.body;
      const iranPhonePattern = /^(\+98|0)?9\d{9}$/;

      const validationObj = Joi.object({
        phone: Joi.string().regex(iranPhonePattern).required(),
        password: Joi.string().required(),
        confirm_password: Joi.string().required(),
      });

      const validationResult = validationObj.validate({
        phone,
        password,
        confirm_password,
      });

      if (password !== confirm_password)
        throw { message: "password and confirm_pasword must be the same" };

      if (validationResult.error)
        throw { message: validationResult.error.message };
      next();
    } catch (err) {
      console.log(err);
      next(new Response.BadRequestException(err.message));
    }
  }
}

module.exports = {
  UserValidationPipe: new UserValidationPipe(),
};
