/**
 * Array of objects to be parsed into projects section
 *
 * @NecessaryFields title, route (unique), tagline
 * @OptionalFields icon, Component, sourceCode, projectUrl, category, image
 *
 * @Fields
 * - `title` : ProjectCard Title
 * - `image`: ProjectCard Icon / Display Image
 * - `tagline`: Short description of a project, in a sentence
 * - `time`: Short string representing when the project was done
 * - `route` : Unique identifier for the project, used in the URL
 * - `sourceCode`: URL to GitHub repository
 * - `projectUrl`: URL to the hosted project
 * - `Component` : Custom component for detailed view
 * - `category`: Category of the project, e.g., 'Live', 'Hackathon', 'Coursework'
 */
import TeamSyncComponent from "../components/projects/details/TeamSyncComponent";
import InnoGreetComponent from "../components/projects/details/InnoGreetComponent";
import KAISTResearchProjectComponent from "../components/projects/details/KAISTResearchProjectComponent";
import TicTacToeComponent from "../components/projects/details/TicTacToeComponent";
import TaskUpComponent from "../components/projects/details/TaskUpComponent";
import COMP3322HKGAirportData from "../components/projects/details/COMP3322HKGAirportData";
import OutWatchComponent from "../components/projects/details/OutWatchComponent";
import COMP3322GradeBook from "../components/projects/details/COMP3322GradeBook";
import ECS36AMidTermConnectFour from "../components/projects/details/ECS36AMidTermConnectFour";
import ECS36AFinalTerminalPainter from "../components/projects/details/ECS36AFinalTerminalPainter";

export const projects = [
    {
        title: 'InnoGreet',
        route: 'innogreet',
        image: `${process.env.PUBLIC_URL}/assets/projects/innogreet/banner-logo.png`,
        tagline: 'Find your perfect collaborator. \n [Startup Project]',
        category: 'Coming Soon',
        projectUrl: `https://innogreet.com`,
        time: `Sept 2024 – Present`,
        Component: InnoGreetComponent,
    },
    {
        title: 'AutoMap',
        route: 'KAIST-research-project',
        image: `${process.env.PUBLIC_URL}/assets/projects/KAIST-research-project/banner-logo.png`,
        tagline: 'AI Road Map Generation from Satellite images',
        category: 'Deep Learning',
        sourceCode: 'https://github.com/vijitdua/KAIST-Deep-Learning-Research-UNet-Statalite-Road-Identification',
        time: `Jun 2024`,
        Component: KAISTResearchProjectComponent,
    },
    {
        title: 'OutWatch',
        route: 'out-watch',
        image: `${process.env.PUBLIC_URL}/assets/projects/out-watch/banner-logo.png`,
        tagline: `Automatic Service Outage Tracker, Notifier, and Bug Reporter`,
        category: 'Utility',
        sourceCode: `https://github.com/vijitdua/OutWatch`,
        time: 'Oct 2024',
        Component: OutWatchComponent,
    },
    {
        title: 'TaskUp',
        route: 'task-up',
        image: `${process.env.PUBLIC_URL}/assets/projects/task-up/banner-logo.jpg`,
        tagline: 'Competitive Task Tracking, HackDavis \'24',
        category: 'Hackathon',
        projectUrl: `https://devpost.com/software/taskup-fi8jkh`,
        sourceCode: 'https://github.com/vijitdua/HackDavis2024-TaskUp',
        time: `Apr 2024`,
        Component: TaskUpComponent,
    },
    {
        title: 'TeamSync',
        route: 'team-sync',
        tagline: 'Streamlined Team Management. \n [Partial]',
        category: 'Utility',
        sourceCode: 'https://github.com/vijitdua/TeamSync',
        time: `Sept 2024 `,
        Component: TeamSyncComponent,
    },
    {
        title: 'Multiplayer TicTacToe',
        route: 'tic-tac-toe',
        image: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/banner-logo.png`,
        tagline: 'Full-Stack Multiplayer Webgame with Auth',
        category: 'Misc.',
        sourceCode: 'https://github.com/vijitdua/Multiplayer-TicTacToe',
        time: `Mar 2024`,
        Component: TicTacToeComponent,
    },
    {
        title: `GradeBook`,
        route: `HKU-COMP3322-EML-gradebook`,
        image: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/EML-gradebook/banner.png`,
        tagline: `Password-less grade management app with email magic link (EML) authentication.`,
        category: 'Course Project',
        time: `Nov 2024`,
        Component: COMP3322GradeBook,
    },
    {
        title: 'HKG Airport Flight Data',
        route: 'HKU-COMP3322-hkg-airport',
        image: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/HKG-airport-data/logo.png`,
        tagline: 'HKG Airport flight information using open data, built with vanilla HTML, CSS, & JS',
        category: 'Course Project',
        time: `Oct 2024`,
        Component: COMP3322HKGAirportData,
    },
    {
        title: 'Terminal Painter',
        route: `UCD-ECS-36A-final-project`,
        image: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/final-project/banner.png`,
        category: `Course Project`,
        tagline: 'CLI based painting program, built using C',
        time: `Dec 2023`,
        Component: ECS36AFinalTerminalPainter,
    },
    {
        title: 'Connect 4',
        route: `UCD-ECS-36A-midterm-project`,
        image: `${process.env.PUBLIC_URL}/assets/projects/course/UCD-ECS-36A/midterm-project/banner.png`,
        category: `Course Project`,
        tagline: 'CLI based Connect-4 game, built using C',
        time: `Nov 2023`,
        Component: ECS36AMidTermConnectFour,
    },
];