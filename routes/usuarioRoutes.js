import express from 'express';
const usuarioRoutes = express.Router();
import usuarioController from '../controllers/usuarioController.js';  


usuarioRoutes.get('/usuarios', usuarioController.getAllUsuarios);
usuarioRoutes.post('/usuarios', usuarioController.createUsuario);
usuarioRoutes.delete('/usuarios/:id', usuarioController.deleteUsuario);
usuarioRoutes.put('/usuarios/:id', usuarioController.updateUsuario);
usuarioRoutes.get('/:id', usuarioController.getOneUsuario);
usuarioRoutes.post('/auth', usuarioController.LoginUsuario);

export default usuarioRoutes;

