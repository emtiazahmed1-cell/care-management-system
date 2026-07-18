import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import clientRoutes from './routes/clientRoutes';
import caregiverRoutes from './routes/caregiverRoutes';
import employeeRoutes from './routes/employeeRoutes';
import financeRoutes from './routes/financeRoutes';
import documentRoutes from './routes/documentRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/caregivers', caregiverRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/documents', documentRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
