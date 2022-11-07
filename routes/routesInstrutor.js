import express from 'express';
import {
  createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutores,
} from '../controllers/instrutorController.js';

const router = express.Router();

router.post('/', createInstrutor);
router.put('/:id', updateInstrutor);
router.delete('/:id', deleteInstrutor);
router.get('/', getInstrutores);
router.get('/:id', getInstrutor);

export default router;
