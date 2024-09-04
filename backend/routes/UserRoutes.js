import express from "express";
import UserController from "../controllers/UserController.js";
import verifyToken from "../helpers/verify-token.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.post("/create", UserController.createUser);
router.get("/login", UserController.loginUser);
router.get("/:id", UserController.getById);
router.get("/check", UserController.checkUser);
router.patch("/editUser/:id", verifyToken, UserController.editUser);

export default router;
