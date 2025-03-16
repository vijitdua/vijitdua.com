import MainLayout from "../layouts/MainLayout";
import ProjectsCollection from "../components/projects/ProjectsCollection";
import {Avatar, Box, Container, Divider, Grid, Link, Typography, useMediaQuery} from "@mui/material";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes, socialLinks} from "../configs/routesConfig";
import {theme} from "../themes/primaryTheme";
import Quote from "../components/typography/Quote";
import Collapsible from "../components/typography/Collapsible";
import IntroductionSection from "../components/home/IntroductionSection";
import ProfileSection from "../components/home/ProfileSection";
import InstrumentalToggle from "../components/about/InstrumentalToggle";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | About</title>
            <link rel="canonical" href={env.siteLocation + routes.aboutMe}/>
            <meta
                name='description'
                content="Hi, I'm Vijit, a CS student with a passion for coding and entrepreneurship. I'm all about blending coding with dream to kick off something cool in the future."
            />
        </Helmet>
    );
}

function AboutPage() {

    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="md">

                <Box sx={{mt: '3rem', mb: '2rem'}}>

                    <Typography variant="h1" gutterBottom sx={{textAlign: 'center', mb: '3rem'}}>
                        About Me
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: mobileView ? 'column-reverse' : 'row',
                        justifyContent: mobileView ? 'center' : 'space-around',
                        alignItems: mobileView ? 'center' : 'center',
                        width: '100%',
                        mb: '1rem',
                        gap: '3rem',
                    }}>
                        <Grid item xs={12} md={6}>
                            <IntroductionSection noTag={true}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ProfileSection rectangleMode={true}/>
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '2rem',
                        }}
                    >
                        {/*<Avatar*/}
                        {/*    alt="Vijit Dua"*/}
                        {/*    src={`${process.env.PUBLIC_URL}/assets/pfp.png`}*/}
                        {/*    sx={{*/}
                        {/*        height: '10rem',*/}
                        {/*        width: '10rem',*/}
                        {/*    }}*/}
                        {/*/>*/}

                        <Box sx={{flexGrow: 1}}>
                            <Typography variant="body1" paragraph>
                                Life’s short—dream big, ship fast, be happy. <br/>
                                I'm Vijit Dua—a student with a side quest in entrepreneurship, all
                                about blending coding with my dream to kick off something cool on my own.
                                My philosophy? Make positive impacts wherever you go and enjoy life.
                            </Typography>

                            <Typography variant="body1" paragraph>
                                When I'm not buried in projects or busy being a student, you'll catch me:
                            </Typography>

                            {/* Fitness Section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: mobileView ? 'column-reverse' : 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    mb: '3rem',
                                }}
                            >
                                <Typography variant="body1" paragraph>
                                    🏃‍♂️ Biking the trails, hitting the pavement on my runs, or frequenting the gym to
                                    stay fit.
                                </Typography>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/about/fitness.gif`}
                                    alt="Fitness activities"
                                    style={{
                                        maxWidth: mobileView? '18rem' : '25rem',
                                        borderRadius: '8px',
                                        height: 'auto',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Box>

                            {/* Connecting Section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: mobileView ? 'column' : 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    mb: '3rem',
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/about/meeting.gif`}
                                    alt="Meeting people"
                                    style={{
                                        maxWidth: mobileView? '18rem' : '25rem',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <Typography variant="body1" paragraph>
                                    👥 Meeting new people and diving into conversations—from casual banter to deep
                                    discussions over physics & philosophy.
                                </Typography>
                            </Box>

                            {/* Content Creation Section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: mobileView ? 'column-reverse' : 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    mb: '3rem',
                                }}
                            >
                                <Typography variant="body1" paragraph>
                                    🎥 Creating and editing videos for my{' '}
                                    <Link href="https://youtube.com/@vijitdua" target="_blank">
                                        YouTube channel
                                    </Link>.
                                </Typography>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/about/content-creation.gif`}
                                    alt="Video editing / YouTube"
                                    style={{
                                        maxWidth: mobileView? '18rem' : '25rem',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Box>

                            {/* Music Production Section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: mobileView ? 'column' : 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    mb: '3rem',
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/about/music.gif`}
                                    alt="Music production"
                                    style={{
                                        maxWidth: mobileView? '18rem' : '25rem',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <Typography variant="body1" paragraph>
                                    🎶 Occasionally dabbling in music production.
                                    <InstrumentalToggle/>
                                </Typography>
                            </Box>

                            {/* Gaming Section */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: mobileView ? 'column-reverse' : 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    mb: '3rem',
                                }}
                            >
                                <Typography variant="body1" paragraph>
                                    🎮 Wielding lightsabers in BeatSaber, hopping onto population one, flying away in
                                    Rocket League, or exploring other (primarily VR, MacOS, or game-porting / Whisky -
                                    MacOS) games.
                                </Typography>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/about/gaming.gif`}
                                    alt="Gaming activities"
                                    style={{
                                        maxWidth: mobileView? '18rem' : '25rem',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Box>

                            <Typography
                                variant="caption"
                                style={{fontStyle: 'italic', display: 'block', marginTop: '8px'}}
                            >
                                Some of these are rare indulgences, but still traits that are a part of who I am :)
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/*TODO: add something about "but most important – love building - why is it my goal - check out my projects etc. bla bla bla*/}

                <Divider/>

                {/* Quotes Section */}
                <Box sx={{mt: '3rem', mb: '2rem'}}>
                    <Typography variant="h4" gutterBottom>
                        Quotes
                    </Typography>
                    <Typography variant="body1" paragraph>
                        As I go through life, I like to try to live by certain principles / beliefs. All
                        of these are self-written and are infrequently updated. (Click “⏵” to
                        expand)
                    </Typography>
                    <Quote
                        quote="<b>Complaining doesn’t help, finding a solution does (even in unfair situations).</b>"/>
                    <Collapsible title="More quotes">
                        <Quote
                            quote="<b>Hold yourself accountable for everything.</b> Even if it’s not your fault, you are the one who has to change the circumstances for yourself."/>
                        <Quote
                            quote="<b>It is what it is.</b> Look for the next best thing to do, <u>learn, and move on</u> — don’t pointlessly dwell on what’s out of your control. Or if it’s in your control, find a solution."/>
                        <Quote quote="<b>Responses to scenarios matter more than the scenarios.</b>"/>
                        <Quote
                            quote="Hold your beliefs strongly while equally testing other schools of thought. <b>More often than not, the more seemingly absurd things turn out true.</b>"/>
                        <Quote
                            quote="<b>Honest conflict is more important than dishonest harmony.</b>"/>
                        <Quote
                            quote="<b>Form your own postulates, & question everything.</b> Go through pre-existing notions but test them instead of blind faith. We are humored by the progress we had millennia ago (witch burnings? Seriously?) who says our present situation won’t be similarly hilarious in retrospect?"/>
                        <Quote
                            quote="The direct/indirect results of your actions should be persuasive enough to convince you to continue if you truly desire it. <b>Embrace discipline, not motivation.</b>"/>
                        <Quote
                            quote="<b>Slow change isn’t effective, fix the problems within yourself instantly.</b> Step outside your comfort zones if you want to work on yourself."/>
                        <Quote quote="<b>Luck only favors you if you capitalize it.</b>"/>
                        <Quote
                            quote="<b>Efforts ≠ Merits.</b> You need to put effort into your work, but you also need to put efforts into analyzing your efforts."/>
                        <Quote
                            quote="Life is recursive. If you can't strategize how to approach a problem, strategize the strategizing. The solution is just out of your vision, not impossible."/>
                        <Quote
                            quote="No statement applies to every circumstance, but they may apply to the majority. Stop spotting exceptional situations where the statement fails. The fact you know the exceptional scenarios means you also know what the correct scenarios are. <b>Apply the statements where they fit.</b>"/>
                        <Quote quote="<b>n e v e r – s e t t l e</b>"/>
                    </Collapsible>
                </Box>

                <Divider/>

                {/* Closing Remark */}
                <Box sx={{mt: '3rem', mb: '2rem', textAlign: 'center'}}>
                    <Typography variant="h5" gutterBottom>
                        More coming soon :)
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Thanks for taking the time to get to know me :)
                    </Typography>
                </Box>

                <Divider/>

            </Container>
        </MainLayout>
    );
}

export default AboutPage;
