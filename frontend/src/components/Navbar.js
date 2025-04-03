import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const BrandTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  letterSpacing: '0.05em',
  fontSize: '2rem',
  transform: 'skewX(-10deg)',
  display: 'inline-block'
}));

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container>
        <Toolbar>
          <BrandTypography variant="h5" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Creatifi
          </BrandTypography>
          <Button 
            component={RouterLink} 
            to="/" 
            color="inherit" 
            sx={{ 
              mx: 1,
              textTransform: 'capitalize',
              fontFamily: '"Helvetica Neue", "Arial", sans-serif'
            }}
          >
            Home
          </Button>
          <Button 
            component={RouterLink} 
            to="/how-it-works" 
            color="inherit" 
            sx={{ 
              mx: 1,
              textTransform: 'capitalize',
              fontFamily: '"Helvetica Neue", "Arial", sans-serif'
            }}
          >
            How it works
          </Button>
          <Button 
            component={RouterLink} 
            to="/contact" 
            color="inherit" 
            sx={{ 
              mx: 1,
              textTransform: 'capitalize',
              fontFamily: '"Helvetica Neue", "Arial", sans-serif'
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
