import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.post("/create", UserController.createUser);

export default router;
