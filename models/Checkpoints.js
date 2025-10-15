import mongoose from "mongoose";

const checkpointSchema = new mongoose.Schema({
    nomeCheckpoint: String,
    latitudeCheckpoint: Number,
    longitudeCheckpoint: Number,
    tituloRota: String,
    descricaoCheckpoint: String,
    imagemCheckpoint: String,
    qrCodeImagem: [{
        type: String,
        ref: 'Transaction'
    }]
});
const Checkpoint = mongoose.module("Checkpoint", checkpointSchema);
export default Checkpoint;