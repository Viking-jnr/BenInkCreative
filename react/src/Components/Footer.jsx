import { Box, Button, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import Logo from "../assets/Images/Logo.jpg"
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";


//Styling buttons in the footer
const NavButton = styled(Button)({
    fontWeight: 'bold',
    color: '#223F8D',
    textTransform: 'none',
    "&:hover":{
        color: '#F47F39'
    }
})

const Footer = () => {
    const navigate = useNavigate();
    return (
        <Box  >
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4}>
                    <img src={Logo} alt="Benink Creative" style={{height: '200px', width: '100%'}} onClick={() => navigate('/')} />
                    
                </Grid>

                <Grid item xs={6} sm={2}>
                    <Typography variant="subtitle1" textAlign={'center'} fontWeight={'bold'}>Quick Links</Typography>
                    <Stack direction={'column'}>
                    <NavButton href="/" color="inherit" underline="none" >Home</NavButton>
                    <NavButton  color="inherit" underline="none">Services</NavButton>
                    <NavButton href="/pricing" color="inherit" underline="none" >Pricing</NavButton>
                    <NavButton href="/about" color="inherit" underline="none">About</NavButton>
                    <NavButton href="/contact" color="inherit" underline="none">Contact</NavButton>
                    <NavButton href="/terms-&-conditions" color="inherit" underline="none">Terms & Conditions</NavButton>
                    </Stack>
                </Grid>

                <Grid item xs={6} sm={2}>
                    <Typography variant="subtitle1" textAlign={'center'} fontWeight={'bold'}>Shop</Typography>
                    <Stack direction={'column'}>
                    <NavButton color="inherit" underline="none" >Templates</NavButton>
                    <NavButton  color="inherit" underline="none">Designed Merchandise</NavButton>
                    <NavButton color="inherit" underline="none" >Ready to post Designs</NavButton>
                    </Stack>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" textAlign={'center'} fontWeight={'bold'}>Contact</Typography>
                    <Stack direction={'column'}>
                    <NavButton href="mailto:bencreative@gmail.com" color="inherit" underline="none" >Email: bencreative@gmail.com</NavButton>
                    <NavButton href="https://wa.me/254769665711" target="_blank" color="inherit" underline="none">Whatsapp: +254 769 665 711</NavButton>
                    </Stack>
                    <Box mt={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <IconButton><Facebook sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}}/> </IconButton>
                        <IconButton><Instagram sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}} /> </IconButton>
                        <IconButton><WhatsApp sx={{color: '#223F8D', "&:hover":{color: '#F47F39'}}} /> </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Typography variant='caption'>&copy; {new Date().getFullYear()} Benink Creative. All rights reserved </Typography>
            </Box>
        </Box>
    );
}

export default Footer;