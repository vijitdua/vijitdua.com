import {Button, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

function MenuItemsWithText(item, index, numberOfItems) {
    const theme = useTheme();
    return (
        <Button
            // Make it a link if it's a route, otherwise make it a button with onClickFunction. Render is still button for both.
            key={index}
            component={item.route ? Link : 'button'}
            to={item.route ? item.route : undefined}
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
            color="inherit"
            sx={{
                textDecoration: 'none', // remove underline
            }}
        >
            <Typography variant="h3">
                {item.text}
            </Typography>
        </Button>);
}

export default MenuItemsWithText;