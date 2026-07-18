-- Create database if not exists
CREATE DATABASE IF NOT EXISTS care_management_db;

-- Connect to the database
\c care_management_db;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ==================== CLIENTS ====================

CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_initial VARCHAR(1),
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(50),
    date_of_birth DATE,
    ssn VARCHAR(11),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_emergency_contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    full_name VARCHAR(150) NOT NULL,
    relationship VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_physicians (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    full_name VARCHAR(150) NOT NULL,
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_home_environment (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    residence_type VARCHAR(100),
    lives_alone BOOLEAN,
    pets_in_home BOOLEAN,
    entry_access_instructions TEXT,
    fall_risks TEXT,
    safety_equipment TEXT,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    companionship_support BOOLEAN DEFAULT FALSE,
    light_housekeeping BOOLEAN DEFAULT FALSE,
    meal_preparation BOOLEAN DEFAULT FALSE,
    medication_reminders BOOLEAN DEFAULT FALSE,
    transportation BOOLEAN DEFAULT FALSE,
    errands BOOLEAN DEFAULT FALSE,
    mobility_support BOOLEAN DEFAULT FALSE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_personal_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    preferred_name VARCHAR(100),
    preferred_language VARCHAR(50),
    food_preferences TEXT,
    activity_preferences TEXT,
    communication_preferences TEXT,
    do_not_disturb_times VARCHAR(255),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_allergies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    has_allergies BOOLEAN DEFAULT FALSE,
    allergy_description TEXT,
    severity VARCHAR(50),
    detailed_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_dietary_restrictions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    has_restrictions BOOLEAN DEFAULT FALSE,
    severity VARCHAR(50),
    detailed_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    schedule_date DATE,
    start_time TIME,
    end_time TIME,
    service_type VARCHAR(100),
    assigned_caregiver UUID,
    recurrence VARCHAR(50),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_payment_information (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    payment_method VARCHAR(50),
    payment_source VARCHAR(100),
    card_holder_name VARCHAR(150),
    card_number VARCHAR(20),
    card_expiration_date VARCHAR(5),
    security_code VARCHAR(4),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client_billing_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    billing_date DATE,
    service_period VARCHAR(100),
    amount DECIMAL(10, 2),
    payment_status VARCHAR(50),
    paid_date DATE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==================== CAREGIVERS ====================

CREATE TABLE caregivers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_initial VARCHAR(1),
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(50),
    date_of_birth DATE,
    ssn VARCHAR(11),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_emergency_contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    full_name VARCHAR(150) NOT NULL,
    relationship VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_identity_employment (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    id_type VARCHAR(50),
    id_number VARCHAR(50),
    id_expiration_date DATE,
    work_authorization_status VARCHAR(50),
    i9_status VARCHAR(50),
    verification_date DATE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_background_screening (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    background_check_status VARCHAR(50),
    background_check_date DATE,
    drug_screen_status VARCHAR(50),
    tb_test_status VARCHAR(50),
    cpr_status VARCHAR(50),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_qualifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    certification_type VARCHAR(100),
    certification_number VARCHAR(50),
    issue_date DATE,
    expiration_date DATE,
    training_completed VARCHAR(255),
    skills VARCHAR(500),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_employment_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    employer_name VARCHAR(150),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    start_date DATE,
    end_date DATE,
    starting_salary_per_hour DECIMAL(8, 2),
    ending_salary_per_hour DECIMAL(8, 2),
    position_name VARCHAR(100),
    job_description TEXT,
    supervisor_name VARCHAR(150),
    supervisor_phone VARCHAR(20),
    supervisor_email VARCHAR(100),
    reason_for_leaving TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_education_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    institution_name VARCHAR(150),
    address VARCHAR(255),
    degree_diploma_name VARCHAR(150),
    start_date DATE,
    end_date DATE,
    degree_earned BOOLEAN DEFAULT FALSE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_onboarding_payroll (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    hire_date DATE,
    employment_type VARCHAR(50),
    pay_rate DECIMAL(8, 2),
    onboarding_status VARCHAR(50),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_service_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    companionship_support BOOLEAN DEFAULT FALSE,
    light_housekeeping BOOLEAN DEFAULT FALSE,
    meal_preparation BOOLEAN DEFAULT FALSE,
    medication_reminders BOOLEAN DEFAULT FALSE,
    transportation BOOLEAN DEFAULT FALSE,
    errands BOOLEAN DEFAULT FALSE,
    mobility_support BOOLEAN DEFAULT FALSE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    available_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    availability_type VARCHAR(50),
    companionship_support BOOLEAN DEFAULT FALSE,
    light_housekeeping BOOLEAN DEFAULT FALSE,
    meal_preparation BOOLEAN DEFAULT FALSE,
    medication_reminders BOOLEAN DEFAULT FALSE,
    transportation BOOLEAN DEFAULT FALSE,
    errands BOOLEAN DEFAULT FALSE,
    mobility_support BOOLEAN DEFAULT FALSE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE caregiver_timesheets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
    week_beginning_date DATE NOT NULL,
    client_id UUID REFERENCES clients(id),
    timesheet_date DATE NOT NULL,
    clock_in TIME,
    clock_out TIME,
    total_hours DECIMAL(5, 2),
    companionship_support BOOLEAN DEFAULT FALSE,
    light_housekeeping BOOLEAN DEFAULT FALSE,
    meal_preparation BOOLEAN DEFAULT FALSE,
    medication_reminders BOOLEAN DEFAULT FALSE,
    transportation BOOLEAN DEFAULT FALSE,
    errands BOOLEAN DEFAULT FALSE,
    mobility_support BOOLEAN DEFAULT FALSE,
    notes TEXT,
    weekly_total_hours DECIMAL(6, 2),
    approval_status VARCHAR(50),
    caregiver_signature_date DATE,
    supervisor_comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==================== EMPLOYEES ====================

CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_initial VARCHAR(1),
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(50),
    date_of_birth DATE,
    ssn VARCHAR(11),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_emergency_contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    full_name VARCHAR(150) NOT NULL,
    relationship VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_identity_employment (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    id_type VARCHAR(50),
    id_number VARCHAR(50),
    id_expiration_date DATE,
    work_authorization_status VARCHAR(50),
    i9_status VARCHAR(50),
    verification_date DATE,
    w4_status VARCHAR(50),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_background_screening (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    background_check_status VARCHAR(50),
    background_check_date DATE,
    drug_screen_status VARCHAR(50),
    tb_test_status VARCHAR(50),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_qualifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    certification_type VARCHAR(100),
    certification_number VARCHAR(50),
    issue_date DATE,
    expiration_date DATE,
    training_completed VARCHAR(255),
    skills VARCHAR(500),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_employment_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    employer_name VARCHAR(150),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    start_date DATE,
    end_date DATE,
    starting_salary_per_hour DECIMAL(8, 2),
    ending_salary_per_hour DECIMAL(8, 2),
    position_name VARCHAR(100),
    job_description TEXT,
    supervisor_name VARCHAR(150),
    supervisor_phone VARCHAR(20),
    supervisor_email VARCHAR(100),
    reason_for_leaving TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_education_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    institution_name VARCHAR(150),
    address VARCHAR(255),
    degree_diploma_name VARCHAR(150),
    start_date DATE,
    end_date DATE,
    degree_earned BOOLEAN DEFAULT FALSE,
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_onboarding_payroll (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    hire_date DATE,
    employment_type VARCHAR(50),
    pay_rate DECIMAL(8, 2),
    payroll_id VARCHAR(50),
    paycheck_status VARCHAR(50),
    direct_deposit_status VARCHAR(50),
    onboarding_status VARCHAR(50),
    additional_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_compensation_benefits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    bank_name VARCHAR(150),
    account_number VARCHAR(50),
    routing_number VARCHAR(50),
    account_type VARCHAR(50),
    k401_enrollment_status VARCHAR(50),
    k401_contribution_percentage DECIMAL(5, 2),
    health_insurance_plan_selection VARCHAR(100),
    health_insurance_plan_name VARCHAR(150),
    health_insurance_plan_id VARCHAR(50),
    pto_hours_allocation DECIMAL(6, 2),
    pto_hours_balance DECIMAL(6, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employee_timesheets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    week_beginning_date DATE NOT NULL,
    timesheet_date DATE NOT NULL,
    total_hours DECIMAL(5, 2),
    notes TEXT,
    weekly_total_hours DECIMAL(6, 2),
    approval_status VARCHAR(50),
    employee_signature_date DATE,
    supervisor_comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==================== FINANCE ====================

CREATE TABLE income_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    income_category VARCHAR(100) NOT NULL,
    income_name VARCHAR(150) NOT NULL,
    client_id UUID REFERENCES clients(id),
    amount DECIMAL(10, 2) NOT NULL,
    income_date DATE NOT NULL,
    status VARCHAR(50),
    additional_note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expense_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    expense_category VARCHAR(100) NOT NULL,
    expense_name VARCHAR(150) NOT NULL,
    caregiver_id UUID REFERENCES caregivers(id),
    employee_id UUID REFERENCES employees(id),
    amount DECIMAL(10, 2) NOT NULL,
    expense_date DATE NOT NULL,
    status VARCHAR(50),
    additional_note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==================== DOCUMENTS ====================

CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_name VARCHAR(255) NOT NULL,
    document_type VARCHAR(50),
    document_date DATE,
    expiration_date DATE,
    document_path VARCHAR(500),
    document_url VARCHAR(500),
    entity_type VARCHAR(50),
    entity_id UUID NOT NULL,
    file_size BIGINT,
    mime_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==================== CUSTOM FIELDS ====================

CREATE TABLE custom_fields (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL,
    tab_name VARCHAR(100) NOT NULL,
    field_name VARCHAR(100) NOT NULL,
    field_type VARCHAR(50) NOT NULL,
    field_options TEXT,
    is_required BOOLEAN DEFAULT FALSE,
    display_order INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE custom_field_values (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    custom_field_id UUID NOT NULL REFERENCES custom_fields(id) ON DELETE CASCADE,
    entity_id UUID NOT NULL,
    value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==================== SEQUENCES ====================

CREATE SEQUENCE client_id_seq START 1;
CREATE SEQUENCE caregiver_id_seq START 1;
CREATE SEQUENCE employee_id_seq START 1;

-- ==================== INDEXES ====================

CREATE INDEX idx_clients_client_id ON clients(client_id);
CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_phone ON clients(phone_number);
CREATE INDEX idx_caregivers_caregiver_id ON caregivers(caregiver_id);
CREATE INDEX idx_caregivers_email ON caregivers(email);
CREATE INDEX idx_employees_employee_id ON employees(employee_id);
CREATE INDEX idx_employees_email ON employees(email);
CREATE INDEX idx_income_date ON income_records(income_date);
CREATE INDEX idx_expense_date ON expense_records(expense_date);
CREATE INDEX idx_documents_entity ON documents(entity_type, entity_id);
