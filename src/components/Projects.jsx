import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import CodeIcon from '@mui/icons-material/Code'

function ProjectCard({ project }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'rgba(28, 28, 30, 0.4)',
        backdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(10, 132, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(10, 132, 255, 0.4)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CodeIcon color="primary" />
            <Typography variant="h5" component="h3" fontWeight={600}>
              {project.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" paragraph>
            {project.description}
          </Typography>
          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Technologies:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {project.technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
          {project.features && (
            <Box>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                Key Features:
              </Typography>
              <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </Typography>
            </Box>
          )}
          {project.status && (
            <Chip
              label={project.status}
              sx={{
                backgroundColor: project.status === 'In Development' 
                  ? 'rgba(175, 82, 222, 0.2)' 
                  : 'rgba(10, 132, 255, 0.2)',
                color: project.status === 'In Development' 
                  ? '#AF52DE' 
                  : '#0A84FF',
                border: project.status === 'In Development'
                  ? '1px solid rgba(175, 82, 222, 0.3)'
                  : '1px solid rgba(10, 132, 255, 0.3)',
              }}
              size="small"
            />
          )}
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        {project.github && (
          <Button
            size="small"
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
        {project.demo && (
          <Button
            size="small"
            startIcon={<LaunchIcon />}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Finance Tracker Application',
      description:
        'A comprehensive personal finance management application demonstrating full-stack web development capabilities with modern frameworks and cloud backend services.',
      technologies: ['React', 'JavaScript', 'Material-UI', 'Vite', 'Appwrite'],
      features: [
        'User authentication and secure login',
        'User profile management',
        'Database collections for financial data',
        'Interactive dashboard for financial overview',
        'Categories and transaction management',
      ],
      github: 'https://github.com/o-alharrar/finance-tracker',
      status: 'In Development',
    },
  ]

  return (
    <Box
      id="projects"
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
          Projects & Portfolio
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={8} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects

