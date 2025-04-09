import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import API from "../../../api/axios";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

export default function Wisata_category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    id: null,
    name_category_wisata: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    API.get('/api/admin/wisata_category', { withCredentials: true })
      .then(response => {
        const fetchedCategories = response.data[0].payload;
        setCategories(fetchedCategories);
        setLoading(false);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized access - please log in.');
        } else {
          console.error('An error occurred:', error);
        }
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kategori ini?')) {
      API.delete(`/api/admin/wisata_category/${id}`, { withCredentials: true })
        .then(() => {
          alert('Kategori berhasil dihapus.');
          fetchCategories();
        })
        .catch(error => {
          console.error('Error deleting category:', error);
          alert('Gagal menghapus kategori.');
        });
    }
  };

  // Modal handlers
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    setCurrentCategory({ name_category_wisata: '' });
  };

  const handleOpenEditModal = (category) => {
    setCurrentCategory({
      id: category.id,
      name_category_wisata: category.name_category_wisata
    });
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setCurrentCategory({ id: null, name_category_wisata: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // API Calls
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await API.post('/api/admin/wisata_category', {
        name_category_wisata: currentCategory.name_category_wisata
      }, { withCredentials: true });

      if (response.data) {
        alert('Kategori berhasil ditambahkan!');
        fetchCategories();
        handleCloseAddModal();
      }
    } catch (error) {
      console.error('Error adding category:', error);
      alert(`Gagal menambahkan kategori: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await API.put(
        `/api/admin/wisata_category/${currentCategory.id}`, // Perbaikan path endpoint
        {
          name_category_wisata: currentCategory.name_category_wisata
        }, 
        { 
          withCredentials: true 
        }
      );
  
      if (response.data) {
        alert('Kategori berhasil diperbarui!');
        fetchCategories();
        handleCloseEditModal();
      }
    } catch (error) {
      console.error('Error updating category:', error);
      alert(`Gagal memperbarui kategori: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Daftar Kategori Wisata
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleOpenAddModal}
        >
          Tambah Kategori
        </Button>
      </Box>
      <Divider sx={{ marginBottom: 2 }} />

      {loading ? (
        <Typography>Memuat data...</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Kategori Wisata</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.length > 0 ? categories.map((category, index) => (
                <TableRow key={category.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{category.name_category_wisata}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="small"
                        onClick={() => handleOpenEditModal(category)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="contained" 
                        color="error" 
                        size="small"
                        onClick={() => handleDelete(category.id)}
                      >
                        Hapus
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Tidak ada data kategori wisata
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Modal untuk Tambah Kategori */}
      <Modal
        open={openAddModal}
        onClose={handleCloseAddModal}
        aria-labelledby="add-modal-title"
      >
        <Box sx={modalStyle}>
          <Typography id="add-modal-title" variant="h6" component="h2" mb={2}>
            Tambah Kategori Baru
          </Typography>
          <form onSubmit={handleAddSubmit}>
            <TextField
              fullWidth
              label="Nama Kategori"
              name="name_category_wisata"
              value={currentCategory.name_category_wisata}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button variant="outlined" onClick={handleCloseAddModal} disabled={isSubmitting}>
                Batal
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Menyimpan...' : 'Simpan'}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      {/* Modal untuk Edit Kategori */}
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="edit-modal-title"
      >
        <Box sx={modalStyle}>
          <Typography id="edit-modal-title" variant="h6" component="h2" mb={2}>
            Edit Kategori
          </Typography>
          <form onSubmit={handleEditSubmit}>
            <TextField
              fullWidth
              label="Nama Kategori"
              name="name_category_wisata"
              value={currentCategory.name_category_wisata}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button variant="outlined" onClick={handleCloseEditModal} disabled={isSubmitting}>
                Batal
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}