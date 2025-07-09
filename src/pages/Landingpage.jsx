import React from 'react';
import Container from '../layouts/Containerlayout';
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import About from '../sections/About'
import SkillsSection from '../sections/SkillsSection';
import Projects from '../sections/Projects'
function Landingpage(props) {
    return (
        <>
        <Nav />
        <Hero />
        <Container>
            <About />
            <SkillsSection />
            <Projects />
        </Container>
        </>
    );
}

export default Landingpage;