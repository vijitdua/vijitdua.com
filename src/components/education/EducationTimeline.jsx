import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { education } from '../../configs/educationConfig';
import EducationItem from './EducationItem';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../themes/primaryTheme';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import EducationDetailedPage from './EducationDetailedPage';
import { motion } from 'framer-motion';
import {routes} from "../../configs/routesConfig";

function EducationTimeline() {
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    const educationWithIndex = education.map((item, index) => ({
        item,
        index,
    }));

    const handleEducationClick = (item) => {
        const currentUrl = window.location.pathname;
        if (mobileView) {
            navigate(`${routes.education}/${item.route}`);
        } else {
            setSelectedEducation(item);
            setDrawerOpen(true);
            window.history.pushState({ prevUrl: currentUrl }, '', `${routes.education}/${item.route}`);
        }
    };

    const handleDrawerClose = () => {
        const previousState = window.history.state?.prevUrl;
        setDrawerOpen(false);
        setSelectedEducation(null);
        if (previousState) {
            navigate(previousState, { replace: true });
        } else {
            navigate(`${routes.education}`, { replace: true });
        }
    };

    // Close the drawer when URL changes (e.g., when user clicks the browser back button)
    useEffect(() => {
        if (location.pathname === `${routes.education}` && drawerOpen) {
            handleDrawerClose();
        }
    }, [location.pathname]);

    // Animation variant for the vertical line
    const lineVariants = {
        hidden: { height: 0 },
        visible: {
            height: '100%',
            transition: { duration: 2 },
        },
    };

    return (
        <Box sx={{ padding: '2rem', position: 'relative', marginBottom: '7rem' }}>

            {/* Vertical line down the middle with animation */}
            {!mobileView && (
                <Box
                    component={motion.div}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    sx={{
                        position: 'absolute',
                        top: '80px', // Adjust to prevent overlap with tabs
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '6px', // Thicker line
                        backgroundColor: 'grey.400',
                        bottom: '50px',
                    }}
                />
            )}

            {/* Render experiences */}
            {educationWithIndex.map(({ item, index }) => (
                <EducationItem
                    key={item.route}
                    education={item}
                    index={index}
                    onClick={handleEducationClick}
                />
            ))}

            {/* Drawer for desktop view */}
            {!mobileView && (
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    PaperProps={{ sx: { width: mobileView ? '100%' : '50%' } }}
                >
                    {selectedEducation && (
                        <EducationDetailedPage
                            education={selectedEducation}
                            onClose={handleDrawerClose}
                            notDrawer={false}
                        />
                    )}
                </Drawer>
            )}
        </Box>
    );
}

export default EducationTimeline;
