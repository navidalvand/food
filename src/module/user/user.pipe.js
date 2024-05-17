const Joi = require("joi");
const { Response } = require("../../common/res/responses");

class UserValidationPipe {
  registerPipe(req, res, next) {
    try {
      const { phone } = req.body;
      const iranPhonePattern = /^(\+98|0)?9\d{9}$/;

      const validationObj = Joi.object({
        phone: Joi.string().regex(iranPhonePattern).required(),
      });

      const validationResult = validationObj.validate({
        phone,
      });

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
