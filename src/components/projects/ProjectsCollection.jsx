import React, { useState, useEffect } from 'react';
import { projects } from '../../configs/projectsConfig';
import ProjectCard from './ProjectCard';
import { Box, Tabs, Tab, Grid, Drawer } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../themes/primaryTheme';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectDetailedPage from "./ProjectDetailedPage"; // Import AnimatePresence

function ProjectsCollection() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);
    const [selectedProject, setSelectedProject] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    // Get the list of all project categories
    useEffect(() => {
        const categoriesSet = new Set(projects.map((project) => project.category || 'Uncategorized'));
        setCategories(['All', ...Array.from(categoriesSet).sort()]);
    }, []);

    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => (project.category || 'Uncategorized') === selectedCategory);

    const handleProjectClick = (project) => {
        const currentUrl = window.location.pathname; // Save the current URL before navigating
        if (mobileView) {
            navigate(`/projects/${project.route}`);
        } else {
            setSelectedProject(project);
            setDrawerOpen(true);
            window.history.pushState({ prevUrl: currentUrl }, '', `/projects/${project.route}`); // Push new state with the current URL
        }
    };

    const handleDrawerClose = () => {
        const previousState = window.history.state?.prevUrl; // Get the previous URL from state
        setDrawerOpen(false);
        setSelectedProject(null);
        if (previousState) {
            navigate(previousState, { replace: true }); // Navigate to the previous URL
        } else {
            navigate('/projects', { replace: true }); // Fallback to /projects if no previous state
        }
    };

    // Close the drawer when URL changes (e.g., when user clicks the browser back button)
    useEffect(() => {
        if (location.pathname === '/projects' && drawerOpen) {
            handleDrawerClose();
        }
    }, [location.pathname]);

    return (
        <Box sx={{ padding: '2rem' }}>
            <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="project categories"
                sx={{ marginBottom: '2rem'}}
            >
                {categories.map((category) => (
                    <Tab key={category} label={category} value={category} />
                ))}
            </Tabs>

            {/* Use AnimatePresence to control card animations */}
            <Grid container spacing={4}>
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={project.route}>
                            {/* Pass the index to ProjectCard to control delay */}
                            <ProjectCard project={project} onProjectClick={handleProjectClick} index={index} />
                        </Grid>
                    ))}
                </AnimatePresence>
            </Grid>

            {!mobileView && (
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    PaperProps={{ sx: { width: mobileView ? '100%' : '50%' } }}
                >
                    {selectedProject && <ProjectDetailedPage project={selectedProject} onClose={handleDrawerClose}/>}
                </Drawer>
            )}
        </Box>
    );
}

export default ProjectsCollection;
