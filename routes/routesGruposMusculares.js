import express from 'express';
import {
  createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculares,
} from '../controllers/grupoMuscularController.js';

const router = express.Router();

router.post('/', createGrupoMuscular);
router.put('/:id', updateGrupoMuscular);
router.delete('/:id', deleteGrupoMuscular);
router.get('/', getGrupoMusculares);
router.get('/:id', getGrupoMuscular);

export default router;
