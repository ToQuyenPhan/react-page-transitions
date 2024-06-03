import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Image from '../images/fox.jpg';
import { motion } from 'framer-motion';
import { homeAnimation, transition } from '../animations';

const Home = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={homeAnimation} transition={transition}>
            <Header />
            <HeroSection image={Image} title="Cáo" 
                description="Có mõm dài, hẹp, đuôi rậm, mắt xếch và tai nhọn." />
        </motion.div>
    )
}

export default Home;