import { Request, Response } from 'express';
import pool from '../config/database';

export const documentController = {
  upload: async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const { entityType, entityId, documentName } = req.body;
      const documentPath = `/uploads/${req.file.filename}`;
      const documentUrl = `${process.env.API_URL || 'http://localhost:3001'}${documentPath}`;

      const result = await pool.query(
        `INSERT INTO documents (document_name, document_path, document_url, entity_type, entity_id, mime_type, file_size, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
         RETURNING *`,
        [documentName || req.file.originalname, documentPath, documentUrl, entityType, entityId, req.file.mimetype, req.file.size]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to upload document' });
    }
  },

  getByEntity: async (req: Request, res: Response) => {
    try {
      const { entityType, entityId } = req.query;
      const result = await pool.query(
        'SELECT * FROM documents WHERE entity_type = $1 AND entity_id = $2 ORDER BY created_at DESC',
        [entityType, entityId]
      );
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch documents' });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await pool.query('DELETE FROM documents WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.json({ message: 'Document deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete document' });
    }
  },
};
