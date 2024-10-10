import React from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import { projects } from '../../configs/projectsConfig';
import MainLayout from '../../layouts/MainLayout';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { theme } from '../../themes/primaryTheme';
import {Code, Language, Close, ArrowBack} from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import NoPage from "../../screens/NoPage";
import {routes} from "../../configs/routesConfig";
import Divider from '@mui/material/Divider';

function ProjectDetailedPage({ project: propProject, onClose }) {
    const navigate = useNavigate();

    function handleGoBack (){
        console.log("HI")
        if (window.history.length > 1) {
            navigate(-1); // Go back to the previous URL in history
        } else {
            navigate('/projects'); // If no history, fallback to /projects
        }
    }

    const { projectName } = useParams();
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    const project = propProject || projects.find((p) => p.route === projectName);

    if (!project) {
        return (
            <NoPage/>
        );
    }

    const { title, tagline, sourceCode, projectUrl, image, Component } = project;

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0rem',
                marginBottom: '1rem',
            }}
        >
            {!mobileView && onClose && (
                <Button
                    variant="contained"
                    color="error"
                    onClick={onClose}
                    sx={{ position: 'fixed', top: '5px', right: '10px', opacity: 0.8, zIndex: 10,}}
                >
                    <Close />
                </Button>
            )}

            {mobileView && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleGoBack}
                    sx={{ position: 'fixed', left: '10px', opacity: 0.8, zIndex: 10,}}
                >
                    <ArrowBack />
                </Button>
            )}

            {/* Image as a banner */}
            <Box
                component="img"
                src={image || `${process.env.PUBLIC_URL}/assets/default-project-image.png`}
                alt={title}
                sx={{
                    width: '100%', // Full width, no gaps on the sides
                    height: '300px', // Set the height like a banner
                    objectFit: 'cover', // Ensure the image covers the area without stretching
                    margin: 0, // No margin
                    borderRadius: 0, // No border radius to align with top
                }}
            />

            <Typography variant="h2" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
                {tagline}
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                {sourceCode && (
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<Code />}
                        component="a"
                        href={sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code
                    </Button>
                )}
                {projectUrl && (
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<Language />}
                        component="a"
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Site
                    </Button>
                )}
            </Box>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'3rem'}}/>
            </Box>


            {/* Render the custom component if it exists */}
            {Component && <Component />}
            {/* Related projects or work can be added here */}
        </Box>
    );

    // If on mobile or if no propProject is provided, render inside MainLayout
    if (mobileView || !propProject) {
        return <MainLayout>{content}</MainLayout>;
    }

    // On desktop, return content directly (used inside Drawer)
    return content;
}

export default ProjectDetailedPage;
