import React from 'react'
import Navbar from './navbar'

export default function About() {
    return (
        <div className="about">

            <Navbar />

            <section id="introduction" class="tm-section-pad-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="img/the-town-01.jpg" alt="Image" class="img-fluid tm-intro-img" />
                        </div>
                        <div class="col-lg-6">
                            <div class="tm-intro-text-container">
                                <h2 class="tm-text-primary mb-4 tm-section-title">About Us</h2>
                                <p class="mb-4 tm-intro-text">
                                    We're a crew of people from modest financial backgrounds who have been finding ways to build wealth and financial independence. Since we hit upon our winning formula, our friends and family have been reaching into us to help them get started on the same winning formula that's worked for us. Now we're delighted to be able to branch out and offer this service to everyone who is interested in building wealth through real estate!
                </p>
                                <p class="mb-5 tm-intro-text">
                                    Please tell your friends about our site
                    <a rel="nofollow" href="https://templatemo.com">templatemo</a>. Thank you.
                                                                                                                        Curabitur dapibus tristique enim a imperdiet. Etiam
                tristique sem sed condimentum posuere. </p>
                                <div class="tm-next">
                                    <a href="#work" class="tm-intro-text tm-btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row tm-section-pad-top">
                        <div class="col-lg-4">
                            <i class="fas fa-4x fa-bus text-center tm-icon"></i>
                            <h4 class="text-center tm-text-primary mb-4">Curabitur at elit eu risus</h4>
                            <p>
                                Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida
                                nisi, ac pellentesque nunc tincidunt quis. Aenean at ornare lacus.
                                Duis imperdiet lacus justo.
              </p>
                        </div>

                        <div class="col-lg-4 mt-5 mt-lg-0">
                            <i class="fas fa-4x fa-bicycle text-center tm-icon"></i>
                            <h4 class="text-center tm-text-primary mb-4">Nunc sed metus vel nisi</h4>
                            <p>
                                Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
                                Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus
                                nisi, sed fringilla purus. In hac habitasse platea.
            </p>
                        </div>
                        <div class="col-lg-4 mt-5 mt-lg-0">
                            <i class="fas fa-4x fa-city text-center tm-icon"></i>
                            <h4 class="text-center tm-text-primary mb-4">Fusce sed nisi sagittis</h4>
                            <p>
                                Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit
                                volutpat. Sed ac sodales nibh, ut porttitor elit. Sed id dui mi.
                                Vestibulum ante ipsum primis in faucibus.
            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="tm-section-pad-top tm-parallax-2">
                <div className="container tm-container-contact">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4 tm-section-title">Contact Us</h2>
                            <div className="mb-5 tm-underline">
                                <div className="tm-underline-inner" />
                            </div>
                            <p className="mb-5">
                                Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
                                non tempus sem turpis vitae lorem. Maecenas eget odio in sapien ultrices
                                viverra vitae vel leo. Curabitur at elit eu risus pharetra pellentesque
                                at at velit.
                </p>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="tel:0100200340" className="tm-contact-item-link">
                                <i className="fas fa-3x fa-phone mr-4" />
                                <span className="mb-0">010-020-0340</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="mailto:info@company.co" className="tm-contact-item-link">
                                <i className="fas fa-3x fa-envelope mr-4" />
                                <span className="mb-0">info@company.co</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="https://www.google.com/maps" className="tm-contact-item-link">
                                <i className="fas fa-3x fa-map-marker-alt mr-4" />
                                <span className="mb-0">Location on Maps</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <form action method="get">
                                <input name="email" type="email" placeholder="Subscribe your email" className="tm-input" required />
                                <button type="submit" className="btn tm-btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <footer className="text-center small tm-footer">
                    <p className="mb-0">
                        Copyright © 2019 Resful
                </p>
                </footer>
            </section>

        </div>
    )
}


