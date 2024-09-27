import {Box, Button, Container, Typography} from "@mui/material";

function NoPage(){
    return (
        <Container
            maxWidth='md'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '15vh',  // xx% below the top of the viewport
                height: '85vh' // ensure view port height is not exceeded.
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        marginBottom: '15px',
                        textAlign: 'center',
                    }
                }}
            >
                <Typography variant="h2" element="h1"> The page you are looking for does not exist. </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    href="/"
                    sx={{ margin: '15px' }}
                >
                    Go Back To The Homepage
                </Button>
            </Box>
        </Container>
    );
}

export default NoPage;
