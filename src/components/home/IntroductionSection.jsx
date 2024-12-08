// components/home/IntroductionSection.jsx

import React from 'react';
import {Box, Typography} from '@mui/material';
import {motion} from 'framer-motion';
import {useTheme} from '@mui/material/styles';

function IntroductionSection({noTag = false}) {
    const theme = useTheme();

    const dynamicTexts = [
        'a Rapid Builder',
        'Driven to Deliver',
        'a Scalable Developer',
        'an Aspiring Entrepreneur',
        'a Fast Learner, Faster Builder',
    ];

    return (
        <Box>
            <Typography variant="h2" sx={{fontWeight: 'bold', color: 'white'}}>
                Hi, I'm Vijit Dua
            </Typography>
            {!noTag && (
                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                    <Typography variant="h4" sx={{color: 'white', marginRight: '1rem'}}>
                        I'm
                    </Typography>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        style={{overflow: 'hidden', height: '50px'}}
                    >
                        <motion.div
                            animate={{y: [0, -50 * (dynamicTexts.length - 1)]}}
                            transition={{
                                duration: dynamicTexts.length * 2,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            {dynamicTexts.map((text, index) => (
                                <Typography
                                    key={index}
                                    variant="h4"
                                    sx={{color: theme.palette.primary.main, margin: 0}}
                                    style={{height: '50px', lineHeight: '50px'}}
                                >
                                    {text}
                                </Typography>
                            ))}
                        </motion.div>
                    </motion.div>
                </Box>
            )
            }
        </Box>
    );
}

export default IntroductionSection;
