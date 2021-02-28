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
              <a href="index.html">Tob</a>
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
                Welcome to <span>Tob</span>
              </h2>
              <p className="animate__animated fanimate__adeInUp">
                As many people have had to switch to virtual platforms, Discord
                has been used more for classes. Our solution brings many useful
                features for classes on Discord. We hope to bring back student
                interaction and help ease a professor's workload.
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
              <h2 class="animate__animated animate__fadeInDown">Get Started</h2>
              <p class="animate__animated animate__fadeInUp">
                To get started, go to our portal where you can view all our
                commands as well as add and see the assignments for your class.
              </p>
              <a
                href="/portal"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Go To The Portal
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
                  Do you wish class group chats were more organized? Do you miss
                  talking and working with your classmates? Tob is a discord bot
                  to help you do all this and more!
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> During virtual
                    schooling, both professors and students are impacted. Our
                    bot aims to aid them both!
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Students may find
                    it harder to access both the professor and other students so
                    we provide features to help them create study groups and
                    interact more.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Professors may find
                    it harder to organize large groups of students. To provide
                    them all with the best tools to suceed, our bot tries
                    automates much of the work!
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ready to use our bot? Just get it from the Discord bot store
                  and integrate it into your classes server! Both professors and
                  students can do this. Currently, one admin must add in
                  assignments and track student progress but when connected to
                  Blackboard, there will be nothing extra professors have to do.
                </p>
                <a href="/portal" className="btn-learn-more">
                  Start Using
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
                  <h4 className="d-none d-lg-block">Create Assignments</h4>
                </a>
              </li>
              <li
                className="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <i className="ri-body-scan-line"></i>
                  <h4 className="d-none d-lg-block">Anonymous Questions</h4>
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
                    Students Can Form Study Groups
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
                  <h4 className="d-none d-lg-block">
                    Create Queues for Multiple Uses
                  </h4>
                </a>
              </li>
            </ul>

            <div className="tab-content" data-aos="fade-up">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>
                      Want an easy way for students to track submitted and
                      upcoming assignments?
                    </h3>
                    <p className="font-italic">
                      By creating assignments with our bot or website students
                      can get notified when assignments are posted and reminded
                      near the submission date about it. Channels can also be
                      automatically made for discussion about each one to help
                      organize discussion.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Students
                        knowing when the assignment is up can give them a head
                        start on it
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Reminders the
                        day beforehand will make sure they finish on time!
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> You can track
                        when students submit and see when reminding students is
                        the most effective. You can also quickly see if an
                        extension is needed for the majority of students.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> The creation
                        and archiving of channels related to certain assignments
                        will help with organization and also serve as a reminder
                        about upcoming assignments! Quick access to relevant
                        discussion will also help them get questions answered.
                      </li>
                    </ul>
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
                      Students may not speak up during class and not get the
                      help they need or you might get redundant questions in
                      emails
                    </h3>
                    <p>
                      Many students may not want to speak up during class or
                      when working on assignments and not get the help they
                      need.
                    </p>
                    <p className="font-italic">
                      You may also get redundant questions from emails so this
                      will let you showcase frequently asked questions and the
                      answer in one place.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> The ability to
                        ask anonymous questions will make sure they feel
                        comfortable to do so and you can make sure all your
                        students have the right tools to succeed.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>Save time and
                        answer questions in one place as well as let students
                        ask questions knowing the teacher or their fellow
                        students will answer them.
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
                      Sometimes the best people to help students understand are
                      students
                    </h3>
                    <p>
                      Many students choose to study together especially when
                      they do not have access to the professor. You can make it
                      more efficient for students to meet up to study as well as
                      let students in the class mingle with each other.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> With the switch
                        to virtual classes, many students report feeling alone.
                        Many of them enjoy mingling with the other students in
                        classes.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> They might have
                        been able to start talking to people sitting next to
                        them in lectures, but they cannot in a virtual setting.
                        This lets students organize meetings to work on class
                        material and meet other students!
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> By making it
                        easier to talk within themselves, they may answer each
                        others questions so they will have to reach out to you
                        or TAs less.
                      </li>
                    </ul>
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
                      Bring back structure to demos, office hours, asking
                      questions, and more!
                    </h3>
                    <p>
                      There are many uses to create a list of users. You can use
                      it to answer student questions during a lecture or about
                      one, to create the order for demos for projects, and to
                      answer questions during officer hours as well.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>When in person,
                        lines were first come first serve, it is hard to tell
                        who arrived first in certain situations. This will bring
                        back the order!
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>Our bot will let
                        students add themselves to the queue, remove themself,
                        and see their place in the list. You can process each
                        student one by one and see all the students left
                        remaining!
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
                <h3>Want to start using our Bot?</h3>
                <p>
                  To integrate our bot onto your server, uis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Then click here to go the portal to view all the
                  commands and view/add assignments for your students!
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="/portal">
                  Go To Portal
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
                  What if I do not use Discord a lot?
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Our documentation and help guide should make using it a
                    breeze! And students also have a lot of independence to use
                    the features on their own.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  How is this different than other solutions out there?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Our solution focuses on both the ease of students and the
                    professor. We hope to expand with any functionality you
                    believe would also be helpful!
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  className="collapsed question"
                >
                  What are all the features available by this bot?
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>Go to our portal and look at out command documentation!</p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  className="collapsed question"
                >
                  Why do I have to enter if students completed assignments?
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Currently, we were not able to integrate with Blackboard as
                    we only had 24 hours and were not able to access it. Ideally
                    this feature will be replaced by integration with Blackboard
                    to even pull assignments off it and student submissions.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  className="collapsed question"
                >
                  What if I have any issues with the bot?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>Email our support at hackathondreamteam@gmail.com.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="container">
          <h3>Tob - Virtual Classroom Assistant</h3>
          <p>
            Do you wish class group chats were more organized? Do you miss
            talking and working with your classmates? Tob is a discord bot to
            help you do all this and more!
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
