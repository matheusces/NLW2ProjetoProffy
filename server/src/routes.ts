import express = require('express');
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.get('/users', (request, response) => {
    return response.send('hello world');
});

routes.post('/users', (request, response) => {
    const data = request.body;
    return response.send(data);
});

export default routes;