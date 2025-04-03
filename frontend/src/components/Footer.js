import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com/creatifi' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/creatifi' },
    { icon: <InstagramIcon />, url: 'https://instagram.com/creatifi' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/company/creatifi' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#000',
        color: '#fff',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.5rem',
                mb: 2
              }}
            >
              CREATIFI
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
              Creating eye-catching thumbnails that boost your content's performance.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.5rem',
                mb: 2
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
              <Typography variant="body2">
                Sinhgad college campus, vadgaon bk.,<br />
                Pune 411041
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1, opacity: 0.7 }} />
              <Link 
                href="mailto:creatifi22@gmail.com"
                sx={{ 
                  color: 'inherit',
                  opacity: 0.7,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                creatifi22@gmail.com
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.5rem',
                mb: 2
              }}
            >
              Business Hours
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              Monday - Friday: 9:00 AM - 6:00 PM PST
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Saturday - Sunday: By Appointment
            </Typography>
          </Grid>
        </Grid>

        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 4, 
            pt: 4, 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            opacity: 0.7
          }}
        >
          {new Date().getFullYear()} CREATIFI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
