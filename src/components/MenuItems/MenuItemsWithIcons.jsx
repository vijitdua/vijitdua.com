import {Button} from "@mui/material";

function MenuItemsWithIcons(item, index) {
    return (
        <Button
            key={index}
            component={item.route ? 'a' : 'button'} // Not using links and using 'a' instead so component can open in a new tab instead of current tab
            href={item.route ? item.route : undefined}
            target={item.route ? "_blank" : undefined} // Item opens in new tab instead of current tab
            rel={item.route ? "noopener noreferrer" : undefined} // Item opens in new tab instead of current tab
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined}
            color="inherit"
            sx={{
                textDecoration: 'none', // Remove underline
                color: '#fff'
            }}
        >
            {item.icon}
        </Button>);
}

export default MenuItemsWithIcons;