import { AppBar, Box, Button, IconButton, Link, styled, Toolbar, Typography } from '@mui/material';
import { Email, Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import Logo from '../assets/Images/WhatsApp Image 2025-07-17 at 10.19.52_d5293493.jpg'

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
    return (
        <AppBar position='static' sx={{ backgroundColor: '#dde0e8ff' }}>
            {/*Offers Section*/}
            <Box component={Link} 
                sx={{ backgroundColor: "#223F8D", py: 1, px: 2, textDecoration: 'none', cursor: 'pointer', '&:hover':{color: 'black'} }}>
                <Typography variant="body2" align="center" color='white'>
                🎉 Tap to View Offers & Discounts on all Branding Packages!
                </Typography>
            </Box>

            {/*Top menu*/}
            <Toolbar sx={{ justifyContent: 'center', px: 2, gap: 10}}>
                <Typography variant="body2" color='#223F8D'>Mon - Fri: 9am - 5pm</Typography>
                <Box>
                    <IconButton><Facebook /> </IconButton>
                    <IconButton><Instagram /> </IconButton>
                    <IconButton><WhatsApp /> </IconButton>
                </Box>
                <Box component={Link} display={'flex'} flexDirection={'row'}>
                    <Email />
                <Typography>bencreative@gmail.com</Typography>
                </Box>
            </Toolbar>

            {/*Main Menu*/}
            <Toolbar sx={{ gap: 30, px: 2}}>
                <img src={Logo} alt='BenInk Creative' style={{height: '100px'}} />
                <Box>
                    <NavButton href="/" color="inherit" underline="none" sx={{ mx: 2 }}>Home</NavButton>
                    <NavButton href="/about" color="inherit" underline="none" sx={{ mx: 2 }}>Services</NavButton>
                    <NavButton href="/services" color="inherit" underline="none" sx={{ mx: 2 }}>Shop</NavButton>
                    <NavButton href="/contact" color="inherit" underline="none" sx={{ mx: 2 }}>Pricing</NavButton>
                    <NavButton href="/contact" color="inherit" underline="none" sx={{ mx: 2 }}>About</NavButton>
                    <NavButton href="/contact" color="inherit" underline="none" sx={{ mx: 2 }}>Contact</NavButton>
                    <NavButton href="/contact" color="inherit" underline="none" sx={{ mx: 2 }}>Terms & Conditions</NavButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;