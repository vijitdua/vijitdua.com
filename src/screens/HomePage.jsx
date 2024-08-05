import {Typography, Link, Divider, Box, Container, Avatar, useMediaQuery} from "@mui/material";
import {socialLinks} from "../configs/routesConfig";
import {theme} from "../themes/primaryTheme";

function HomePage() {

    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg">

            {/* Who am I */}
            <Box>

                {/* Profile Picture with "Hi, I'm Vijit" & Initial bio */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: mobileView ? 'column' : 'row-reverse',
                    justifyContent: mobileView? 'center' : 'space-around',
                    alignItems: mobileView? 'center' : 'center',
                    gap: '3rem',
                }}>
                    <Avatar alt="Vijit Dua" src={`${process.env.PUBLIC_URL}/assets/pfp.png`} sx={{
                        marginTop: mobileView? '0rem': '1rem',
                        height: mobileView? '10rem' : '16rem',
                        width: mobileView? '10rem' : '16rem',
                        boxShadow: mobileView? '0.3rem 0.3rem' : '0.4rem 0.4rem',
                    }}/>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: mobileView? '100%' : '80%',
                        gap: '1rem',
                    }}>
                        <Typography variant='h2'> Hi, I'm Vijit </Typography>
                        <Typography variant="body1" sx={{textAlign: 'justify'}}>
                            A CS student with a side quest in entrepreneurship. I'm all
                            about blending coding with my dream to kick off something cool on my
                            own. Outside of plotting to take over the tech world, you'll catch me
                            hitting the pavement on my runs, flexing at the gym, crafting videos /
                            edits for my{" "}
                            <Link href={socialLinks.youtubeMain} target="_blank">
                                YouTube channel
                            </Link>
                            , or sometimes (rarely) even producing music.
                        </Typography>

                        <Typography variant="body1" sx={{textAlign: 'justify'}}>
                            When I'm not cooped up being productive, I tend to be an extremely
                            outgoing person. I live for the thrill of meeting new folks and jumping
                            into any convo, from debating the existential status of hotdogs
                            (definitely sandwiches, right?) to unraveling the mysteries of physics.
                        </Typography>

                        <Typography variant="body1" sx={{textAlign: 'justify'}}>
                            I'm also a part-time gamer. Mostly into BeatSaber, but anything that
                            runs on a Mac (Whisky / Windows Game Porting Tool Kit) or Oculus Quest 2 is cool by me.
                        </Typography>

                    </Box>
                </Box>

            </Box>
        </Container>
    );
}

export default HomePage;
