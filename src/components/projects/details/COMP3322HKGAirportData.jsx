import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import Divider from "@mui/material/Divider";

const multimediaData = [
    {type: 'gif', url: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/HKG-airport-data/preview.gif`},
];

function COMP3322HKGAirportData() {
    return (
        <Box sx={{textAlign: 'justify'}}>


            <Typography variant="h4" gutterBottom>
                About HKG Airport Flight Data
            </Typography>
            <Typography variant="body1" paragraph>
                This project was built for an assignment during my exchange program at the University of Hong Kong for
                an assignment for the course COMP 3322 (Modern Technologies on the World Wide Web).
            </Typography>

            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Built using Vanila JavaScript, HTML, & CSS without any external libraries.</li>
            </ul>

            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel data={multimediaData} autoScrollInterval={100000}/>

            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>

        </Box>
    );
}

export default COMP3322HKGAirportData;
