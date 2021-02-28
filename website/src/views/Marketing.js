import React from "react";

const Marketing = () => {
  return (
    <div className="App">
      <header
        id="header"
        className="fixed-top d-flex align-items-center  header-transparent "
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <a href="index.html">Selecao</a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="nav-link scrollto active" href="/portal">
                  Portal
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <section
        id="hero"
        className="d-flex flex-column justify-content-end align-items-center"
      >
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Welcome to <span>Selecao</span>
              </h2>
              <p className="animate__animated fanimate__adeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                Lorem Ipsum Dolor
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="/portal"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Get Started
              </a>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bx bx-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="zoom-out">
              <h2>About</h2>
              <p>Who we are</p>
            </div>

            <div className="row content" data-aos="fade-up">
              <div className="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="/portal" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <ul className="nav nav-tabs row d-flex">
              <li className="nav-item col-3" data-aos="zoom-in">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                >
                  <i className="ri-gps-line"></i>
                  <h4 className="d-none d-lg-block">
                    Modi sit est dela pireda nest
                  </h4>
                </a>
              </li>
              <li
                className="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <i className="ri-body-scan-line"></i>
                  <h4 className="d-none d-lg-block">
                    Unde praesenti mara setra le
                  </h4>
                </a>
              </li>
              <li
                className="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <i className="ri-sun-line"></i>
                  <h4 className="d-none d-lg-block">
                    Pariatur explica nitro dela
                  </h4>
                </a>
              </li>
              <li
                className="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <i className="ri-store-line"></i>
                  <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content" data-aos="fade-up">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Voluptatem dignissimos provident quasi corporis voluptates
                      sit assumenda.
                    </h3>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Neque exercitationem debitis soluta quos debitis quo
                      mollitia officia est
                    </h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Provident
                        mollitia neque rerum asperiores dolores quos qui a.
                        Ipsum neque dolor voluptate nisi sed.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Voluptatibus commodi ut accusamus ea repudiandae ut autem
                      dolor ut assumenda
                    </h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Provident
                        mollitia neque rerum asperiores dolores quos qui a.
                        Ipsum neque dolor voluptate nisi sed.
                      </li>
                    </ul>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                      inventore rerum
                    </h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/features-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container">
            <div className="row" data-aos="zoom-out">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Call To Action</h3>
                <p>
                  {" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="/portal">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="zoom-out">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>

            <ul className="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faq1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  className="collapsed question"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  className="collapsed question"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  className="collapsed question"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  className="collapsed question"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="container">
          <h3>Selecao</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Selecao</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Marketing;
