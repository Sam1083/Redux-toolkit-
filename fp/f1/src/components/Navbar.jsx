import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartIcon } from "../icons";





const Navbar = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isLoggedIn = token ? true : false;

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  const {items}= useSelector((store) => store.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <ul className="d-flex list-unstyled gap-4 custom-list">
              <li><Link className="nav-link" to="/BecomeASeller">Become a Seller</Link></li>
              <li><Link className="nav-link" to="/DarazAffiliateProgram">Daraz Affiliate Program</Link></li>
              <li><Link className="nav-link" to="/HelpAndSupport">Help And Support</Link></li>
              <li><Link className="nav-link" to="/Chat">Chat with Agent</Link></li>
            </ul>
            <div className='d-flex flex-wrap'>
              <Link className="navbar-brand" to="/"><img className="logo-img" src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" alt="logo" height="50px" /></Link>
              <Link className='text-decoration-none'>
                <form className="search-bar">
                  <input className="form-control" type="search" placeholder="Search in Daraz" aria-label="Search" />
                </form>
              </Link>
              <button className="navbar-toggler" type="button" onClick={handleToggleNavbar}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show open' : ''}`}>
                <span className='account'>
                  <ul className="navbar-nav d-flex justify-content-evenly align-items-center gap-2">
                    <li>
                      <Link className={`nav-link text-light btn-primary bg-primary-hover ${location.pathname === '/login' ? 'active' : ''}`} to={isLoggedIn ? "/" : "/login"} onClick={isLoggedIn ? handleLogout : null}>
                        <i className="fa-regular fa-user text-light"></i>
                        {' '}
                        {isLoggedIn ? "Logout" : "Login"}
                      </Link>
                    </li>
                    {!isLoggedIn && (
                      <li className="nav-item">
                        <Link className="nav-link text-light btn-primary bg-primary-hover n1" to="/signup">Sign Up</Link>
                      </li>
                    )}
                    <li className="nav-item">
                      <Link className="nav-link d-flex" to="/CheckOut"> 
                        <span><CartIcon/></span><span className='align'>
                          {items.length}
                          </span>                      
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
