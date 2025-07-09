import React from 'react';
import Container from '../layouts/Containerlayout.jsx'
import logo from '../resources/logo.svg'
function Nav(props) {
    return (
        <div className='z-[10] sticky top-0 bg-black'>
            <Container className='text-white'>
                <div className='flex items-center justify-between p-4 text-white'>
                    <img src={logo} alt="" className='w-[65px] h-[64px]' />
                    <nav>
                        <ul className='flex space-x-4'>
                            <li><a href='#hero' className=''>Home</a></li>
                            <li><a href='#about' className=''>About</a></li>
                            <li><a href='#skills' className=''>Skills</a></li>
                            <li><a href='#projects' className=''>Projects</a></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    );
}

export default Nav;