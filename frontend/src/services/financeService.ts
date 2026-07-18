import apiClient from './api';

export const financeService = {
  getIncome: async () => {
    const response = await apiClient.get('/finance/income');
    return response.data;
  },
  createIncome: async (data: any) => {
    const response = await apiClient.post('/finance/income', data);
    return response.data;
  },
  updateIncome: async (id: string, data: any) => {
    const response = await apiClient.put(`/finance/income/${id}`, data);
    return response.data;
  },
  deleteIncome: async (id: string) => {
    const response = await apiClient.delete(`/finance/income/${id}`);
    return response.data;
  },
  getExpenses: async () => {
    const response = await apiClient.get('/finance/expense');
    return response.data;
  },
  createExpense: async (data: any) => {
    const response = await apiClient.post('/finance/expense', data);
    return response.data;
  },
  updateExpense: async (id: string, data: any) => {
    const response = await apiClient.put(`/finance/expense/${id}`, data);
    return response.data;
  },
  deleteExpense: async (id: string) => {
    const response = await apiClient.delete(`/finance/expense/${id}`);
    return response.data;
  },
};
