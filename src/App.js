import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./screens/HomePage";
import {routes} from "./configs/routesConfig";
import {theme} from "./themes/primaryTheme";
import ProjectsPage from "./screens/ProjectsPage";
import ExperiencePage from "./screens/ExperiencePage";
import NoPage from "./screens/NoPage";
import SocialsPage from "./screens/SocialsPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* Begin browser routes */}
            <Routes>
                {/* Primary routes */}
                <Route path = "/">
                    <Route index element={<MainLayout> <HomePage/> </MainLayout>}/>
                    <Route path={routes.projects} element={<MainLayout> <ProjectsPage/> </MainLayout>}/>
                    <Route path={routes.experience} element={<MainLayout> <ExperiencePage/> </MainLayout>}/>
                    <Route path={routes.socials} element={<MainLayout> <SocialsPage/> </MainLayout>}/>
                    <Route path='*' element={<NoPage/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
