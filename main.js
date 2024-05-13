const express = require("express");
const app = express();
require("dotenv").config();
const { getEnv } = require("./src/common/util/getEnv");
const port = getEnv("port");
const { serverConf } = require("./src/conf/server.conf");
const { ResponseHandler } = require("./src/common/res/res.handler");
const { mainRouter } = require("./src/router");

function main() {
  serverConf(app);
  app.use(mainRouter);

  app.use(ResponseHandler);

  app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Example app listening on port ${port}!`);
  });
}

main();
