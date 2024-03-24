import React, { useState } from "react";
import { NavLink ,Navigate} from "react-router-dom";
import './NavbarResp.css'
import {useSelector} from "react-redux"

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

const Navbar = () => {
  //get data from stor redux
  const count = useSelector((state) => state.HandleCart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signoutHandler = ()=>{
    localStorage.clear();
    Navigate("/")
  }
  const [menuOpen,setmenuOpen] = useState(false); 
  return (
    <>
      <nav className="fixed-top">
        <div className="title"><a className="navbar-brand fw-bold fs-3" href="/">
            {/* <img src="logo.png" />  */}
            <img src="./Photos/foodies3.png" alt="icon" style={{width:"13rem",height:"4.3rem"}}/>
          </a></div>
        <div className="menu" onClick={
          () => 
          {
            setmenuOpen(!menuOpen)
            // seticon(!CloseIcon)
          }
        }>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
              <NavLink to="/home" className="underline">
                Home
              </NavLink>
          </li>
          <li>
              <NavLink to="/product" className="underline">
                Product
              </NavLink>
          </li>
          <li>
              <NavLink to="/cart" className="underline">
                Cart
              </NavLink>
          </li>
          <li>
              <NavLink to="/order" className="underline">
                Orders
              </NavLink>
          </li>
          <li>
              <NavLink to="/contact" className="underline">
                Contact
              </NavLink>
          </li>
          <li>
              <NavLink to="/cart" className="underline">
              <span><i class="fa-solid fa-cart-shopping"></i> {count.length}</span>
              </NavLink>
          </li>
          <li>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="User Info">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}><i class="fa-solid fa-user"></i></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Divider />
        <NavLink to="/" onClick={signoutHandler}>
        <MenuItem  >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </NavLink>
      </Menu>
          </li>
          <li>
          
          <NavLink to="/home" className="underline">
            { localStorage.getItem('name')}
          </NavLink>
       
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;