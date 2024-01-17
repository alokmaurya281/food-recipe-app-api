const express = require("express");
const errorHandler = require("../middleware/errorHandler");
const connectDB = require("../config/dbConnection");
const dotenv = require("dotenv").config();
// const { swaggerDocs} = require("../swagger");
const swaggerFile = require('../swagger_output.json')

const swaggerUi = require("swagger-ui-express");


const app = express();

const port = process.env.PORT || 5001;
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

connectDB();

app.use(express.json());


app.use("/api/v1", require("../routes/userRoutes"));
app.use("/api/v1", require("../routes/otpRoutes"));
app.use("/api/v1", require("../routes/recipeRoutes"));
app.use("/api/v1", require("../routes/reportRoutes"));
app.use("/api/v1", require("../routes/suggestFeatureRoutes"));
app.use("/api/v1", require("../routes/supportRoutes"));
app.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))



app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
// swaggerDocs(app, port);