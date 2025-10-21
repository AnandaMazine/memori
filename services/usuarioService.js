import Usuarios from "../models/Usuarios.js";

class UsuariosService {
    async Create(nome,nomeUsuario,emailUsuario,senhaUsuario,permissao) { 
        try {
            const newUsuario = new Usuarios({
                nome,   
                nomeUsuario,
                emailUsuario,
                senhaUsuario,
                permissao,
            });
            await newUsuario.save();
        } catch (error) {
            console.log(error);
        }       
    }

    async getOne(email){
        try {
            const Usuarios = await Usuarios.findOne({ emailUsuario: emailUsuario });
            return Usuarios;
        } catch (error) {
            console.log(error);
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

    async getAll() {
        try {
            const Usuarios = await Usuarios.find();
            return Usuarios;
        } catch (error) {
            console.log(error);
        }   
    }

    async Update(id, nome, nomeUsuario, emailUsuario, senhaUsuario, permissao) {
        try {
            const usuario = await Usuarios.findByIdAndUpdate(
                id, {
                    nome,
                    nomeUsuario,
                    emailUsuario,
                    senhaUsuario,
                    permissao
                },
                { new: true }
            );
            console.log(`Usuario com id ${id} atualizado com sucesso!`);
            return usuario;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UsuariosService();
