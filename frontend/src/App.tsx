import React from 'react';
import { Box, Container } from '@mui/material';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Layout>
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Dashboard />
        </Container>
      </Box>
    </Layout>
  );
}

export default App;
