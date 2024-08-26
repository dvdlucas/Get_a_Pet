import express from "express";
import cors from "cors";
import connectDatabase from "./db/conn.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Servidor funcionando, hahahahahah" });
});

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.static("public"));

connectDatabase();
app.listen(5000);
