import React from 'react';
import {Card, CardContent, CardMedia, Typography, IconButton, Box, Tooltip} from '@mui/material';
import {Visibility, Code, Language} from '@mui/icons-material';
import {motion} from 'framer-motion'; // Import Framer Motion

function ProjectCard({project, onProjectClick, index}) { // Add index as prop
    const {title, tagline, route, sourceCode, projectUrl, image, category, time} = project;

    let categories = category || null;

    // Framer Motion animation settings for slide-in and staggered animation
    const cardVariants = {
        hidden: {opacity: 0, x: 50, y: 50}, // Start off-screen to the right
        visible: {
            opacity: 1,
            x: 0, // Slide to original position
            y: 0,
            transition: {
                duration: 0.75,
                delay: index * 0.4, // Staggered delay for each card based on index
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}} // Ensure the animation only runs once
        >
            <Card sx={{position: 'relative', overflow: 'visible', width: '100%'}}>
                <CardMedia
                    component="img"
                    image={image || `${process.env.PUBLIC_URL}/assets/default-project-image.png`}
                    alt={title}
                    sx={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <CardContent>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="caption">
                            {time}
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="#fff" fontSize="0.9rem" sx={{ whiteSpace: 'pre-line' }} >
                        {tagline}
                    </Typography>

                    <Typography variant="caption">
                        {categories}
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            opacity: 1,
                        },
                    }}
                >
                    <Box>
                        <Tooltip title="View Details">
                            <IconButton onClick={() => onProjectClick(project)} color="inherit">
                                <Visibility/>
                            </IconButton>
                        </Tooltip>
                        {sourceCode && (
                            <Tooltip title="Source Code">
                                <IconButton
                                    component="a"
                                    href={sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                >
                                    <Code/>
                                </IconButton>
                            </Tooltip>
                        )}
                        {projectUrl && (
                            <Tooltip title="Visit Site">
                                <IconButton
                                    component="a"
                                    href={projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                >
                                    <Language/>
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                </Box>
            </Card>
        </motion.div>
    );
}

export default ProjectCard;
