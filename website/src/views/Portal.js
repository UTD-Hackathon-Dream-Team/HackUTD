import React, { useEffect, useState } from "react";
import { Table, Checkbox } from "antd";
import db from "../firebase.js";

const Portal = () => {
  const [assign, setAssign] = useState(null);

  useEffect(() => {
    const load = async () => {
      let assigns = [];
      const querySnapshot = await db.collection("users").get();
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        assigns.push(data);
      });
      console.log(assigns);
      setAssign(assigns);
    };
    load();
  }, []);

  const createTable = () => {
    const name = [
      {
        title: "Student Discord ID",
        dataIndex: "id",
        key: "id",
        render: (text) => <p>{text}</p>,
      },
    ];

    const assignHeader = assign[0].assignments.map((assign, i) => {
      return {
        title: assign.title,
        dataIndex: i,
        key: i,
        render: (bool) => <Checkbox checked={assign.status === "submitted"} />,
      };
    });
    const columns = name.concat(assignHeader);

    return <Table columns={columns} dataSource={assign} />;
  };

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
                <a className="nav-link scrollto active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto active" href="#features">
                  Commands
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#cta">
                  Create
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#faq">
                  Assignments
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="features" className="features" style={{ marginTop: 50 }}>
          <div className="container">
            <div className="section-title" data-aos="zoom-out">
              <h2>Commands</h2>
              <p>How to access features</p>
            </div>
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
                  <h4 className="d-none d-lg-block">Anonymous questions</h4>
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
                      Tob keeps track of your projects and assignments for you.
                      When an assignment is posted, students will be notified
                      with a message. Students can also send a DM to our bot to
                      view their assignment history or view a list of
                      assignments that they need to do.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> !history:
                        (executed in DM with bot) shows a history of the
                        student's assignments that includes the title of the
                        assignment, the due date, and the student's submission
                        status of that assignment
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> !todo:
                        (executed in DM with bot) shows a list of the student's
                        assignments that the student has left to complete
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> !assignment
                        [assignment name]: (to be used by TAs/professors)
                        creates an assignment. Students will receive a
                        notification with the project name and due date, and a
                        text channel will be created for discussion. The
                        assignment will also be added to the assignments list
                        channel
                      </li>
                    </ul>
                    <p>
                      When students complete an assignment, they react to it in
                      the projects list. In the future, this can be done
                      automatically by detecting submissions in Blackboard. This
                      marks it as finished and will show if the student sends
                      !history or !todo
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
                      Let students ask questions they're too afraid to ask
                    </h3>
                    <p>
                      Students may not speak up during class or be afraid of
                      looking silly when asking questions and not get the help
                      they need. Professors often get redundant questions in
                      emails
                    </p>
                    <p className="font-italic"></p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> !anon
                        [question] Simply DM the bot your question and it will
                        show up in a public channel on the server
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
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> !studygroup
                        public 'group-name': creates a public channel and voice
                        channel that any student can view and join
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> !studygroup
                        private 'group-name' 'list of students' discord id':
                        creates a role that are given to the students specified
                        and a private channel and voice channel those students
                        can view and join
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> !fetch: Sends a
                        DM of the chat log of the channel the command is given
                        in to the user who requested it
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
                      Bring back structure to demos, office hours, asking
                      questions, and more!
                    </h3>
                    <p>
                      Our bot will let students add themselves to the queue,
                      remove themself, and see their place in the list. You can
                      process each student one by one and see all the students
                      left remaining!
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> !queue NAME:
                        creates a queue with the given name if it does not
                        already exist
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> !queue NAME
                        delete: deletes the queue with the given name
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>!queue NAME
                        print: prints the order of the users in the given queue
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>!queue NAME add:
                        adds the user who enters it into the given queue and DMs
                        them a confirmation and their order number
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>!queue NAME
                        order: replies in a DM to the person who runs it their
                        order in the given queue
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>!queue NAME
                        remove: removes the person who runs it from the given
                        queue
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>!queue NAME
                        next: removes the first user on the queue and notifies
                        the next one that they are up
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
                <h3>Create an Assignment</h3>
                <p>
                  Want to create a new assignment? This will automatically
                  create a text channel for it so students can discuss, ping
                  students, and add it to the assignments that students will get
                  reminded about.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">
                  Create Assignment
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="zoom-out">
              <h2>Assignments</h2>
              <p>View past and current assignments</p>
            </div>
            {assign ? createTable() : <h2>Loading...</h2>}
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

export default Portal;
