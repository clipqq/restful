import React from 'react'

export default function SuccessStories() {
    return (
        <div className="success-stories">

            <section id="hero" class="text-white tm-font-big tm-parallax">

                <div class="text-center tm-hero-text-container">
                    <div class="tm-hero-text-container-inner">
                        <h2 class="tm-hero-title">Success Stories</h2>
                        <p class="tm-hero-subtitle">
                            Read about people just like you
              </p>
                    </div>
                </div>

                <div class="tm-next tm-intro-next">
                    <a href="#introduction" class="text-center tm-down-arrow-link">
                        <i class="fas fa-3x fa-caret-down tm-down-arrow"></i>
                    </a>
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