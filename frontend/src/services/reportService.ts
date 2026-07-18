import apiClient from './api';
import { saveAs } from 'file-saver';

export const reportService = {
  generateClientReport: async (clientId: string, reportTypes: string[], dateRange: any) => {
    const response = await apiClient.post('/reports/client', {
      clientId,
      reportTypes,
      dateRange,
    }, {
      responseType: 'blob',
    });
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `client-report-${clientId}.xlsx`);
  },
  generateCaregiverReport: async (caregiverId: string, reportTypes: string[], dateRange: any) => {
    const response = await apiClient.post('/reports/caregiver', {
      caregiverId,
      reportTypes,
      dateRange,
    }, {
      responseType: 'blob',
    });
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `caregiver-report-${caregiverId}.xlsx`);
  },
  generateEmployeeReport: async (employeeId: string, reportTypes: string[], dateRange: any) => {
    const response = await apiClient.post('/reports/employee', {
      employeeId,
      reportTypes,
      dateRange,
    }, {
      responseType: 'blob',
    });
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `employee-report-${employeeId}.xlsx`);
  },
  generateFinanceReport: async (reportTypes: string[], dateRange: any) => {
    const response = await apiClient.post('/reports/finance', {
      reportTypes,
      dateRange,
    }, {
      responseType: 'blob',
    });
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `finance-report.xlsx`);
  },
};
