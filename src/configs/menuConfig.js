import {socialLinks, routes} from "./routesConfig";

// Icon imports only
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {GitHub} from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';


const CustomIconOrSVG = ({ src, alt = 'icon', size = 24 }) => (
    <img src={src} alt={alt} style={{ width: size, height: size }} />
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
    {text:  'About', route: routes.aboutMe, },
    {text:  'Portfolio', route: routes.portfolio, },
    {text: 'Projects', route: routes.projects, },
    {text: 'Contact', route: routes.contact, },
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
    {icon: <CustomIconOrSVG src={`/icons/discord-white.svg`}/>, route: socialLinks.discord,},
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
    {name: 'Threads', icon: <CustomIconOrSVG src={`/icons/threads-white.svg`}/>, route: socialLinks.threads,},
    {name: 'Discord', icon: <CustomIconOrSVG src={`/icons/discord-white.svg`}/>, route: socialLinks.discord,},
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
    {name: 'Live Streams', icon: <CustomIconOrSVG src={`/icons/twitch-white.svg`}/>, route: socialLinks.twitch,},
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
    {name: 'Portfolio', icon: <LanguageIcon/>, route: routes.portfolio,},
    {name: 'LinkedIn', icon: <LinkedInIcon/>, route: socialLinks.linkedIn,},
    {name: 'GitHub', icon: <GitHub/>, route: socialLinks.github,},
    {name: 'Projects', icon: <FolderCopyIcon/>, route: socialLinks.github,},
    {name: 'InnoGreet', icon: <CustomIconOrSVG src={`/icons/innogreet-white.svg`}/>, route: socialLinks.innogreet,},
];