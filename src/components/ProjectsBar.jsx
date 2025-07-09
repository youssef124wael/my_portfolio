import React, { useState } from 'react';
import {motion} from 'framer-motion'
const tabs = [
    'All',
    'Data science',
    'Deep learning',
    'Web development'
];

function ProjectsBar(props) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <motion.div className="rounded-full bg-[#24252F] p-2"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        exit={{opacity:0}}
        viewport={{once:true}}
        transition={{duration:2}}
        layout
        >
            <ul className="flex justify-evenly  items-center">
                {tabs.map((tab, idx) => (
                    <li
                        key={tab}
                        className={`
                            cursor-pointer px-4 max-md:text-[10px] py-2 w-full rounded-full text-center transition-colors text-white duration-300
                            ${activeTab === idx 
                                ? 'bg-blue-600 shadow-md' 
                                : 'bg-transparent hover:bg-blue-400'}
                        `}
                        onClick={() => {
                            setActiveTab(idx)
                            props.onShownTabChange(tabs[idx])
                        }}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default ProjectsBar;