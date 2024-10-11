import React from 'react';
import {Typography, Box, Link} from '@mui/material';
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import Divider from "@mui/material/Divider";

function TeamSyncComponent() {
    return (
        <Box sx={{maxWidth: '800px', textAlign: 'justify'}}>

            <Typography variant="h4" gutterBottom>
                About Team Sync
            </Typography>
            <Typography variant="body1" paragraph>
                TeamSync is a project aimed at streamlining administrative tasks & member management for Discord-based
                teams.
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology</strong>
            </Typography>
            <ul>
                <li>Built in collaboration in a team of 2*</li>
                <li>Implemented RESTful APIs and enabled public data display through simple GET requests for web
                    integrations.
                </li>
                <li>Created a React.js web client, Discord.js Discord bot, and a Node.js Express.js backend.</li>
                <li>Additional Utilities: Passport.js, Sequalize.js</li>
            </ul>

            <Typography variant='body1' paragraph>
                *Built by Vijit Dua, and <Link href={`https://linkedin.com/in/naomi-zhao-b80375253`}
                                               target={"_blank"}
                                               rel={"noopener noreferrer"}> Naomi Zhao</Link>
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>In-Progress</strong>
            </Typography>
            <Typography varient={'body1'} paragraph> Media Coming soon. </Typography>

            {/*<MultimediaCarousel/>*/}
            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

        </Box>
    );
}

export default TeamSyncComponent;
