import {Box, Link, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import {socialLinks} from "../../../configs/routesConfig";
import Divider from "@mui/material/Divider";

const multimediaData = [
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/innogreet/signup-light.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/innogreet/signup-dark.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/innogreet/home-desktop-light.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/innogreet/home-mobile-light.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/innogreet/home-desktop-dark.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/innogreet/home-mobile-dark.png`},
];

function InnoGreetComponent(){
    return (
        <Box sx={{textAlign: 'justify'}}>

            <Typography variant="h4" gutterBottom>
                About InnoGreet
            </Typography>
            <Typography variant="body1" paragraph>
                InnoGreet is a platform designed to connect like-minded professionals and foster meaningful
                collaborations. It aims to help individuals start projects, build startups, and develop innovative ideas
                by providing tools for seamless networking and teamwork. InnoGreet’s mission is to empower users to
                achieve their career goals through productive partnerships, expert insights, and shared resources,
                creating a community focused on innovation and growth.
            </Typography>
            <Typography variant="body1" paragraph>
                You can checkout InnoGreet yourself right <Link href={socialLinks.innogreet}>here</Link>
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Leading the team, including development, for a platform aimed at connecting & providing resources to
                    individuals seeking collaboration on innovative projects.
                </li>
                <li>Currently a project with the potential to transition into a startup based on beta launch success.
                </li>
                <li>Frontend: Next.js, JavaScript, React.js, Material UI, Wordpress (Next.js headless CMS integration)</li>
                <li>
                    Backend: Node.js, Express.js, Sequelize, Passport.js, NodeMailer, PostgreSQL, Docker Compose, Docker
                </li>
            </ul>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Launching March 2025</strong>
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Sneak Peaks (In Progress)</strong>
            </Typography>

            <MultimediaCarousel data={multimediaData} />

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

        </Box>
    );
}

export default InnoGreetComponent;
