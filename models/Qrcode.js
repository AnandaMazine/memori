import mongoose from "mongoose";

const qrCodeSchema = new mongoose.Schema({
    _id : String,
    nomeImagem: String
});
const Qrcode = mongoose.model("Qrcode", qrCodeSchema);
export default Qrcode;