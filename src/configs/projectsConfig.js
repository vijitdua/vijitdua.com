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

export const projects = [
    {
        title: 'InnoGreet',
        route: 'innogreet',
        image: `${process.env.PUBLIC_URL}/assets/projects/innogreet/banner-logo.png`,
        tagline: 'Find your perfect collaborator. \n [Startup Project]',
        category: 'Live',
        projectUrl: `https://innogreet.com`,
        time: `Sept 2024 – Present`,
        Component: InnoGreetComponent,
    },
    {
        title: 'OutWatch',
        route: 'out-watch',
        tagline: `Automatic Service Outage Tracker, Notifier, and Bug Reporter`,
        sourceCode: `https://github.com/vijitdua/OutWatch`,
        time: 'Oct 2024',
        Component: OutWatchComponent,
    },
    {
        title: 'TeamSync',
        route: 'team-sync',
        tagline: 'Streamlined Team Management. \n [In Progress]',
        sourceCode: 'https://github.com/vijitdua/team-sync',
        time: `Sept 2024 – In Progress `,
        Component: TeamSyncComponent,
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
        title: 'Multiplayer TicTacToe',
        route: 'tic-tac-toe',
        image: `${process.env.PUBLIC_URL}/assets/projects/tic-tac-toe/banner-logo.png`,
        tagline: 'Full-Stack Multiplayer Webgame',
        sourceCode: 'https://github.com/vijitdua/Multiplayer-TicTacToe',
        time: `Mar 2024`,
        Component: TicTacToeComponent,
    },
    {
        title: 'HKG Airport Flight Data',
        route: 'HKU-COMP3322-hkg-airport',
        image: `${process.env.PUBLIC_URL}/assets/projects/course/HKU-COMP3322/HKG-airport-data/logo.png`,
        tagline: 'HKG Airport flight information using open data, built with vanilla HTML, CSS, & JS',
        category: 'Course',
        time: `Oct 2024`,
        Component: COMP3322HKGAirportData,
    }
];