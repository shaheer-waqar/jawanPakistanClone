import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function AboutUs() {
  return (
    <Grid id="about" container sx={{width:"100%", height:{lg:"100vh",sm:"auto"},padding:"50px 20px",boxShadow:"0 15px 30px #80808086",}}>
    <Grid item md={5} sx={{justifyContent:"center",alignItems:'center' ,display:"flex"}} sm={12}>
        <img  srcSet='https://jawanpakistan12.web.app/images/2.png' width={"100%"} style={{maxWidth:"500px"}} />
    </Grid>

    <Grid item md={7} sm={12} sx={{justifyContent:"center", display:"flex"}}>
        <Stack spacing={4}>
            <Typography variant='h4' sx={{color:"#006838" ,width:{md:"100%",sm:"100%" ,lg:"40%"} ,fontWeight:600}}>Introduction To Jawan Pakistan </Typography>
            <Typography color={"#718096"}> Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.</Typography>
            <Typography  color={"#718096"}> Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.</Typography>
        </Stack>
    </Grid>
</Grid> 
)
}

export default AboutUs