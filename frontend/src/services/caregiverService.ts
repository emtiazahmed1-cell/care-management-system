import apiClient from './api';

export const caregiverService = {
  getAll: async () => {
    const response = await apiClient.get('/caregivers');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await apiClient.get(`/caregivers/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await apiClient.post('/caregivers', data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await apiClient.put(`/caregivers/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await apiClient.delete(`/caregivers/${id}`);
    return response.data;
  },
};
