const Joi = require("joi");
const { Response } = require("../../common/res/responses");

class UserValidationPipe {
  registerPipe(req, res, next) {
    try {
      const { phone, password, confirm_password } = req.body;

      const validationObj = Joi.object({
        phone: Joi.string().required().message("phone is not valid"),
        password: Joi.string().required().message("password is not valid"),
      });

      if (password !== confirm_password)
        next(
          new Response.BadRequestException(
            "password and confirm_pasword must be the same"
          )
        );

      const validationResult = validationObj.validate({
        phone,
        password,
      });

      console.log(validationResult);
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }
}

module.exports = {
  UserValidationPipe: new UserValidationPipe(),
};
