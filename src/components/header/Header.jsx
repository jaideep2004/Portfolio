

import React, { useState, useEffect } from "react";
import "./header.css";
import "./responsive.css";

const Header = ({ handleScroll }) => {
    const [isTransformed, setIsTransformed] = useState(false);

    const toggleTransform = () => {
        setIsTransformed(!isTransformed);
    };

    useEffect(() => {
        const handleResize = () => {
            // Check if the window width is less than or equal to 768px (mobile devices)
            const isMobile = window.innerWidth <= 768;
            setIsTransformed(isMobile); // Hide sidebar on mobile devices
        };

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Initial call to handleResize to set initial state
        handleResize();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className='mainbar'>
            <div>
            <i class="fa-solid fa-grip-vertical fa-2xl three" onClick={toggleTransform}></i>
            </div>
            <div className='mlogo'>J</div>
          
            <div className={`headerwrap ${isTransformed ? "transformed" : ""}`}>
                <div className='logo'>J</div>
                

                <div className='navlinkcontain'>
                    <div className='nlink'>
                        <a href='#hero'>HOME</a>
                    </div>
                    <div className='nlink'>
                        <a href='#about' onClick={(event) => handleScroll(event, 'about')}>ABOUT ME</a>
                    </div>
                    <div className='nlink'>
                        <a href='#project'>PROJECTS</a>
                    </div>
                    <div className='nlink'>
                        <a href='#contact'>CONTACT</a>
                    </div>
                </div>

                <div className='social'></div>
            </div>
        </header>
    );
};

export default Header;
