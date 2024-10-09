import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./screens/HomePage";
import {routes} from "./configs/routesConfig";
import {theme} from "./themes/primaryTheme";
import NoPage from "./screens/NoPage";
import SocialsPage from "./screens/SocialsPage";
import ProjectsPage from "./screens/ProjectsPage";
import AboutPage from "./screens/AboutPage";
import PortfolioPage from "./screens/PortfolioPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* Begin browser routes */}
            <Routes>
                {/* Primary routes */}
                <Route path = "/">
                    <Route index element={<HomePage/>}/>
                    <Route path={routes.aboutMe} element={<AboutPage/>}/>
                    <Route path={routes.portfolio} element={<PortfolioPage/>}/>
                    <Route path={routes.projects} element={<ProjectsPage/>}/>
                    <Route path={routes.socials} element={<SocialsPage/>}/>
                    <Route path='*' element={<NoPage/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
