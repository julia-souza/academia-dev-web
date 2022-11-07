import express from 'express';
import {
  createFicha, updateFicha, deleteFicha, getFicha, getFichas,
} from '../controllers/fichaController.js';

const router = express.Router();

router.post('/', createFicha);
router.put('/:id', updateFicha);
router.delete('/:id', deleteFicha);
router.get('/', getFichas);
router.get('/:id', getFicha);

export default router;
