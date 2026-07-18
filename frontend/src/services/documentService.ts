import apiClient from './api';

export const documentService = {
  upload: async (file: File, entityType: string, entityId: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('entityType', entityType);
    formData.append('entityId', entityId);
    const response = await apiClient.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  getByEntity: async (entityType: string, entityId: string) => {
    const response = await apiClient.get('/documents', {
      params: { entityType, entityId },
    });
    return response.data;
  },
  delete: async (documentId: string) => {
    const response = await apiClient.delete(`/documents/${documentId}`);
    return response.data;
  },
};
