import express from "express";
const checkpointRoutes = express.Router();
import CheckpointController from "../controllers/CheckpointsController.js";

// import Auth from "../middleware/Auth.js";

checkpointRoutes.get("/checkpoints", CheckpointController.getAllCheckpoints);
checkpointRoutes.post("/checkpoints", CheckpointController.createCheckpoint);
checkpointRoutes.delete("/checkpoints/:id", CheckpointController.deleteCheckpoint);
checkpointRoutes.put("checkpoints/:id", CheckpointController.updateCheckpoint);
checkpointRoutes.get("checkpoints/:id", CheckpointController.getOneCheckpoint);

export default checkpointRoutes;