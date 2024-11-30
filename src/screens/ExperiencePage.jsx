import {Box, Button, Container, Typography} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import {useNavigate} from "react-router-dom";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | Experience</title>
            <link rel="canonical" href={env.siteLocation + routes.experience}/>
            <meta
                name='description'
                content="Vijit Dua's Work Experience."
            />
        </Helmet>
    );
}

function ExperiencePage() {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="lg">

                <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
                    Experience
                </Typography>


                <Typography variant="body1" gutterBottom sx={{textAlign: 'center'}}>
                    Click to expand
                </Typography>

                <ExperienceTimeline/>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(routes.portfolio)}
                        sx={{
                            borderRadius: '20px',
                            padding: '0.5rem 1.5rem',
                            fontSize: '1.5rem',
                            textTransform: 'none',
                            marginBottom: '5rem',
                        }}
                    >
                        View the Rest of My Portfolio
                    </Button>
                </Box>

            </Container>
        </MainLayout>
    );
}

export default ExperiencePage;
