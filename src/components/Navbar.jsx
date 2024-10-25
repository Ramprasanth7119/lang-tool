import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        padding: '15px 20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };

    const brandStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
    };

    const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, border-radius 0.3s',
    };

    const linkHoverStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    };

    const hamburgerStyle = {
        display: 'none',
        flexDirection: 'column',
        cursor: 'pointer',
    };

    const hamburgerLineStyle = {
        width: '25px',
        height: '3px',
        backgroundColor: 'white',
        margin: '3px 0',
    };

    const menuStyle = {
        display: isMenuOpen ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#007BFF',
        top: '60px', // Adjust based on navbar height
        left: '0',
        right: '0',
        zIndex: '1000',
        flexDirection: 'column',
    };

    // Media query styles
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav style={navStyle}>
            <div className="navbar-brand">
                <Link to="/" style={brandStyle}>Language Learning</Link>
            </div>
            <div style={{ ...hamburgerStyle, display: window.innerWidth <= 768 ? 'flex' : 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div style={hamburgerLineStyle}></div>
                <div style={hamburgerLineStyle}></div>
                <div style={hamburgerLineStyle}></div>
            </div>
            <ul style={{ ...ulStyle, display: window.innerWidth > 768 || isMenuOpen ? 'flex' : 'none' }}>
                {['/', '/lessons', '/profile', '/leaderboard'].map((path, index) => {
                    const linkNames = ['Home', 'Lessons', 'Profile', 'Leaderboard'];
                    return (
                        <li key={index}>
                            <Link
                                to={path}
                                style={linkStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {linkNames[index]}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;

