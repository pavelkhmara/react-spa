import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Button from '../button/Button';
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../../../context';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        // Navigate.to('/login')
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__container}>
                <div className={classes.nav__brand}>React SPA</div>
                <div className={classes.navbar__nav}>
                    <NavLink className={classes.navbar__link} to="/about">About</NavLink>
                    <NavLink className={classes.navbar__link} to="/posts">Posts</NavLink>
                    <div className={classes.nav__auth}>
                        {isAuth
                            ? 
                                <span className={classes.navbar__button} onClick={logout}>
                                    Log out
                                </span>
                            : 
                                <NavLink className={classes.navbar__button} to='/login'>
                                    Log in
                                </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;