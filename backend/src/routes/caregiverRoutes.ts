import express from 'express';
import { caregiverController } from '../controllers/caregiverController';

const router = express.Router();

router.get('/', caregiverController.getAll);
router.get('/:id', caregiverController.getById);
router.post('/', caregiverController.create);
router.put('/:id', caregiverController.update);
router.delete('/:id', caregiverController.delete);

export default router;
