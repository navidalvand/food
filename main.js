const express = require("express");
const app = express();
require("dotenv").config();
const { getEnv } = require("./src/common/util/getEnv");
const port = getEnv("port");
const { serverConf } = require("./src/conf/server.conf");
const { ResponseHandler } = require("./src/common/res/res.handler");
const { mainRouter } = require("./src/router");
const { connectMongoDB } = require("./src/conf/db.conf");
const { notFoundException } = require("./src/common/res/notFound");
const { swaggerConfig } = require("./src/conf/swagger.conf");

async function main() {
  try {
    serverConf(app);
    await connectMongoDB();
    require("./src/conf/redis.conf.js");
    swaggerConfig(app);
    app.use(mainRouter);

    notFoundException(app);
    app.use(ResponseHandler);

    app.listen(port, (err) => {
      if (err) return console.log(err);
      console.log(`Example app listening on port ${port}!`);
    });
  } catch (err) {
    console.log("main function error");
    console.log(err);
  }
}

main();
