import React from 'react';
import Homepage from './homepage'
import About from './about'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">
            <div className="container">
                <div className="tm-next">
                    <a href="#hero" className="navbar-brand">Resful</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars navbar-toggler-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link tm-nav-link" href="#introduction">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link tm-nav-link" href="#work">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link tm-nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}