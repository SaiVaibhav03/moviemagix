import { AppBar, Container, Toolbar} from "@mui/material";
import Sidebar from "./Sidebar/Sidebar.jsx"
import WebsiteLogoName from "./WebsiteLogoName.jsx";

function Navbar(){
    return(
        <AppBar sx={{backgroundColor: "#2d2b44", boxShadow: "none"}}>
            <Container maxWidth="xxl">
                <Toolbar>
                    <Sidebar />
                    <WebsiteLogoName/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar

