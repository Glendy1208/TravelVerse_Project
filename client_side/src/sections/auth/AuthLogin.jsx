import PropTypes from 'prop-types';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

import { useNavigate } from 'react-router-dom';
import API from "../../service/api/axiosConfig"

// ============================|| JWT - LOGIN ||============================ //

export default function AuthLogin({ onLogin, isDemo = false }) {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await API.post("/login", { email, password });
  
      if (response.status === 200) {
        console.log("Login berhasil");
        setIsLoggedIn(true);
      }
    } catch (error) {
      if (error.response) {
        console.error("Login Error:", error.response.data.message);
        alert("Login gagal: " + error.response.data.message);
      } else {
        console.error("Network Error:", error);
        alert("Terjadi kesalahan pada server");
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUser = async () => {
        try {
          const response = await API.get("/getUsers");
          if (response.status === 200) {
            const userData = response.data[0].payload[0]; // Sesuaikan dengan response API
            setUser(userData);

            // Navigasi berdasarkan role setelah user didapatkan
            switch (userData.user_category_id) {
              case 1:
                navigate("/admin/dashboard");
                break;
              case 2:
                navigate("/operator/dashboard");
                break;
              case 3:
                navigate("/wisatawan/wisata");
                break;
              default:
                navigate("/login");
            }
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUser();
    }
  }, [isLoggedIn, navigate]);


  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string()
          .required('Password is required')
          .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) => value === value.trim())
          // .max(10, 'Password must be less than 10 characters')
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values.email, values.password); // kirim data ke backend
        setSubmitting(false);
      }}
    >
      {({ errors, handleBlur, handleChange, touched, values, handleSubmit }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                />
              </Stack>
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </Grid>
            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        color="secondary"
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Enter password"
                />
              </Stack>
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </Grid>
            <Grid sx={{ mt: -1 }} size={12}>
              <Stack direction="row" sx={{ gap: 2, alignItems: 'baseline', justifyContent: 'space-between' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                      size="small"
                    />
                  }
                  label={<Typography variant="h6">Keep me sign in</Typography>}
                />
                <Link variant="h6" component={RouterLink} to="#" color="text.primary">
                  Forgot Password?
                </Link>
              </Stack>
            </Grid>
            <Grid size={12}>
              <AnimateButton>
                <Button type="submit" fullWidth size="large" variant="contained" color="primary">
                  Login
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}


AuthLogin.propTypes = { isDemo: PropTypes.bool };
