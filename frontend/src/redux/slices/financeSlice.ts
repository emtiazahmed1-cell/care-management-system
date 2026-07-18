import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IncomeRecord {
  id: string;
  incomeCategory: string;
  incomeName: string;
  amount: number;
  date: string;
  [key: string]: any;
}

interface ExpenseRecord {
  id: string;
  expenseCategory: string;
  expenseName: string;
  amount: number;
  date: string;
  [key: string]: any;
}

interface FinanceState {
  income: IncomeRecord[];
  expenses: ExpenseRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: FinanceState = {
  income: [],
  expenses: [],
  loading: false,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setIncome: (state, action: PayloadAction<IncomeRecord[]>) => {
      state.income = action.payload;
    },
    setExpenses: (state, action: PayloadAction<ExpenseRecord[]>) => {
      state.expenses = action.payload;
    },
    addIncome: (state, action: PayloadAction<IncomeRecord>) => {
      state.income.push(action.payload);
    },
    addExpense: (state, action: PayloadAction<ExpenseRecord>) => {
      state.expenses.push(action.payload);
    },
    updateIncome: (state, action: PayloadAction<IncomeRecord>) => {
      const index = state.income.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.income[index] = action.payload;
      }
    },
    updateExpense: (state, action: PayloadAction<ExpenseRecord>) => {
      const index = state.expenses.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
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
  setIncome,
  setExpenses,
  addIncome,
  addExpense,
  updateIncome,
  updateExpense,
  setLoading,
  setError,
} = financeSlice.actions;

export default financeSlice.reducer;
