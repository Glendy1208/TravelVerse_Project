import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MainCard from 'components/MainCard';
import OrdersTable from 'sections/dashboard/default/OrdersTable';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import useUser from '../../../service/api/getUser';

const avatarSX = { width: 36, height: 36, fontSize: '1rem' };
const actionSX = { mt: 0.75, ml: 1, top: 'auto', right: 'auto', alignSelf: 'flex-start', transform: 'none' };

export default function Transaksi() {
  const user = useUser();
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* Recent Orders */}
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      {/* Transaction History */}
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Typography variant="h5">Transaction History {user?.username}</Typography>
          </Grid>
          <Grid />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{ px: 0, py: 0, '& .MuiListItemButton-root': { py: 1.5, px: 2, '& .MuiAvatar-root': avatarSX, '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' } } }}
          >
            <ListItem component={ListItemButton} divider secondaryAction={<Stack sx={{ alignItems: 'flex-end' }}><Typography variant="subtitle1">+ $1,430</Typography><Typography variant="h6" color="secondary">78%</Typography></Stack>}>
              <ListItemAvatar><Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter' }}><GiftOutlined /></Avatar></ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
            </ListItem>
            <ListItem component={ListItemButton} divider secondaryAction={<Stack sx={{ alignItems: 'flex-end' }}><Typography variant="subtitle1">+ $302</Typography><Typography variant="h6" color="secondary">8%</Typography></Stack>}>
              <ListItemAvatar><Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}><MessageOutlined /></Avatar></ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
            </ListItem>
            <ListItem component={ListItemButton} secondaryAction={<Stack sx={{ alignItems: 'flex-end' }}><Typography variant="subtitle1">+ $682</Typography><Typography variant="h6" color="secondary">16%</Typography></Stack>}>
              <ListItemAvatar><Avatar sx={{ color: 'error.main', bgcolor: 'error.lighter' }}><SettingOutlined /></Avatar></ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
            </ListItem>
          </List>
        </MainCard>
      </Grid>
    </Grid>
  );
}
