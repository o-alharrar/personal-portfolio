import React, { useState, useEffect, useRef } from 'react';
import { Toolbar, Button, Box, useTheme } from '@mui/material';

const navItems = ['home', 'about', 'education', 'skills', 'projects', 'contact']

function Header() {
  const theme = useTheme();
  const [activePill, setActivePill] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = Math.min(Math.max(Math.abs(distance) * 0.5, 300), 1000);
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(`[data-section="${activeSection}"]`);
      if (activeButton) {
        setActivePill({
          width: activeButton.offsetWidth,
          left: activeButton.offsetLeft,
          opacity: 1,
        });
      }
    }
  }, [activeSection]);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        py: 1, // Padding to give the floating ellipse space from the top
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar sx={{
        width: 'auto', // Toolbar shrinks to content width
        borderRadius: '999px', // Creates the ellipse shape
        background: 'rgba(28, 28, 30, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Box ref={navRef} sx={{ position: 'relative', display: 'inline-flex' }}>
          <Box
            className="active-pill"
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: activePill.left,
              width: activePill.width,
              height: '36px', // Slightly larger pill
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '18px', // Perfect ellipse
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: activePill.opacity,
              zIndex: 0,
            }}
          />
          {navItems.map((item) => (
            <Button
              data-section={item}
              key={item}
              color="inherit"
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, `#${item}`)}
              sx={{
                textTransform: 'capitalize',
                padding: '6px 16px', // Reduces the size of the buttons and the overall ellipse
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s',
                color: activeSection === item ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Header;