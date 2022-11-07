import express from "express";
const router = express.Router();
router.post("/", (req, res) => {
  res.send("Rota de cadastro de aluno.");
});
router.put("/:id", (req, res) => {
  res.send("Rota de atualização de aluno.");
});
router.delete("/:id", (req, res) => {
  res.send("Rota de remoção de aluno.");
});
router.get("/:id", (req, res) => {
  res.send("Rota de busca de aluno.");
});
router.get("/", (req, res) => {
  res.send("Rota de listagem de alunos.");
});
export default router;
