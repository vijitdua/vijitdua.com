import { Box, Divider } from "@mui/material";
import React from "react";

function IcarusWebDevExperienceComponent() {
    return (
        <Box sx={{ textAlign: 'justify' }}>
            <ul>
                <li>Led a 7-person team in delivering a full-stack application in under 2 weeks using React.js, Node.js, & FastAPI; oversaw the development of internal tools, the main website for Icarus Development, and deployment processes for other teams.
                </li>
                <li>Managed NGINX Linux server deployments, GitHub CI/CD pipelines, and Cloudflare setup, reducing time to deployment by 60%.
                </li>
                <li>
                    Temporarily served as a mobile developer intern for a social app built with TypeScript, React Native, & Expo; Promoted to Web Dev Team lead within a month due to performance and leadership.
                </li>
            </ul>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>
        </Box>
    );
}

export default IcarusWebDevExperienceComponent;
