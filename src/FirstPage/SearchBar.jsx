import { Grid,FormControl, TextField, Box, } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function SearchBar(){  
    const [inputValue, setInputValue] = useState("");    
    const handleInputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const Navigate = useNavigate()
    const handleBtnClick = () => {
        if(!inputValue) return
        Navigate(`/search?keyword=${inputValue}`);
    }
    return(
        <Grid container spacing={1}>
            <Grid item xs={10} md={8} lg={6} xl={6}>
                <TextField
                    onChange={handleInputChange} 
                    variant="outlined" 
                    fullWidth
                    sx={{
                        backgroundColor: "white", 
                        borderRadius: 4,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 4,
                            '&:hover fieldset': {
                                borderRadius: 4,
                            },
                            '&:focused fieldset': {
                                borderRadius: 4,
                            },
                        },
                    }} 
                    value={inputValue}
                    placeholder='Search Movies...'
                />
            </Grid>
            <Grid item xs={2}>
                <IconButton 
                    size="large" 
                    sx={{ 
                        height: "100%", width: 55, 
                        backgroundColor: "#ffbade", color:"black",
                        borderRadius: 2,   
                        '&:hover':{
                            backgroundColor: "#ffbade"
                        } 
                    }}
                    onClick={handleBtnClick}
                    >
                    <SearchIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default SearchBar;