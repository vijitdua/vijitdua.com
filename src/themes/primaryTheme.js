// primaryTheme.js
// Manages the primary theme for the entire app

import { createTheme, responsiveFontSizes } from "@mui/material";

// Import inter font (body)
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// Import plus jakarta sans (headings)
import '@fontsource/plus-jakarta-sans'; // Defaults to weight 400
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,     // Extra-small devices (small phones)
            sm: 750,   // Small devices (mobiles)
            md: 1050,  // Medium devices (tablets)
            lg: 1280,  // Large devices (desktops)
            xl: 1920,  // Extra-large devices (very large screens)
        },
    },

    palette: {
        mode: 'dark',
        primary: {
            main: '#5356FF',
            light: '#DFF5FF',
            dark: '#378CE7',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#378CE7',
            light: '#67C6E3',
            dark: '#004ba0',
            contrastText: '#ffffff',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#DFF5FF',
        },
        icons: '#DFF5FF',
        cardBackground: '#1f1f1f',
        overviewCard: '#2b2b2a',
        postBackground: '#1f1f1f',
        customRadio: {
            borderUnchecked: '1px solid #ffffff',
            borderChecked: '2px solid #3f51b5',
        },
        sidebar: {
            header: '#2b2b2b',
            background: '#1f1f1f',
            iconColor: '#ffffff',
            highlight: '#378CE7',
            highlightHover: '#67C6E3',
        }
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '3rem',
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '2.5rem',
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '2rem',
            '@media (max-width:600px)': {
                fontSize: '1.75rem',
            },
        },
        h4: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.75rem',
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h5: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.5rem',
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        h6: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.25rem',
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
        body1: {
            fontFamily: 'Inter, Arial, sans-serif',
        },
        body2: {
            fontFamily: 'Inter, Arial, sans-serif',
        },
    },
});

theme = responsiveFontSizes(theme);

export { theme };
