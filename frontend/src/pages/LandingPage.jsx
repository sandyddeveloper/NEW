import React from 'react'
import  Navbar from '../components/landingPage/navBar'
import HeroSection from '../components/landingPage/HeroSection'
import AboutUs from '../components/landingPage/AboutUs'
import Team from '../components/landingPage/Team'
import Features from '../components/landingPage/Features'
import CallToAction from '../components/landingPage/CallToAction'
import SubscribeSection from '../components/landingPage/Newsletter'
import Prices from '../components/landingPage/Prices'
import Footer from '../components/landingPage/Footer'


const LandingPage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Team />
        <Features />
        <CallToAction />
        <SubscribeSection />
        <Prices />
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </>

  )
}

export default LandingPage