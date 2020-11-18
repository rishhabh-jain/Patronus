import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';

function SelectCity() {
    return (
        <div>
            <Select
                    fullWidth
                    // labelId="demo-simple-select-filled-label"
                    // id="demo-simple-select-filled"
                    // value={age}
                    // onChange={handleChange}
                    defaultValue="5"
                    >
                    <MenuItem value="5" variant="filled">
                    <IconButton>
                            <SearchIcon/>
                        </IconButton> New Delhi
                    </MenuItem>
                    <MenuItem value={10}>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>Delhi
                    </MenuItem>
                    <MenuItem value={20}>
                    <IconButton>
                            <SearchIcon/>
                    </IconButton>Noida</MenuItem>
                    <MenuItem value={30}>
                    <IconButton>
                            <SearchIcon/>
                        </IconButton>Gurgaon</MenuItem>
                    </Select>
        </div>
    )
}

export default SelectCity
