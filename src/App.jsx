import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSec from './components/HeroSec'
import { Box, Stack } from '@mui/material'
import AboutUs from './components/AboutUs'
import Info from './components/Info'
import Training from './components/Training'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Stack spacing={2} sx={{width:"100%"}}>
    <Header/>
    <HeroSec/>
    <AboutUs/>
    <Info/>
    <Training/>
    <Contacts/>
    <Footer/>
    </Stack >
  )
}

export default App
