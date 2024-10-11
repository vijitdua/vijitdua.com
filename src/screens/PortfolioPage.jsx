import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";
import {Box, Container, Grid, Typography, useMediaQuery} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import IntroductionSection from "../components/home/IntroductionSection";
import ProfileSection from "../components/home/ProfileSection";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import ProjectsCollection from "../components/projects/ProjectsCollection";
import {theme} from "../themes/primaryTheme";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | Portfolio</title>
            <link rel="canonical" href={env.siteLocation + routes.portfolio}/>
            <meta
                name='description'
                content="Vijit Dua's Professional Portfolio. Full Stack Developer."
            />
        </Helmet>
    );
}

function PortfolioPage() {
    const mobileView = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="xl" sx={{marginTop: '4rem'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: mobileView ? 'column-reverse' : 'row',
                    justifyContent: mobileView ? 'center' : 'space-around',
                    alignItems: mobileView ? 'center' : 'center',
                    width: '100%',
                    gap: '3rem',
                }}>
                    <Grid item xs={12} md={6}>
                        <IntroductionSection/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProfileSection/>
                    </Grid>
                </Box>

                <Container maxWidth="lg">
                    <Typography variant="h1" gutterBottom sx={{mt: '3rem', textAlign: 'center' }}>
                        Experience
                    </Typography>
                    <ExperienceTimeline/>
                </Container>

                <Container maxWidth="lg">
                    <Typography variant="h1" gutterBottom sx={{ textAlign: 'center' }}>
                        Projects
                    </Typography>
                    <ProjectsCollection/>
                </Container>

            </Container>
        </MainLayout>
    );
}

export default PortfolioPage;
