const { default: mongoose } = require("mongoose");
const { getEnv } = require("../common/util/getEnv");
const uri = getEnv("mongodb_uri");

async function connectMongoDB() {
  for (let i = 0; i < 3; ++i) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log("connected to mongodb");

      break;
    } catch (err) {
      console.log("Failed to connect to mongodb", i);
      if (i >= 2) {
        throw err;
      }
    }
  }

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
