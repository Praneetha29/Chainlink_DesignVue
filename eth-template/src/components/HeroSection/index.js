import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'


const HeroSection = () => {
 const [hover, setHover] = useState(false)

 const onHover = () => {
    setHover(!hover);
 }

  return (
    <HeroContainer id="home">
     <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
     </HeroBg>
     <HeroContent>
        <HeroH1>Transform Your Space with DesignVue</HeroH1>
        <HeroP>Elevate Your Living Experience: Unleash Extraordinary Designs, Visualize Your Dream Home, and Own Exclusive Creations as NFTs.</HeroP>
     <HeroBtnWrapper>
        <Button to='profile' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get started {hover ? <ArrowForward />: <ArrowRight/>}</Button>
     </HeroBtnWrapper>
     
     </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection