import { AppBar, Container, Toolbar, Box, IconButton, Menu, MenuItem, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarItems = ["Home", "Movies", "TV Series", "Popular", "Now Playing"]

function Navbar(){
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const navigate = useNavigate()
    const setNavItemPath = (item) => {
        console.log(`/${item.toLowerCase()}`)
        navigate(`/${item.toLowerCase()}`)
        setAnchorElNav(null)
    }

    return (
        <AppBar position='static' sx={{backgroundColor: '#201F31', boxShadow: "none"}}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{display: {xs: "flex", sm: "none"}, width: "100%" }}>
                        <IconButton 
                            size='large'
                            onClick={handleOpenNavMenu}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            >
                            {NavbarItems.map(item => (
                                <MenuItem key={item} onClick={() => setNavItemPath(item)}>
                                    <Typography textAlign="center">{item}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{display: {xs: "none", sm: "flex"} , justifyContent: "center", width: "100%" }}>
                        {NavbarItems.map( item => (
                            <Button 
                                key={item} 
                                sx={{
                                    color: "white", 
                                    mx: 2 , my:2, 
                                    '&:hover': { backgroundColor: 'inherit', color: "#ffbade" }
                                }}
                                onClick={() => setNavItemPath(item)}
                                >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;

 