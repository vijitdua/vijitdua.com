import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes, socialLinks} from "../configs/routesConfig";
import MainLayout from "../layouts/MainLayout";
import {Box, Button, Container, Divider, Link, Typography} from "@mui/material";
import ContactForm from "../components/contact/ContactForm";
import MailIcon from "@mui/icons-material/Mail";
import MenuItemsWithIcons from "../components/menu-items/MenuItemsWithIcons";
import SocialIcon from '@mui/icons-material/Public';

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | Contact</title>
            <link rel="canonical" href={env.siteLocation + routes.contact}/>
            <meta
                name='description'
                content="Vijit Dua: Contact, Email, or send an annonymous message."
            />
        </Helmet>
    );
}

function ContactPage() {
    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="md" sx={{mt: 4, mb: 8}}>
                <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
                    Contact Me
                </Typography>

                <Container maxWidth="sm">
                    <Typography variant="body1" mb={4} textAlign="center">
                        If you have opportunities or are interested in collaboration, please email me. You can also
                        connect with me on social media.
                    </Typography>
                </Container>

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

                <Box display="flex" justifyContent="center" gap={2} mb={4}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<SocialIcon />}
                        href={routes.socials}
                        sx={{ color: 'white' }}
                    >
                        Socials
                    </Button>
                </Box>

                <Divider/>

                <Box mt={6} mb={8}>
                    <Typography variant="h2" gutterBottom textAlign="center">
                        Contact Form
                    </Typography>
                    <ContactForm/>
                </Box>
            </Container>
        </MainLayout>
    );
}

export default ContactPage;
