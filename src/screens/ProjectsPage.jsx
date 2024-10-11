import MainLayout from '../layouts/MainLayout';
import ProjectsCollection from '../components/projects/ProjectsCollection';
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | Projects</title>
            <link rel="canonical" href={routes.projects}/>
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
            <ProjectsCollection />
        </MainLayout>
    );
}

export default ProjectsPage;
