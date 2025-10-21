import express from "express";
const quizzRoutes = express.Router();
import quizzController from "../controllers/quizzController.js";
import Auth from "../middleware/Auth.js";

quizzRoutes.get("/", quizzController.getAllQuizzes);
quizzRoutes.post("/", quizzController.createQuizz);
quizzRoutes.delete("/:id", quizzController.deleteQuizz);
quizzRoutes.put("/:id", quizzController.updateQuizz);
quizzRoutes.get("/:id", quizzController.getOneQuizz);

export default quizzRoutes;