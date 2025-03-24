import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from 'components/@extended/IconButton';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import API from '../../../service/api/axiosConfig';

import {
    PlusCircleFilled
  } from '@ant-design/icons';
import { display, positions, width } from '@mui/system';
  
  // icons
  const icons = {
    PlusCircleFilled
  };

// Dummy data wisata
const wisataList = [
  { id: 1, name: 'Wisata 1', image: 'https://source.unsplash.com/200x200/?beach' },
  { id: 2, name: 'Wisata 2', image: 'https://source.unsplash.com/200x200/?forest' },
  { id: 3, name: 'Wisata 3', image: 'https://source.unsplash.com/200x200/?mountain' },
  { id: 4, name: 'Wisata 1', image: 'https://source.unsplash.com/200x200/?beach' },
  { id: 5, name: 'Wisata 2', image: 'https://source.unsplash.com/200x200/?forest' },
  { id: 6, name: 'Wisata 3', image: 'https://source.unsplash.com/200x200/?mountain' }
];

export default function WisataPage() {

  const navigate = useNavigate();
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredWisata = category === 'All' ? wisataList : wisataList.filter(w => w.category === category);

  const handleLogout = async () => {
    try {
        const response = await API.post("/logout");

        const data = await response.data;
        console.log(data.message); // "Logout berhasil"

        // Redirect ke halaman login atau update state
        navigate("/login");
    } catch (error) {
        console.error("Logout gagal:", error);
    }
  };

  return (
    <Box sx={{ display: 'flex', p: 3, bgcolor: '#E0E0E0', height: '100vh', borderRadius: 2 }}>
      {/* Box utama wisata dan chatbot menyatu */}
      <Box sx={{ display: 'flex', flex: 1, bgcolor: 'white', p: 3, borderRadius: 2 }}>

        {/* Wisata Section */}
        <Box sx={{ flex: 2, p: 3, borderRight: '2px solid #ddd'  }}>
          {/* Navbar Filter */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 2 , 
          }}>

            <IconButton
              size="large"
              sx={{
                positions: 'absolute',
                color: 'white',
                backgroundColor: '#d32f2f', // Warna merah khas logout
                width: '6vw',
                borderRadius: '10px',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: '#b71c1c', // Warna lebih gelap saat hover
                },
                padding: '10px',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                height: '50px',
                left: '-200px',
                borderRadius: '20px'
              }}
              onClick={handleLogout}
            >
              <LogoutOutlined sx={{ marginRight: '5px' }} />
            </IconButton>

            <Box sx={{ 
              p: 2, 
              backgroundColor: '#399fed', 
              borderRadius: 2, 
              display: 'inline-flex', 
              justifyContent: 'center',
              alignItems: 'center',
              height: '50px',
              width: '25vw',
              borderRadius: '20px'
            }}>


              <Stack direction="row" spacing={5}>
                <Button sx={{ color: 'white', borderRadius: '15px', width: '5vw' }}>Tour</Button>
                <Button sx={{ color: 'white', borderRadius: '15px', width: '5vw' }}>Location</Button>
                <Button sx={{ color: 'white', borderRadius: '15px', width: '5vw' }}>Facilities</Button>
              </Stack>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Kategori</InputLabel>
              <Select value={category} onChange={handleCategoryChange}>
                <MenuItem value="All">Semua</MenuItem>
                <MenuItem value="Pantai">Pantai</MenuItem>
                <MenuItem value="Gunung">Gunung</MenuItem>
                <MenuItem value="Danau">Danau</MenuItem>
                <MenuItem value="Candi">Candi</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Grid wisata */}
          <Grid container spacing={3}>
            {wisataList.map((wisata) => (
              <Grid item xs={12} sm={6} md={4} key={wisata.id}>
                <Card>
                  <CardMedia component="img" height="150" image={wisata.image} alt={wisata.name} />
                  <CardContent>
                    <Typography variant="h6" align="center">{wisata.name}</Typography>
                    <Typography variant="body2" color="textSecondary" align="center">Lorem</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Chatbot TravelBot */}
        <Box sx={{ flex: 1, p: 3 }}>
          <Typography variant="h6">TravelBot</Typography>
          <Box 
            sx={{ 
              bgcolor: '#F5F5F5', 
              height: '88%', 
              borderRadius: 1, 
              p: 2, 
              mt: 2,
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'flex-end' // Bawa ke bawah
            }}
          >
            <Typography>What can I help you?</Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <input type="text" placeholder="Type Message" style={{ flex: 1, padding: '8px' }} />
            <Button variant="contained">Send</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}