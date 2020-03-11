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

                {/* <div class="tm-next tm-intro-next">
                    <a href="#story-1" class="text-center tm-down-arrow-link">
                        <i class="fas fa-3x fa-caret-down tm-down-arrow"></i>
                    </a>
                </div> */}
            </section>


            <section id="story-1" class="tm-section-pad-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="img/the-town-01.jpg" alt="Image" class="img-fluid tm-intro-img" />
                        </div>
                        <div class="col-lg-6">
                            <div class="tm-intro-text-container">
                                <h2 class="tm-text-primary mb-4 tm-section-title">Justin</h2>
                                <p class="mb-4 tm-intro-text">
                                    Justin was just a regular guy. Now he's a millionaire.    </p>
                                <p class="mb-5 tm-intro-text">
                                    He owns 5 houses on the French Riviera. In his free time, he dates supermodels and organizes his stamp collection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="story-2" class="tm-section-pad-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="img/the-town-01.jpg" alt="Image" class="img-fluid tm-intro-img" />
                        </div>
                        <div class="col-lg-6">
                            <div class="tm-intro-text-container">
                                <h2 class="tm-text-primary mb-4 tm-section-title">Steven</h2>
                                <p class="mb-4 tm-intro-text">
                                    Steven was just a regular guy. Now he travels Latin America in search of El Dorado.</p>
                                <p class="mb-5 tm-intro-text">
                                    He owns 24 properties in California. In his free time, he wins tango competitions and teaches yoga to children.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="story-2" class="tm-section-pad-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="img/the-town-01.jpg" alt="Image" class="img-fluid tm-intro-img" />
                        </div>
                        <div class="col-lg-6">
                            <div class="tm-intro-text-container">
                                <h2 class="tm-text-primary mb-4 tm-section-title">Jeanette</h2>
                                <p class="mb-4 tm-intro-text">
                                    Jeanette was just a regular girl. Now she runs a Michelin starred restaurant.</p>
                                <p class="mb-5 tm-intro-text">
                                    She owns 12 properties in four different states. In her free time, she designs wine glasses and bird watches.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}