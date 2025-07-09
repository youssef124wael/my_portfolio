import React from 'react';
import laptopImage from '../resources/hero image.svg'; // or .png
import {motion} from 'framer-motion'
function Hero() {
    const duration = 1.5
    return (
        <div
            id='hero' className="text-[#FFFFFF] flex flex-col justify-center items-center filter brightness-[70%] w-full min-h-screen bg-cover bg-no-repeat bg-center bg-white"
            style={{ backgroundImage: `url("${laptopImage}")` }}
            >
            <motion.h1 initial={{opacity:0,x:-300}} animate={{x:0,opacity:1}} transition={{duration: duration}} className='text-[70px] max-md:text-[30px] text-purple-600'>Hi. i am Youssef</motion.h1>
            <motion.p initial={{opacity:0,x:300}} animate={{x:0,opacity:1}} transition={{duration:duration}} className='text-center text-[30px] max-md:text-[20px]'>A developer who is happy and ready to turn <span className='text-[#ffda45]'>ideas to products</span> and</motion.p>
            <motion.p initial={{opacity:0,x:300}} animate={{x:0,opacity:1}} transition={{duration:duration}} className='text-[30px] text-center max-md:text-[20px]  text-[#ffda45]'>dreams to reality</motion.p>
            <motion.a href="#contact"
                initial={{opacity: 0 , y:100}}
                animate={{opacity:1, y: 5}}
                transition={{duration:duration}}
            >
            </motion.a>

        </div>
    );
}

export default Hero;
