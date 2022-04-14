import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./WeProvide.css"
import { Typography } from '@mui/material';
import topImg from "../images/defi.png"



const WeProvide = () => {
    return (
        <Box sx={{ flexGrow: 1, mt:10}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>
         
            <Grid xs={4} sm={8} md={12} lg={6} sx={{pl:{ xs:5}}} >
             <Box className="we-provide">
              <Box>
                <Typography sx={{fontSize:"39px", color:"white"}} variant="">We provide The Best To Protect Your Users And Their Investments</Typography>
                <Typography className='provide-body' variant='h6'>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </Typography>
                <div className='bg-gradient'></div>
              </Box>
             </Box>
            </Grid>
            <Grid  xs={4} sm={8} md={12} lg={6} sx={{mt:{md:10, sm:10, xs:10}, w:{xs:50}}} className="centerAlign" >
              <Box>
                <img src={topImg} alt="" />
              </Box>
            </Grid>
            
        </Grid>
      </Box>
    );
};

export default WeProvide;