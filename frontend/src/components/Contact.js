import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import emailjs from '../emailjs';  // Import our configured EmailJS instance

function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_title: '',
    description: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map form field names to state properties
    const stateMapping = {
      'from_name': 'name',
      'from_email': 'email',
      'subject': 'project_title',
      'message': 'description'
    };

    const stateName = stateMapping[name] || name;
    setFormData(prevState => ({
      ...prevState,
      [stateName]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Form data:', formData);
      console.log('Form ref:', form.current);

      const formFields = {
        'from_name': formData.name,
        'from_email': formData.email,
        'subject': formData.project_title,
        'message': formData.description
      };

      console.log('Form fields to send:', formFields);

      // Create form data directly instead of modifying the form
      // Update form fields before sending
      Object.entries(formFields).forEach(([name, value]) => {
        const element = form.current.elements[name];
        if (element) {
          element.value = value;
        }
      });

      const result = await emailjs.sendForm(
        'service_o5u1oo5',
        'template_kqyi507',
        form.current
      );

      console.log('EmailJS response:', result);

      if (result.text === 'OK') {
        setSnackbar({
          open: true,
          message: 'Message sent successfully! We\'ll get back to you soon.',
          severity: 'success'
        });
        setFormData({
          name: '',
          email: '',
          project_title: '',
          description: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      console.error('Error details:', error.text || error.message);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8, mt: 8 }}>
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: '3.5rem',
          letterSpacing: '0.05em'
        }}>
          Contact Us
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Tell us about your project and we'll match you with the perfect designer
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <form ref={form} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Name"
            name="from_name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 3 }}
            inputProps={{
              'data-form-type': 'name'
            }}
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="from_email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
            inputProps={{
              'data-form-type': 'email'
            }}
          />
          <TextField
            required
            fullWidth
            label="Project Title"
            name="subject"
            value={formData.project_title}
            onChange={handleChange}
            sx={{ mb: 3 }}
            inputProps={{
              'data-form-type': 'project_title'
            }}
          />
          <TextField
            required
            fullWidth
            label="Project Description"
            name="message"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ mb: 3 }}
            inputProps={{
              'data-form-type': 'description'
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
            disabled={loading}
            sx={{
              mt: 3,
              mb: 2,
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '1.2rem',
              letterSpacing: '0.05em'
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Request'}
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
