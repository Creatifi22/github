import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box, Stack, Paper, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import BrushIcon from '@mui/icons-material/Brush';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';

const HeroSection = styled(Box)(({ theme }) => ({
  background: '#000000',
  color: 'white',
  padding: theme.spacing(15, 0),
  marginBottom: theme.spacing(6),
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(3),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 50%)',
    zIndex: 1
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
    '& .feature-icon': {
      transform: 'scale(1.15) rotate(8deg)',
      backgroundColor: '#000',
      color: '#fff',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
    },
    '& .feature-title': {
      transform: 'translateY(-2px)',
      color: '#000'
    },
    '& .feature-description': {
      transform: 'translateY(-2px)',
      color: '#333'
    },
    '&::before': {
      background: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 60%)'
    }
  },
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto'
}));

const FeatureIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  width: '60px',
  height: '60px',
  marginRight: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  '& .MuiSvgIcon-root': {
    fontSize: '2rem'
  }
}));

function Home() {
  return (
    <>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" sx={{ 
            fontFamily: '"Bebas Neue", sans-serif', 
            fontSize: '3.5rem', 
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            Get High-Quality Thumbnails That Boost Clicks!
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '3rem',
              mb: 2
            }}
          >
            Why Choose Our Thumbnail Service?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: 'text.secondary',
              maxWidth: '600px',
              margin: '0 auto',
              mt: 2,
              lineHeight: 1.6
            }}
          >
            We combine creativity with data-driven design to create thumbnails that actually convert.
          </Typography>
        </Box>
        <Stack spacing={4}>
          <FeatureCard elevation={2}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 5,
              background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 100%)',
              zIndex: 2
            }}>
              <FeatureIcon 
                className="feature-icon"
                sx={{
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  border: '2px solid rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    border: '2px solid rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <BrushIcon />
              </FeatureIcon>
              <Box sx={{ flexGrow: 1 }}>
                <Typography 
                  className="feature-title"
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '2rem',
                    letterSpacing: '0.02em',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'linear-gradient(45deg, #000000 30%, #333333 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2
                  }}>
                  Eye-Catching Designs
                </Typography>
                <Typography 
                  className="feature-description"
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    maxWidth: '90%'
                  }}>
                  Our thumbnails are designed to grab attention in crowded feeds and search results
                </Typography>
              </Box>
            </Box>
          </FeatureCard>

          <FeatureCard elevation={2}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 5,
              background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 100%)',
              zIndex: 2
            }}>
              <FeatureIcon 
                className="feature-icon"
                sx={{
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  border: '2px solid rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    border: '2px solid rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <SpeedIcon />
              </FeatureIcon>
              <Box sx={{ flexGrow: 1 }}>
                <Typography 
                  className="feature-title"
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '2rem',
                    letterSpacing: '0.02em',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'linear-gradient(45deg, #000000 30%, #333333 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2
                  }}>
                  Quick Turnaround
                </Typography>
                <Typography 
                  className="feature-description"
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    maxWidth: '90%'
                  }}>
                  Get your thumbnails within 24-48 hours
                </Typography>
              </Box>
            </Box>
          </FeatureCard>

          <FeatureCard elevation={2}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 5,
              background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 100%)',
              zIndex: 2
            }}>
              <FeatureIcon 
                className="feature-icon"
                sx={{
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  border: '2px solid rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    border: '2px solid rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <StarIcon />
              </FeatureIcon>
              <Box sx={{ flexGrow: 1 }}>
                <Typography 
                  className="feature-title"
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '2rem',
                    letterSpacing: '0.02em',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'linear-gradient(45deg, #000000 30%, #333333 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2
                  }}>
                  Professional Quality
                </Typography>
                <Typography 
                  className="feature-description"
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    maxWidth: '90%'
                  }}>
                  Work with experienced designers for the best results
                </Typography>
              </Box>
            </Box>
          </FeatureCard>
        </Stack>
      </Container>

      <Box sx={{ 
        backgroundColor: '#f5f5f5', 
        py: 8,
        mt: 4
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
                background: 'linear-gradient(45deg, #000000 30%, #333333 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              5000+ Satisfied Clients
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              Join our growing community of content creators who trust us to make their videos stand out
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ 
        py: 10,
        textAlign: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2
            }}
          >
            Ready to Boost Your Content's Performance?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Start creating thumbnails that get more clicks, views, and engagement today.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              sx={{
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#333'
                },
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.2rem',
                letterSpacing: '0.05em',
                py: 1.5,
                px: 4
              }}
            >
              Get Started Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/how-it-works"
              onClick={() => window.scrollTo(0, 0)}
              sx={{
                borderColor: '#000',
                color: '#000',
                '&:hover': {
                  borderColor: '#333',
                  color: '#333',
                  backgroundColor: 'rgba(0, 0, 0, 0.08)'
                },
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.2rem',
                letterSpacing: '0.05em',
                py: 1.5,
                px: 4
              }}
            >
              How it Works
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
