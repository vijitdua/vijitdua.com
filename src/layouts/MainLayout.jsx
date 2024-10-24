import {theme} from "../themes/primaryTheme";
import {Box, useMediaQuery} from "@mui/material";
import TopNavBarDesktop from "../components/layout/TopNavBarDesktop";
import TopNavBarMobile from "../components/layout/TopNavBarMobile";


/**
 * Wraps the children screens under relevant layouts based on viewport width.
 * @param children children to be returned inside the wrapped
 * @constructor
 */
function MainLayout({children}) {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100vw',
        }}>
            <Box sx={{
                position: 'sticky',
                top: 0,
                width: '100%',
                zIndex: 10,
            }}>
                {mobileView ? <TopNavBarMobile/> : <TopNavBarDesktop/>}
            </Box>
            <Box sx={{
                mt: '3rem',
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default MainLayout;