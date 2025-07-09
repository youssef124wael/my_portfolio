import React, { useState,useEffect } from 'react';
import ProjectsBar from '../components/ProjectsBar';
import ProjectCard from '../components/ProjectCard';
import projectsJson from '../resources/project.json';
import { AnimatePresence } from 'framer-motion';
function Projects() {
    const [shown, setShown] = useState('All');
    const [finalshown,setFinalshown] = useState('All')
    useEffect(() => {
        setFinalshown('dlakfja')
        setTimeout(() => {
            setFinalshown(shown)
        },1000)
    },[shown])
    return (
        <div id='projects' className='mt-[300px]'>
            <h1 className='text-center text-[60px] text-white font-bold'>
                Let's take a journey through my work
            </h1>
            <ProjectsBar onShownTabChange={setShown} />
            <div className='py-12 max-md:justify-center flex gap-4 flex-wrap'>
            <AnimatePresence>
                {projectsJson.projects
                    .filter(project => finalshown === 'All' || project.category === finalshown)
                    .map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
            </AnimatePresence>
            </div>
        </div>
    );
}

export default Projects;
