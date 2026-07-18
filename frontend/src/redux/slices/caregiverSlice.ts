import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Caregiver {
  id: string;
  caregiverId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  [key: string]: any;
}

interface CaregiverState {
  items: Caregiver[];
  currentCaregiver: Caregiver | null;
  loading: boolean;
  error: string | null;
}

const initialState: CaregiverState = {
  items: [],
  currentCaregiver: null,
  loading: false,
  error: null,
};

const caregiverSlice = createSlice({
  name: 'caregivers',
  initialState,
  reducers: {
    setCaregivers: (state, action: PayloadAction<Caregiver[]>) => {
      state.items = action.payload;
    },
    setCurrentCaregiver: (state, action: PayloadAction<Caregiver | null>) => {
      state.currentCaregiver = action.payload;
    },
    addCaregiver: (state, action: PayloadAction<Caregiver>) => {
      state.items.push(action.payload);
    },
    updateCaregiver: (state, action: PayloadAction<Caregiver>) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteCaregiver: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
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
  setCaregivers,
  setCurrentCaregiver,
  addCaregiver,
  updateCaregiver,
  deleteCaregiver,
  setLoading,
  setError,
} = caregiverSlice.actions;

export default caregiverSlice.reducer;
