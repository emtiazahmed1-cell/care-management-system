// Client Types
export interface Client {
  id: string;
  clientId: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: Date;
  ssn?: string;
  phoneNumber?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClientEmergencyContact {
  id: string;
  clientId: string;
  fullName: string;
  relationship: string;
  phoneNumber?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface ClientPhysician {
  id: string;
  clientId: string;
  fullName: string;
  phoneNumber?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

// Caregiver Types
export interface Caregiver {
  id: string;
  caregiverId: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: Date;
  ssn?: string;
  phoneNumber?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CaregiverQualification {
  id: string;
  caregiverId: string;
  certificationType: string;
  certificationNumber?: string;
  issueDate?: Date;
  expirationDate?: Date;
  trainingCompleted?: string;
  skills?: string;
  additionalNotes?: string;
}

export interface CaregiverEmploymentRecord {
  id: string;
  caregiverId: string;
  employerName: string;
  address?: string;
  phoneNumber?: string;
  startDate?: Date;
  endDate?: Date;
  startingSalaryPerHour?: number;
  endingSalaryPerHour?: number;
  positionName?: string;
  jobDescription?: string;
  supervisorName?: string;
  supervisorPhone?: string;
  supervisorEmail?: string;
  reasonForLeaving?: string;
}

// Employee Types
export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: Date;
  ssn?: string;
  phoneNumber?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Finance Types
export interface IncomeRecord {
  id: string;
  incomeCategory: string;
  incomeName: string;
  clientId?: string;
  amount: number;
  date: Date;
  status: string;
  additionalNote?: string;
}

export interface ExpenseRecord {
  id: string;
  expenseCategory: string;
  expenseName: string;
  caregiverId?: string;
  employeeId?: string;
  amount: number;
  date: Date;
  status: string;
  additionalNote?: string;
}

// Document Types
export interface Document {
  id: string;
  documentName: string;
  documentType: string;
  documentDate?: Date;
  expirationDate?: Date;
  documentPath: string;
  documentUrl: string;
  entityType: 'client' | 'caregiver' | 'employee';
  entityId: string;
  createdAt: Date;
}

// Custom Field Types
export interface CustomField {
  id: string;
  entityType: 'client' | 'caregiver' | 'employee';
  tabName: string;
  fieldName: string;
  fieldType: 'text' | 'number' | 'date' | 'select' | 'textarea';
  fieldOptions?: string[];
  isRequired: boolean;
  displayOrder: number;
  createdAt: Date;
}

export interface CustomFieldValue {
  id: string;
  customFieldId: string;
  entityId: string;
  value: string;
}
