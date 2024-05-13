const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const { serverConf } = require("./src/conf/server.conf");
const { ResDev, Res } = require("./src/common/res/responses");

function main() {
  serverConf(app);

  console.log();

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

main();
