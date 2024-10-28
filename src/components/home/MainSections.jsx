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
        { label: 'About', route: routes.aboutMe },
        { label: 'Portfolio', route: routes.portfolio, highlight: true },
        { label: 'Projects', route: routes.projects },
        { label: 'Socials', route: routes.socials },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '3rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                }}
            >
                {buttons.map((button, index) => (
                    <motion.div
                        key={button.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.5 }}
                        style={{
                            flexBasis: 'calc(20% - 1rem)', // Ensure a max of 4 per row
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                        }}
                    >
                        <Button
                            variant="contained"
                            color={button.highlight ? `highlight` : `primary` }
                            onClick={() => navigate(button.route)}
                            sx={{
                                borderRadius: '20px',
                                padding: '0.5rem 1.5rem',
                                margin: '0.25rem',
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
