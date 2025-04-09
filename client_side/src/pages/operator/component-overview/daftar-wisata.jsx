import { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from "@mui/material";
import API from "../../../service/api/axiosConfig";
import AuthWrapper from 'sections/auth/AuthWrapper';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


export default function DaftarWisata({ onAddWisata }) {
  const [kategori, setKategori] = useState("");
  const navigate = useNavigate()

  const handleBack = async () => {
    navigate('/operator/wisata');
  }


  return (
    <AuthWrapper>
      <Button variant="contained" color="primary" startIcon={<ArrowLeftOutlined />}  onClick={handleBack}>
        Back
      </Button>
      <Formik
        initialValues={{
          namaWisata: "",
          gambar: "",
          kategori: ""
        }}
        validationSchema={Yup.object().shape({
          namaWisata: Yup.string().required("Nama wisata harus diisi"),
          kategori: Yup.string().required("Kategori harus dipilih"),
          gambar: Yup.string().url("Masukkan URL yang valid").required("URL gambar harus diisi")
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await API.post("/daftar-wisata", values);

            if (response.status === 201) {
              console.log("Wisata berhasil ditambahkan:", values);
              onAddWisata(values); // Kirim data ke parent
              resetForm(); // Reset form setelah sukses
              alert("Wisata berhasil ditambahkan!");
            }
          } catch (error) {
            console.error("Error menambahkan wisata:", error);
            alert("Gagal menambahkan wisata");
          }
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
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
                helperText={touched.namaWisata && errors.namaWisata}
                sx={{ mb: 2 }}
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Kategori</InputLabel>
                <Select
                  name="kategori"
                  value={values.kategori}
                  onChange={(e) => {
                    setKategori(e.target.value);
                    handleChange(e);
                  }}
                  error={Boolean(touched.kategori && errors.kategori)}
                >
                  <MenuItem value="Pantai">Pantai</MenuItem>
                  <MenuItem value="Gunung">Gunung</MenuItem>
                  <MenuItem value="Danau">Danau</MenuItem>
                  <MenuItem value="Candi">Candi</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="URL Gambar"
                name="gambar"
                fullWidth
                value={values.gambar}
                onChange={handleChange}
                error={Boolean(touched.gambar && errors.gambar)}
                helperText={touched.gambar && errors.gambar}
                sx={{ mb: 2 }}
              />

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Ajukan Wisata
              </Button>
            </form>
          </Box>
        )}
      </Formik>

    </AuthWrapper>
  );
}

DaftarWisata.propTypes = { onAddWisata: PropTypes.func };
