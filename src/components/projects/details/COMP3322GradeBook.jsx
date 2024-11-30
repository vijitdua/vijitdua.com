import { Box, Typography } from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import Divider from "@mui/material/Divider";

const functionalityMedia = [
    { type: 'gif', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/showcase.gif` },
];

const functionalityMediaTwo = [
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/1.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/2.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/3.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/4.png` },
];



const errorManagementMedia = [
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/err-1.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/err-2.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/err-3.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/err-4.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/err-5.png` },
];

function COMP3322GradeBook() {
    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Typography variant="h4" gutterBottom>
                About GradeBook
            </Typography>
            <Typography variant="body1" paragraph>
                This project was built for an assignment during my exchange program at the University of Hong Kong for
                an assignment for the course COMP 3322 (Modern Technologies on the World Wide Web).<br/>
                GradeBooks allows registered students to view their grades in enrolled courses.<br/>
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology</strong>
            </Typography>
            <ul>
                <li>Uses email magic link (EML) authentication for passwordless login.</li>
                <li>Coded within 24 hours</li>
                <li>Backend developed using Node.js, Express.js, MongoDB, Mongoose, & nodemailer.</li>
                <li>Frontend built with Vanilla JavaScript, HTML, and CSS.</li>
            </ul>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>

            <Typography variant="body1" paragraph>
                <strong>App Usage gif</strong>
            </Typography>
            <MultimediaCarousel data={functionalityMedia}/>

            <Typography variant="body1" paragraph>
                <strong>App Usage Images</strong>
            </Typography>
            <MultimediaCarousel data={functionalityMediaTwo} autoScrollInterval={4000} />

            <Typography variant="body1" paragraph>
                <strong>Error Management</strong>
            </Typography>
            <Typography variant="body1" paragraph>
                Errors are gracefully handled
            </Typography>
            <MultimediaCarousel data={errorManagementMedia} autoScrollInterval={4000} />
            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>
        </Box>
    );
}

export default COMP3322GradeBook;
