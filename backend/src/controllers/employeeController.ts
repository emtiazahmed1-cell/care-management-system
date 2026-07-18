import { Request, Response } from 'express';
import pool from '../config/database';
import { IDGenerator } from '../utils/idGenerator';

export const employeeController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const result = await pool.query('SELECT * FROM employees ORDER BY created_at DESC');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch employees' });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch employee' });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, phoneNumber, ...rest } = req.body;
      
      const seqResult = await pool.query('SELECT nextval(\'employee_id_seq\') as seq');
      const sequence = seqResult.rows[0].seq;
      const employeeId = IDGenerator.generateEmployeeID(sequence);

      const result = await pool.query(
        `INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
         RETURNING *`,
        [employeeId, firstName, lastName, email, phoneNumber]
      );
      
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create employee' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, phoneNumber, ...rest } = req.body;
      
      const result = await pool.query(
        `UPDATE employees 
         SET first_name = $1, last_name = $2, email = $3, phone_number = $4, updated_at = NOW()
         WHERE id = $5
         RETURNING *`,
        [firstName, lastName, email, phoneNumber, id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update employee' });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await pool.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete employee' });
    }
  },
};
