import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { PlusSquareOutlined } from '@ant-design/icons';

// Dummy data wisata
const wisataList = [
  { id: 1, name: 'Pantai Kuta', image: 'https://source.unsplash.com/400x300/?beach' },
  { id: 2, name: 'Gunung Bromo', image: 'https://source.unsplash.com/400x300/?mountain' },
  { id: 3, name: 'Danau Toba', image: 'https://source.unsplash.com/400x300/?lake' },
  { id: 4, name: 'Candi Borobudur', image: 'https://source.unsplash.com/400x300/?temple' }
];

export default function WisataPage() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h4">Daftar Wisata</Typography>
        <Button variant="contained" color="primary" startIcon={<PlusSquareOutlined />}>
          Daftarkan Wisatamu
        </Button>
      </Grid>

      {/* Grid Wisata */}
      <Grid container spacing={3}>
        {wisataList.map((wisata) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={wisata.id}>
            <Card>
              <CardMedia component="img" height="200" image={wisata.image} alt={wisata.name} />
              <CardContent>
                <Typography variant="h6" align="center">{wisata.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
