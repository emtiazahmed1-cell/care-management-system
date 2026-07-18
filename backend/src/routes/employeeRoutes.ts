import express from 'express';
import { employeeController } from '../controllers/employeeController';

const router = express.Router();

router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getById);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);

export default router;
