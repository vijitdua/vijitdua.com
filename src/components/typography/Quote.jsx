import {Box, Typography} from "@mui/material";

function Quote({quote}) {
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
            >
                {quote}
            </Typography>
        </Box>
    );
}

export default Quote;