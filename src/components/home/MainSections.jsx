// components/home/MainSections.jsx

import React from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { routes } from '../../configs/routesConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function MainSections() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const buttons = [
        { label: 'Portfolio', route: routes.portfolio },
        { label: 'About Me', route: routes.aboutMe },
        { label: 'Socials', route: routes.socials },
        { label: 'Experience', route: routes.experience },
        { label: 'Projects', route: routes.projects },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    maxWidth: '900px', // Adjust based on your layout needs
                }}
            >
                {buttons.map((button, index) => (
                    <motion.div
                        key={button.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.5 }}
                        style={{
                            flexBasis: 'calc(33.33% - 1rem)', // Ensure a max of 3 per row
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate(button.route)}
                            sx={{
                                borderRadius: '20px',
                                padding: '0.5rem 1.5rem',
                                fontSize: '1.5rem',
                                textTransform: 'none',
                            }}
                        >
                            {button.label}
                        </Button>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
}

export default MainSections;
