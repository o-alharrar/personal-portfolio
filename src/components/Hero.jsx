import React from 'react'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import CodeIcon from '@mui/icons-material/Code'

function Hero() {
  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const currentScrollY = window.scrollY
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top + currentScrollY
      const offset = 100 // Account for navbar and spacing
      const targetPosition = elementTop - offset
      const distance = Math.abs(targetPosition - currentScrollY)
      
      // Calculate duration based on distance (min 300ms, max 1000ms)
      const duration = Math.min(Math.max(distance * 0.5, 300), 1000)
      
      // Smooth scroll with easing
      const startPosition = currentScrollY
      const startTime = performance.now()
      
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }
      
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)
        
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * easedProgress)
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }
      
      requestAnimationFrame(animateScroll)
    }
  }

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white',
        pt: 10,
        pb: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <CodeIcon sx={{ fontSize: 80, opacity: 0.9 }} />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Othman Alharrar
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Computer Science Student | Full-Stack Developer | Fintech Enthusiast
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            <Chip
              label="📍 Bouskoura, Morocco"
              sx={{
                backgroundColor: 'rgba(28, 28, 30, 0.4)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
            <Chip
              label="🎓 Graduating June 2027"
              sx={{
                backgroundColor: 'rgba(28, 28, 30, 0.4)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
            <Chip
              label="💼 Seeking Internship"
              sx={{
                backgroundColor: 'rgba(28, 28, 30, 0.4)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            <Button
              onClick={() => handleNavClick('#projects')}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#0A84FF',
                color: '#FFFFFF',
                borderRadius: 12,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(10, 132, 255, 0.3)',
                '&:hover': {
                  backgroundColor: '#0051D5',
                  boxShadow: '0 6px 25px rgba(10, 132, 255, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View My Work
            </Button>
            <Button
              onClick={() => handleNavClick('#contact')}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                borderRadius: 12,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: 'rgba(28, 28, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'rgba(10, 132, 255, 0.5)',
                  backgroundColor: 'rgba(10, 132, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get In Touch
            </Button>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
            <Button
              href="https://github.com/o-alharrar"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHub />}
              sx={{
                color: '#FFFFFF',
                borderRadius: 10,
                px: 3,
                backgroundColor: 'rgba(28, 28, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(28, 28, 30, 0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/othman-alharrar-19633b381/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LinkedIn />}
              sx={{
                color: '#FFFFFF',
                borderRadius: 10,
                px: 3,
                backgroundColor: 'rgba(28, 28, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(28, 28, 30, 0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              LinkedIn
            </Button>
            <Button
              href="mailto:othman.alharrar@protonmail.com"
              startIcon={<Email />}
              sx={{
                color: '#FFFFFF',
                borderRadius: 10,
                px: 3,
                backgroundColor: 'rgba(28, 28, 30, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(28, 28, 30, 0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Email
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
