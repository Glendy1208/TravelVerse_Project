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

// ==============================|| OPERATOR PAGE ||============================== //
export default function Operator() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    // Memanggil API untuk mendapatkan data operators
    API.get('/api/admin/operators', { withCredentials: true })
      .then(response => {
        const fetchedOperators = response.data[0].payload; // Mengakses payload
        setOperators(fetchedOperators);
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
        Operator List
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
            {operators.map((operator, index) => (
              <TableRow key={operator.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{operator.username}</TableCell>
                <TableCell>{operator.name}</TableCell>
                <TableCell>{operator.email}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <button>Show wisata/hotel</button>
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
