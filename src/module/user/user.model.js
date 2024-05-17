const { Schema, Types, model } = require("mongoose");

const IntrestSchema = new Schema(
  {
    intrestName: { type: String, required: true },
    intrestId: { type: Types.ObjectId, required: true },
  },
  { _id: false }
);

const UserSchema = new Schema(
  {
    phone: {
      type: String,
      required: [true, "phone number is required"],
      unique: [true, "phone number is already exist"],
      trim: true,
    },

    fullName: { type: String, default: "user" },

    profile: { type: String, default: "/default/user.jpeg" },

    email: { type: String, default: "" },

    intrests: {
      food: { type: [IntrestSchema], default: [] },
      category: { type: [IntrestSchema], default: [] },
      restaurant: { type: [IntrestSchema], default: [] },
    },

    address: { type: String },

    pocket: { type: Number },

    basket: { type: [Types.ObjectId] },

    otp: {
      code: { type: Number },
      expiresIn: { type: Date },
    },

    isValidated: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const UserModel = new model("user", UserSchema);

module.exports = {
  UserModel,
};
