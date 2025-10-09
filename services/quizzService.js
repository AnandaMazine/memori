import Quizz from "../models/Quizzes.js";

class QuizzService {
  async getAll() {
    try {
      const quizzes = await Quizz.find();
      return quizzes;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(
    pergunta,
    checkpointQuizz,
    alternativaA,
    alternativaB,
    alternativaC,
    alternativaD,
    alternativaE,
    alternativaCorreta
  ) {
    try {
      const newQuizz = new Quizz({
        pergunta,
        checkpointQuizz,
        alternativaA,
        alternativaB,
        alternativaC,
        alternativaD,
        alternativaE,
        alternativaCorreta,
      });
      await newQuizz.save();
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Quizz.findByIdAndDelete(id);
      console.log(`Quizz com id ${id} deletada com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new QuizzService();
