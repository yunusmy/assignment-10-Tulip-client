import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2'; 
import Logo from '../../assets/logo.webp'

const NavigationLinks = () => (
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/AllCampaign">All Campaign</NavLink></li>
        <li><NavLink to="/AddNewCampaign">Add New Campaign</NavLink></li>
        <li><NavLink to="/MyCampaign">My Campaign</NavLink></li>
        <li><NavLink to="/MyDonations">My Donations</NavLink></li>
    </>
);

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);


    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Signed out successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign-out failed',
                    text: 'Please try again later.',
                    footer: `<p>Error details: ${error.message}</p>`,
                });
            });
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost lg:hidden" 
                        aria-label="Toggle navigation menu"
                        aria-expanded="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavigationLinks />
                    </ul>
                </div>
               <Link to='/'>
               <a className="btn btn-ghost text-xl">
                    <img className="w-12" src={Logo} alt="Help People Logo" />
                    <h3 className="text-3xl">Help People</h3>
                </a>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavigationLinks />
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <button onClick={handleSignOut} className="btn">Sign out</button>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/signIn">
                            <button className="btn">Sign In</button>
                        </Link>
                    </>
                )}

                
                {/* Theme Toggle */}
               <>
                        <button
                        className="btn btn-sm  ml-2 p-2"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        >
                        {theme === "light" ? (
                            <span>🌙</span>
                        ) : (
                            <span>☀️</span>
                        )}
                        </button>
                    </>


            </div>
        </div>
    );
};

export default Navbar;
