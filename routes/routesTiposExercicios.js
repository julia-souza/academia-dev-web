import express from 'express';
import {
  createTipoExercicio, updateTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTipoExercicios,
} from '../controllers/tipoExercicioController.js';

const router = express.Router();

router.post('/', createTipoExercicio);
router.put('/:id', updateTipoExercicio);
router.delete('/:id', deleteTipoExercicio);
router.get('/', getTipoExercicios);
router.get('/:id', getTipoExercicio);

export default router;
