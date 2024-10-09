import React from 'react';
import {Typography, Box, Link} from '@mui/material';
import MultimediaCarousel from "../../collections/MultimediaCarousel";

function TeamSyncComponent() {
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>

            <Typography variant="h4" gutterBottom>
                About Team Sync
            </Typography>
            <Typography variant="body1" paragraph>
                TeamSync is a project aimed at streamlining administrative tasks & member management for Discord-based teams.
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology</strong>
            </Typography>
            <ul>
                <li>Built in collaboration in a team of 2*</li>
                <li>Implemented RESTful APIs and enabled public data display through simple GET requests for web integrations.</li>
                <li>Created a React.js web client, Discord.js Discord bot, and a Node.js Express.js backend.</li>
                <li>Additional Utilities: Passport.js, Sequalize.js</li>
            </ul>

            <Typography variant='body1' paragraph>
                *Built by Vijit Dua, and <Link href={`https://linkedin.com/in/naomi-zhao-b80375253`}> Naomi Zhao</Link>
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel/>
        </Box>
    );
}

export default TeamSyncComponent;
