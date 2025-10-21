import express from 'express';
const rotaRoutes = express.Router();
import rotaController from '../controllers/rotaController.js';
import Auth from "../middleware/Auth.js";

rotaRoutes.get('/', Auth.Authorization, rotaController.getAllRotas);
rotaRoutes.post('/', Auth.Authorization, rotaController.createRota);
rotaRoutes.delete('/:id', Auth.Authorization, rotaController.deleteRota);
rotaRoutes.put('/:id', Auth.Authorization, rotaController.updateRota);
rotaRoutes.get('/:id', Auth.Authorization, rotaController.getOneRotas);

export default rotaRoutes;