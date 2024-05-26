import "./Sidebar.css" 

import { useState } from "react";
import { Box, Container, Drawer, IconButton, Typography, Button } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const Genre = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "War"];
const SidebarContent = [
    {name: "Now Playing"}, 
    {name: "Popular"}, 
    {name: "Top Rated"}, 
    {name: "Upcoming"}, 
    {name: "Trending"},
    {name: "Genre", subOptions: Genre} 
]
const colors = ["#d0e6a5", "#ffbade", "#fc887b", "#ccabd", "#abccd8", "#d8b2ab", "#86e3ce"]

function Sidebar(){
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleOpenDrawer = (val) => {
        setOpenDrawer(val)
    }
    const Navigate = useNavigate()
    const DrawerList = (    
        <Container sx={{ width: 250, color: "white", backdropFilter: "blur(50px)"}}> 
            <Button 
                variant="text" 
                startIcon={ 
                    <IconButton size="large">
                        <KeyboardArrowLeftIcon sx={{color: "white"}}/> 
                    </IconButton>
                } 
                onClick={() => handleOpenDrawer(false)}
                sx={{color: "white", p: 1, "&: hover": { background: "none" }, fontWeight: "bold"}}
            >
                Close Menu
            </Button>
            <List sx={{width: "100%"}}>
                {SidebarContent.map((item) => ( 
                    item.subOptions ? (     // true
                        <ListItem key={item.name}>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <ListItemButton sx={{"&:hover": {background: "none"}, fontWeight: "bold"}}>
                                    <ListItemText>{item.name}</ListItemText>
                                </ListItemButton>
                                <Divider sx={{color: "white"}}/>  
                                <List>
                                    {item.subOptions.map((subItem, index) => (
                                        <ListItem key={subItem} sx={{p: 0.5}}>
                                            <ListItemButton onClick={() => Navigate(`/${item.name}-${subItem}`)} >
                                                <Typography variant="body1" sx={{ fontSize: "12px", color: colors[index % colors.length], fontWeight: "bold" }}>
                                                    {subItem}
                                                </Typography>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </ListItem>
                    ) : (                   // false
                        <ListItem key={item.name}>
                            <ListItemButton onClick={() => Navigate(`/${item.name}`)} sx={{"&:hover": {background: "none"}, fontWeight: "bold"}}>
                                <ListItemText className="Hover">{item.name}</ListItemText>
                            </ListItemButton>
                        </ListItem> 
                    )
                ))}
            </List>
        </Container>     
    )

    return(
        <Box>
            <IconButton onClick={() => handleOpenDrawer(true)}>
                <MenuIcon sx={{color:"white"}}/>
            </IconButton>
            <Drawer 
                open={openDrawer} 
                onClose={() => handleOpenDrawer(false)} 
                sx={{
                    '& .MuiDrawer-paper': {
                        // background: "#ffffff1a",
                        background: "#FFFFFF0D",
                        backdropFilter: "blur(30px)"
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </Box>
    )
}

export default Sidebar


