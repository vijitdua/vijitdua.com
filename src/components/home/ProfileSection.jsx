// components/home/ProfileSection.jsx

import React from 'react';
import { Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

function ProfileSection() {
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
                src={`${process.env.PUBLIC_URL}/assets/pfp.png`}
                alt="Vijit Dua"
                sx={{
                    width: '250px',
                    height: '250px',
                    zIndex: 2,
                    position: 'relative',
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -200 }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: Math.random() * 5,
            }}
            style={{
                position: 'absolute',
                bottom: 0,
                left: `${position}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'rgba(83, 86, 255, 0.3)', // Semi-transparent primary color
                borderRadius: '50%',
                zIndex: 3,
            }}
        />
    );
}

export default ProfileSection;
