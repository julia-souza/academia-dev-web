import express from 'express';
import { loginInstrutor, loginAluno } from '../controllers/authController.js';
import { checkUser, validateToken } from '../utils/validateToken.js';

const router = express.Router();
router.post('/check/login', loginInstrutor);
router.post('/check/aluno/login', loginAluno);
router.get('/verificartoken', validateToken, (req, res) => {
  res.status(200).json({ message: 'Você está autenticado.' });
});
router.get('/checkuser/:id', checkUser, (req, res) => {
  res.status(200).json(
    { message: 'O id passado é do usuário logado.' },
  );
});
export default router;