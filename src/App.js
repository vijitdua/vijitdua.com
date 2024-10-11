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

function AppMeta() {
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppMeta/>
            <CssBaseline />
            {/* Begin browser routes */}
            <Routes>
                {/* Primary routes */}
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path={routes.aboutMe} element={<AboutPage />} />
                    <Route path={routes.portfolio} element={<PortfolioPage />} />
                    <Route path={routes.projects} element={<ProjectsPage />} />
                    <Route path={routes.socials} element={<SocialsPage />} />
                    {/* Project detail route */}
                    <Route path={`${routes.projects}/:projectName`} element={<ProjectDetailedPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
