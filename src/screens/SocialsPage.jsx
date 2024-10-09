import {contentList, professionalSocials, socialsList} from "../configs/menuConfig";
import {Avatar, Box, Container, Typography} from "@mui/material";
import SocialMediaOvalItem from "../components/MenuItems/SocialMediaOvalItem";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {routes, socialLinks} from "../configs/routesConfig";
import InfoIcon from '@mui/icons-material/Info';
import {bio} from "../configs/misc";
import MenuItemsWithIcons from "../components/MenuItems/MenuItemsWithIcons";
import MailIcon from "@mui/icons-material/Mail";

function Section({title, items}) {
    return (<Box sx={{
            marginBottom: '2rem',
        }}>
            {/* Section title */}
            <Typography variant='h5' sx={{
                textAlign: 'center',
                mt: '1rem',
                mb: '1rem',
                color: 'inherit',
            }}>
                {title}
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                color: 'inherit',
            }}>
                {items.map((item, index) => (
                    <SocialMediaOvalItem item={item} index={index} key={index}/>
                ))}
            </Box>
        </Box>
    );
}

function SocialsPage() {
    return (
        <Container maxWidth="md">

            {/* Profile picture and bio */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                mb: '1rem',
            }}>
                <Avatar alt="Vijit Dua" src={`${process.env.PUBLIC_URL}/assets/pfp.png`} sx={{
                    height: '7rem',
                    width: '7rem',
                    boxShadow: '0.4rem 0.4rem',
                }}/>
                <Typography variant='h3' component='h1'> Vijit Dua </Typography>

                <Typography
                    variant="body1"
                    component="body1"
                    sx={{
                        maxWidth: '30rem', // Set your desired maximum width
                        margin: '0 auto', // Center the text horizontally
                        textAlign: 'center', // Center the text within each line
                        wordWrap: 'break-word', // Ensure words break and wrap to the next line if necessary
                    }}
                >
                    {bio}
                </Typography>

                <SocialMediaOvalItem
                    item={{name: 'About Me', icon: <InfoIcon/>, route: routes.aboutMe,}} index={1}
                    key={1}/>
            </Box>

            {/* Sections */}
            <Section title='Content' items={contentList}/>

            <Section title='Socials' items={socialsList}/>

            <Section title='Professional' items={professionalSocials}/>

            {/* Mail icon */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                mb: '1rem',
            }}>
                {[{icon: <MailIcon/>, route: socialLinks.email,}].map((item, index) => MenuItemsWithIcons(item, index))}
            </Box>

        </Container>
    );
}

export default SocialsPage;
