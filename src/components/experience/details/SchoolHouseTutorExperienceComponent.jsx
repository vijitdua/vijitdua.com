import {Box, Button, Divider} from "@mui/material";
import React from "react";
import ArticleIcon from "@mui/icons-material/Article";

function SchoolHouseTutorExperienceComponent() {
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>
            <Button
                variant="outlined"
                color="secondary"
                startIcon={<ArticleIcon />}
                component="a"
                href={'https://schoolhouse.world/transcript/23e8527d-e41a-4d2a-b905-589bc74c8344'}
                target="_blank"
                rel="noopener noreferrer"
            >
                Portfolio & Reviews
            </Button>
            <ul>
                <li>Tutored students in AP Physics & SAT.</li>
                <li>Received 98% positive ratings among a total of 190+ ratings.</li>
                <li>Ranked "Most Helpful Tutor of the Week" 5 times consecutively.</li>
                <li>Helped a student improve from barely passing his class to achieving full marks on in-class quizzes.</li>
                <li>Audited sessions to measure quality and safety.</li>
            </ul>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{ mb: '1rem' }} />
            </Box>
        </Box>
    );
}

export default SchoolHouseTutorExperienceComponent;
