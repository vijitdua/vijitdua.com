import React, {useEffect, useState} from 'react';
import {projects} from '../../configs/projectsConfig';
import {Box, Typography, Link, List, ListItem, ListItemText, IconButton, ListItemButton} from '@mui/material';
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
            {(liveProjects.length > 0) && (
                <Typography variant='body1' align='center' gutterBottom>
                    Projects live on the internet that you can check out now!
                </Typography>
            )
            }
            <List sx={{width: '100%', maxWidth: 600, mx: 'auto'}}>
                {liveProjects.map((project) => (
                    <ListItemButton
                        component="a"
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.route}
                    >
                        <ListItemText>
                            <Typography variant='h4' component='body1'>
                                {project.title}
                            </Typography>
                        </ListItemText>
                        <InsertLinkIcon/>
                    </ListItemButton>
                ))}
            </List>
            {!(liveProjects.length > 0) && (
                <Typography align="center" variant="body1" component="p">
                    Previous projects have been retired due to poor quality. <br/>
                    {/*If you are stalking my github logs, tho it never made it onto the webpage, i had tic.vijitdua.xyz and taskup.vijitdua.xyz for a while*/}
                    Launching January: <Link href={'https://innogreet.com'}>InnoGreet</Link> & Another Exciting Project. <br/>
                    Stay Tuned! <br/>
                </Typography>

            )}
        </Box>
    );
}

export default LiveProjectsList;
