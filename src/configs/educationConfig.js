/**
 * Array of objects representing work experiences
 *
 * @NecessaryFields title, company, date, description, route (unique)
 * @OptionalFields logo, category, Component, year
 *
 * - `institute`: Name of the institute
 * - `date`: String date range (e.g., "Jan 2023 - Present")
 * - `description`: Short description or degree
 * - `route`: Unique identifier for more details on that education, used in the URL
 * - `logo`: URL to institute logo
 * - `Component`: Custom component for detailed view
 */
export const education = [
    {
        institute: 'University of California: Davis [UC Davis]',
        date: 'September 2023 – December 2026 (expected)',
        description: 'B.S. in Computer Science',
        route: 'uc-davis',
        logo: `${process.env.PUBLIC_URL}/assets/education/uc-davis.png`,
    },
    {
        institute: 'University of Hong Kong [HKU]',
        date: 'September 2024 – December 2024',
        description: 'Semester Exchange',
        route: 'hku',
        logo: `${process.env.PUBLIC_URL}/assets/education/hku.png`,
    },
    // {
    //     institute: 'Korea Advanced Institute of Science & Technology [KAIST]',
    //     date: 'July 2024',
    //     description: 'Summer Research Program',
    //     route: 'kaist',
    // },

];