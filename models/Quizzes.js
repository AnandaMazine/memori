import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema({
    pergunta: String,
    checkpointQuizz: String,
    alternativaA: String,
    alternativaB: String,
    alternativaC: String,
    alternativaD: String,
    alternativaE: String,
    alternativaCorreta: String
});
const Quizzes = mongoose.module("Quizzes", quizzesSchema);
export default Quizzes;