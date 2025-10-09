import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Checkpoint = connection.define('checkpoints',{
    nomeCheckpoint:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    latitudeCheckpoint:{
        type: Sequelize.FLOAT,
        allowNull: true, 
    },
    longitudeCheckpoint:{
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    tituloRota:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    descricaoCheckpoint:{
        type: Sequelize.TEXT,
        allowNull: true,
    },
    imagemCheckpoint:{
        type: Sequelize.STRING,
        allowNull: true,
    }
});
Checkpoint.sync({force:true});
export default Checkpoint;