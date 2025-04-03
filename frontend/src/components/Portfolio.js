import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const portfolioItems = [
  {
    id: 1,
    title: 'Gaming Channel Thumbnail',
    description: 'Eye-catching thumbnail for a gaming YouTube channel',
    image: 'https://via.placeholder.com/400x225'
  },
  {
    id: 2,
    title: 'Tech Review Thumbnail',
    description: 'Clean and modern thumbnail for tech product review',
    image: 'https://via.placeholder.com/400x225'
  },
  {
    id: 3,
    title: 'Food Blog Thumbnail',
    description: 'Appetizing thumbnail for a cooking tutorial',
    image: 'https://via.placeholder.com/400x225'
  },
  {
    id: 4,
    title: 'Travel Vlog Thumbnail',
    description: 'Vibrant thumbnail for travel content',
    image: 'https://via.placeholder.com/400x225'
  },
  {
    id: 5,
    title: 'Fitness Channel Thumbnail',
    description: 'Motivational thumbnail for workout video',
    image: 'https://via.placeholder.com/400x225'
  },
  {
    id: 6,
    title: 'Educational Content',
    description: 'Clear and engaging thumbnail for educational video',
    image: 'https://via.placeholder.com/400x225'
  }
];

function Portfolio() {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Portfolio
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Check out some of our recent thumbnail designs
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {portfolioItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card elevation={2} sx={{
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
              backgroundColor: '#ffffff',
              borderRadius: 2
            }}>
              <CardMedia
                component="img"
                height="225"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Portfolio;
