import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import Divider from "@mui/material/Divider";

const multimediaData = [
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/final-project/1.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/final-project/2.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/final-project/3.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/final-project/4.png`},
];

function ECS36AFinalTerminalPainter() {
    return (
        <Box sx={{textAlign: 'justify'}}>
            <Typography variant="h4" gutterBottom>
                About Terminal Painter
            </Typography>
            <Typography variant="body1" paragraph>
                This project was built as the Final assignment for the course ECS 36A (Programming and Problem
                Solving in C) at UC Davis.<br/>
                It allows you to draw on a canvas in the terminal.<br/>
                It also includes features such as saving / loading your canvases.
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

export default ECS36AFinalTerminalPainter;
