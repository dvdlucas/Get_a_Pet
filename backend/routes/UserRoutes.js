import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.post("/create", UserController.createUser);
router.get("/login", UserController.loginUser);

export default router;
