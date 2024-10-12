import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";
import Divider from "@mui/material/Divider";

const multimediaData = [
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/sign-up.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/menu.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/waiting.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/play-1.png` },
    { type: 'image', url: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/victory.png` },
];

function TicTacToeComponent(){
    return (
        <Box sx={{textAlign: 'justify' }}>


            <Typography variant="h4" gutterBottom>
                About Multiplayer TicTacToe
            </Typography>
            <Typography variant="body1" paragraph>
                TicTacToe Multiplayer Game is a web-based game that allows players to compete in real-time. I built it as a way to dive headfirst into both frontend and backend development, using this project to rapidly learn the basics of web technologies.
            </Typography>

            <Typography variant="body1" paragraph>
                This was my first-ever attempt at building anything for the web. Before this project, I had no experience with HTML, JavaScript, or web development in general. Through this, I quickly gained foundational knowledge in frontend design and backend functionality.
            </Typography>

            <Typography variant="body1" paragraph>
                The game provided a simple yet effective learning opportunity, helping me understand how to create interactive applications while marking my transition from CLI-based projects to web development. It became a stepping stone in my journey towards full-stack development.
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Divider variant="middle" sx={{mb:'1rem'}}/>
            </Box>

            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Full-stack tic-tac-toe game supporting player vs. player matches over the internet.</li>
                <li>Frontend – React & Material UI; Backend – Node.js, Express, MySQL.</li>
                <li>DevOps & hosting: AWS EC2, Docker, NGINX, Certbot (SSL), AWS Route 53 (DNS).</li>
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

export default TicTacToeComponent;
