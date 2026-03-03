import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-nav-bg backdrop-blur-md border-b border-border">
            <div className="text-2xl font-bold">
                <NavLink to="/" className="text-primary hover:opacity-80 transition-opacity">My Love</NavLink>
            </div>
            <ul className="flex items-center gap-8 list-none">
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/team" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Team</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
