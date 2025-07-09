import React from 'react';
import SkillsBar from '../components/SkillsBar';
import Skills from '../resources/skills.json'; 
function SkillsSection(props) {
    return (
        <div id='skills' className='h-[80vh]'>
            <h1 className='text-center text-[60px] text-white font-bold'>Skills</h1>
            {Skills.skills.map((skill,index) => {
                return (
                    <SkillsBar key={index} skill={skill.name} precent={skill.proficiency}/>
                )
            })}
        </div>
    );
}

export default SkillsSection;