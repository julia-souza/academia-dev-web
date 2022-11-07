import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import alunoRoutes from "./routes/alunoRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/alunos", alunoRoutes);


app.listen(8080, () => {
  connectDatabase();
//   console.log("Servidor rodando na porta 8080.");
});

