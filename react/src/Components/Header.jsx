import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { AccountCircle, Email, ExpandMore, Facebook, Home, Instagram, PriceChange, PriceCheck, Search, Shop, ShoppingCart, WhatsApp } from '@mui/icons-material'
import Logo from '../assets/Images/Logo.jpg';
import { useState } from 'react';

//Styling buttons in the header
const NavButton = styled(Button)({
    fontWeight: 'bold',
    color: '#223F8D',
    textTransform: 'none',
    "&:hover":{
        color: '#F47F39'
    }
})

const Header = () => {
    {/*Ancor element for drop down menu*/}
    const [anchorEl, setAnchorEl]= useState(null);
    const open = Boolean(anchorEl);
    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    return (
        <AppBar position='static' sx={{ backgroundColor: 'white', position:'fixed' }}>
            {/*Offers Section*/}
            <Box component={Link} 
                sx={{ backgroundColor: "#223F8D", py: 1, px: 2, textDecoration: 'none', cursor: 'pointer', '&:hover':{color: 'black'} }}>
                <Typography variant="body2" align="center" color='white'>
                🎉 Tap to View Offers & Discounts on all Branding Packages!
                </Typography>
            </Box>

            {/*Top menu*/}
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{width: '11%', pl: 2}}>
                    <img src={Logo} alt='BenInk Creative' style={{height: '100%', width: '100%'}} />
                </Box>
                <Box>
            <Toolbar sx={{ justifyContent: 'center', px: 2, gap: 10}}>
                <Typography variant="body2" color='#223F8D' fontWeight={'bold'}>Mon - Fri: 9am - 5pm</Typography>
                <Box>
                    <IconButton><Facebook sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}}/> </IconButton>
                    <IconButton><Instagram sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}} /> </IconButton>
                    <IconButton><WhatsApp sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}} /> </IconButton>
                </Box>
                <Box component={Link} display={'flex'} flexDirection={'row'}>
                    <Email />
                <Typography fontWeight={'bold'}>bencreative@gmail.com</Typography>
                </Box>

                <Box sx={{display: 'flex', gap: 2}}>
                <Button sx={{color: 'white',textTransform: 'none', backgroundColor: '#223f8d', "&:hover":{backgroundColor: '#F47F39'}}} >
                        Log in
                    </Button>
                    <Button sx={{color: 'white', textTransform: 'none', backgroundColor: '#223f8d', "&:hover":{backgroundColor: '#F47F39'}}}>
                        Sign Up
                    </Button>
                    </Box>
            </Toolbar>

            {/*Main Header*/}
            <Toolbar sx={{ gap: 20, px: 2}}>
                <Box sx={{display: 'flex', gap:1}}>
                    <NavButton startIcon={<Home />} href="/" color="inherit" underline="none" sx={{ mx: 2 }}>Home</NavButton>
                    <NavButton endIcon={<ExpandMore />} onMouseEnter={handleMenuOpen} color="inherit" underline="none" sx={{ mx: 2 }}>
                        Services
                    </NavButton>
                    <Menu anchorEl={anchorEl} open={open} onMouseLeave={handleMenuClose} onClose={handleMenuClose} >
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton>Design Consultation</NavButton>
                        </MenuItem>
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton >Logo Design</NavButton>
                        </MenuItem>
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton>Brand & Identity</NavButton>
                        </MenuItem>
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton>Advertising & Marketing Design</NavButton>
                        </MenuItem>
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton>Print & Digital Design</NavButton>
                        </MenuItem>
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton>Publication Design</NavButton>
                        </MenuItem>
                        <MenuItem disableRipple onClick={handleMenuClose}>
                            <NavButton>Video Editing</NavButton>
                        </MenuItem>
                    </Menu> 
                    <NavButton startIcon={<Shop />} href="/shop" color="inherit" underline="none" sx={{ mx: 2 }}>Shop</NavButton>
                    <NavButton startIcon={<PriceChange />} href="/pricing" color="inherit" underline="none" sx={{ mx: 2 }}>Pricing</NavButton>
                    <NavButton href="/about" color="inherit" underline="none" sx={{ mx: 2 }}>About</NavButton>
                    <NavButton href="/contact" color="inherit" underline="none" sx={{ mx: 2 }}>Contact</NavButton>
                    <NavButton href="/terms-&-conditions" color="inherit" underline="none" sx={{ mx: 2 }}>Terms & Conditions</NavButton>
                    
                </Box>
                <Box>
                    <IconButton><Search sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}}/> </IconButton>
                    <IconButton><ShoppingCart sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}}/> </IconButton>
                    <IconButton><AccountCircle sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}}/> </IconButton>
                </Box>
            </Toolbar>
            </Box>
            </Box>
        </AppBar>
    );
}

export default Header;