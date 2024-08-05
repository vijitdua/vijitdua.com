import {socialLinks, routes} from "./routesConfig";
import {Box} from "@mui/material";


// Icon imports only
import HomeIcon from '@mui/icons-material/Home';
import HighlightIcon from '@mui/icons-material/Highlight';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";
import {GitHub} from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';

const CustomIcon = ({ src, ...props }) => (
    <Box
        component="img"
        src={src}
        alt="icon"
        sx={{ width: 24, height: 24, borderRadius: 5, ...props.sx}}
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


/**
 *
 * @NecessaryFields name, icon, route
 *
 * @Fields
 * - `name` : Displays the name of the menu option
 * - `icon` : Display Icon for Menu Option
 * - `route` : Redirect url when menu option clicked
 */
export const socialsList = [
    {name: 'X / Twitter', icon: <XIcon/>, route: socialLinks.twitter,},
    {name: 'Instagram', icon: <InstagramIcon/>, route: socialLinks.instagram,},
    {name: 'Photography Page', icon: <InstagramIcon/>, route: socialLinks.instagramPhotography,},
    {name: 'Threads', icon: <CustomIcon src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/threads-white-icon.png'/>, route: socialLinks.threads,},
    {name: 'Discord', icon: <CustomIcon src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png'/>, route: socialLinks.discord,},
];

/**
 *
 * @NecessaryFields name, icon, route
 *
 * @Fields
 * - `name` : Displays the name of the menu option
 * - `icon` : Display Icon for Menu Option
 * - `route` : Redirect url when menu option clicked
 */
export const contentList = [
    {name: 'Vijit Dua (Main)', icon: <YouTubeIcon/>, route: socialLinks.youtubeMain,},
    {name: 'Funnyizer (Gaming & 2nd)', icon: <YouTubeIcon/>, route: socialLinks.youtubeGaming,},
    {name: 'Live Streams', icon: <CustomIcon src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitch-white-icon.png'/>, route: socialLinks.twitch,},
];

/**
 *
 * @NecessaryFields name, icon, route
 *
 * @Fields
 * - `name` : Displays the name of the menu option
 * - `icon` : Display Icon for Menu Option
 * - `route` : Redirect url when menu option clicked
 */
export const professionalSocials = [
    {name: 'Personal Webpage', icon: <LanguageIcon/>, route: routes.home,},
    {name: 'LinkedIn', icon: <LinkedInIcon/>, route: socialLinks.linkedIn,},
    {name: 'GitHub', icon: <GitHub/>, route: socialLinks.github,},
    {name: 'InnoMate', icon: <CustomIcon src={`${process.env.PUBLIC_URL}/assets/innomate.png`}/>, route: 'https://innomate.today',},
];