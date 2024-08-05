import {Typography, Link, Divider, Box, Container, Avatar, useMediaQuery} from "@mui/material";
import {socialLinks} from "../configs/routesConfig";
import {theme} from "../themes/primaryTheme";
import Quote from "../components/typography/Quote";
import Collapsible from "../components/typography/Collapsible";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Introduction({mobileView}) {
    return (
        <Box>

            {/* Profile Picture with "Hi, I'm Vijit" & Initial bio */}
            <Box sx={{
                display: 'flex',
                flexDirection: mobileView ? 'column' : 'row-reverse',
                justifyContent: mobileView ? 'center' : 'space-around',
                alignItems: mobileView ? 'center' : 'center',
                gap: '3rem',
            }}>
                <Avatar alt="Vijit Dua" src={`${process.env.PUBLIC_URL}/assets/pfp.png`} sx={{
                    marginTop: mobileView ? '0rem' : '1rem',
                    height: mobileView ? '10rem' : '16rem',
                    width: mobileView ? '10rem' : '16rem',
                    boxShadow: mobileView ? '0.3rem 0.3rem' : '0.4rem 0.4rem',
                }}/>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: mobileView ? '100%' : '80%',
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
    );
}

function MyQuotes({mobileView}) {

    const quotesArray = [
        <span><strong>Complaining doesn’t help, finding a solution does (even in unfair situations).</strong></span>,
        <span><strong>Hold yourself accountable for everything.</strong> Even if it’s not your fault, you are the one who has to change the circumstances for yourself.</span>,
        <span><strong>It is what it is.</strong> Look for the next best thing to do, learn, and move on — don’t pointlessly dwell on what’s out of your control. Or if it’s in your control, find a solution.</span>,
        <span><strong>Responses to scenarios matter more than the scenarios.</strong></span>,
        <span>Hold your beliefs strongly while equally testing other schools of thought. <strong>More often than not, the more seemingly absurd things turn out true.</strong></span>,
        <span><strong>Form your own postulates, & question everything.</strong> Go through pre-existing notions but test them instead of blind faith. We are humored by the progress we had millennia ago (witch burnings? Seriously?) who says our present situation won’t be similarly hilarious in retrospect?</span>,
        <span>The direct/indirect results of your actions should be persuasive enough to convince you to continue if you truly desire it. <strong>Embrace discipline, not motivation.</strong></span>,
        <span><strong>Slow change isn’t effective, fix the problems within yourself instantly.</strong> Step outside your comfort zones if you want to work on yourself.</span>,
        <span><strong>Luck only favors you if you capitalize it.</strong></span>,
        <span><strong>Efforts ≠ Merits.</strong> You need to put effort into your work, but you also need to put efforts into analyzing your efforts.</span>,
        <span>Life is recursive.<br/>If you can't strategize how to approach a problem, strategize the strategizing.<br/>The solution is just out of your vision, not impossible.</span>,
        <span>No statement applies to every circumstance, but they may apply to the majority. Stop spotting exceptional-situations where the statement fails. The fact you know the exceptional scenarios means you also know what the correct scenarios are. <strong>Apply the statements where they fit.</strong></span>,
        <span><strong>n e v e r    s e t t l e</strong></span>,
    ];


    return (
        <Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
            }}>
                {/*<Avatar sx={{*/}
                {/*    marginTop: mobileView ? '0rem' : '1rem',*/}
                {/*    height: mobileView ? '10rem' : '16rem',*/}
                {/*    width: mobileView ? '10rem' : '16rem',*/}
                {/*    boxShadow: mobileView ? '0.3rem 0.3rem' : '0.4rem 0.4rem',*/}
                {/*}}>*/}
                {/*    <FormatQuoteIcon sx={{ fontSize: mobileView ? '5rem' : '8rem', color: 'white' }} />*/}
                {/*</Avatar>*/}

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // width: mobileView ? '100%' : '80%',
                    width: '100%',
                    gap: '1rem',
                }}>
                    <Typography variant='h2'> Qoutes </Typography>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        As I go through life, I like to try to live by certain principles / beliefs.
                        All of these are self written and keep getting updated here and there.
                        <br/>
                        (Click “⏵” to expand)
                    </Typography>

                    <Quote quote={quotesArray[0]}/>

                    <Collapsible title={'more'}>
                        {quotesArray.slice(1).map((quote, index) =>
                            <Box key={index + 1} sx={{marginBottom: '1rem'}}>
                                <Quote quote={quote}/>
                            </Box>)}
                    </Collapsible>


                </Box>
            </Box>

        </Box>
    );
}

