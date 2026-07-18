# Care Management System

A comprehensive care management system built with React, Express, and PostgreSQL for managing clients, caregivers, employees, and financial records.

## Features

- **Client Management**: Track client information, documents, and care records
- **Caregiver Management**: Manage caregiver profiles and assignments
- **Employee Management**: Maintain employee records and information
- **Financial Management**: Track income and expenses with categorization
- **Document Management**: Upload and organize documents for entities
- **Dashboard**: Overview of all system metrics and data

## Tech Stack

### Frontend
- React 18 with TypeScript
- Material-UI (MUI) for components
- React Router for navigation
- Axios for API calls

### Backend
- Express.js with TypeScript
- PostgreSQL for database
- Multer for file uploads
- CORS enabled for cross-origin requests

## Project Structure

```
care-management-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Layout.tsx
│   │   ├── pages/
│   │   │   └── Dashboard.tsx
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── idGenerator.ts
│   │   │   ├── formatters.ts
│   │   │   └── validators.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── clientController.ts
│   │   │   ├── caregiverController.ts
│   │   │   ├── employeeController.ts
│   │   │   ├── financeController.ts
│   │   │   └── documentController.ts
│   │   ├── routes/
│   │   │   ├── clientRoutes.ts
│   │   │   ├── caregiverRoutes.ts
│   │   │   ├── employeeRoutes.ts
│   │   │   ├── financeRoutes.ts
│   │   │   └── documentRoutes.ts
│   │   ├── models/
│   │   │   └── index.ts
│   │   ├── config/
│   │   │   └── database.ts
│   │   ├── utils/
│   │   │   ├── idGenerator.ts
│   │   │   └── validators.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example` and configure your database credentials:
```bash
cp .env.example .env
```

4. Create the PostgreSQL database and tables (SQL migration scripts needed)

5. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get a specific client
- `POST /api/clients` - Create a new client
- `PUT /api/clients/:id` - Update a client
- `DELETE /api/clients/:id` - Delete a client

### Caregivers
- `GET /api/caregivers` - Get all caregivers
- `GET /api/caregivers/:id` - Get a specific caregiver
- `POST /api/caregivers` - Create a new caregiver
- `PUT /api/caregivers/:id` - Update a caregiver
- `DELETE /api/caregivers/:id` - Delete a caregiver

### Employees
- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get a specific employee
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/:id` - Update an employee
- `DELETE /api/employees/:id` - Delete an employee

### Finance
- `GET /api/finance/income` - Get all income records
- `POST /api/finance/income` - Create income record
- `PUT /api/finance/income/:id` - Update income record
- `DELETE /api/finance/income/:id` - Delete income record
- `GET /api/finance/expense` - Get all expense records
- `POST /api/finance/expense` - Create expense record
- `PUT /api/finance/expense/:id` - Update expense record
- `DELETE /api/finance/expense/:id` - Delete expense record

### Documents
- `POST /api/documents/upload` - Upload a document
- `GET /api/documents` - Get documents for an entity
- `DELETE /api/documents/:id` - Delete a document

## ID Generation

The system uses a custom ID generation format:
- **Clients**: `NCFLCL` + Year + Sequence (e.g., `NCFLCL2026000001`)
- **Caregivers**: `NCFLCG` + Year + Sequence (e.g., `NCFLCG2026000001`)
- **Employees**: `NCFLEM` + Year + Sequence (e.g., `NCFLEM2026000001`)

## File Upload

Supported file types:
- PDF documents
- Images (JPEG, PNG)
- Word documents (DOC)

Maximum file size: 10MB

## Database Schema

The system requires the following tables:
- `clients`
- `caregivers`
- `employees`
- `income_records`
- `expense_records`
- `documents`

Sequences needed:
- `client_id_seq`
- `caregiver_id_seq`
- `employee_id_seq`

## Deployment

### Building for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License

## Support

For support, contact the development team or create an issue in the repository.
