import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

import './css/navbar.scss';
import Logo from '../assets/img/logo/logo1.png'; // À adapter selon votre projet
import MainMenu from "./mainMenu.tsx";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    const closeUserDropdown = () => {
        setUserDropdownOpen(false);
    };

    // Gestion de la fermeture du dropdown quand on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userDropdownRef.current &&
                !userDropdownRef.current.contains(event.target as Node)
            ) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                {/* Zone du logo */}
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={Logo} alt="Velocia Logo" />
                    </Link>
                </div>

                {/* Zone de recherche */}
                <div className="navbar-search">
                    <FaSearch className="icon-search" />
                    <input type="text" placeholder="Search" />
                </div>

                {/* Zone des icônes à droite */}
                <div className="navbar-icons">
                    <FaShoppingCart className="icon" />

                    {/* Container pour le dropdown utilisateur */}
                    <div className="user-dropdown-container" ref={userDropdownRef}>
                        <FaUser className="icon" onClick={toggleUserDropdown} />
                        {userDropdownOpen && (
                            <div className="user-dropdown">
                                <ul>
                                    <li>
                                        <Link to="/profile" onClick={closeUserDropdown}>Identifiez-vous</Link>
                                    </li>
                                    <li>
                                        <Link to="/settings" onClick={closeUserDropdown}>Nous rejoindre</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <FaBars className="icon" onClick={toggleMenu} />
                </div>
            </nav>

            {/* Intégration du menu coulissant */}
            <MainMenu isOpen={menuOpen} onClose={closeMenu} />
        </div>
    );
};

export default Navbar;
