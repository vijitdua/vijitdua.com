import {Box, Container, Grid} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import MainSections from "../components/home/MainSections";
import IntroductionSection from "../components/home/IntroductionSection";
import ProfileSection from "../components/home/ProfileSection";

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
    return (
        <MainLayout>
            <PageMeta />
            <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <IntroductionSection />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProfileSection />
                    </Grid>
                </Grid>

                <Box sx={{mt: '5rem'}}>
                    <MainSections />
                </Box>

            </Container>
        </MainLayout>
    );
}

export default HomePage;
