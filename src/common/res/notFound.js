const { getEnv } = require("../util/getEnv");
const { Response } = require("./responses");

function notFoundException(app) {
  app.use((req, res, next) => {
    const { protocol, method, hostname, originalUrl } = req;

    const port = getEnv("port");

    const data = {
      protocol,
      method,
      hostname,
      originalUrl,
      request: `${method}: ${protocol}://${hostname}:${port}${originalUrl}`,
    };

    const response = new Response.NotFoundException(
      "page or route not found",
      data
    );

    next(response);
  });
}

module.exports = { notFoundException };
