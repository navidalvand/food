const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = (app) => {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "Divar Backend",
        description: "Divar Clone",
        version: 1.0,
      },
    },
    apis: ["./src/module/**/*.swagger.js"],
  });
  const swagger = swaggerUi.setup(swaggerDocument);
  app.use("/docs", swaggerUi.serve, swagger);
};

module.exports = {
  swaggerConfig,
};
