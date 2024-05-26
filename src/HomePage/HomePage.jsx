import { Container } from "@mui/material"
import Navbar from "../Navbar/Navbar.jsx"
import Carousel from "./Carousel.jsx"

function HomePage(){
    return(
        <Container maxWidth="xxl" sx={{backgroundColor: "#201f31"}}>
            <Navbar/>
            <Carousel />
        </Container>
    )
}

export default HomePage