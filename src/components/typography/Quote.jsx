import {Box, Typography} from "@mui/material";
import DOMPurify from "dompurify";

function Quote({quote}) {
    const cleanQuote = DOMPurify.sanitize(quote);
    return (
        <Box
            sx={{
                borderLeft: "0.1rem solid white",
                m: '0.5rem 0',
                padding: '0 1rem',
            }}
        >
            <Typography
                variant="body1"
                color="textSecondary"
                dangerouslySetInnerHTML={{ __html: cleanQuote }} // Renders the sanitized HTML
            />
        </Box>
    );
}

export default Quote;