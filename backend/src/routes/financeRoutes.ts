import express from 'express';
import { financeController } from '../controllers/financeController';

const router = express.Router();

router.get('/income', financeController.getIncome);
router.post('/income', financeController.createIncome);
router.put('/income/:id', financeController.updateIncome);
router.delete('/income/:id', financeController.deleteIncome);

router.get('/expense', financeController.getExpenses);
router.post('/expense', financeController.createExpense);
router.put('/expense/:id', financeController.updateExpense);
router.delete('/expense/:id', financeController.deleteExpense);

export default router;
