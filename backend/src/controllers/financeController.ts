import { Request, Response } from 'express';
import pool from '../config/database';

export const financeController = {
  getIncome: async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * FROM income_records ORDER BY income_date DESC');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch income records' });
    }
  },

  createIncome: async (req: Request, res: Response) => {
    try {
      const { incomeCategory, incomeName, clientId, amount, incomeDate, status } = req.body;
      const result = await pool.query(
        `INSERT INTO income_records (income_category, income_name, client_id, amount, income_date, status, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
         RETURNING *`,
        [incomeCategory, incomeName, clientId, amount, incomeDate, status || 'pending']
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create income record' });
    }
  },

  getExpenses: async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * FROM expense_records ORDER BY expense_date DESC');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch expense records' });
    }
  },

  createExpense: async (req: Request, res: Response) => {
    try {
      const { expenseCategory, expenseName, caregiverId, employeeId, amount, expenseDate, status } = req.body;
      const result = await pool.query(
        `INSERT INTO expense_records (expense_category, expense_name, caregiver_id, employee_id, amount, expense_date, status, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
         RETURNING *`,
        [expenseCategory, expenseName, caregiverId, employeeId, amount, expenseDate, status || 'pending']
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create expense record' });
    }
  },

  updateIncome: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { incomeCategory, incomeName, amount, incomeDate, status } = req.body;
      const result = await pool.query(
        `UPDATE income_records 
         SET income_category = $1, income_name = $2, amount = $3, income_date = $4, status = $5, updated_at = NOW()
         WHERE id = $6
         RETURNING *`,
        [incomeCategory, incomeName, amount, incomeDate, status, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Income record not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update income record' });
    }
  },

  updateExpense: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { expenseCategory, expenseName, amount, expenseDate, status } = req.body;
      const result = await pool.query(
        `UPDATE expense_records 
         SET expense_category = $1, expense_name = $2, amount = $3, expense_date = $4, status = $5, updated_at = NOW()
         WHERE id = $6
         RETURNING *`,
        [expenseCategory, expenseName, amount, expenseDate, status, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Expense record not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update expense record' });
    }
  },

  deleteIncome: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await pool.query('DELETE FROM income_records WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Income record not found' });
      }
      res.json({ message: 'Income record deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete income record' });
    }
  },

  deleteExpense: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await pool.query('DELETE FROM expense_records WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Expense record not found' });
      }
      res.json({ message: 'Expense record deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete expense record' });
    }
  },
};
