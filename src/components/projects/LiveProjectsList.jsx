import React, {useEffect, useState} from 'react';
import {projects} from '../../configs/projectsConfig';
import {Box, Typography, Link, List, ListItem, ListItemText, IconButton} from '@mui/material';
import InsertLinkIcon from "@mui/icons-material/InsertLink";

function LiveProjectsList() {
    const [liveProjects, setLiveProjects] = useState([]);

    useEffect(() => {
        const filteredProjects = projects.filter(
            (project) => (project.category && project.category.includes('Live')) && (project.projectUrl ? true : false));

        setLiveProjects(filteredProjects);
    }, []); // Empty dependency array means this runs once on mount

    return (
        <Box sx={{padding: '2rem'}}>
            <Typography variant='h1' align='center' gutterBottom>
                Live Projects
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>
                Projects live on the internet that you can check out now!
            </Typography>
            <List sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
                {liveProjects.map((project) => (
                    <ListItem key={project.route}>
                        <ListItemText>
                            <Typography variant='h4' component='body1'>
                                {project.title}
                            </Typography>
                        </ListItemText>
                        <IconButton
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Service"
                        >
                            <InsertLinkIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default LiveProjectsList;
