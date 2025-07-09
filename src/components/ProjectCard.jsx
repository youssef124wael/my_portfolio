import React from 'react';
import {motion} from 'framer-motion'
function ProjectCard(props) {
    const Beta = props.project
    return (
        <motion.div className='w-[300px] flex flex-col bg-[#000000] rounded-md h-[500px]'
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        exit={{opacity:0,scale:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        >
            <img className='flex flex-grow w-full rounded h-[150px]' src={Beta.ImgUrl} alt='project' />
            <div className='flex flex-grow flex-col justify-between text-white px-5'>
                <h1 className='font-bold py-5'>{Beta.name}</h1>
                <p className='-translate-y-5'>{Beta.description}</p>
                <a className='-translate-y-5 text-blue-300' href={Beta.link}>Link to project</a>
            </div>
        </motion.div>
    );
}

export default ProjectCard;