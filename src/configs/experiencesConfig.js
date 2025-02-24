import KAISTResearchExperienceComponent from "../components/experience/details/KAISTResearchExperienceComponent";
import IcarusWebDevExperienceComponent from "../components/experience/details/IcarusWebDevExperienceComponent";
import IcarusMobileDevExperienceComponent from "../components/experience/details/IcarusMobileDevExperienceComponent";
import SchoolHouseTutorExperienceComponent from "../components/experience/details/SchoolHouseTutorExperienceComponent";

/**
 * Array of objects representing work experiences
 *
 * @NecessaryFields title, company, date, description, route (unique)
 * @OptionalFields logo, category, Component, year
 *
 * - `title`: Job title or role
 * - `company`: Name of the company
 * - `date`: Date range (e.g., "Jan 2023 - Present")
 * - `description`: Short description
 * - `route`: Unique identifier for the experience, used in the URL
 * - `logo`: URL to company logo
 * - `category`: Category for filtering (e.g., 'Technical', 'Volunteer', etc.)
 * - `Component`: Custom component for detailed view
 * - `year`: The year the experience took place (used for timeline markers)
 */

export const experiences = [
    {
        title: "Jr. Application Developer",
        route: "ucd-jr-app-dev",
        company: "UC Davis IET",
        date: "February 2025 - Present",
        logo: `${process.env.PUBLIC_URL}/assets/education/uc-davis.png`,
        description: "Developing apps for UC Davis IET using Vue.js",
        category: "Technical",
    },
    {
        title: "Team Lead - Web Development",
        route: "icarus-web-development",
        company: "Icarus Development",
        date: "July 2024 - September 2024",
        logo: `${process.env.PUBLIC_URL}/assets/experiences/icarus-logo.png`,
        description: "Led a team of 7, and managed Dev. Ops.",
        category: "Technical",
        Component: IcarusWebDevExperienceComponent,
        year: 2024
    },
    {
        title: "Deep Learning Researcher",
        company: "KAIST",
        date: "July 2024 - July 2024",
        logo: `${process.env.PUBLIC_URL}/assets/experiences/kaist-logo.png`,
        description: "Developed UNet models for road detection from satellite images.",
        route: "kaist-deep-learning-research",
        category: "Technical, Research",
        Component: KAISTResearchExperienceComponent,
        year: 2024
    },
    {
        title: "Volunteer Peer Tutor",
        company: "SchoolHouse.world",
        logo: `${process.env.PUBLIC_URL}/assets/experiences/schoolhouse-logo.png`,
        date: "August 2022 - January 2023",
        description: "Tutored AP Physics & SAT with top ratings.",
        route: "schoolhouse-peer-tutor",
        category: "Volunteer",
        Component: SchoolHouseTutorExperienceComponent,
        year: 2022
    }
];
