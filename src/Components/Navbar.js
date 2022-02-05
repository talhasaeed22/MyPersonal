import React from 'react';
import logo from '../img/logo.png'
import './Navbar.css';

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a id="logo" className="navbar-brand" href="#"> <img className='mx-2' src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />PEROSNAL</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link " aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link " aria-current="page" href="#">Interests</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link " aria-current="page" href="#">Education</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link " aria-current="page" href="#">Experience</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch text-light mx-3 ">
                            <input className="form-check-input" type="checkbox" onClick={props.switchMode} role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
