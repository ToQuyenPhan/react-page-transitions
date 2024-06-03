import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from '../images/racoon.jpg';
import { motion } from 'framer-motion';
import { aboutAnimation, transition } from '../animations';

const About = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={aboutAnimation} transition={transition}>
            <Header />
            <HeroSection image={Image} title="Gấu mèo" 
                description="Một loài động vật có vú bản địa Bắc Mỹ." />
            About
        </motion.div>
    )
}

export default About;