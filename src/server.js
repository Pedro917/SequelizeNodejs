const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const consign = require('consign')


require('./database/index');

const app = express();

// MIDDLEWARES
app.use(bodyParser.json())

//ROUTES
app.use(routes);

// RODANDO APLICAÇÃO
app.listen(3333, () => {
  console.log(`Servidor rodando na porta 3333`)
});