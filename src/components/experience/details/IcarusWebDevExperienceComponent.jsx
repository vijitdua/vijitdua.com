import { Box, Divider } from "@mui/material";
import React from "react";

function IcarusWebDevExperienceComponent() {
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>
            <ul>
                <li>Led a team of six software engineers and one designer, in a fast-paced startup environment.</li>
                <li>Delivered first deployment in 14 days, ahead of 1-month timeline.</li>
                <li>Worked as a full-stack engineer, utilizing React.js & Material UI for front-end development, alongside Node.js (primarily) & Python for back-end development.</li>
                <li>Maintained automated deployment pipelines through GitHub CI.</li>
                <li>Managed Linux server deployment with NGINX, overseeing Cloudflare configurations.</li>
                <li>Developed internal tools including a web admin panel & custom Discord bot integrated with a Node.js CRUD backend for streamlined administrative features for team management.</li>
            </ul>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>
        </Box>
    );
}

export default IcarusWebDevExperienceComponent;
