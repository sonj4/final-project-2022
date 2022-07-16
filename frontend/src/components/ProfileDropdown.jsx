import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function ProfileDropdown() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar alt="Remy Sharp" src="" sx={{ width: 24, height: 24 }} />

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Link style={{ textDecoration: 'none', color: 'black'}} to='/profile/1' >Your Profile</Link > </MenuItem>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='profile/1/settings'><MenuItem onClick={handleClose}>Settings</MenuItem></Link>
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </div>
  );
}