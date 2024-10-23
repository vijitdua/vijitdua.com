import MainLayout from '../layouts/MainLayout';
import ProjectsCollection from '../components/projects/ProjectsCollection';
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";
import {Container, Typography} from "@mui/material";

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
            <Container maxWidth="xl">

                <Typography variant='h1' align='center'>
                    Projects
                </Typography>

                <ProjectsCollection desktopViewProjectLimit={12} mobileViewProjectLimit={8}/>

            </Container>
        </MainLayout>
    );
}

export default ProjectsPage;
