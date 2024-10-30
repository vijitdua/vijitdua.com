import React, { useState, useEffect } from 'react';
import { projects } from '../../configs/projectsConfig';
import ProjectCard from './ProjectCard';
import { Box, Tabs, Tab, Grid, Drawer, Button, Typography, Chip, Menu, MenuItem } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectDetailedPage from './ProjectDetailedPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProjectsCollection({ mobileViewLineLimit = 2, desktopViewLineLimit = 1 }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);
    const [selectedProject, setSelectedProject] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [page, setPage] = useState(1); // Page starts at 1
    const [anchorEl, setAnchorEl] = useState(null); // For mobile menu
    const navigate = useNavigate();
    const location = useLocation();

    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    const upLg = useMediaQuery(theme.breakpoints.up('lg'));
    const upMd = useMediaQuery(theme.breakpoints.up('md'));
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));

    let itemsPerRow;
    if (upLg) {
        itemsPerRow = 4;
    } else if (upMd) {
        itemsPerRow = 3;
    } else if (upSm) {
        itemsPerRow = 2;
    } else {
        itemsPerRow = 1;
    }

    // Calculate line limit based on view
    const lineLimit = mobileView ? mobileViewLineLimit : desktopViewLineLimit;

    // Calculate project limit based on lineLimit and itemsPerRow
    const projectLimit = lineLimit * itemsPerRow;

    // Helper function to parse category strings into arrays
    function getCategories(item) {
        let categories = item.category || null;
        if (typeof categories === 'string') {
            categories = categories.split(',').map((cat) => cat.trim());
        }
        return categories;
    }

    // Get the list of all project categories
    useEffect(() => {
        const categoriesSet = new Set();
        projects.forEach((project) => {
            const categories = getCategories(project);
            categories && categories.forEach((cat) => categoriesSet.add(cat));
        });
        const sortedCategories = Array.from(categoriesSet).sort();
        setCategories(['All', ...sortedCategories]);
    }, []);

    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue || event.target.value);
        setPage(1); // Reset page to 1 when category changes
        setAnchorEl(null); // Close the menu
    };

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => {
                const categories = getCategories(project);
                return categories && categories.includes(selectedCategory);
            });

    // Calculate total pages based on project limit
    const totalPages = Math.ceil(filteredProjects.length / projectLimit);

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // Paginate projects based on the current page and project limit
    const paginatedProjects = filteredProjects.slice(
        (page - 1) * projectLimit,
        page * projectLimit
    );

    const handleProjectClick = (project) => {
        const currentUrl = window.location.pathname;
        if (mobileView) {
            navigate(`/projects/${project.route}`);
        } else {
            setSelectedProject(project);
            setDrawerOpen(true);
            window.history.pushState({ prevUrl: currentUrl }, '', `/projects/${project.route}`);
        }
    };

    const handleDrawerClose = () => {
        const previousState = window.history.state?.prevUrl;
        setDrawerOpen(false);
        setSelectedProject(null);
        if (previousState) {
            navigate(previousState, { replace: true });
        } else {
            navigate('/projects', { replace: true });
        }
    };

    // Close the drawer when URL changes (e.g., when user clicks the browser back button)
    useEffect(() => {
        if (location.pathname === '/projects' && drawerOpen) {
            handleDrawerClose();
        }
    }, [location.pathname]);

    // Handle opening and closing of menu for mobile chip
    const handleChipClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ padding: '2rem' }}>
            {/* Category selection */}
            {mobileView ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Chip
                        label={selectedCategory}
                        onClick={handleChipClick}
                        sx={{ cursor: 'pointer', minWidth: '7rem' }}
                        deleteIcon={<ExpandMoreIcon />}
                        onDelete={handleChipClick}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} onClick={() => handleCategoryChange(null, category)}>
                                {category}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ) : (
                <Tabs
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="project categories"
                    sx={{ marginBottom: '2rem' }}
                >
                    {categories.map((category) => (
                        <Tab key={category} label={category} value={category} />
                    ))}
                </Tabs>
            )}

            {/* Display paginated projects */}
            <Grid container spacing={4}>
                <AnimatePresence>
                    {paginatedProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={project.route}>
                            {/* Pass the index to ProjectCard to control delay */}
                            <ProjectCard project={project} onProjectClick={handleProjectClick} index={index} />
                        </Grid>
                    ))}
                </AnimatePresence>
            </Grid>

            {/* Pagination controls */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                <Button
                    variant="contained"
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    sx={{ marginRight: '1rem' }}
                >
                    Previous
                </Button>

                <Typography variant="body1">{`${page}/${totalPages}`}</Typography>

                <Button
                    variant="contained"
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    sx={{ marginLeft: '1rem' }}
                >
                    Next
                </Button>
            </Box>

            {!mobileView && (
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    PaperProps={{ sx: { width: mobileView ? '100%' : '50%' } }}
                >
                    {selectedProject && (
                        <ProjectDetailedPage
                            project={selectedProject}
                            onClose={handleDrawerClose}
                            notDrawer={false}
                        />
                    )}
                </Drawer>
            )}
        </Box>
    );
}

export default ProjectsCollection;
