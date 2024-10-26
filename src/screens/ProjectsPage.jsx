import MainLayout from '../layouts/MainLayout';
import ProjectsCollection from '../components/projects/ProjectsCollection';
import { Helmet } from "react-helmet";
import { env } from "../configs/envConfig";
import { routes } from "../configs/routesConfig";
import { Container, Divider, Typography } from "@mui/material";
import ServiceStatus from "../components/service-and-bugs/ServiceStatus";
import BugReport from "../components/service-and-bugs/BugReport";

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
    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="xl" sx={{marginBottom: '5rem'}}>

                <Typography variant='h1' align='center'>
                    Projects
                </Typography>

                <ProjectsCollection desktopViewProjectLimit={4} mobileViewProjectLimit={8}/>

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
