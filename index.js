import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";

const app = express();
dotenv.config();
app.listen(8080, () => {
  connectDatabase();
//   console.log("Servidor rodando na porta 8080.");
});
