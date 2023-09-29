import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth();
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const currentTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", currentTheme)
    }, [theme])
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { })
    }
    const navBar = <>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
        <NavLink to="/instructors" className={({ isActive }) => (isActive ? 'active' : 'default')}>Instructors</NavLink>
        <NavLink to="/all-classes" className={({ isActive }) => (isActive ? 'active' : 'default')}>All Classes</NavLink>
        {
            user && <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'default')}>Dashboard</NavLink>
        }
    </>
    return (
        <nav className="navbar my-container border-b dark:bg-gray-800 dark:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black">
                        {navBar}
                    </ul>
                </div>
                <Link to="/">
                    <img src="/logo.png" className='h-[60px]' alt="EdTech" />
                </Link>
            </div>
            {/* <div className="navbar-center >

            </div> */}
            <div className="navbar-end">
                <ul className="menu hidden lg:flex menu-horizontal px-1">
                    {navBar}
                </ul>
                {
                    user ? <button onClick={handleLogOut} className='default'>Sign Out</button> :
                        <Link to="/login"><button className='default'>Login</button></Link>
                }
                {
                    user && <div className="avatar">
                        <div className="w-14 border rounded-full">
                            <img referrerPolicy='no-referrer' src={user?.photoURL} />
                        </div>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Nav;