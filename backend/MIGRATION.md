# Database Migration Scripts

## Create Tables

```sql
-- Create sequences
CREATE SEQUENCE client_id_seq START 1;
CREATE SEQUENCE caregiver_id_seq START 1;
CREATE SEQUENCE employee_id_seq START 1;

-- Clients table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_initial VARCHAR(1),
  last_name VARCHAR(100) NOT NULL,
  gender VARCHAR(20),
  date_of_birth DATE,
  ssn VARCHAR(11),
  phone_number VARCHAR(20),
  email VARCHAR(100),
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(2),
  zip_code VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Caregivers table
CREATE TABLE caregivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  caregiver_id VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_initial VARCHAR(1),
  last_name VARCHAR(100) NOT NULL,
  gender VARCHAR(20),
  date_of_birth DATE,
  ssn VARCHAR(11),
  phone_number VARCHAR(20),
  email VARCHAR(100),
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(2),
  zip_code VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Employees table
CREATE TABLE employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_initial VARCHAR(1),
  last_name VARCHAR(100) NOT NULL,
  gender VARCHAR(20),
  date_of_birth DATE,
  ssn VARCHAR(11),
  phone_number VARCHAR(20),
  email VARCHAR(100),
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(2),
  zip_code VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Income Records table
CREATE TABLE income_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  income_category VARCHAR(100) NOT NULL,
  income_name VARCHAR(255) NOT NULL,
  client_id UUID REFERENCES clients(id),
  amount DECIMAL(10, 2) NOT NULL,
  income_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Expense Records table
CREATE TABLE expense_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  expense_category VARCHAR(100) NOT NULL,
  expense_name VARCHAR(255) NOT NULL,
  caregiver_id UUID REFERENCES caregivers(id),
  employee_id UUID REFERENCES employees(id),
  amount DECIMAL(10, 2) NOT NULL,
  expense_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Documents table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_name VARCHAR(255) NOT NULL,
  document_path VARCHAR(500) NOT NULL,
  document_url VARCHAR(500) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id UUID NOT NULL,
  mime_type VARCHAR(100),
  file_size INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_client_id ON clients(client_id);
CREATE INDEX idx_caregiver_id ON caregivers(caregiver_id);
CREATE INDEX idx_employee_id ON employees(employee_id);
CREATE INDEX idx_income_client ON income_records(client_id);
CREATE INDEX idx_expense_caregiver ON expense_records(caregiver_id);
CREATE INDEX idx_expense_employee ON expense_records(employee_id);
CREATE INDEX idx_document_entity ON documents(entity_type, entity_id);
```

## Run Migration

To run this migration, connect to your PostgreSQL database and execute the SQL commands above.
