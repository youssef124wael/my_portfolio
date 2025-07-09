import React from 'react';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
function AboutSection({ reverse = false, image, header, text }) {
    var ximg = -100
    var otherX = -1 * ximg
    if (reverse) {
        ximg = 100;
        otherX = -1 * ximg;
    }
    const [ref,InView] = useInView({
        threshold:0.5,
        triggerOnce: true,
    })
    return (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 ">
            <motion.div ref={ref} className={`${reverse ? 'md:order-2' : 'md:order-1'}`}
            initial={{opacity:0,x:ximg}}
            animate={InView ? {opacity:1,x:0} : {}}
            transition={{duration:2}}
            >
                <img src={image} alt="About section" className="w-full h-auto object-cover rounded-xl shadow-md" />
            </motion.div>

      {/* Text Section */}
            <motion.div ref={ref} className={`${reverse ? 'md:order-1' : 'md:order-2'}`}
            initial={{opacity:0,x:otherX}}
            animate={InView ? {opacity:1,x:0} : {}}
            transition={{duration:2}}
            >
                <h1 className="text-3xl font-bold mb-4 text-gray-400">{header}</h1>
                <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
            </motion.div>
        </div>
    );
}

export default AboutSection;

