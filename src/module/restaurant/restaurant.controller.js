const autoBind = require("auto-bind");
const { RestaurantService } = require("./restaurant.service");
const { Response } = require("../../common/res/responses");

class RestaurantController {
  #RestaurantService;
  constructor() {
    autoBind(this);
    this.#RestaurantService = RestaurantService;
  }
  async create(req, res, next) {
    try {
      const { user } = req;
      const { restaurantName } = req.body;
      const result = await this.#RestaurantService.create({
        ownerId: user._id,
        restaurantName,
      });

      next(new Response.ResCreated("restaurant created", result));
    } catch (err) {
      next(new Response.BadRequestException(err.message));
    }
  }
}

module.exports = {
  RestaurantController: new RestaurantController(),
};
