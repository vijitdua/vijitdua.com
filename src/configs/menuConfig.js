import {socialLinks, routes} from "./routesConfig";


// Icon imports only
import HomeIcon from '@mui/icons-material/Home';
import HighlightIcon from '@mui/icons-material/Highlight';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Box} from "@mui/material";

const CustomIcon = ({ src, ...props }) => (
    <Box
        component="img"
        src={src}
        alt="icon"
        sx={{ width: 24, height: 24, ...props.sx }}
    />
);

/**
 * Array of objects to be parsed into the menu displays, displays at the start / top of menu's
 *
 * @NecessaryFields text, route || onClickFunction
 * @OptionalFields noMobile, sx
 *
 * @Fields
 * - `text` : Display Text for Menu Option
 * - `route` : Redirect url when menu option clicked
 * - `onClickFunction` : Function handled on menu option click (only called when object.route not present)
 * - `noMobile` : Don't render component in mobile if true
 */
export const pagesMenu = [
    {text: 'Home', route: routes.home, },
    {text: 'Projects', route: routes.projects, },
    {text: 'Experience', route: routes.experience, },
    {text: 'Resume', route: routes.resume, },
    {text: 'Socials', route: routes.socials, },
];

/**
 * Array of objects to be parsed at the bottom of the menu displays, displays at the end / bottom of menu's
 *
 * @NecessaryFields icon, route || onClickFunction
 * @OptionalFields noMobile
 *
 * @Fields
 * - `icon` : Display Icon for Menu Option
 * - `route` : Redirect url when menu option clicked
 * - `onClickFunction` : Function handled on menu option click (only called when object.route not present)
 * - `noMobile` : Don't render component in mobile if true
 */
export const endMenuItems = [
    {icon: <XIcon/>, route: socialLinks.twitter,},
    {icon: <InstagramIcon/>, route: socialLinks.instagram,},
    {icon: <LinkedInIcon/>, route: socialLinks.linkedIn,},
    {icon: <CustomIcon src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png'/>, route: socialLinks.discord,},
    {icon: <MailIcon/>, route: socialLinks.email,},
];