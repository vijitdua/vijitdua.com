import {Container, Typography} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

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

function ExperiencePage(){
    return (
        <MainLayout>
            <PageMeta />
            <Container maxWidth="lg">
                <Typography variant="h1" gutterBottom sx={{ textAlign: 'center' }}>
                    Experience
                </Typography>
                <ExperienceTimeline />
            </Container>
        </MainLayout>
    );
}

export default ExperiencePage;
