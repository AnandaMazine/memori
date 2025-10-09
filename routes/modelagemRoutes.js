import express from "express";
const modelagemRoutes = express.Router();
import ModelagemController from "../controllers/ModelagemController.js";

// import Auth from "../middleware/Auth.js";

modelagemRoutes.get("/modelagens", ModelagemController.getAllModelagens);
modelagemRoutes.post("/modelagens", ModelagemController.createModelagem);
modelagemRoutes.delete("/modelagens/:id", ModelagemController.deleteModelagem);
modelagemRoutes.put("/modelagens/:id", ModelagemController.updateModelagem);
modelagemRoutes.get("modelagens/:id", ModelagemController.getOne);

export default modelagemRoutes;
