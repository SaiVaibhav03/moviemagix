import { Box, Container, Typography } from "@mui/material";
import FirstPageNavbar from "./FirstPageNavbar.jsx";
import Content from "./Content.jsx";
import WebsiteDetails from "./WebsiteDetails.jsx"

function FirstPage(){
    return (
        <Container maxWidth="xl" sx={{ bgcolor: '#201F31',  pt: 3}}>
            <FirstPageNavbar />
            <Content />
            <WebsiteDetails />
            <Box sx={{mt: 3, color:"#cccccc", px: 5, py:3}}>
                <Typography component="small" sx={{fontSize: 13}}>
                    ©  https://moviemagix.netlify.app/ .  All rights reserved.
                </Typography>
            </Box>
        </Container>
    )
}

export default FirstPage;