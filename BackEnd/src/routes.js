const express = require('express');
const userController = require('./controllers/userController');

const routes = express.Router();
routes.get('/users', userController.index);
routes.get('/user/:id', userController.indexOne);
routes.post('/users', userController.store);
routes.delete('/users/:id', userController.delete);
routes.put('/user/:id', userController.updated);
module.exports = routes;