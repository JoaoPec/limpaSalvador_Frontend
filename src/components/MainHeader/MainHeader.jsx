import React, { useState } from 'react';
import classes from './MainHeader.module.css';
import AutocompleteInput from './AutoCompleteInput';
import { Logout } from '../../../lib/auth';

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoged = localStorage.getItem('token');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={classes.header}>
            <a href="/">
                <img src="/logo.jpg" alt="logo" />
            </a>
            <AutocompleteInput />
            <nav>
                <ul className={`${classes.navItems} ${isOpen ? classes.open : ''}`}>
                    <li>
                        <a href="/feed">Feed</a>
                    </li>
                    <li>
                        <a href="/actions">Barril dobrado!</a>
                    </li>
                    {isLoged ? (
                        <>
                            <li>
                                <a href="/profile">Meu Perfil</a>
                            </li>
                            <li>
                                <a onClick={Logout} href="/">Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <a href="/register">Cadastrar-se</a>
                            </li>
                            <li>
                                <a href="/login">Login</a>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <div className={classes.hamburger} onClick={toggleMenu}>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
            </div>
        </header>
    );
};

export default MainHeader;