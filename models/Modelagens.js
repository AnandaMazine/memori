import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Modelagem = connection.define('Modelagens',{
    nomeModelagem:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nomeCidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nomeCheckpoint:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    arquivoModelagem:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
});
Modelagem.sync({ force: true });
export default Modelagem;