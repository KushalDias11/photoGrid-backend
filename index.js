const express = require('express');
const bodyParser = require('body-parser');
const router = require("./src/routes");
const cors = require("./configs/cors");
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./configs/swagger.json');

const app = express();
app.use(bodyParser.json());
app.use(cors);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

const port = 3001;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

module.exports = app;

