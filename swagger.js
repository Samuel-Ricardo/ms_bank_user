const swaggerAutogen = require("swagger-autogen")();
require("dotenv").config();

const doc = {
  info: {
    title: "Bank User Microsservice",
    description: "Bank User Microsservice Documentation",
  },
  host: process.env.HOST || "localhost:3000",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = "./docs/swagger.json";
const routes = [
  "./src/server.ts",
  "./src/modules/application/router/http/express/employee/employee.router.ts",
  "./src/modules/application/router/http/express/app.router.ts",
  "./src/modules/application/router/http/express/docs.router.ts",
  "./src/modules/application/router/http/express/**/*.router.ts",
];

swaggerAutogen(outputFile, routes, doc);
