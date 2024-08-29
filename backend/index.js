import express from "express";
import cors from "cors";
import connectDatabase from "./db/conn.js";
import dotenv from "dotenv";
import UserRouter from "./routes/userRoutes.js";
import PetRouter from "./routes/UserRoutes.js";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/pets", PetRouter);
app.use("/users", UserRouter);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.static("public"));

connectDatabase();
app.listen(5000);
