// components/experiences/ExperienceDetailedPage.jsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { experiences } from '../../configs/experiencesConfig';
import MainLayout from '../../layouts/MainLayout';
import {Box, Typography, Avatar, Button, Divider, Container} from '@mui/material';
import { ArrowBack, Close } from '@mui/icons-material';
import NoPage from '../../screens/NoPage';
import {Helmet} from "react-helmet";
import {env} from "../../configs/envConfig";
import {routes} from "../../configs/routesConfig";
import {education} from "../../configs/educationConfig";

function EducationDetailedPage({ education: propEducation, onClose, notDrawer = true }) {
    const navigate = useNavigate();
    const { educationRoute } = useParams();

    const educationItem = propEducation || education.find((edu) => edu.route === educationRoute);

    if (!educationItem) {
        return <NoPage />;
    }

    const { institute, date, description, logo, Component } = educationItem;

    function PageMeta() {
        return (
            <Helmet>
                <title>Vijit Dua | {institute} </title>
                <link rel="canonical" href={env.siteLocation + routes.projects + '/' + educationRoute}/>
                <meta
                    name='description'
                    content={`Vijit Dua's education at ${institute}: ${description}`}
                />
            </Helmet>
        );
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    const content = (
        <Box sx={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <PageMeta/>
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
                <Avatar src={logo} alt={institute} sx={{ width: 80, height: 80, marginRight: '1rem' }} />
                <Box>
                    <Typography variant="h4">{institute}</Typography>
                    <Typography variant="h5">{description}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {date}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            {/* Render the custom component if it exists */}
            <Container maxWidth="lg">
                {Component && <Component />}
            </Container>
        </Box>
    );

    if (notDrawer || !propEducation) {
        return <MainLayout>{content}</MainLayout>;
    }

    return content;
}

export default EducationDetailedPage;
