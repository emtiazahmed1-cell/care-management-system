# Care Management System

A comprehensive dashboard application for managing Clients, Caregivers, Employees, Finance, and Reporting.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Material-UI (MUI)
- **State Management**: Redux Toolkit
- **Backend**: Node.js + Express.js + TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT
- **File Upload**: Multer
- **Report Generation**: ExcelJS
- **API Documentation**: Swagger/OpenAPI

## Project Structure

```
care-management-system/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── redux/              # Redux store, slices, selectors
│   │   ├── services/           # API services
│   │   ├── hooks/              # Custom React hooks
│   │   ├── types/              # TypeScript types
│   │   ├── utils/              # Utility functions
│   │   ├── styles/             # Global styles
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                     # Node.js backend application
│   ├── src/
│   │   ├── models/             # Database models/schemas
│   │   ├── routes/             # API routes
│   │   ├── controllers/        # Route controllers
│   │   ├── middleware/         # Express middleware
│   │   ├── services/           # Business logic
│   │   ├── utils/              # Utility functions
│   │   ├── validators/         # Input validation
│   │   ├── config/             # Configuration files
│   │   ├── uploads/            # Uploaded files storage
│   │   ├── types/              # TypeScript types
│   │   └── server.ts
│   ├── migrations/             # Database migrations
│   ├── seeds/                  # Database seeders
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── database/                    # Database scripts
│   ├── schema.sql              # Full database schema
│   └── migrations/
│
├── docker-compose.yml          # Docker configuration
├── .gitignore
└── README.md
```

## Features

### Client Register
- Demographics & Emergency Contacts
- Physician Contacts
- Home Environment & Safety
- Services
- Personal Preferences
- Allergies & Dietary Restrictions
- Client Schedule
- Payment Information
- Billing History
- Documents with file upload
- Custom fields support

### Caregiver Register
- Demographics & Emergency Contacts
- Identity & Employment Eligibility
- Background & Safety Screening
- Qualifications & Training (multiple records)
- Employment Record (multiple records)
- Education Record (multiple records)
- Onboarding & Payroll
- Caregiver Service Skills
- Caregiver Schedule (weekly availability)
- Time Sheet (weekly calculation)
- Documents with file upload
- Custom fields support

### Employee Register
- Demographics & Emergency Contacts
- Identity & Employment Eligibility
- Background & Safety Screening
- Qualifications & Training (multiple records)
- Employment Record (multiple records)
- Education Record (multiple records)
- Onboarding & Payroll
- Compensation & Benefits
- Time Sheet
- Documents with file upload
- Custom fields support

### Finance Tab
- Income tracking with categories
- Expense tracking with categories
- Sortable and filterable tables
- Financial dashboard

### Reporting Tab
- Client Reports with Excel export
- Caregiver Reports with Excel export
- Employee Reports with Excel export
- Financial Reports with Excel export
- Multi-select report types
- Date range filtering

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your database credentials
npm run migrate
npm run seed
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Database Setup

```bash
# Start PostgreSQL with Docker
docker-compose up -d postgres

# Run migrations
cd backend
npm run migrate
```

## Environment Variables

See `.env.example` in both frontend and backend directories.

## API Endpoints

### Clients
- `GET /api/clients` - List all clients
- `POST /api/clients` - Create new client
- `GET /api/clients/:id` - Get client details
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Caregivers
- `GET /api/caregivers` - List all caregivers
- `POST /api/caregivers` - Create new caregiver
- `GET /api/caregivers/:id` - Get caregiver details
- `PUT /api/caregivers/:id` - Update caregiver
- `DELETE /api/caregivers/:id` - Delete caregiver

### Employees
- `GET /api/employees` - List all employees
- `POST /api/employees` - Create new employee
- `GET /api/employees/:id` - Get employee details
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### Finance
- `GET /api/finance/income` - List income records
- `POST /api/finance/income` - Add income
- `GET /api/finance/expense` - List expense records
- `POST /api/finance/expense` - Add expense

### Reports
- `POST /api/reports/client` - Generate client report
- `POST /api/reports/caregiver` - Generate caregiver report
- `POST /api/reports/employee` - Generate employee report
- `POST /api/reports/finance` - Generate financial report

## File Upload

Documents can be uploaded to any register (Client, Caregiver, Employee):
- `POST /api/documents/upload` - Upload document
- `GET /api/documents/:id` - Download document
- `DELETE /api/documents/:id` - Delete document

## License

Proprietary - All Rights Reserved
