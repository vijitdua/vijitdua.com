import MainLayout from '../layouts/MainLayout';
import ProjectsCollection from '../components/projects/ProjectsCollection';
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";
import {
    Box,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton, ListItemText,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import ServiceStatus from "../components/service-and-bugs/ServiceStatus";
import BugReport from "../components/service-and-bugs/BugReport";
import LiveProjectsList from "../components/projects/LiveProjectsList";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | Projects</title>
            <link rel="canonical" href={env.siteLocation + routes.projects}/>
            <meta
                name='description'
                content="Gallery of projects made by Vijit Dua."
            />
        </Helmet>
    );
}

function ProjectsPage() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                // Get the top position of the element and adjust by 50 pixels
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 50;

                // Smoothly scroll to the adjusted position
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    return (
        <MainLayout>
            <PageMeta/>

                <Container id='live' maxWidth="xl" sx={{marginTop: '3rem', marginBottom: '2rem'}}>
                    <LiveProjectsList/>
                </Container>

                <Divider sx={{mb: '4rem',}}/>

                <Container id='all' maxWidth="xl" sx={{marginBottom: '5rem'}}>

                    <Typography variant='h1' align='center'>
                        All Projects
                    </Typography>

                    <ProjectsCollection/>

                </Container>

                <Divider/>

                {/* Service Status Section */}
                <Container id="status" maxWidth="xl" sx={{marginTop: '3rem', marginBottom: '3rem'}}>
                    <ServiceStatus/>
                </Container>

                <Divider/>

                {/* Bug Report Section */}
                <Container id="report" maxWidth="xl" sx={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <BugReport/>
                </Container>

                <Divider/>

        </MainLayout>
    );
}

export default ProjectsPage;
