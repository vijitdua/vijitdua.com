import {Container, Typography} from "@mui/material";
import PDFViewer from "../components/PDFViewer";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";
import {routes} from "../configs/routesConfig";
import MainLayout from "../layouts/MainLayout";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua | Resume</title>
            <link rel="canonical" href={env.siteLocation + routes.resume}/>
            <meta
                name='description'
                content="Vijit Dua's Resume"
            />
        </Helmet>
    );
}

function ResumePage() {
    return (
        <MainLayout>
            <Container maxWidth="md">
                <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
                    Resume
                </Typography>
                <PDFViewer fileOrUrl={`${process.env.PUBLIC_URL}/assets/public-no-contact-resume.pdf`}/>
            </Container>
        </MainLayout>
    );
}

export default ResumePage;
