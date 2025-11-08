import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Stack } from '@mui/material';

const quotes = [
  "The supreme art of war is to subdue the enemy without fighting.",
  "All warfare is based on deception.",
  "In the midst of chaos, there is also opportunity.",
  "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
  "The greatest victory is that which requires no battle.",
  "Know thy self, know thy enemy. A thousand battles, a thousand victories."
];

function Footer() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 7000); // Change quote every 7 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        py: 2, // Make footer thinner
        px: 3,
        mt: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Fade in timeout={1000}>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            "{quotes[quoteIndex]}" - Sun Tzu
          </Typography>
        </Fade>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Othman Alharrar. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;