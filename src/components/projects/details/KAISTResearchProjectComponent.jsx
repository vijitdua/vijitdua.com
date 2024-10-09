import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";

function KAISTResearchProjectComponent(){
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>

            <Typography variant="h4" gutterBottom>
                About AutoMap
            </Typography>
            <Typography variant="body1" paragraph>
                AutoMap is a utility tool designed to automate road infrastructure detection using satellite imagery. By leveraging deep learning models like UNet and Attention UNet, it processes satellite images providing accurate predictions for large-scale mapping.
            </Typography>

            <Typography variant = "body1" paragraph>
                This project was developed as a Research Project as a part of KAIST's (Korea Advanced Institute of Technology) summer research program.
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
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

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel/>

        </Box>
    );
}

export default KAISTResearchProjectComponent;
