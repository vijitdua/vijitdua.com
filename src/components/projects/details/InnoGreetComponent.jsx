import {Box, Link, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import {socialLinks} from "../../../configs/routesConfig";

function InnoGreetComponent(){
    return (
        <Box sx={{maxWidth: '800px', textAlign: 'justify'}}>

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

            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Leading the team, including development, for a platform aimed at connecting & providing resources to
                    individuals seeking collaboration on innovative projects.
                </li>
                <li>Currently a project with the potential to transition into a startup based on beta launch success.
                </li>
                <li>Frontend: JavaScript, React.js, Material UI; Backend: Node.js, Express.js, Sequelize, Passport.js,
                    NodeMailer.
                </li>
                <li>Database: PostgreSQL, MongoDB (for in-app messages only).</li>
            </ul>

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel/>

        </Box>
    );
}

export default InnoGreetComponent;
