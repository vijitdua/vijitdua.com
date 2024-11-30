import {contentList, professionalSocials, socialsList} from "../configs/menuConfig";
import {Avatar, Box, Button, Container, IconButton, Typography} from "@mui/material";
import SocialMediaOvalItem from "../components/menu-items/SocialMediaOvalItem";
import {routes, socialLinks} from "../configs/routesConfig";
import InfoIcon from '@mui/icons-material/Info';
import {bio} from "../configs/misc";
import MenuItemsWithIcons from "../components/menu-items/MenuItemsWithIcons";
import MailIcon from "@mui/icons-material/Mail";
import MainLayout from "../layouts/MainLayout";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import {useState} from "react";

function Section({title, items}) {

    const [showHidden, setShowHidden] = useState(false);

    const visibleItems = items.filter(item => !item.hidden);
    const hiddenItems = items.filter(item => item.hidden);

    return (
        <Box sx={{marginBottom: '2rem'}}>
            <Typography variant="h5" sx={{
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
                {/* Render visible items */}
                {visibleItems.map((item, index) => (
                    <SocialMediaOvalItem item={item} index={index} key={index}/>
                ))}

                {/* Render hidden items if expanded */}
                {hiddenItems.length > 0 && (
                    <>
                        {showHidden && (
                            hiddenItems.map((item, index) => (
                                <SocialMediaOvalItem
                                    item={item}
                                    index={visibleItems.length + index}
                                    key={visibleItems.length + index}
                                />
                            ))
                        )}
                        <IconButton
                            onClick={() => setShowHidden(!showHidden)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {showHidden ? (
                                <UnfoldLessIcon fontSize="small"/>
                            ) : (
                                <UnfoldMoreIcon fontSize="small"/>
                            )}
                        </IconButton>
                    </>
                )}
            </Box>
        </Box>
    );
}

function SocialsPage() {
    return (
        <MainLayout>
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

                    {/*<SocialMediaOvalItem*/}
                    {/*    item={{name: 'About Me', icon: <InfoIcon/>, route: routes.aboutMe,}} index={1}*/}
                    {/*    key={1}/>*/}
                </Box>

                {/* Sections */}
                <Section title='Content' items={contentList}/>

                <Section title='Socials' items={socialsList}/>

                <Section title='Professional' items={professionalSocials}/>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    mb: '1rem',
                }}>
                    <Typography variant="body2" component="body2">
                        Click <Box sx={{display: 'inline-block', height: '1rem'}}><UnfoldMoreIcon
                        fontSize="small"/></Box> in each section to view more
                    </Typography>
                </Box>

                {/* Mail icon */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    mb: '1rem',
                }}>
                    {[{
                        icon: <MailIcon/>,
                        route: socialLinks.email,
                    }].map((item, index) => MenuItemsWithIcons(item, index))}
                </Box>

            </Container>
        </MainLayout>
    );
}

export default SocialsPage;
