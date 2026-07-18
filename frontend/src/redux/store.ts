import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './slices/clientSlice';
import caregiverReducer from './slices/caregiverSlice';
import employeeReducer from './slices/employeeSlice';
import financeReducer from './slices/financeSlice';

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    caregivers: caregiverReducer,
    employees: employeeReducer,
    finance: financeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
