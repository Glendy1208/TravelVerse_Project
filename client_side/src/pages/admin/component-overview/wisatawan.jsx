import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
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
import API from "../../../api/axios"; // pastikan path API benar

// ==============================|| WISATAWAN PAGE ||============================== //
export default function Wisatawan() {
  const [wisatawan, setWisatawan] = useState([]);

  useEffect(() => {
    API.get('/api/admin/wisatawans', { withCredentials: true })
      .then(response => {
        const fetchedWisatawan = response.data[0].payload; // Mengakses payload
        setWisatawan(fetchedWisatawan);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized access - please log in.');
        } else {
          console.error('An error occurred:', error);
        }
      });
  }, []); // Efek dijalankan sekali setelah komponen pertama kali dimuat

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Wisatawan List
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wisatawan.map((wisatawan1, index) => (
              <TableRow key={wisatawan1.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{wisatawan1.username}</TableCell>
                <TableCell>{wisatawan1.name}</TableCell>
                <TableCell>{wisatawan1.email}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <button>Delete</button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
