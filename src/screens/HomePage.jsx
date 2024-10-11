import {Container} from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import {Helmet} from "react-helmet";
import {env} from "../configs/envConfig";

function PageMeta() {
    return (
        <Helmet>
            <title>Vijit Dua</title>
            <link rel="canonical" href={env.siteLocation}/>
            <meta
                name='description'
                content="Hi, I'm Vijit, a CS student with a passion for coding and entrepreneurship.
            I'm all about blending coding with dream to kick off something cool in the future."
            />
        </Helmet>
    );
}

function HomePage(){
    return (
        <MainLayout>
            <PageMeta/>
            <Container maxWidth="xl">



            </Container>
        </MainLayout>
    );
}

export default HomePage;
