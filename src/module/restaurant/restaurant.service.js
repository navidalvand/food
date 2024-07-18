const autoBind = require("auto-bind");
const { RestaurantModel } = require("./restaurant.model");

class RestaurantService {
  #RestaurantModel;
  constructor() {
    autoBind(this);
    this.#RestaurantModel = RestaurantModel;
  }
  async create() {
    try {
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  RestaurantService: new RestaurantService(),
};
