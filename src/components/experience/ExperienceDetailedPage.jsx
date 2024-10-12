// components/experiences/ExperienceDetailedPage.jsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { experiences } from '../../configs/experiencesConfig';
import MainLayout from '../../layouts/MainLayout';
import {Box, Typography, Avatar, Button, Divider, Container} from '@mui/material';
import { ArrowBack, Close } from '@mui/icons-material';
import NoPage from '../../screens/NoPage';

function ExperienceDetailedPage({ experience: propExperience, onClose, notDrawer = true }) {
    const navigate = useNavigate();
    const { experienceRoute } = useParams();

    const experience = propExperience || experiences.find((exp) => exp.route === experienceRoute);

    if (!experience) {
        return <NoPage />;
    }

    const { title, company, date, description, logo, Component } = experience;

    const handleGoBack = () => {
        navigate(-1);
    };

    const content = (
        <Box sx={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {!notDrawer && onClose && (
                <Button
                    variant="contained"
                    color="error"
                    onClick={onClose}
                    sx={{ position: 'fixed', top: '5px', right: '10px', opacity: 0.8, zIndex: 10 }}
                >
                    <Close />
                </Button>
            )}

            {notDrawer && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleGoBack}
                    sx={{ marginBottom: '1rem' }}
                >
                    <ArrowBack />
                </Button>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <Avatar src={logo} alt={company} sx={{ width: 80, height: 80, marginRight: '1rem' }} />
                <Box>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="h5">{company}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {date}
                    </Typography>
                </Box>
            </Box>
            <Typography variant="body1" paragraph>
                {description}
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            {/* Render the custom component if it exists */}
            <Container maxWidth="lg">
                {Component && <Component />}
            </Container>
        </Box>
    );

    if (notDrawer || !propExperience) {
        return <MainLayout>{content}</MainLayout>;
    }

    return content;
}

export default ExperienceDetailedPage;
