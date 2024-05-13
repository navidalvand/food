const { default: mongoose } = require("mongoose");

function connectMongoDB() {
  mongoose.connect();
}
