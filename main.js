const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const { serverConf } = require("./src/conf/server.conf");

function main() {
  serverConf(app);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

main();
