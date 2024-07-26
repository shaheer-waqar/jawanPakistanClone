import { Box, colors, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function HeroSec() {
  return (
    <Grid container sx={{width:"100%", height:{xs:"auto",md:"90vh"},padding:{xs:"10px 20px" , md:"10px 50px"}, alignItems:"center"}} >
        <Grid item md={6} sm={12} sx={{justifyContent:"center" ,display:"flex"}}>
            <Stack gap={2}>
                <Typography variant='h4' sx={{color:"#006838" ,width:{md:"100%",sm:"100%" ,lg:"40%"} ,fontWeight:600}}>Introduction To Jawan Pakistan </Typography>
                <Typography color={"#718096"} > The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth. </Typography>
            </Stack>
        </Grid>
        <Grid item md={6} sx={{justifyContent:"center" ,display:"flex"}} sm={12}>
            <img srcSet='https://jawanpakistan12.web.app/images/1.png' width={"100%"} style={{maxWidth:"300px"}} />
        </Grid>
    </Grid>
  )
}

export default HeroSec