
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/DisaBlend.jpg";
import projImg2 from "../assets/img/Rantify.png";
import projImg3 from "../assets/img/CraveList.png";
import lovealarm from "../assets/img/utopia-2.png";
import presto from "../assets/img/Presto.jpg";
import jis from "../assets/img/jis.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects2 = [
    {
      title: "DisaBlend",
      description: "Figma prototype of a job-portal app tailored for the disabled",
      imgUrl: projImg1,
      githubUrl: "https://github.com/angelafeliciaa/DisaBlend",
    },
    {
      title: "Rantify",
      description: "A journaling & self-evaluation service for users",
      imgUrl: projImg2,
      githubUrl: "https://github.com/angelafeliciaa/Rantify",
    },
    {
      title: "CraveList",
      description: "A restaurant review app built with Java",
      imgUrl: projImg3,
      githubUrl: "https://github.com/angelafeliciaa/CraveList",
    },
  ];

  const projects1 = [
    {
      title: "LoveAlarm",
      description: "An app that allows users to anonymously connect with others within a 10-metre radius",
      imgUrl: lovealarm,
      githubUrl: "https://github.com/angelafeliciaa/DisaBlend",
    },
    {
      title: "Judicial Interrogatory Simulator",
      description: "A VR-based simulated courtroom built for first-year law students. ",
      imgUrl: jis,
      githubUrl: "https://eml.ubc.ca/projects/jis/",
    },
    {
      title: "Presto",
      description: "A community carpool app",
      imgUrl: presto,
      githubUrl: "https://github.com/angelafeliciaa/presto-carpool",
    },
  ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                    <h2>Projects</h2>
                    <p>Some of the projects I've made!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon!</p>
                    </Tab.Pane>
                  </Tab.Content>

                  </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
    </section>
  )

}