import React from 'react';
import { Box, Typography, Avatar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

function EducationItem({ education, index, onClick }) {
    const { institute, date, description, logo } = education;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Alternate sides using cumulative index
    const alignLeft = index % 2 === 0;

    // Framer Motion animation settings for sequential sliding
    const itemVariants = {
        hidden: { opacity: 0, x: alignLeft ? -100 : 100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.3, // Delay each item by index
            },
        }),
    };

    return (
        <motion.div
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: isMobile ? 'flex-start' : alignLeft ? 'flex-end' : 'flex-start',
                    alignItems: 'center',
                    marginBottom: '4rem',
                    width: '100%',
                    ':hover .experience-content': {
                        transform: 'scale(1.05)',
                    },
                }}
                onClick={() => onClick(education)}
                style={{ cursor: 'pointer' }}
            >
                {/* Content */}
                <Box
                    className="experience-content"
                    sx={{
                        padding: '1rem',
                        maxWidth: isMobile? '100%' : '45%',
                        flex: 1,
                        textAlign: 'left',
                        backgroundColor: 'transparent',
                        transition: 'transform 0.3s',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: isMobile? 'column' : 'row', alignItems: isMobile? 'left' : 'center', marginBottom: '1rem' }}>
                        <Avatar src={logo} sx={{ width: 56, height: 56, marginRight: '1rem' }} />
                        <Box>
                            <Typography variant="h6" sx={{ color: 'white' }}>
                                {institute}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: 'white' }}>
                                {description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {date}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        {description}
                    </Typography>
                </Box>

                {/* Dot */}
                {!isMobile && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 'calc(50% - 8px)',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            backgroundColor: 'white', // Make dot white
                        }}
                    />
                )}
            </Box>
        </motion.div>
    );
}

export default EducationItem;