import {Box, Divider} from "@mui/material";
import React from "react";


function IcarusWebDevExperienceComponent(){
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>

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

        </Box>
    );
}

export default IcarusWebDevExperienceComponent;
