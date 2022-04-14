import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./SmartContract.css"
import { Typography } from '@mui/material';
import Neon1 from "../images/nion1O.svg"
import link1 from "../images/Line 1.svg"
import smartC from "../images/smart cont.png"
import launchpad from "../images/launchpad.png"

const SmartContract = () => {
    return (
        <Box sx={{ flexGrow: 1, mt:20}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>
         
            <Grid xs={4} sm={8} md={12} lg={6} sx={{ mt:'-120px'}}className="centerAlign">
              <Box>
                <img src={smartC} alt=""  className='smartImg1' />
                <div className='niontree'>
                    <img src={Neon1} className="neon3" alt="" />
                    <img src={link1} className="link3" alt="" />
                </div>
              </Box>
            </Grid>

            <Grid xs={4} sm={8} md={12} lg={6} sx={{pl:{ xs:8}}} >
             <Box className="we-provide" sx={{ marginTop:"60px"}}>
              <Box>
                <Typography sx={{fontSize:"29px", fontWeight: 600, lineHeight: "32px", letterSpacing: "0.1em", color:"#FFBF5F", fontFamily: 'Montserrat',fontStyle: "normal"}} variant="">SMART CONTRACT</Typography> <br />
                <Typography sx={{fontSize:"49px", lineHeight: "60px", color:"white", fontFamily: 'Montserrat'}} variant="h3">Experience the Revolution</Typography>
                <Typography sx={{paddingTop:"10px", color:"rgba(255, 255, 255, 0.69)", fontSize:"30px", lineHeight: "46px", fontFamily: 'Montserrat',fontStyle: "normal", marginRight:"47px"}} variant='h6'>Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.</Typography>
              </Box>
             </Box>
            </Grid>

            

            <Grid xs={4} sm={8} md={12} lg={6} sx={{mt:20, pl:{ xs:8}}} >
             <Box className="we-provide">
              <Box>
                <Typography sx={{fontSize:"29px", fontWeight: 600, lineHeight: "32px", letterSpacing: "0.1em", color:"#4EFFBF", fontFamily: 'Montserrat',fontStyle: "normal"}} variant="">LAUNCHPAD</Typography> <br />
                <Typography sx={{fontSize:"47px", color:"white", fontFamily: 'Montserrat'}} variant="h3">Stabilize and Promote</Typography>
                <Typography sx={{paddingTop:"10px", color:"rgba(255, 255, 255, 0.69)", fontSize:"30px", fontFamily: 'Montserrat',fontStyle: "normal", marginRight:"47px"}} variant='h6'>Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO.</Typography>
              </Box>
             </Box>
            </Grid>

            <Grid  xs={4} sm={8} md={12} lg={6} className="centerAlign" >
              <Box sx={{ml:{lg:"30px"}}}>
                <img src={launchpad} alt="" />
              </Box>
            </Grid>
            
        </Grid>
      </Box>
    );
};

export default SmartContract;