import React from 'react'

export default function Homepage() {
    return (
        <div className="homepage">

            <section id="hero" class="text-white tm-font-big tm-parallax">

                <div class="text-center tm-hero-text-container">
                    <div class="tm-hero-text-container-inner">
                        <h2 class="tm-hero-title">Welcome to RESful</h2>
                        <p class="tm-hero-subtitle">
                            Want to invest? We'll handle the rest. Fully.
              </p>
                    </div>
                </div>

                <div class="tm-next tm-intro-next">
                    <a href="#work" class="text-center tm-down-arrow-link">
                        <i class="fas fa-3x fa-caret-down tm-down-arrow"></i>
                    </a>
                </div>
            </section>

            <section id="work" className="tm-section-pad-top">
                <div className="container tm-container-gallery">
                    <div className="row">
                        <div className="text-center col-12">
                            <h2 className="tm-text-primary tm-section-title mb-4">Our Work</h2>
                            <p className="mx-auto tm-work-description">
                                "Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, ut
                                porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia."
                </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="mx-auto tm-gallery-container">
                                <div className="grid tm-gallery">
                                    <a href="img/gallery-img-01.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-01.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-02.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-02.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Second <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-03.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-03.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Third <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-04.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-04.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-05.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-05.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Fifth <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-06.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-06.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Sixth <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-01.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-01.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <a href="img/gallery-img-02.jpg">
                                        <figure className="effect-honey tm-gallery-item">
                                            <img src="img/gallery-tn-02.jpg" alt="Image" className="img-fluid" />
                                            <figcaption>
                                                <h2><i>Eighth <span>Honey</span> Now</i></h2>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}