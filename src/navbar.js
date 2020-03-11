import React from 'react';
import Homepage from './homepage'
import About from './about'

export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-md tm-navbar" id="tmNav">
            <div class="container">
                <div class="tm-next">
                    <a href="#hero" class="navbar-brand">Resful</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars navbar-toggler-icon"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#introduction">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#work">Our Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tm-nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}