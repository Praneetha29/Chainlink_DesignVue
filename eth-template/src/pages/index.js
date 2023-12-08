import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data';
import Features from '../components/Features'

const 
Home = () => {
const[isOpen, setIsOpen]= useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}


  return (
   <>
   <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
   <Navbar showNavMenu={true} />
   <HeroSection />
   <InfoSection {...homeObjOne}/>
   <Features />
   </>
  )
}

export default 
Home