import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import styles from "./Header.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <nav>
        <Stack direction={{ md: 'row', sm:'column' }} sx={{padding:{xs:"10px 0px" , md:"10px 50px"},alignItems:{xs:"center",md:"center"}}} flexWrap={'wrap'}>
            <Box borderRight={{md:"2px solid #718096",sm:"none"}} px={2}>
                <img srcSet='https://jawanpakistan12.web.app/images/j3.png' width={"100%"} style={{maxWidth:"300px"}} />
            </Box>
            <Stack direction="row" spacing={2} sx={{alignItems:"center",cursor:"pointer"}} flexWrap={'wrap'}>
              <Button sx={{color:"black", "&:hover":{color:"green"}}} variant='text'>Home</Button>
              <Button sx={{color:"black", "&:hover":{color:"green"}}} variant='text' href='#about'>About us</Button>
              <Stack sx={{position:"relative",}} className={styles.menu}  >
                <Button sx={{color:"black", "&:hover":{color:"green"},display:{xs:"none" , sm:"flex"},alignItems:"center"}}>Training <KeyboardArrowDownIcon/></Button>
                <Box sx={{position:"absolute" ,display:"none",width:"300px" }} className={styles.menuItems}>
                    <Box sx={{marginTop:"30px",bgcolor:"#F1F1F1",} }>
                    <p>Web and Mobile Application Development</p>
                    <p>Fluuter Application develoment</p>
                    <p>Digital Marketing</p>
                    <p>Blockchain develoment</p>
                    </Box>
                </Box>
              </Stack>
              <Button sx={{color:"black", "&:hover":{color:"green"}}} variant='text'>Contact</Button>
            </Stack>
        </Stack>
    </nav>
  )
}

export default Header