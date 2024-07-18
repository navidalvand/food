const autoBind = require("auto-bind");
const { RestaurantModel } = require("./restaurant.model");

class RestaurantService {
  #RestaurantModel;
  constructor() {
    autoBind(this);
    this.#RestaurantModel = RestaurantModel;
  }
  async create({ ownerId, restaurantName }) {
    try {
      const exist = await this.#RestaurantModel.findOne({ owner: ownerId });
      if (exist)
        throw {
          message: `you can have only one restaurant and you already have one called ${exist.name}`,
        };
      return await this.#RestaurantModel.create({
        owner: ownerId,
        name: restaurantName,
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  RestaurantService: new RestaurantService(),
};
