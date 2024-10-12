import MainLayout from "../layouts/MainLayout";
import ProjectsCollection from "../components/projects/ProjectsCollection";
import {Avatar, Box, Container, Divider, Link, Typography, useMediaQuery} from "@mui/material";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes, socialLinks} from "../configs/routesConfig";
import {theme} from "../themes/primaryTheme";
import Quote from "../components/typography/Quote";
import Collapsible from "../components/typography/Collapsible";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | About</title>
            <link rel="canonical" href={env.siteLocation + routes.aboutMe}/>
            <meta
                name='description'
                content="Hi, I'm Vijit, a CS student with a passion for coding and entrepreneurship.
            I'm all about blending coding with dream to kick off something cool in the future."
            />
        </Helmet>
    );
}

function AboutPage() {

    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="lg">

                <Box sx={{mt: '3rem', mb: '2rem'}}>
                    <Typography variant="h1" gutterBottom sx={{textAlign: 'center', mb: '3rem'}}>
                        About Me
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: mobileView ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '2rem',
                        }}
                    >
                        <Avatar
                            alt="Vijit Dua"
                            src={`${process.env.PUBLIC_URL}/assets/pfp.png`}
                            sx={{
                                height: mobileView ? '10rem' : '16rem',
                                width: mobileView ? '10rem' : '16rem',
                            }}
                        />

                        <Box sx={{flexGrow: 1}}>
                            <Typography variant="h4" gutterBottom>
                                Who is Vijit?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                I'm Vijit, a CS student with a side quest in entrepreneurship. I'm all
                                about blending coding with my dream to kick off something cool on my
                                own. Outside of plotting to take over the tech world, you'll catch me
                                hitting the pavement on my runs, flexing at the gym, crafting videos /
                                edits for my{' '}
                                <Typography variant="caption" style={{ fontStyle: 'italic' }}>inactive</Typography>
                                {' '}
                                <Link href="https://youtube.com/@vijitdua" target="_blank">
                                    YouTube channel
                                </Link>
                                , or sometimes (rarely) even producing music.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                When I'm not cooped up being productive, I tend to be an extremely
                                outgoing person. I live for the thrill of meeting new folks and jumping
                                into any convo, from debating the existential status of hotdogs
                                (definitely sandwiches, right?) to unraveling the mysteries of physics.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                I'm also (rarely) a part-time gamer. Mostly just into BeatSaber, Population One, or
                                Rocket League, but anything (primarily VR, MacOS, or game-porting / Whisky - MacOS) is
                                cool by me.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Divider/>

                {/* Quotes Section */}
                <Box sx={{mt: '3rem', mb: '2rem'}}>
                    <Typography variant="h4" gutterBottom>
                        Quotes
                    </Typography>
                    <Typography variant="body1" paragraph>
                        As I go through life, I like to try to live by certain principles / beliefs. All
                        of these are self-written and keep getting updated here and there. (Click “⏵” to
                        expand)
                    </Typography>
                    <Quote quote="<b>Complaining doesn’t help, finding a solution does (even in unfair situations).</b>"/>
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

                {/* Goals Section */}
                <Box sx={{mt: '3rem', mb: '2rem'}}>
                    <Typography variant="h4" gutterBottom>
                        My Goals in Life
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At multiple points of time in my life I’ve tried to justify the meaning of life
                        and existence. If we all die at some point, why does it really even matter?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This is something I haven’t quite figured out yet, but at the moment I have
                        justified this by giving myself two life-long goals that go hand in hand with
                        each other: career goals and personal goals.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I’ve tried to isolate, to some extent, the meaning of my life to my ideals and
                        principles. Instead of thinking of myself individualistically (in the long term),
                        I prefer to think of myself as a cog in the bigger machine of the human race and
                        its evolution (evolution of both knowledge & genetics). With my goal being to
                        just be the best cog I can. A cog that never settles, even if I somehow make it
                        to the top.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This gives me a bit of a trajectory. Though it still doesn’t directly answer my
                        former question regarding the meaning of life.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I believe that what makes a person, a person, is their ways of living their
                        life. Their thought process and decision making. Let’s extend this idea into us
                        just slowly changing the evolution of ideas of the human race and detach
                        yourself from your own intrinsic meaning.
                    </Typography>

                    {/* Optional Collapsible analogy */}
                    <Collapsible
                        title="Click to expand this if you want an analogy to better understand my thought process.">
                        <Typography variant="body1" paragraph>
                            If you don’t believe in souls, what would make you different from a clone of
                            you with the exact same memories as you? Nothing, right? That’s my point.
                            What makes a person, a person, is their ways of living their life. Their
                            thought process and decision making. (And of course, their experiences and
                            memories.)
                        </Typography>
                    </Collapsible>

                    <Typography variant="body1" paragraph>
                        With that, I have come to the temporary conclusion that my meaning in life is to
                        essentially aid towards the development of people in general. Pass on my ideals
                        and way in life, and that way be “immortalized” even after death to somewhat of
                        an extent.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{mt: '2rem'}}>
                        Personal Goal
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My personal goal is to constantly instigate, in whatever capacity, positive
                        changes around myself everywhere I go.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{mt: '2rem'}}>
                        Career Goal
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Ultimately, my goal is to either lead a startup or hold a significant position in
                        a company that aligns with my interests. I envision a role where my decisions
                        influence the trajectory of the company and lead to the betterment of society.
                        However, this is just a tangential plan towards my final objective. My true aim
                        is to consistently chase the “next best thing” in every moment and “never
                        settle”, adapting in response to the opportunities I encounter.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{mt: '2rem'}}>
                        How They Intertwine
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The goal in both cases is to eventually lead to positive change and/or
                        development, and to constantly strive to achieve that to a greater extent.
                    </Typography>
                </Box>

                <Divider/>

                {/* Interesting Question Section */}
                <Box sx={{mt: '3rem', mb: '2rem'}}>
                    <Typography variant="h4" gutterBottom>
                        An Interesting Question
                    </Typography>
                    <Typography variant="body1" paragraph>
                        An interesting question that I ask myself, and would like to ask others is, if
                        you could only choose one, which would you choose?
                    </Typography>
                    <Quote
                        quote="Do you want to live a life to remember, or live a life to be remembered? Or perhaps lead to progress without being remembered…"/>
                    <Typography variant="body1" paragraph>
                        Of course, this is just a hypothetical question. I believe that it is possible
                        to choose at least two of these at the same time. Although if you choose two, it
                        comes at the cost of one of those not being as satisfactory as the other.
                    </Typography>
                </Box>

                <Divider/>

                {/* Closing Remark */}
                <Box sx={{mt: '3rem', mb: '2rem', textAlign: 'center'}}>
                    <Typography variant="h5" gutterBottom>
                        Anyways, that’s who I am. I am Vijit.
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
