import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from '../images/squirrel.jpg';
import { motion } from 'framer-motion';
import { servicesAnimation, transition } from '../animations';

const Services = () => {
    return (
        <motion.div initial="out" animate="end" exit="in" variants={servicesAnimation} transition={transition}>
            <Header />
            <HeroSection image={Image} title="Sóc" 
                description="Các loài gặm nhấm cỡ nhỏ hoặc trung bình." />
            Services
        </motion.div>
    )
}

export default Services;