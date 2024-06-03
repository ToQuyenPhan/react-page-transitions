import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from '../images/racoon.jpg';

const About = () => {
    return (
        <>
            <Header />
            <HeroSection image={Image}/>
            About
        </>
    )
}

export default About;