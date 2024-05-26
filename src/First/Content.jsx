import { Container, Box, Typography, Button, Grid, } from "@mui/material";
import SearchBar from "./SearchBar.jsx";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from "react-router-dom";


const ContainerCustomStyles = (props) => (
    <Container 
        sx={{
            backgroundColor:  "#FFFFFF0D", 
            borderRadius: 6, position: "relative",
            backgroundImage: {
                xs: "none",
                md: "url('https://hianime.to/images/anw-min.webp?v=0.1')",
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundSize: "50% 100%",
            overflow: 'hidden',
        }}
    >
        {props.children}
    </Container>
)

function Content(){
    const Navigate = useNavigate()
    return (
       <ContainerCustomStyles>
            <Box 
                component="div"
                sx={{
                    m: 1, p:2, pt: 4,
                    display: "flex", justifyContent:"start", alignItems: "center",
                    fontFamily: "Monospace",
                    position: "static",
                }}
            >
                <Typography component="span" sx={{color: "#ffbade", fontSize: "4rem"}}>
                    M
                </Typography>
                <Typography variant="body1" sx={{color: "white", backgroundColor: "inherit", letterSpacing: 8, m: 1 , fontWeight: "bold"}}>
                    ovie <br/>
                    agix
                </Typography>
            </Box> 

            <Box sx={{ m: 1, p:2, pb: 4}}>

                <SearchBar />

                <Grid container>
                    <Grid 
                        item xs={10} md={8} lg={6} 
                        sx={{
                            m: 1, p:2, height: 60,  
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }} 
                    >
                        <Typography sx={{color: "white"}}>
                            Top search: Solo Leveling, One Piece, Wind Breaker, Kaiju No. 8, My Hero Academia Season 7, 
                            Black Clover, Jujutsu Kaisen 2nd Season, Overflow (Uncensored) Ninja Kamui, My Hero Academia Season 6...
                        </Typography>
                    </Grid>
                </Grid>

                <Button
                    size="large"
                    sx={{
                        ml: 1, p:1, px:3, py:1.5, my:3, borderRadius: 2,
                        color: "black", backgroundColor: "#ffbade",
                        "&:hover":{
                            backgroundColor: "#ffbade"
                        },
                        textTransform: 'none'
                    }}
                    endIcon={<ArrowCircleRightIcon />}
                    onClick={() => Navigate("/home")}
                    >
                    <Typography variant="h6" sx={{fontWeight: "Bold", letterSpacing: 0.1}}> Watch movies </Typography> 
                </Button>
            </Box>

       </ContainerCustomStyles>
    )
}

export default Content;

