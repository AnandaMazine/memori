import usuario from "../models/usuario.js";

class usuarioService {
    async getAll() {
        try {
            const usuarios = await usuario.find();
            return usuarios;
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
            const newUsuario = new usuario({
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

    async Delete(id) {
        try {
            await usuario.findByIdAndDelete(id);   
            console.log(`Usuario com id ${id} deletada com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(id) {
        try {
            const usuario = await usuario.findOne({ _id: id });    
            return usuario;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new usuarioService();
