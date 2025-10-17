import mongoose from "mongoose";

const modelagensSchema = new mongoose.Schema({
    nomeModelagem: String,
    nomeCidade: String,
    nomeCheckpoint: String,
    arquivoModelagem: String,
});
const Modelagens = mongoose.model("Modelagens", modelagensSchema);
export default Modelagens;