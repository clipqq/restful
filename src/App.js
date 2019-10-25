import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <section id="hero" class="text-white tm-font-big tm-parallax">
      {/* <!-- Navigation --> */}
      <nav class="navbar navbar-expand-md tm-navbar" id="tmNav">              
        <div class="container">   
          <div class="tm-next">
              <a href="#hero" class="navbar-brand">Resful</a>
          </div>             
            
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars navbar-toggler-icon"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link tm-nav-link" href="#introduction">Introduction</a>
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
      
      <div class="text-center tm-hero-text-container">
        <div class="tm-hero-text-container-inner">
            <h2 class="tm-hero-title">Welcome to Resful</h2>
            <p class="tm-hero-subtitle">
              Property Management Simplified
            </p>
        </div>        
      </div>

      <div class="tm-next tm-intro-next">
        <a href="#introduction" class="text-center tm-down-arrow-link">
          <i class="fas fa-3x fa-caret-down tm-down-arrow"></i>
        </a>
      </div>      
    </section>

    <section id="introduction" class="tm-section-pad-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="img/the-town-01.jpg" alt="Image" class="img-fluid tm-intro-img" />
          </div>
          <div class="col-lg-6">
            <div class="tm-intro-text-container">
                <h2 class="tm-text-primary mb-4 tm-section-title">Introduction</h2>
                <p class="mb-4 tm-intro-text">
                  The Town is <strong>simple CSS template</strong> built on Bootstrap v4.1.3 
                  and this is a little parallax layout that you can use for your websites.
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
            Copyright © 2019 Company Name 
            - Design: <a rel="nofollow" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
          </p>
        </footer>
      </section>

    </div>
  );
}

export default App;