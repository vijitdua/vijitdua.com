import {Box, Typography} from "@mui/material";
import MultimediaCarousel from "../../collections/MultimediaCarousel";
import React from "react";

function TicTacToeComponent(){
    return (
        <Box sx={{ maxWidth: '800px', textAlign: 'justify' }}>

            <Typography variant="body1" paragraph>
                TicTacToe Multiplayer Game is a web-based game that allows players to compete in real-time. I built it as a way to dive headfirst into both frontend and backend development, using this project to rapidly learn the basics of web technologies.
            </Typography>

            <Typography variant="body1" paragraph>
                This was my first-ever attempt at building anything for the web. Before this project, I had no experience with HTML, JavaScript, or web development in general. Through this, I quickly gained foundational knowledge in frontend design and backend functionality.
            </Typography>

            <Typography variant="body1" paragraph>
                The game provided a simple yet effective learning opportunity, helping me understand how to create interactive applications while marking my transition from CLI-based projects to web development. It became a stepping stone in my journey towards full-stack development.
            </Typography>


            <Typography variant="body1" paragraph>
                <strong>Details / Technology </strong>
            </Typography>
            <ul>
                <li>Full-stack tic-tac-toe game supporting player vs. player matches over the internet.</li>
                <li>Frontend – React & Material UI; Backend – Node.js, Express, MySQL.</li>
                <li>DevOps & hosting: AWS EC2, Docker, NGINX, Certbot (SSL), AWS Route 53 (DNS).</li>
            </ul>

            <Typography variant="body1" paragraph>
                <strong>Media</strong>
            </Typography>

            <MultimediaCarousel/>
        </Box>
    );
}

export default TicTacToeComponent;
