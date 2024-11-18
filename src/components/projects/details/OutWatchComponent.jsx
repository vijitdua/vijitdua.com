import React from 'react';
import {Typography, Box, Link} from '@mui/material';
import Divider from "@mui/material/Divider";
import MultimediaCarousel from "../../collections/MultimediaCarousel";

const multimediaData = [
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/out-watch/1.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/out-watch/1.5.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/out-watch/2.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/out-watch/3.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/out-watch/4.png`},
];

function OutWatchComponent() {
    return (
        <Box sx={{textAlign: 'justify'}}>

            <Typography variant="h4" gutterBottom>
                About OutWatch
            </Typography>
            <Typography variant="body1" paragraph>
                OutWatch is a backend service designed for monitoring your application’s uptime and assisting with bug
                report management. It periodically checks service status, logs uptime data, and sends notifications to a
                Discord channel when a service is offline. User-submitted bug reports are also forwarded to Discord.
            </Typography>

            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology</strong>
            </Typography>
            <ul>
                <li>Quickly developed & deployed in less than 7 hours.</li>
                <li>Monitors service status every 10 minutes and logs uptime data.</li>
                <li>Sends alerts to designated Discord channels for service downtime and user-submitted bug reports.
                </li>
                <li>Built with Node.js, Express.js, PostgreSQL, Discord.js, Sequelize (ORM), and node-cron
                    (scheduling).
                </li>
            </ul>


            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel data={multimediaData}/>

            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>

        </Box>
    );
}

export default OutWatchComponent;
