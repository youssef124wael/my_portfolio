import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function SkillsBar({ skill, precent }) {
    const [barWidth, setBarWidth] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            setBarWidth(window.innerWidth < 768 ? 200 : 600);
        };

        handleResize(); // set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const finalPrecent = (precent / 100) * barWidth;

    return (
        <motion.div
            className="flex flex-col py-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
        >
            <p className="text-white text-xl">{skill}</p>
            <div className="bg-white rounded h-[10px]" style={{ width: `${barWidth}px` }}>
                <motion.div
                    className="bg-[#4A4AFF] rounded z-[10] h-[10px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: finalPrecent }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                />
            </div>
        </motion.div>
    );
}

export default SkillsBar;
