import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CusCards from './CusCards'

function Training() {

  return (
    <Stack p={"100px 40px"} mt={10} boxShadow="0 15px 30px #80808086">
        <Box>
            <Typography variant='h4' textAlign={'center'} color={"#006838"} fontWeight={600}>IT Trainings Offering In Jawan Pakistan</Typography>
        </Box>
        <CusCards/>
    </Stack>
  )
}

export default Training