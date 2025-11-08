import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Stack,
  Chip,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import WebIcon from '@mui/icons-material/Web'
import BuildIcon from '@mui/icons-material/Build'

function SkillCategory({ title, icon, skills }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
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
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {icon}
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Stack spacing={2}>
          {skills.map((skill, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" fontWeight={500}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.progress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#0A84FF',
                    borderRadius: 4,
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Paper>
  )
}

function Skills() {
  const programmingLanguages = [
    { name: 'Python', level: 'Intermediate to Advanced', progress: 80 },
    { name: 'JavaScript/Node.js', level: 'Intermediate', progress: 70 },
    { name: 'HTML/CSS', level: 'Intermediate', progress: 75 },
    { name: 'C++', level: 'Beginner', progress: 30 },
    { name: 'TypeScript', level: 'Intermediate', progress: 65 },
  ]

  const frontendTech = [
    { name: 'React', level: 'Intermediate', progress: 75 },
    { name: 'Material-UI (MUI)', level: 'Intermediate', progress: 70 },
    { name: 'Vite', level: 'Intermediate', progress: 70 },
    { name: 'Responsive Design', level: 'Intermediate', progress: 75 },
  ]

  const backendTech = [
    { name: 'Appwrite', level: 'Intermediate', progress: 70 },
    { name: 'REST APIs', level: 'Intermediate', progress: 65 },
    { name: 'Database Design', level: 'Intermediate', progress: 65 },
    { name: 'SQL', level: 'Beginner', progress: 40 },
  ]

  const tools = [
    { name: 'Git & GitHub', level: 'Intermediate', progress: 75 },
    { name: 'VS Code', level: 'Advanced', progress: 85 },
    { name: 'Windows 11', level: 'Advanced', progress: 90 },
    { name: 'npm/Package Manager', level: 'Intermediate', progress: 70 },
  ]

  const expertiseAreas = [
    'Full-Stack Web Development',
    'React & Modern Frontend',
    'Backend Integration & APIs',
    'Development Environment Setup',
    'AI-Assisted Development',
    'System Optimization & Automation',
  ]

  return (
    <Box
      id="skills"
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
          Technical Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SkillCategory
              title="Programming Languages"
              icon={<CodeIcon color="primary" sx={{ fontSize: 30 }} />}
              skills={programmingLanguages}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillCategory
              title="Frontend Technologies"
              icon={<WebIcon color="primary" sx={{ fontSize: 30 }} />}
              skills={frontendTech}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillCategory
              title="Backend & Database"
              icon={<StorageIcon color="primary" sx={{ fontSize: 30 }} />}
              skills={backendTech}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillCategory
              title="Development Tools"
              icon={<BuildIcon color="primary" sx={{ fontSize: 30 }} />}
              skills={tools}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
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
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Areas of Technical Expertise
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {expertiseAreas.map((area, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Chip
                    label={area}
                    color="primary"
                    sx={{ width: '100%', py: 2.5, fontSize: '1rem' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default Skills
