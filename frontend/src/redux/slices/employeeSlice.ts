import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  [key: string]: any;
}

interface EmployeeState {
  items: Employee[];
  currentEmployee: Employee | null;
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  items: [],
  currentEmployee: null,
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.items = action.payload;
    },
    setCurrentEmployee: (state, action: PayloadAction<Employee | null>) => {
      state.currentEmployee = action.payload;
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.items.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.items.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteEmployee: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setEmployees,
  setCurrentEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setLoading,
  setError,
} = employeeSlice.actions;

export default employeeSlice.reducer;
