import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Dashboard: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Dashboard
        </Typography>
        <Typography color="textSecondary">
          Welcome to the Care Management System
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PeopleIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Clients
                  </Typography>
                  <Typography variant="h6">0</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ fontSize: 40, mr: 2, color: '#dc004e' }} />
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Caregivers
                  </Typography>
                  <Typography variant="h6">0</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DescriptionIcon sx={{ fontSize: 40, mr: 2, color: '#f57c00' }} />
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Employees
                  </Typography>
                  <Typography variant="h6">0</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AttachMoneyIcon sx={{ fontSize: 40, mr: 2, color: '#388e3c' }} />
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Income
                  </Typography>
                  <Typography variant="h6">$0</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="main navigation"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Tab label="Clients" icon={<PeopleIcon />} iconPosition="start" />
          <Tab label="Caregivers" icon={<PersonIcon />} iconPosition="start" />
          <Tab label="Employees" icon={<DescriptionIcon />} iconPosition="start" />
          <Tab label="Finance" icon={<AttachMoneyIcon />} iconPosition="start" />
          <Tab label="Reports" icon={<BarChartIcon />} iconPosition="start" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Typography>Clients tab content coming soon...</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Caregivers tab content coming soon...</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Employees tab content coming soon...</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography>Finance tab content coming soon...</Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography>Reports tab content coming soon...</Typography>
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default Dashboard;
