import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOption() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Search by</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={age}
                    label="Search by *"
                    onChange={handleChange}
                >
                    
                    <MenuItem value={"movies"}>Movies</MenuItem>
                    <MenuItem value={"tvshows"}>TV Shows</MenuItem>
                    <MenuItem value={"celebs"}>Celebs</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
        </>
    )
}
