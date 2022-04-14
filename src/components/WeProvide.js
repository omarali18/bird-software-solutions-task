import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./WeProvide.css"
import { Typography } from '@mui/material';
import nion1 from "../images/nion1O.svg"
import topVactor from "../images/topVector.svg"
import circle from "../images/circle.svg"
import bottomVactor from "../images/bottomVactor.svg"



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
              {/* <Box>
                <img src={topImg} alt="" />
              </Box> */}
              <div className="container">
                <div className="card">
                  {/* <div className="content"> */}
                    <div className='allVactors'>
                      <img src={nion1} className="nion" alt="" />
                      <img src={topVactor} className="topVactor" alt="" />
                      <img src={circle} className="circle1" alt="" />
                      <img src={bottomVactor} className="bottomVactor" alt="" />
                      <img src={circle} className="circle2" alt="" />
                    </div>
                    <div className='grassText'>
                      <div>
                        <span className='title'>100+</span><br />
                        <span className='detail'>Blockchain companies protected</span>
                      </div>
                      <div>
                        <span className='title'>200+</span><br />
                        <span className='detail'>Issues discovered</span>
                      </div>
                      <div>
                        <span className='title'>10,000+</span><br />
                        <span className='detail'>Analyses available per month</span>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </Grid>
            
        </Grid>
      </Box>
    );
};

export default WeProvide;