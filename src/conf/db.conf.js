const { default: mongoose } = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/food";

async function connectMongoDB() {
  for (let i = 0; i < 3; ++i) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
      });
      break;
    } catch (err) {
      console.log("Failed to connect to mongodb", i);
      if (i >= 2) {
        throw err;
      }
    }
  }

  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("mongodb connection disconnected!");
  });
}

module.exports = {
  connectMongoDB,
};
