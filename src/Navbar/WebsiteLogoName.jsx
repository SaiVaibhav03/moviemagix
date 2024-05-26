import  { Box, Typography } from "@mui/material";

function WebsiteLogoName(){
    return(
        <Box 
            component="div"
            sx={{
                mx: 1,
                p:1,
                display: "flex", justifyContent:"start", alignItems: "center",
                fontFamily: "Monospace",
                position: "static",
            }}
        >
            <Typography component="span" sx={{color: "#ffbade", fontSize: "3rem"}}>
                M
            </Typography>
            <Typography variant="body2" sx={{color: "white", backgroundColor: "inherit", letterSpacing: 8, m: 0.3 , fontWeight: "bold"}}>
                ovie <br/>
                agix
            </Typography>
        </Box> 
    )
}

export default WebsiteLogoName