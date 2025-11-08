import React, { Suspense } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Box, CircularProgress } from '@mui/material'
import GradientBackground from '@/components/GradientBackground.jsx'
import Layout from '@/components/Layout.jsx'

const Hero = React.lazy(() => import('@/components/Hero.jsx'));
const About = React.lazy(() => import('@/components/About.jsx'));
const Education = React.lazy(() => import('@/components/Education.jsx'));
const Skills = React.lazy(() => import('@/components/Skills.jsx'));
const Projects = React.lazy(() => import('@/components/Projects.jsx'));
const Contact = React.lazy(() => import('@/components/Contact.jsx'));

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0A84FF',
      light: '#40A6FF',
      dark: '#0051D5',
    },
    secondary: {
      main: '#AF52DE',
      light: '#D0A5F0',
      dark: '#8E44AD',
    },
    background: {
      default: '#000000',
      paper: '#1C1C1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"SF Pro Display"',
      '"SF Pro Text"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'rgba(28, 28, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'rgba(28, 28, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        <Suspense 
          fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          }
        >
          <Layout>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </Layout>
        </Suspense>
      </GradientBackground>
    </ThemeProvider>
  )
}

export default App
