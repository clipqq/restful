import React from 'react'


export default function Contact(props) {
    return (
        <div className="contact">

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
                            <a href="tel:1-415-217-9665" className="tm-contact-item-link">
                                <i className="fas fa-3x fa-phone mr-4" />
                                <span className="mb-0">1-415-217-9665</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="mailto:info@resful.com" className="tm-contact-item-link">
                                <i className="fas fa-3x fa-envelope mr-4" />
                                <span className="mb-0">info@resful.com</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <a href="https://goo.gl/maps/rDNREnRJj5QJP4KW9" className="tm-contact-item-link">
                                <i className="fas fa-3x fa-map-marker-alt mr-4" />
                                <span className="mb-0">Locate Our Office</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
                            <form action="true" method="get">
                                <input name="email" type="email" placeholder="Subscribe your email" className="tm-input" required />
                                <button
                                    type="submit"
                                    className="btn tm-btn-submit"
                                    onClick={() => props.handleSubmit}>
                                    Submit
                                    </button>
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

Contact.defaultProps = {
    handleSubmit: () => {},
  }