import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from '../images/squirrel.jpg';

const Services = () => {
    return (
        <>
            <Header />
            <HeroSection image={Image}/>
            Services
        </>
    )
}

export default Services;