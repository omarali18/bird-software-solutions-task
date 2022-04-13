import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Audit.css"
import { Typography } from '@mui/material';
import topImg from "../images/defi.png";
import Neon1 from "../images/nion1O.svg"
import link2 from "../images/Line 3.svg"
import expert from "../images/expert.png"

const Audit = () => {
    return (
        <Box sx={{ flexGrow: 1, mt:20, ml:"250px"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
            <Grid  xs={2} sm={4} md={6} sx={{paddingLeft:"120px"}}>
              <Box>
                <img src={topImg} alt="" />
                
              </Box>
            </Grid>

            <Grid xs={2} sm={4} md={6}  >
             <Box className="we-provide">
              <Box>
                  
                <Typography sx={{fontSize:"29px", fontWeight: 600, lineHeight: "32px", letterSpacing: "0.1em", color:"#4EFFBF", fontFamily: 'Montserrat',fontStyle: "normal"}} variant="">AUDIT</Typography> <br />
                <Typography sx={{fontSize:"47px", color:"white", fontFamily: 'Montserrat'}} variant="h3">Stay secure and safe</Typography>
                <Typography sx={{paddingTop:"10px", color:"rgba(255, 255, 255, 0.69)", fontSize:"30px", fontFamily: 'Montserrat',fontStyle: "normal", marginRight:"47px"}} variant='h6'>Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.</Typography>
                <div className='nionTwo'>
                    <img src={link2} className="link2" alt="" />
                    <img src={Neon1} className="neon2" alt="" />
                </div>
              </Box>
             </Box>
            </Grid>

            <Box sx={{ mt:6}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={2} sm={4} md={8} sx={{mt:20, paddingLeft:"120px"}} >
                        <Box className="we-provide">
                            <Box>
                                <Typography sx={{fontSize:"29px", fontWeight: 600, lineHeight: "32px", letterSpacing: "0.1em", color:"#618DFF", fontFamily: 'Montserrat',fontStyle: "normal"}} variant="">Expert</Typography> <br />
                                <Typography sx={{fontSize:"49px", lineHeight: "60px", color:"white", fontFamily: 'Montserrat'}} variant="h3">Expert Review</Typography>
                                <Typography sx={{paddingTop:"10px", color:"rgba(255, 255, 255, 0.69)", fontSize:"30px", fontFamily: 'Montserrat',fontStyle: "normal", marginRight:"47px"}} variant='h6'>Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} sx={{mt:20 }}>
                        <Box>
                            <img src={expert} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
           
            
        </Grid>
      </Box>
    );
};

export default Audit;