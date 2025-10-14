import express from 'express';
const usuariosRoutes = express.Router();
import usuarioController from '../controllers/usuarioController.js';  
import Auth from "../middleware/Auth.js";

usuariosRoutes.get('/usuarios', Auth.Authorization, usuarioController.getAllUsuarios);
usuariosRoutes.post('/usuarios', usuarioController.createUsuario);
usuariosRoutes.delete('/usuarios/:id', Auth.Authorization, usuarioController.deleteUsuario);
usuariosRoutes.put('/usuarios/:id', Auth.Authorization, usuarioController.updateUsuario);
usuariosRoutes.get('/usuarios/:id', Auth.Authorization, usuarioController.getOneUsuario);

export default usuariosRoutes;

