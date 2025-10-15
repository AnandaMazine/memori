import mongoose from "mongoose";

const qrCodeSchema = new mongoose.Schema({
    _id : String,
    nomeImagem: String
});
const Qrcode = mongoose.module("Qrcode", qrCodeSchema);
export default Qrcode;