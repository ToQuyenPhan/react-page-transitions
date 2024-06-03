import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from '../images/fox.jpg';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection image={Image} title="Fox" 
                description="Small-to-medium-sized omnivorous mammals."/>
        </>
    )
}

export default Home;