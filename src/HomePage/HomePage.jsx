import { Container } from "@mui/material"
import Navbar from "../Navbar/Navbar.jsx"

function HomePage(){
    return(
        <Container maxWidth="xxl" sx={{backgroundColor: "#201f31"}}>
            <Navbar/>
        </Container>
    )
}

export default HomePage