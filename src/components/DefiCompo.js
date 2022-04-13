import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./DefiCompo.css"
import { Typography } from '@mui/material';
import topImg from "../images/defi.png";
import Neon1 from "../images/nion1O.svg"
import link1 from "../images/Line 1.svg"

const DefiCompo = () => {
    return (
        <Box sx={{ flexGrow: 1, mt:20, ml:"250px"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
            <Grid  xs={2} sm={4} md={6} sx={{paddingLeft:"120px"}}>
              <Box>
                <img src={topImg} alt="" />
                <div className='nionOne'>
                    <img src={Neon1} className="neon1" alt="" />
                    <img src={link1} className="link1" alt="" />
                </div>
              </Box>
            </Grid>

            <Grid xs={2} sm={4} md={6}  >
             <Box className="we-provide">
              <Box>
                <Typography sx={{fontSize:"29px", color:"#FF6392", fontFamily: 'Montserrat',fontStyle: "normal"}} variant="">DEFI</Typography> <br />
                <Typography sx={{fontSize:"47px", color:"white", fontFamily: 'Montserrat'}} variant="h3">Scale the world of DeFi</Typography>
                <Typography sx={{paddingTop:"10px", color:"white", fontSize:"30px", fontFamily: 'Montserrat',fontStyle: "normal", marginRight:"47px"}} variant='h6'>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.</Typography>
                <div className='bg-gradient'></div>
              </Box>
             </Box>
            </Grid>
            
        </Grid>
      </Box>
    );
};

export default DefiCompo;