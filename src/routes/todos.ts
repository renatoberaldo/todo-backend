import { Router } from 'express';
import {
  createToDo,
  deleteToDo,
  getAllToDo,
  updateToDo,
  getToDoById,
} from '../controller/todos';

const router = Router();

// Routes
router.post('/', createToDo);

router.get('/', getAllToDo);
router.get('/:id', getToDoById);
router.put('/:id', updateToDo);
router.delete('/:id', deleteToDo);

export default router;
