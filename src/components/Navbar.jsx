import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-nav-bg backdrop-blur-md border-b border-border">
            <div className="text-2xl font-heading font-bold">
                <NavLink to="/" className="text-teal-500 hover:opacity-80 transition-opacity">NexusHub</NavLink>
            </div>
            <ul className="flex items-center gap-8 list-none">
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/info" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Info</NavLink>
                </li>
                <li>
                    <NavLink to="/reach" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Reach Out</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/team" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Team</NavLink>
                </li>
                <li>
                    <NavLink to="/local-storage" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>📝 localStorage</NavLink>
                </li>
                <li>
                    <NavLink to="/why-state-management" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Why State?</NavLink>
                </li>
                <li>
                    <NavLink to="/state-types" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>State Types</NavLink>
                </li>
                <li>
                    <NavLink to="/use-state" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>useState</NavLink>
                </li>
                <li>
                    <NavLink to="/use-context" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>useContext</NavLink>
                </li>
                <li>
                    <NavLink to="/state-best-practices" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-teal-500' : 'text-text-muted hover:text-teal-500'}`
                    }>Best Practices</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
