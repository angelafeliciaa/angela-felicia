
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/DisaBlend.jpg";
import projImg2 from "../assets/img/Rantify.png";
import projImg3 from "../assets/img/CraveList.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
    {
      title: "DisaBlend",
      description: "Figma prototype of a job-portal app tailored for the disabled",
      imgUrl: projImg1,
    },
    {
      title: "Rantify",
      description: "A journaling & self-evaluation service for users",
      imgUrl: projImg2,
    },
    {
      title: "CraveList",
      description: "A restaurant review app built with Java",
      imgUrl: projImg3,
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
                          projects.map((project, index) => {
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
                      <p>Coming Soon!</p>
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