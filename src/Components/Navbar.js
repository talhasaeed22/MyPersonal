import React from 'react';
import logo from '../img/logo.png'
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom';

function Navbar(props) {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link id='logo' class="navbar-brand" to="/">
                        <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        Personal
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link className={`nav-link ${location.pathname === '/'?"active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className={`nav-link ${location.pathname === '/Interests'?"active":""}`} aria-current="page" to="/Interests">Interests</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className={`nav-link ${location.pathname === '/Education'?"active":""}`} aria-current="page" to="/Education">Education</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className={`nav-link ${location.pathname === '/Experience'?"active":""}`} aria-current="page" to="/Experience">Experience</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch text-light mx-3 ">
                            <input className="form-check-input" style={{cursor:'pointer'}} type="checkbox" onClick={props.switchMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
