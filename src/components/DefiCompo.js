import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./WeProvide.css"
import { Typography } from '@mui/material';
import topImg from "../images/defi.png";

const DefiCompo = () => {
    return (
        <Box sx={{ flexGrow: 1, mt:20, ml:"250px"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
            <Grid  xs={2} sm={4} md={6} >
              <Box>
                <img src={topImg} alt="" />
              </Box>
            </Grid>

            <Grid xs={2} sm={4} md={6}  >
             <Box className="we-provide">
              <Box>
                <Typography sx={{fontSize:"29px", color:"#FF6392"}} variant="">DEFI</Typography> <br />
                <Typography sx={{fontSize:"39px", color:"white", pt:20}} variant="">Scale the world of DeFi</Typography>
                <Typography className='provide-body' variant='h6'>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </Typography>
                <div className='bg-gradient'></div>
              </Box>
             </Box>
            </Grid>
            
        </Grid>
      </Box>
    );
};

export default DefiCompo;