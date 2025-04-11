import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography, FormHelperText } from "@mui/material";
import AuthWrapper from 'sections/auth/AuthWrapper';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import API from "../../../api/axios";

export default function DaftarWisata({ onAddWisata }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleBack = async () => {
    navigate('/operator/wisata');
  }

  return (
    <AuthWrapper>
      <Button variant="contained" color="primary" startIcon={<ArrowLeftOutlined />} onClick={handleBack}>
        Back
      </Button>
      <Formik
        initialValues={{
          namaWisata: "",
          kategori: "",
          urlBukti: "",
          lokasiWisata: "",
          linkGoogleMap: ""
        }}
        validationSchema={Yup.object().shape({
          namaWisata: Yup.string().required("Nama wisata harus diisi"),
          kategori: Yup.string().required("Kategori harus dipilih"),
          urlBukti: Yup.string()
            .url("Masukkan URL yang valid")
            .required("URL bukti harus diisi"),
          lokasiWisata: Yup.string().required("Lokasi wisata harus diisi"),
          linkGoogleMap: Yup.string()
            .url("Masukkan URL Google Maps yang valid")
            .required("Link Google Map harus diisi")
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await API.post("/daftar-wisata", values, { 
              withCredentials: true 
            });

            if (response.status === 201) {
              console.log("Wisata berhasil ditambahkan:", values);
              onAddWisata(values);
              resetForm();
              alert("Wisata berhasil ditambahkan!");
            }
          } catch (error) {
            console.error("Error menambahkan wisata:", error);
            alert("Gagal menambahkan wisata");
          }
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Box>
            <Typography variant="h6" align="center" gutterBottom>
              Ajukan Wisata
            </Typography>

            <form noValidate onSubmit={handleSubmit}>
              <TextField
                label="Nama Wisata"
                name="namaWisata"
                fullWidth
                value={values.namaWisata}
                onChange={handleChange}
                error={Boolean(touched.namaWisata && errors.namaWisata)}
                helperText={
                  (touched.namaWisata && errors.namaWisata) || "Masukkan nama wisata yang akan diajukan"
                }
                sx={{ mb: 2 }}
              />

              <FormControl fullWidth sx={{ mb: 2 }} error={Boolean(touched.kategori && errors.kategori)}>
                <InputLabel>Kategori</InputLabel>
                <Select
                  name="kategori"
                  value={values.kategori}
                  onChange={handleChange}
                  disabled={loading}
                  label="Kategori"
                >
                  {loading ? (
                    <MenuItem value="">Memuat kategori...</MenuItem>
                  ) : (
                    categories.map((category, index) => (
                      <MenuItem key={index} value={category.id || category._id}>
                        {category.name_category_wisata}
                      </MenuItem>
                    ))
                  )}
                </Select>
                <FormHelperText>
                  {(touched.kategori && errors.kategori) || "Pilih kategori wisata"}
                </FormHelperText>
              </FormControl>

              <TextField
                label="URL Bukti"
                name="urlBukti"
                fullWidth
                value={values.urlBukti}
                onChange={handleChange}
                error={Boolean(touched.urlBukti && errors.urlBukti)}
                helperText={
                  (touched.urlBukti && errors.urlBukti) || "Sertakan link berisi bukti bahwa itu wisata Anda"
                }
                sx={{ mb: 2 }}
              />

              <TextField
                label="Lokasi Wisata"
                name="lokasiWisata"
                fullWidth
                multiline
                rows={3}
                value={values.lokasiWisata}
                onChange={handleChange}
                error={Boolean(touched.lokasiWisata && errors.lokasiWisata)}
                helperText={
                  (touched.lokasiWisata && errors.lokasiWisata) || "Tulis alamat lengkap wisata Anda"
                }
                sx={{ mb: 2 }}
              />

              <TextField
                label="Link Google Map"
                name="linkGoogleMap"
                fullWidth
                value={values.linkGoogleMap}
                onChange={handleChange}
                error={Boolean(touched.linkGoogleMap && errors.linkGoogleMap)}
                helperText={
                  (touched.linkGoogleMap && errors.linkGoogleMap) || "Sertakan link Google Map wisata Anda"
                }
                sx={{ mb: 2 }}
              />

              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth
                disabled={isSubmitting || loading}
              >
                {isSubmitting ? 'Mengirim...' : 'Ajukan Wisata'}
              </Button>
            </form>
          </Box>
        )}
      </Formik>
    </AuthWrapper>
  );
}

DaftarWisata.propTypes = { onAddWisata: PropTypes.func };