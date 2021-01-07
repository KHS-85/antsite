import React from 'react'

import Hero from '../components/home/hero'
import About from '../components/home/about'
import Features from '../components/home/features'
import Works from '../components/home/works'
import FAQ from '../components/home/faq'
import Pricing from '../components/home/pricing'
import Contact from '../components/home/contact'

const home = () => {
    return (
        <div className="main">
            <Hero/>
            <About/>
            <Features/>
            <Works/>
            <FAQ/>
            <Pricing/>
            <Contact/>
        </div>
    )
}

export default home
