import React from 'react';
import AboutComponent from '../components/AboutCard'
import AIWeb from '../resources/AI in web image.svg'
import desktop from '../resources/laptop coffee.svg'
import projects from '../resources/projects.jpg'
function About(props) {
    return (
        <div id='about' className='text-white py-[100px]'>
            <AboutComponent image={AIWeb}  header='Who?' text="A developer who is ambitious and skilled in building solutions to problems using latest technologies in AI/machine learning,data science and web development"/>
            <AboutComponent image={desktop} reverse={true} header="What can you expect?" text="A high quality clean service for your idea with respect to the details in your thoughts"/>
            <AboutComponent image={projects}  header="My abilities" text="Skilled in building projects,able to build websites with latest technologies like React analyze your data and extract benefecial insights using seaborn and pandas for your business and make AI models with tensorflow by neural networks,CNNs,RNNs and even transformers"/>
        </div>
    );
}

export default About;