function MyGoalsInLife({mobileView}) {
    return (<Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
            }}>
                {/*<Avatar sx={{*/}
                {/*    marginTop: mobileView ? '0rem' : '1rem',*/}
                {/*    height: mobileView ? '10rem' : '16rem',*/}
                {/*    width: mobileView ? '10rem' : '16rem',*/}
                {/*    boxShadow: mobileView ? '0.3rem 0.3rem' : '0.4rem 0.4rem',*/}
                {/*}}>*/}
                {/*    <FormatQuoteIcon sx={{ fontSize: mobileView ? '5rem' : '8rem', color: 'white' }} />*/}
                {/*</Avatar>*/}

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // width: mobileView ? '100%' : '80%',
                    width: '100%',
                    gap: '2rem',
                }}>
                    <Typography variant='h2'> My Goals in Life </Typography>
                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        At multiple points of time in my life I’ve tried to justify the meaning of life and
                        existence.
                        If we all die at some point, why does it really even matter?
                    </Typography>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        This is something I haven’t quite figured out yet, but at the moment I have justified this
                        by
                        giving myself two lifelong goals that go hand in hand with each other: career goals and
                        personal
                        goals.
                    </Typography>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        I’ve tried to isolate, to some extent, the meaning of my life to my ideals and principles.
                        Instead of thinking of myself individualistically (in the long term), I prefer to think of
                        myself as a cog in the bigger machine of the human race and its evolution (evolution of both
                        knowledge & genetics), with my goal being to just be the best cog I can. A cog that
                        never-settles, even if I <em>somehow</em> make it to the top.
                    </Typography>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        This gives me a bit of a trajectory. Though it still doesn’t directly answer my former
                        question
                        regarding the meaning of life.
                    </Typography>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        I believe that what makes a person, a person, is their way of living their life—their
                        thought
                        process and decision-making. Let’s extend this idea into us just slowly changing the
                        evolution
                        of ideas of the human race and detach ourselves from our own intrinsic meaning.
                    </Typography>

                    {/*  TODO:   FILLER*/}
                    <i>
                        <Collapsible
                            title='Click “⏵” to expand this if you want an analogy to better understand my thought process.'>
                            <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                If you don’t believe in souls, what would make you different from a clone
                                of you with the exact same memories as you? Nothing, right?
                                That’s my point. What makes a person, a person, is their ways of
                                living their life. Their thought process and decision making.
                                (and ofcourse their experiences and memories)
                            </Typography>
                        </Collapsible>
                    </i>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        With that, I have come to the temporary conclusion that my meaning in life is to essentially
                        aid
                        in the development of people in general. Pass on my ideals and way of life, and in that way,
                        be
                        “immortalized” even after death to some extent.
                    </Typography>

                    <Typography variant="h3" sx={{textAlign: 'justify', mt: 2}}>
                        Personal Goal
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        My personal goal is to constantly instigate, in whatever capacity, positive changes around
                        myself everywhere I go.
                    </Typography>

                    <Typography variant="h3" sx={{textAlign: 'justify', mt: 2}}>
                        Career Goal
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        Ultimately, my goal is to either lead a startup or hold a significant position in a company
                        that
                        aligns with my interests. I envision a role where my decisions influence the trajectory of
                        the
                        company and lead to the betterment of society. However, this is just a tangential plan
                        towards
                        my final objective. My true aim is to consistently chase the “next best thing” in every
                        moment
                        and “never settle,” adapting in response to the opportunities I encounter.
                    </Typography>

                    <Typography variant="h3" sx={{textAlign: 'justify', mt: 2}}>
                        How they intertwine
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        The goal in both cases is to eventually lead to positive change and/or development, and to
                        constantly strive to achieve that to a greater extent.
                    </Typography>

                </Box>
            </Box>

        </Box>
    );
}

function InterestingQuestion({mobileView}) {
    return (<Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
            }}>
                {/*<Avatar sx={{*/}
                {/*    marginTop: mobileView ? '0rem' : '1rem',*/}
                {/*    height: mobileView ? '10rem' : '16rem',*/}
                {/*    width: mobileView ? '10rem' : '16rem',*/}
                {/*    boxShadow: mobileView ? '0.3rem 0.3rem' : '0.4rem 0.4rem',*/}
                {/*}}>*/}
                {/*    <FormatQuoteIcon sx={{ fontSize: mobileView ? '5rem' : '8rem', color: 'white' }} />*/}
                {/*</Avatar>*/}

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // width: mobileView ? '100%' : '80%',
                    width: '100%',
                    gap: '2rem',
                }}>
                    <Typography variant='h2'> An Interesting Question </Typography>

                    <Typography variant="body1" sx={{textAlign: 'justify'}}>
                        An interesting question that I ask myself, and would like to ask others is, if you could only
                        choose one, which would you choose?
                    </Typography>

                    <i> <Quote
                        quote={'Do you want to live a life to remember, or live a life to be remembered? Or perhaps lead to progress without being remembered…'}/>
                    </i>

                    <Typography variant="body1" sx={{textAlign: 'justify', mt: 2}}>
                        Of course, this is just a hypothetical question. I believe that it is possible to choose at
                        least two of these at the same time. Although if you choose two, it comes at the cost of one of
                        those not being as satisfactory as the other.
                    </Typography>


                </Box>
            </Box>

        </Box>
    );
}

function HomePage() {

    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg">

            <Box sx={{
                '& > *': {
                    m: mobileView ? '1rem 0' : '2.5rem 0',
                }
            }}>

                <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
                    About Me
                </Typography>

                <Introduction mobileView={mobileView}/>

                <Divider/>

                <MyQuotes mobileView={mobileView}/>

                <Divider/>

                <MyGoalsInLife mobileView={mobileView}/>

                <Divider/>

                <InterestingQuestion mobileView={mobileView}/>

                <Divider/>

                <Box sx={{
                    m: '3rem 0',
                }}>
                    <Quote quote={'Anyways, that’s who I am. I am Vijit.\n' +
                        'Thanks for taking the time to get to know me :)'}/>
                </Box>


                <Divider/>

                <Box sx={{
                    m: '3rem 0',
                }}>
                    <Quote quote={'Projects, Portfolios, and less text walls coming to this website soon!'}/>
                </Box>

            </Box>

        </Container>
    );
}

export default HomePage;
