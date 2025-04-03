import React from 'react';
import { Container, Typography, Box, Paper, styled } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PaymentsIcon from '@mui/icons-material/Payments';

const StepCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    '& .step-icon': {
      transform: 'scale(1.1)',
      backgroundColor: '#000',
      color: '#fff'
    }
  }
}));

const StepNumber = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#000',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: '1.2rem'
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem'
  }
}));

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Submit Your Requirements',
      description: 'Tell us about your thumbnail needs and preferences',
      icon: <AssignmentIcon />
    },
    {
      number: 2,
      title: 'We Assign the Best Freelancer',
      description: 'Our expert team matches you with the perfect designer',
      icon: <GroupsIcon />
    },
    {
      number: 3,
      title: 'Client Receives the Thumbnail',
      description: 'Get your professional thumbnail ready to use',
      icon: <ThumbUpIcon />
    },
    {
      number: 4,
      title: 'Payment and Commission',
      description: 'Secure payment processing and fair commission distribution',
      icon: <PaymentsIcon />
    }
  ];

  return (
    <>
      <Box sx={{ 
        backgroundColor: '#000',
        color: '#fff',
        py: 6,
        mb: 8,
        mt: { xs: 7, md: 8 } // Responsive top margin for fixed navbar
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '3.5rem',
                mb: 2
              }}
            >
              How CREATIFI Works
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              Our simple four-step process makes getting professional thumbnails easy and efficient.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '2.5rem',
              mb: 2
            }}
          >
            Our Four-Step Process
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              mb: 6,
              lineHeight: 1.6
            }}
          >
            We've streamlined our workflow to make it easy for both clients and freelancers.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, 
          gap: 4,
          position: 'relative'
        }}>
          {steps.map((step) => (
            <StepCard key={step.number} elevation={2}>
              <StepNumber>{step.number}</StepNumber>
              <IconWrapper className="step-icon">
                {step.icon}
              </IconWrapper>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.8rem',
                  letterSpacing: '0.02em',
                  mb: 2
                }}
              >
                {step.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {step.description}
              </Typography>
            </StepCard>
          ))}
        </Box>
      </Container>
      <Box sx={{ height: '80px' }} /> {/* Add bottom spacing */}
    </>
  );
}

export default HowItWorks;
