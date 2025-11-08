import React from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Stack,
  Chip,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SchoolIcon from '@mui/icons-material/School'
import LanguageIcon from '@mui/icons-material/Language'

function About() {
  return (
    <Box
      id="about"
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
          About Me
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
                  border: '1px solid rgba(10, 132, 255, 0.3)',
                },
              }}
            >
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PersonIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Basic Information
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" paragraph>
                    <strong>Full Name:</strong> Othman Alharrar
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Location:</strong> Bouskoura, Casablanca-Settat, Morocco
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Current Role:</strong> Computer Science Student
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Expected Graduation:</strong> June 2027
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Primary Focus:</strong> Computer Science with Software Development & Fintech Applications
                  </Typography>
                </Box>
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
                  border: '1px solid rgba(10, 132, 255, 0.3)',
                },
              }}
            >
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LanguageIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Languages
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip
                    label="Arabic - Native/Fluent"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label="French - Fluent/Professional"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label="English - Professional Working Proficiency"
                    color="primary"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
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
              My Value Proposition
            </Typography>
            <Typography variant="body1" paragraph>
              I am a Computer Science student with advanced skills in full-stack web development,
              combining frontend expertise in React with backend integration using modern platforms
              like Appwrite. My unique blend of technical proficiency, business understanding, and
              passion for fintech positions me to build scalable applications that bridge technical
              innovation and real-world business needs. With a proven ability to rapidly master new
              technologies and solve complex technical challenges, I bring both technical depth and
              entrepreneurial thinking to every project.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default About

