const autoBind = require("auto-bind");
const { Response } = require("../../common/res/responses");
const { RestaurantService } = require("./restaurant.service");

class RestaurantController {
  #RestaurantService;
  constructor() {
    autoBind(this);
    this.#RestaurantService = RestaurantService;
  }
  async create(req, res, next) {
    try {
      const { user } = req;
      console.log(user);
      await this.#RestaurantService.create();
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }
}

module.exports = {
  RestaurantController: new RestaurantController(),
};
