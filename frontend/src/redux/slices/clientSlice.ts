import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Client {
  id: string;
  clientId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  [key: string]: any;
}

interface ClientState {
  items: Client[];
  currentClient: Client | null;
  loading: boolean;
  error: string | null;
}

const initialState: ClientState = {
  items: [],
  currentClient: null,
  loading: false,
  error: null,
};

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients: (state, action: PayloadAction<Client[]>) => {
      state.items = action.payload;
    },
    setCurrentClient: (state, action: PayloadAction<Client | null>) => {
      state.currentClient = action.payload;
    },
    addClient: (state, action: PayloadAction<Client>) => {
      state.items.push(action.payload);
    },
    updateClient: (state, action: PayloadAction<Client>) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteClient: (state, action: PayloadAction<string>) => {
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
  setClients,
  setCurrentClient,
  addClient,
  updateClient,
  deleteClient,
  setLoading,
  setError,
} = clientSlice.actions;

export default clientSlice.reducer;
