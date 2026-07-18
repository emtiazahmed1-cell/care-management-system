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
