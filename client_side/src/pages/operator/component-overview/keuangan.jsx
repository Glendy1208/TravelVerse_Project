import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// project imports
import MainCard from 'components/MainCard';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import SaleReportCard from 'sections/dashboard/default/SaleReportCard';

// ==============================|| KEUANGAN PAGE ||============================== //
export default function Keuangan() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* Income Overview */}
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack sx={{ gap: 2 }}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* Analytics Report */}
      <Grid size={{ xs: 12, md: 6, lg: 6 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <ReportAreaChart />
        </MainCard>
      </Grid>

      <Grid size={{ xs: 12, md: 7, lg: 12 }}>
        <SaleReportCard />
      </Grid>
    </Grid>
  );
}