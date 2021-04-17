import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color fw-bold">
            <div className="container">
                <Link className="navbar-brand text-uppercase text-white" to="/"><span className="text-warning">Fixer</span> Buddies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto ">
                        <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link text-white" to="/order">Order</Link>
                        <Link className="nav-link text-white" to="/services">Services</Link>
                        <Link className="nav-link text-white" to="/admin">Admin</Link>
                        <Link className="nav-link text-white" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;