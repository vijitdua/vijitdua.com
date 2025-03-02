import {Box, Link, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import Divider from "@mui/material/Divider";

const multimediaData = [
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/lavender/1.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/lavender/2.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/lavender/3.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/lavender/4.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/lavender/5.png`},
    {type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/lavender/6.png`},
    {type: 'video', url: `https://www.youtube.com//embed/EyVQDNdSm0s`,}
];

function LavenderComponent() {
    return (
        <Box sx={{textAlign: 'justify'}}>

            <Typography variant="h4" gutterBottom>
                Elevator Pitch
            </Typography>
            <Typography variant="body1" paragraph>
                Turn your notes into quizzes with AI and test your knowledge!
                Lavender helps students and professionals convert their lecture slides, notes, or PDFs into AI-generated
                quizzes to reinforce learning through interactive testing.
            </Typography>



            <Box sx={{width: '100%'}}>
                <Divider variant="middle" sx={{mb: '1rem'}}/>
            </Box>



            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Built by a team of 4 <b>within 5 hours</b>, as a part of the SacHacks VI (2025) hackathon.</li>
                <li>Frontend: Next.js, React.js, Material UI</li>
                <li>Backend: Express.js, Node.js, Multer (for file uploads), OpenAI API, PDF.js</li>
            </ul>
            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>




            <Typography variant="h6" gutterBottom>
                👨‍💻 Developed By
            </Typography>

            <Typography variant="body1" paragraph>
                The <Link href="https://launchdavis.com" target="_blank" rel="noopener noreferrer"><b>Launch Davis</b></Link> Team
            </Typography>

            <ul>
                <li>
                    <Link href="https://vijitdua.com/" target="_blank" rel="noopener noreferrer"><b>Vijit Dua</b></Link><br />
                    <b>Frontend:</b> Everything.<br />
                    <b>Backend:</b> Repository initialization and setup.
                </li>
                <li>
                    <Link href="https://github.com/ehsaanisme" target="_blank" rel="noopener noreferrer"><b>Ehsaan Mohammed</b></Link><br />
                    <b>Backend:</b> Worked on the LLM Integration.
                </li>
                <li>
                    <Link href="https://alexzhuzhou.github.io/AlexWebsite/" target="_blank" rel="noopener noreferrer"><b>Alex Zhu Zhou</b></Link><br />
                    <b>Backend:</b> Worked on setting up the server and client requests.
                </li>
                <li>
                    <Link href="https://github.com/tmabdull" target="_blank" rel="noopener noreferrer"><b>Taha Abdullah</b></Link><br />
                    <b>Backend:</b> Worked on the PDF parser and integration with the backend PDF controller.
                </li>
            </ul>

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

export default LavenderComponent;
