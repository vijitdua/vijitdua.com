import {Box, Button, Divider, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import ArticleIcon from '@mui/icons-material/Article';

const multimediaData = [
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/1.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/2.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/3.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/4.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/5.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/6.png` },
];

function KAISTResearchExperienceComponent(){
    return (
        <Box sx={{textAlign: 'justify' }}>

            <Button
                variant="outlined"
                color="secondary"
                startIcon={<ArticleIcon />}
                component="a"
                href={'https://github.com/vijitdua/KAIST-Deep-Learning-Research-UNet-Statalite-Road-Identification/blob/main/research-paper.pdf'}
                target="_blank"
                rel="noopener noreferrer"
            >
                Research Paper
            </Button>
            <ul>
                <li>Selected among 18 students worldwide for the prestigious summer research program at KAIST, focusing
                    on deep learning research.
                </li>
                <li>Developed UNet and Attention UNet models to automate road infrastructure detection using satellite
                    imagery, aimed at reducing manual labor in road mapping.
                </li>
                <li>Achieved a strong 0.73 F1 score on the final model.</li>
                <li>Curated and preprocessed data from datasets like Massachusetts and SpaceNet, correcting known errors
                    for model enhancement.
                </li>
            </ul>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel data={multimediaData}/>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

        </Box>
    );
}

export default KAISTResearchExperienceComponent;
