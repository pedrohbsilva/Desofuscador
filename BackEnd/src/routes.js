const express = require('express');
const userController = require('./controllers/userController');

const decodeController = require('./controllers/decodeController')

const routes = express.Router();
routes.get('/users', userController.index);
routes.get('/user/:id', userController.indexOne);
routes.post('/users', userController.store);
routes.post('/decode/upload', decodeController.uploadDecode);
routes.post('/decode/text', decodeController.StringDecoder);
routes.delete('/users/:id', userController.delete);
routes.put('/user/:id', userController.updated);
routes.put('/user/password/:id', userController.updatedPassword);

module.exports = routes;