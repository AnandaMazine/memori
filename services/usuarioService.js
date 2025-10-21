import Usuarios from "../models/Usuarios.js";

class UsuariosService {
    async getAll() {
        try {
            const Usuarioss = await Usuarios.find();
            return Usuarioss;
        } catch (error) {
            console.log(error);
        }   
    }

    async Create(
        nome,
        nomeUsuario,
        emailUsuario,
        senhaUsuario,
        permissao
    ) { 
        try {
            const newUsuario = new Usuarios({
                nome,   
                nomeUsuario,
                emailUsuario,
                senhaUsuario,
                permissao,
            });
            await newUsuario.save();
            return newUsuario;
        } catch (error) {
            console.log(error);
            throw error;
        }       
    }

    async Delete(id) {
        try {
            await Usuarios.findByIdAndDelete(id);   
            console.log(`Usuario com id ${id} deletada com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(id) {
        try {
            const Usuarios = await Usuarios.findOne({ _id: id });    
            return Usuarios;
        } catch (error) {
            console.log(error);
        }
    }

    async getByEmail(email){
        try {
            const Usuarios = await Usuarios.findOne({ emailUsuario: email });
            return Usuarios;
        } catch (error) {
            console.log(error);
        }
    }

    async Update(id, userData) {
        try {
            const usuario = await Usuarios.findByIdAndUpdate(
                id,
                userData,
                { new: true }
            );
            return usuario;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new UsuariosService();
