const { json, urlencoded } = require("body-parser");
const { default: helmet } = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

function serverConf(app) {
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(json({ limit: "10kb" }));
  app.use(urlencoded({ extended: true }));
  app.use(cors());
  app.use(cookieParser());
}

module.exports = {
  serverConf,
};
