export interface Client {
  id: string;
  client_id: string;
  first_name: string;
  middle_initial?: string;
  last_name: string;
  gender?: string;
  date_of_birth?: Date;
  ssn?: string;
  phone_number?: string;
  email?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Caregiver {
  id: string;
  caregiver_id: string;
  first_name: string;
  middle_initial?: string;
  last_name: string;
  gender?: string;
  date_of_birth?: Date;
  ssn?: string;
  phone_number?: string;
  email?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Employee {
  id: string;
  employee_id: string;
  first_name: string;
  middle_initial?: string;
  last_name: string;
  gender?: string;
  date_of_birth?: Date;
  ssn?: string;
  phone_number?: string;
  email?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at: Date;
  updated_at: Date;
}

export interface IncomeRecord {
  id: string;
  income_category: string;
  income_name: string;
  client_id?: string;
  amount: number;
  income_date: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface ExpenseRecord {
  id: string;
  expense_category: string;
  expense_name: string;
  caregiver_id?: string;
  employee_id?: string;
  amount: number;
  expense_date: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface Document {
  id: string;
  document_name: string;
  document_path: string;
  document_url: string;
  entity_type: string;
  entity_id: string;
  mime_type: string;
  file_size: number;
  created_at: Date;
  updated_at: Date;
}
