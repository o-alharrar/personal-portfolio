import React from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  Grid,
  Link,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ContactMailIcon from '@mui/icons-material/ContactMail'

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        position: 'relative',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}
        >
          Get In Touch
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(28, 28, 30, 0.4)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ContactMailIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Contact Information
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon color="action" />
                    <Link
                      href="mailto:othman.alharrar@protonmail.com"
                      underline="hover"
                      color="inherit"
                    >
                      othman.alharrar@protonmail.com
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOnIcon color="action" />
                    <Typography variant="body1">
                      Bouskoura, Casablanca-Settat, Morocco
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Time Zone: UTC+1 (Morocco Standard Time)
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(28, 28, 30, 0.4)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h5" fontWeight={600}>
                  Connect With Me
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/o-alharrar"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      borderRadius: 12,
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      '&:hover': {
                        borderColor: 'rgba(10, 132, 255, 0.5)',
                        backgroundColor: 'rgba(10, 132, 255, 0.1)',
                      },
                    }}
                  >
                    GitHub Profile
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/othman-alharrar-19633b381/"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      borderRadius: 12,
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      '&:hover': {
                        borderColor: 'rgba(10, 132, 255, 0.5)',
                        backgroundColor: 'rgba(10, 132, 255, 0.1)',
                      },
                    }}
                  >
                    LinkedIn Profile
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:othman.alharrar@protonmail.com"
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      borderRadius: 12,
                      backgroundColor: '#0A84FF',
                      '&:hover': {
                        backgroundColor: '#0051D5',
                      },
                    }}
                  >
                    Send Email
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: 'rgba(28, 28, 30, 0.4)',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Open to Opportunities
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              I'm currently seeking internship opportunities, particularly in fintech and software
              development. Feel free to reach out if you'd like to collaborate, discuss projects,
              or explore potential opportunities.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="mailto:othman.alharrar@protonmail.com"
              startIcon={<EmailIcon />}
              sx={{
                mt: 2,
                borderRadius: 12,
                backgroundColor: '#0A84FF',
                boxShadow: '0 4px 20px rgba(10, 132, 255, 0.3)',
                '&:hover': {
                  backgroundColor: '#0051D5',
                  boxShadow: '0 6px 25px rgba(10, 132, 255, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Let's Connect
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact

