import apiClient from './api';

export const clientService = {
  getAll: async () => {
    const response = await apiClient.get('/clients');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await apiClient.get(`/clients/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await apiClient.post('/clients', data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await apiClient.put(`/clients/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await apiClient.delete(`/clients/${id}`);
    return response.data;
  },
  getEmergencyContacts: async (clientId: string) => {
    const response = await apiClient.get(`/clients/${clientId}/emergency-contacts`);
    return response.data;
  },
  addEmergencyContact: async (clientId: string, data: any) => {
    const response = await apiClient.post(`/clients/${clientId}/emergency-contacts`, data);
    return response.data;
  },
};
