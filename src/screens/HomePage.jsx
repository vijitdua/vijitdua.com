import {Box, Container, Grid, useMediaQuery} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import MainSections from "../components/home/MainSections";
import IntroductionSection from "../components/home/IntroductionSection";
import ProfileSection from "../components/home/ProfileSection";
import {theme} from "../themes/primaryTheme";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua</title>
            <link rel="canonical" href={env.siteLocation}/>
            <meta
                name='description'
                content="Hi, I'm Vijit, a CS student with a passion for coding and entrepreneurship.
            I'm all about blending coding with dream to kick off something cool in the future."
            />
        </Helmet>
    );
}

function HomePage() {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <MainLayout>
            <PageMeta />
            <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: mobileView ? 'column-reverse' : 'row',
                    justifyContent: mobileView ? 'center' : 'space-around',
                    alignItems: mobileView ? 'center' : 'center',
                    width: '100%',
                    gap: '3rem',
                }}>
                    <Grid item xs={12} md={6}>
                        <IntroductionSection />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProfileSection />
                    </Grid>
                </Box>

                <Box sx={{mt: '5rem'}}>
                    <MainSections />
                </Box>

            </Container>
        </MainLayout>
    );
}

export default HomePage;
