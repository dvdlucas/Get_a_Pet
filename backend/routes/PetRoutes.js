import express from "express";
import PetController from "../controllers/PetController.js";

const router = express.Router();

router.get("/", PetController.getAll);

export default router;
