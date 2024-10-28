import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './screens/HomePage';
import { routes } from './configs/routesConfig';
import { theme } from './themes/primaryTheme';
import NoPage from './screens/NoPage';
import SocialsPage from './screens/SocialsPage';
import ProjectsPage from './screens/ProjectsPage';
import AboutPage from './screens/AboutPage';
import PortfolioPage from './screens/PortfolioPage';
import ProjectDetailedPage from './components/projects/ProjectDetailedPage';
import {Helmet} from "react-helmet";
import {env} from './configs/envConfig';
import ExperiencePage from "./screens/ExperiencePage";
import ExperienceDetailedPage from "./components/experience/ExperienceDetailedPage";
import EducationDetailedPage from "./components/education/EducationDetailedPage";
import ResumePage from "./screens/ResumePage";

function AppMeta() {
    return (
        <Helmet>
            <title>Vijit Dua</title>
            <link rel="canonical" href={env.siteLocation}/>
            <meta
                name="keywords"
                content="Vijit Dua, computer, science student, entrepreneur, coding, startup, personal webpage, portfolio webpage, project webpage, YouTube, video editing, music production, running, gym, tech enthusiast, full stack developer, "
            />
        </Helmet>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppMeta/>
            <CssBaseline/>
            {/* Begin browser routes */}
            <Routes>
                {/* Primary routes */}
                <Route path="/">
                <Route index element={<HomePage />} />
                    <Route path={routes.aboutMe} element={<AboutPage />} />
                    <Route path={routes.portfolio} element={<PortfolioPage />} />
                    <Route path={routes.experience} element={<ExperiencePage />} />
                    <Route path={routes.projects} element={<ProjectsPage />} />
                    <Route path={routes.socials} element={<SocialsPage />} />
                    <Route path={routes.resume} element={<ResumePage />} />
                    {/* Project detail route */}
                    <Route path={`${routes.projects}/:projectName`} element={<ProjectDetailedPage />} />
                    {/* Experience Detail Route */}
                    <Route path={`${routes.experience}/:experienceRoute`} element={<ExperienceDetailedPage />} />
                    {/* Education Detail Route */}
                    <Route path={`${routes.education}/:educationRoute`} element={<EducationDetailedPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
