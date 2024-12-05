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
import EducationTimeline from "../components/education/EducationTimeline";
import PDFViewer from "../components/PDFViewer";

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

                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        gap: '3rem',
                    }}>
                        <IntroductionSection/>
                        {/*<ProfileSection/>*/}
                    </Box>
                </Container>

                <Container maxWidth="lg">
                    <Typography variant="h1" gutterBottom sx={{mt: '3rem', textAlign: 'center'}}>
                        Projects
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{textAlign: 'center'}}>
                        Click to expand
                    </Typography>
                    <ProjectsCollection/>
                </Container>

                <Container maxWidth="lg">
                    <Typography variant="h1" gutterBottom sx={{mt: '3rem', textAlign: 'center'}}>
                        Education
                    </Typography>
                    <EducationTimeline/>
                </Container>

                <Container maxWidth="lg">
                    <Typography variant="h1" gutterBottom sx={{mt: '3rem', textAlign: 'center'}}>
                        Experience
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{textAlign: 'center'}}>
                        Click to expand
                    </Typography>
                    <ExperienceTimeline/>
                </Container>

                <Container maxWidth="md">
                    <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
                        Resume
                    </Typography>
                    <PDFViewer fileOrUrl={`${process.env.PUBLIC_URL}/assets/public-no-contact-resume.pdf`}/>
                </Container>

            </Container>
        </MainLayout>
    );
}

export default PortfolioPage;
