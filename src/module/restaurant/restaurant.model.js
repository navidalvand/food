const { Schema, model, Types } = require("mongoose");

const FoodSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, default: "/default/food.jpeg" },
  description: { type: String },
  price: { type: String, required: true },
});

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    foods: { type: [FoodSchema], default: [] },
  },
  { _id: false }
);

const MenueSchema = new Schema(
  {
    categories: { type: [CategorySchema], default: [] },
  },
  { _id: false }
);

const RestaurantSchema = new Schema(
  {
    owner: { type: Types.ObjectId, ref: "user", required: true },
    menue: { type: MenueSchema, default: null },
    open: { type: String },
    close: { type: String },
  },
  {
    timestamps: true,
  }
);

const RestaurantModel = new model("restaurant", RestaurantSchema);

module.exports = {
  RestaurantModel,
};
