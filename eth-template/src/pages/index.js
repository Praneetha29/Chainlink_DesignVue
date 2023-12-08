import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

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
   </>
  )
}

export default 
Home