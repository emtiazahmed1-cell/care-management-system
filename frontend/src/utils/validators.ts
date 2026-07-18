export const validators = {
  email: (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  phoneNumber: (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 || cleaned.length === 11;
  },

  ssn: (ssn: string): boolean => {
    const cleaned = ssn.replace(/\D/g, '');
    return cleaned.length === 9;
  },

  zipCode: (zip: string): boolean => {
    const re = /^\d{5}(-\d{4})?$/;
    return re.test(zip);
  },

  date: (date: string): boolean => {
    return !isNaN(Date.parse(date));
  },

  required: (value: any): boolean => {
    return value !== null && value !== undefined && value !== '';
  },

  minLength: (value: string, min: number): boolean => {
    return value && value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value && value.length <= max;
  },
};
