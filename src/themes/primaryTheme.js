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
            md: 1120,  // Medium devices (tablets)
            lg: 1500,  // Large devices (desktops)
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
        highlight:{
            main: "#deb93e",
            light: '#d1b760',
            dark: '#876e1a',
            contrastText: '#ffffff',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        appBar: {
            defaultBackground: 'transparent',
            elevatedBackground: '#1d1d1d',
        },
        text: {
            primary: '#DFF5FF',
            secondary: '#ccf1ff',
        },
        icons: '#DFF5FF',
    },
    typography: {
        fontFamily: 'Inter, Plus Jakarta Sans, Arial, sans-serif',
        h1: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '2.95rem',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: '#DFF5FF',
        },
        h2: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '2.45rem',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: '#DFF5FF',
        },
        h3: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: '#DFF5FF',
        },
        h4: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            color: '#DFF5FF',
        },
        h5: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.2rem',
            color: '#DFF5FF',
        },
        h6: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.12rem',
            color: '#DFF5FF',
        }, // ccf1ff
        body1: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            color: '#F8F8F8',
        },
        body2: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            color: '#F8F8F8',
        },
        caption: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.75rem',
            color: '#b6b6b6',
        }
    },
});

document.body.style.background = 'linear-gradient(120deg, #242424 45%, #1d1d1d 55%)';

theme = responsiveFontSizes(theme);

export { theme };
