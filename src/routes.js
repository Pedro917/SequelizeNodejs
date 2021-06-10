const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

// Rota Padrão
routes.get('/', (req,res) => {
    return res.json({ version: "v1", aplication: "Api Node" })
});

// Rotas de Usuário

routes.get('/api/users', UserController.index)
      .post('/api/users', UserController.store);
      



module.exports = routes;