import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { experiences } from '../../configs/experiencesConfig';
import ExperienceItem from './ExperienceItem';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../themes/primaryTheme';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import ExperienceDetailedPage from './ExperienceDetailedPage';
import { motion } from 'framer-motion';

function ExperienceTimeline() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const categoriesSet = new Set(experiences.map((exp) => exp.category || 'Uncategorized'));
        setCategories(['All', ...Array.from(categoriesSet).sort()]);
    }, []);

    const filteredExperiences =
        selectedCategory === 'All'
            ? experiences
            : experiences.filter((exp) => (exp.category || 'Uncategorized') === selectedCategory);

    // Prepare experiences with cumulative index for sequential animations
    const experiencesWithIndex = filteredExperiences.map((experience, index) => ({
        experience,
        index,
    }));

    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };

    const handleExperienceClick = (experience) => {
        const currentUrl = window.location.pathname;
        if (mobileView) {
            navigate(`/experience/${experience.route}`);
        } else {
            setSelectedExperience(experience);
            setDrawerOpen(true);
            window.history.pushState({ prevUrl: currentUrl }, '', `/experience/${experience.route}`);
        }
    };

    const handleDrawerClose = () => {
        const previousState = window.history.state?.prevUrl;
        setDrawerOpen(false);
        setSelectedExperience(null);
        if (previousState) {
            navigate(previousState, { replace: true });
        } else {
            navigate('/experience', { replace: true });
        }
    };

    // Close the drawer when URL changes (e.g., when user clicks the browser back button)
    useEffect(() => {
        if (location.pathname === '/experience' && drawerOpen) {
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
        <Box sx={{ padding: '2rem', position: 'relative' }}>
            <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="experience categories"
                sx={{ marginBottom: '2rem' }}
            >
                {categories.map((category) => (
                    <Tab key={category} label={category} value={category} />
                ))}
            </Tabs>

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
                    }}
                />
            )}

            {/* Render experiences */}
            {experiencesWithIndex.map(({ experience, index }) => (
                <ExperienceItem
                    key={experience.route}
                    experience={experience}
                    index={index}
                    onClick={handleExperienceClick}
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
                    {selectedExperience && (
                        <ExperienceDetailedPage
                            experience={selectedExperience}
                            onClose={handleDrawerClose}
                            notDrawer={false}
                        />
                    )}
                </Drawer>
            )}
        </Box>
    );
}

export default ExperienceTimeline;