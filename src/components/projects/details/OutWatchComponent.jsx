import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import Divider from "@mui/material/Divider";

function OutWatchComponent() {
    return (
        <Box sx={{ textAlign: 'justify' }}>

            <Typography variant="h4" gutterBottom>
                About OutWatch
            </Typography>
            <Typography variant="body1" paragraph>
                OutWatch is a backend service designed for monitoring your application’s uptime and assisting with bug report management. It periodically checks service status, logs uptime data, and sends notifications to a Discord channel when a service is offline. User-submitted bug reports are also forwarded to Discord.
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology</strong>
            </Typography>
            <ul>
                <li>Monitors service status every 10 minutes and logs uptime data.</li>
                <li>Sends alerts to designated Discord channels for service downtime and user-submitted bug reports.</li>
                <li>Built with Node.js, Express.js, PostgreSQL, with Discord.js</li>
                <li>Other: Sequelize (ORM), node-cron (scheduling).</li>
            </ul>


            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>

        </Box>
    );
}

export default OutWatchComponent;
