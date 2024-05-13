const { Schema, model, Types } = require("mongoose");

const IntrestSchema = new Schema(
  {
    intrestName: { type: String, required: true },
    intrestId: { type: Types.ObjectId, required: true },
  },
  { _id: false }
);

const UserSchema = new Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  fullName: { type: String, default: "user" },
  img: { type: String, default: "/default/user.jpeg" },
  email: { type: String, unique: true },
  intrests: {
    food: [IntrestSchema],
    category: [IntrestSchema],
    restaurant: [IntrestSchema],
  },
  default: {
    food: [],
    category: [],
    restaurant: [],
  },
  address: { type: String },
  pocket: { type: Number },
  basket: { type: [Types.ObjectId] },
});

const UserModel = new model("user", UserSchema);

module.exports = {
  UserModel,
};
