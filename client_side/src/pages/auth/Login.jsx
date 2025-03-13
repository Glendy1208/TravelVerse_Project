import { Link, useSearchParams, useNavigate } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/AuthLogin';

// ================================|| JWT - LOGIN ||================================ //

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log('User login data:', data);
    
    // fetch('https://example.com/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log('Login success:', result);
    //   navigate('/dashboard')
    //   // Simpan token ke localStorage jika diperlukan
    // })
    // .catch((error) => console.error('Login error:', error));

    navigate('dashboard/default');
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography component={Link} to={'/register'} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin onLogin={handleLogin} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

