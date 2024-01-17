// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Food Recipe API",
//       description: "API endpoints for a Food Recipe documented on swagger",
//       contact: {
//         name: "Alok Maurya",
//         email: "snmaurya10275@gmail.com",
//         url: "https://github.com/alokmaurya281",
//       },
//       version: "1.0.0",
//     },
//     servers: [
//       {
//         url: "http://localhost:5000/",
//         description: "Local server",
//       },
//       {
//         url: "https://food-recipe-app-api.onrender.com",
//         description: "Live server",
//       },
//     ],
//   },
//   // looks for configuration in specified directories
//   apis: ["./routes/*.js"],
// };
// const swaggerSpec = swaggerJsdoc(options);
// function swaggerDocs(app, port) {
//   // Swagger Page
//   app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//   // Documentation in JSON format
//   app.get("/docs.json", (req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.send(swaggerSpec);
//   });
// }

// module.exports ={
//     swaggerDocs
// }
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles)