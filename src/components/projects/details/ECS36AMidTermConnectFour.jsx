import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import Divider from "@mui/material/Divider";

const multimediaData = [
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/midterm-project/1.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/midterm-project/2.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/midterm-project/3.png`},
];

function ECS36AMidTermConnectFour() {
    return (
        <Box sx={{textAlign: 'justify'}}>
            <Typography variant="h4" gutterBottom>
                About Connect 4
            </Typography>
            <Typography variant="body1" paragraph>
                This project was built as the MidTerm assignment for the course ECS 36A (Programming and Problem
                Solving in C) at UC Davis.<br/>
                It allows you to play the popular game of Connect-4 through a command line interface.
            </Typography>

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

export default ECS36AMidTermConnectFour;
