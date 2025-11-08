import React from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

function Education() {
  return (
    <Box
      id="education"
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
          Education
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            maxWidth: 800,
            mx: 'auto',
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
              <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h5" fontWeight={600}>
                  Bachelor of Science in Computer Science (BS CS)
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Université Internationale de Casablanca
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon fontSize="small" color="action" />
              <Typography variant="body1" color="text.secondary">
                Expected Graduation: June 2027
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Relevant Coursework:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                <Chip label="Programming & Software Development" color="primary" variant="outlined" />
                <Chip label="Data Structures & Algorithms" color="primary" variant="outlined" />
                <Chip label="Database Management Systems" color="primary" variant="outlined" />
                <Chip label="Web Development" color="primary" variant="outlined" />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default Education

