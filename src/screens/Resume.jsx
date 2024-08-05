import {Box, Container, Link, Typography, useMediaQuery} from "@mui/material";
import {theme} from "../themes/primaryTheme";
import PDFViewer from "../components/PDFViewer";
import {routes} from "../configs/routesConfig";

function Resume() {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container maxWidth="lg">

            <Box sx={{
                '& > *': {
                    m: mobileView ? '1rem 0' : '2.5rem 0',
                }
            }}>

                <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
                    Resume*
                </Typography>

                <PDFViewer fileOrUrl={`${process.env.PUBLIC_URL}/files/resume.pdf`}/>

                <Typography variant="body1" gutterBottom sx={{textAlign: 'center'}}>
                    If the resume doesn't load, open / download it on a separate page through <Link
                    href={`${process.env.PUBLIC_URL}/files/resume.pdf`}
                    target="_blank">this link</Link>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{textAlign: 'center'}}>
                    *This is a public version of my resume with an alternate email and redacted phone number.
                </Typography>
            </Box>

        </Container>
    );
}

export default Resume;
