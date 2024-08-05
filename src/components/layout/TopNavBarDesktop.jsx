import {endMenuItems, pagesMenu} from "../../configs/menuConfig";
import {AppBar, Box, Button, Toolbar, Typography, useScrollTrigger, useTheme} from "@mui/material";
import MenuItemsWithIcons from "../MenuItems/MenuItemsWithIcons";
import {cloneElement} from "react";
import {Link} from "react-router-dom";

// ElevationScroll Component
function ElevationScroll({children, window}) {
    const theme = useTheme();
    const isPageScrolledToTop = ! useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: isPageScrolledToTop ? 0 : 4,
        sx: {
            ...children.props.sx,
            background: isPageScrolledToTop ? `${theme.palette.appBar.defaultBackground}` : `${theme.palette.appBar.elevatedBackground}`,
        }
    });
}

// Different pages as menu items, this component is for the elements in the middle
function PageMenuItems(item, index, numberOfItems) {
    return (
        <Button
            // Make it a link if it's a route, otherwise make it a button with onClickFunction. Render is still button for both.
            key={index}
            component={item.route ? Link : 'button'}
            to={item.route ? item.route : undefined}
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
            color="inherit"
            sx={{
                textDecoration: 'none',
                background: 'linear-gradient(to right, #9ef7f7, #fc8bef)', // Gradient applied to all buttons
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                transition: '0.3s',
                // Adjust the gradient spread across all items
                backgroundSize: `calc(100% * ${numberOfItems})`,
                backgroundPosition: `calc(${index} * 100% / ${numberOfItems}) 0`,
                '&:hover': {
                    transform: 'scale(1.1)',
                },
            }}
        >
            <Typography variant="h3">
                {item.text}
            </Typography>
        </Button>);
}

// Top navigation bar on desktop
function TopNavBarDesktop() {
    const theme = useTheme();
    return (
        <ElevationScroll>
            <AppBar position="static" sx={{
                background: `${theme.palette.appBar.defaultBackground}`,
                width: '100vw',
            }}>
                <Toolbar sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    padding: 0,
                }}>

                    {/* Components to the left */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}>
                        {/*No components here yet, just creating blank space */}
                    </Box>

                    {/* Components in the middle */}

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '1rem',
                        position: 'relative', // Make it relative for child positioning
                        overflow: 'hidden', // Ensure the gradient is not clipped at the edges
                    }}>
                        {pagesMenu.map((item, index) => PageMenuItems(item, index, pagesMenu.length))}
                    </Box>

                    {/* Components to the right */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        gap: '0.125rem',
                    }}>
                        {endMenuItems.map((item, index) => MenuItemsWithIcons(item, index))}
                    </Box>

                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}

export default TopNavBarDesktop;