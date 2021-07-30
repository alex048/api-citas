const express = require('express');
const config = require('./database/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventValidateRoutes = require('./src/routes/validateUserRouter');
// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

app.use('/api', eventValidateRoutes.routes);
app.listen(config.port, () => {
    console.log('app listening on url http://localhost:' + config.port )
});