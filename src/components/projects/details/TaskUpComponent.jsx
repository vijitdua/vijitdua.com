import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";

const multimediaData = [
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/image-1.jpg` },
    {type: 'gif', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/check-task.gif` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/image-2.jpg` },
    {type: 'gif', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/add-friend.gif` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/image-3.jpg` },
    {type: 'gif', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/create-task.gif` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/task-up/image-4.jpg`},
    { type: 'video', url: 'https://www.youtube.com/embed/s_a5ya_JwBQ' },
];

function TaskUpComponent(){
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>

            <Typography variant="h4" gutterBottom>
                About TaskUp
            </Typography>
            <Typography variant="body1" paragraph>
                TaskUp is a competitive task management app developed during HackDavis 2024, designed to integrate collaboration and competition into productivity. Built in just 24 hours, the app allows users to track tasks, compete with others, and collaborate on shared goals.
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Collaborated in a team of four to develop and launch TaskUp within 24 hours during HackDavis 2024
                    (yearly UC Davis hackathon).
                </li>
                <li>Integrated competitiveness & collaboration into a task management app.</li>
                <li>Led backend development, using Express.js, Node.js, & MySQL.</li>
                <li>Contributed to frontend by implementing API communication, and key UI components with React &
                    Material UI.
                </li>
                <li>DevOps & hosting: AWS EC2, Docker, NGINX, Cloudflare (SSL, DNS).</li>
            </ul>


            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel data={multimediaData}/>

        </Box>
    );
}

export default TaskUpComponent;
