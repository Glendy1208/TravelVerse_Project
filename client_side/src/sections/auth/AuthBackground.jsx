// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import background from '../../assets/images/background/travelVerse.jpg'

// ==============================|| AUTH BLUR BACK SVG ||============================== //

export default function AuthBackground() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={background} width="100%" height="100%" style={{ objectFit: 'cover' }} />
    </Box>

  );
}
