import React from 'react';
import { Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

function ProfileSection({rectangleMode=false}) {
    // Bubble animation settings
    const bubbles = Array.from({ length: 25 });

    return (
        <Box
            sx={{
                position: 'relative',
                width: '250px',
                height: '250px',
                margin: '0 auto',
            }}
        >
            {/* Profile Image */}
            <Avatar
                variant={rectangleMode ? "rounded" : "circular"}
                src={`${process.env.PUBLIC_URL}/assets/pfp.png`}
                alt="Vijit Dua"
                sx={{
                    width: '250px',
                    height: '250px',
                    zIndex: 2,
                    position: 'relative',
                    boxShadow: '0 0 20px rgba(83, 86, 255, 0.8)', // Initial glow effect
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                        '0%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' },
                        '100%': { transform: 'translateY(0px)' },
                    },
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(255, 99, 132, 0.3)',
                    },
                }}
            />

            {/* Bubbling Animations */}
            {bubbles.map((_, index) => (
                <Bubble key={index} />
            ))}
        </Box>
    );
}

function Bubble() {
    const size = Math.random() * 40 + 10; // Random size between 10 and 40
    const duration = Math.random() * 5 + 15; // Random duration between 5 and x seconds
    const position = 80 + Math.random() * 20; // Random position between 80% and 100%

    const colors = [
        'rgba(83, 86, 255, 0.3)', // Blue
        '#7d7b7a',
        'rgba(54, 162, 235, 0.3)',
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const delay = 2 + Math.random()*5;

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -200 }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
            }}
            style={{
                position: 'absolute',
                bottom: 0,
                left: `${position}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: randomColor, // Use the randomly selected color
                borderRadius: '50%',
                zIndex: 3,
            }}
        />
    );
}

export default ProfileSection;
