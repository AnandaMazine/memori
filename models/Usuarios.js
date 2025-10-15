import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    nome: String,
    nomeUsuario: String,
    emailUsuario: String,
    senhaUsuario: String,
    permissao: String,
});
const Usuarios = mongoose.module("Usuarios", usuariosSchema);
export default Modelagens;